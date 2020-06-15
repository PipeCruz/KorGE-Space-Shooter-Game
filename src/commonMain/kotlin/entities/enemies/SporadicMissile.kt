package entities.enemies

import com.soywiz.klock.milliseconds
import com.soywiz.korge.view.SpriteAnimation
import com.soywiz.korge.view.Views
import com.soywiz.korge.view.collidesWith
import com.soywiz.korge.view.xy
import com.soywiz.korma.geom.*
import entities.Player
import math.Tracking
import org.jbox2d.common.Vec2
import kotlin.math.atan2

class SporadicMissile (bm: SpriteAnimation, views: Views, player: Player, health: Int = 2, private val trackingTime : Double = 5000.0) : Enemy(bm, views, player, moveSpeed = 1f,health = health) {

    private var stillTracking = true;
    private var totalTime = 0.0;

    override fun updateVelocity() {

    }

    override fun updatePosition(dt: Double) {
        totalTime+=dt
        if(totalTime>trackingTime)
        {
            stillTracking=false;
        }
        xy(x + velocity.x ,y + velocity.y )
        if (velocity != Vec2())
            angle = atan2(velocity.y.toDouble(), velocity.x.toDouble()).radians

        rotation += rotation.shortDistanceTo(angle) * 10 * (dt / 1000)
    }

    override  fun check() {
        if(this.collidesWith(player)){//set the image to be explosion if collided
            player.health-=5
            setFrame(1)
            scale = 4.0
            playAnimation(spriteDisplayTime = 125.milliseconds)
            render = false
            onAnimationStopped{
                removeFromParent()
            }
        }
//        if(pos.distanceTo(player.pos) > 100){
//            println(pos.distanceTo(player.pos))
//            render = false
//            removeFromParent()
//        }
    }

    fun trackPlayer(playerPosition: Vec2) : Unit {
        if(stillTracking) {
            velocity = Tracking.curvingTracking(Vec2(x.toFloat(), y.toFloat()), playerPosition, velocity, angle, 3.degrees).mul(moveSpeed)
        }
        else
        {
            velocity = Tracking.randomMoveLeftRight(velocity)
        }
    }
}
