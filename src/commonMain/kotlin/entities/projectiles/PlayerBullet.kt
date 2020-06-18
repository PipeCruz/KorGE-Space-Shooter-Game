package entities.projectiles

import com.soywiz.korau.sound.readSound
import com.soywiz.korge.internal.KorgeInternal
import com.soywiz.korge.view.SpriteAnimation
import com.soywiz.korge.view.addTo
import com.soywiz.korge.view.xy
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.cos
import com.soywiz.korma.geom.sin
import entities.Player
import entities.SpawningManager
import entities.enemies.Enemy
import org.jbox2d.common.Vec2
import kotlin.math.abs

class PlayerBullet(private val player: Player, bm : SpriteAnimation) : Projectile(bm) {
    var velocity = Vec2(1.0f,0f)

    override suspend fun shootNew(deltaTime: Double) {
        scale = 1.0
        rotation = player.angle
        player.parent?.let { addTo(it) }

        val shootSound = resourcesVfs["sound/bullet(sfx_wpn_laser8).wav"].readSound()
        shootSound.volume = 0.25
        shootSound.play()

        velocity = Vec2(cos(rotation).toFloat(), sin(rotation).toFloat())
        velocity.mulLocal(bulletSpeed)
        //Relativity!
        velocity.x += player.velocity.x * deltaTime.toFloat()
        velocity.y += player.velocity.y * deltaTime.toFloat()

        playAnimationLooped()
    }

     override fun updateVelocity(dt: Double) {

         xy(x +velocity.x ,y +velocity.y )

         val distanceToPlayer = Vec2((player.x - x).toFloat(), (player.y - y).toFloat())
         if (abs(distanceToPlayer.length()) > 1600)
             removeFromParent()
    }

    @KorgeInternal
    @ExperimentalStdlibApi
    override fun check() {
        try {
            parent!!.children.forEach {
                if(it is Enemy && it.pos.distanceTo(pos) < it.hitboxSize) {
                    it.health--
                    it.velocity.mulLocal(0.5f)

                    SpawningManager.spawnExplosion(x, y,rotation, parent, 1.0)

                    removeFromParent()
                }
            }
        } catch (ignored: Exception){}
    }
}
