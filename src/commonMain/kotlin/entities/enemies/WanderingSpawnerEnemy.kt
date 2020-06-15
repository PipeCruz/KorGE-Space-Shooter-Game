package entities.enemies

import com.soywiz.klock.milliseconds
import com.soywiz.korge.view.SpriteAnimation
import com.soywiz.korge.view.Views
import com.soywiz.korge.view.collidesWith
import com.soywiz.korge.view.xy
import com.soywiz.korma.geom.plus
import com.soywiz.korma.geom.radians
import com.soywiz.korma.geom.shortDistanceTo
import com.soywiz.korma.geom.times
import entities.Player
import math.Tracking
import org.jbox2d.common.Vec2
import kotlin.math.atan2

class WanderingSpawnerEnemy (bm: SpriteAnimation, views: Views, player: Player, health: Int) : Enemy(bm, views, player, moveSpeed = 1f, health = health) {

    override fun updateVelocity() {

    }

    override fun updatePosition(dt: Double) {
        xy(x + velocity.x ,y + velocity.y )
        if (velocity != Vec2())
            angle = atan2(velocity.y.toDouble(), velocity.x.toDouble()).radians

        rotation += rotation.shortDistanceTo(angle) * 10 * (dt / 1000)
    }

    override fun check() {
        if(this.collidesWith(player)){//set the image to be explosion if collided
            player.health-=5
            health = 0
        }

        if (health <= 0) {
            setFrame(1)
            scale = 4.0
            playAnimation(spriteDisplayTime = 125.milliseconds)
            render = false
            onAnimationStopped{
                removeFromParent()
            }
        }
    }

    fun trackPlayer(playerPosition: Vec2) : Unit {

        velocity = Tracking.arrival(Vec2(x.toFloat(), y.toFloat()), playerPosition,moveSpeed*2,arrivedRadius = 450).mul(moveSpeed)

    }


}