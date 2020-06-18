package entities.enemies

import com.soywiz.korau.sound.NativeSound
import com.soywiz.korau.sound.readSound
import com.soywiz.korge.view.SpriteAnimation
import com.soywiz.korge.view.Views
import com.soywiz.korge.view.xy
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.*
import entities.Player
import entities.SpawningManager
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import math.Tracking.trackingVector
import org.jbox2d.common.Vec2
import kotlin.math.atan2
import kotlin.random.Random

class TrackingEnemy(bm: SpriteAnimation, views: Views, player: Player) : Enemy(bm, views, player, moveSpeed = 2.5f, health = 8) {

    private var explodeSound: NativeSound? = null

    init {
        GlobalScope.launch {
            explodeSound = resourcesVfs["sound/asteroid(sfx_exp_short_hard6).wav"].readSound()
            explodeSound?.volume = 0.25
        }
    }

    override fun updateVelocity() {}

    override fun updatePosition(dt: Double) {
        xy(x + velocity.x ,y + velocity.y )

        if (velocity != Vec2())
            angle = atan2(velocity.y.toDouble(), velocity.x.toDouble()).radians

        rotation += rotation.shortDistanceTo(angle+90.degrees) * 4 * (dt / 1000)
    }

    override fun check() {
        if (render) {
            if (pos.distanceTo(player.pos) < hitboxSize) {
                player.damage(15)
                health = 0
            }

            if (pos.distanceTo(player.pos) > 1600)
                health = 0

            if (health <= 0) {
                if(pos.distanceTo(player.pos) >= hitboxSize && pos.distanceTo(player.pos) <= 1600) {
                    for (i in 0..5) {
                        SpawningManager.spawnXP(x + Random.nextInt(-30, 30), y + Random.nextInt(-30, 30), player, parent)
                    }
                }

                render = false
                SpawningManager.spawnExplosion(x, y, angle, parent, 5.0)
                explodeSound?.play()
                removeFromParent()
            }
        }
    }

    fun trackPlayer(playerPosition: Vec2, deltaTime: Double) {
        velocity.addLocal(trackingVector(Vec2(x.toFloat(), y.toFloat()), playerPosition).mul(moveSpeed).mulLocal(deltaTime.toFloat()))
    }
}
