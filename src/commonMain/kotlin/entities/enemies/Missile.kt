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
import math.Tracking
import org.jbox2d.common.Vec2
import kotlin.math.atan2

class Missile (bm: SpriteAnimation, views: Views, player: Player, health: Int) : Enemy(bm, views, player, moveSpeed = 3f,health = 1, hitboxSize = 25) {

    var explodeSound : NativeSound? = null

    init {
        GlobalScope.launch {
            explodeSound = resourcesVfs["sound/RetroSounds/Explosions/Short/sfx_exp_short_hard6.wav"].readSound()
            explodeSound?.volume = 0.25
        }
    }

    override fun updateVelocity() {

    }

    var totalTime = 0.0

    override fun updatePosition(dt: Double) {
        totalTime+=dt
        xy(x + velocity.x ,y + velocity.y )
        if (velocity != Vec2())
            angle = atan2(velocity.y.toDouble(), velocity.x.toDouble()).radians

        rotation += rotation.shortDistanceTo(angle) * 10 * (dt / 1000)
        health -= dt.toInt()/1000
    }

    override fun check() {
        if(pos.distanceTo(player.pos) < hitboxSize){ //set the image to be explosion if collided
            player.damage(5)
            health = 0
        }

        if (pos.distanceTo(player.pos) > 1600)
            health = 0

        if (health <= 0) {
            if(pos.distanceTo(player.pos) >= hitboxSize)
                SpawningManager.spawnXP(x, y, player, parent)

            render = false
            SpawningManager.spawnExplosion(x, y, angle, parent, 1.0)
            explodeSound?.play()
            removeFromParent()
        }
//        if (this.collidesWith(player.bullets))//this code is redundant!
//        {
//            health--
//            if(health<=0){
//                SpawningManager.spawnExplosion(x, y, angle, parent, 1.0)
//                removeFromParent()
//                SpawningManager.spawnXP(x, y, player, parent)
//            }
//        }
    }

    fun trackPlayer(playerPosition: Vec2) : Unit {
        if(totalTime>1) {
            velocity = Tracking.curvingTracking(Vec2(x.toFloat(), y.toFloat()), playerPosition, velocity, angle, 2.degrees).mul(moveSpeed)
        }
        else
        {
            velocity = Tracking.trackingVector(Vec2(x.toFloat(), y.toFloat()), playerPosition).mul(moveSpeed)
        }
    }
}