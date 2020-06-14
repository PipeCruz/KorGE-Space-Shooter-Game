package entities

import com.soywiz.klock.TimeSpan
import com.soywiz.klock.milliseconds
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.slice
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.async.launch
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korio.lang.Thread_sleep
import com.soywiz.korma.geom.plus
import com.soywiz.korma.geom.radians
import com.soywiz.korma.geom.shortDistanceTo
import com.soywiz.korma.geom.times
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.delay
import math.Tracking.arrival
import org.jbox2d.common.Vec2
import kotlin.math.atan2

class TrackingEnemy(bm: SpriteAnimation, views: Views, player: Player, val health: Int = 2) : Enemy(bm, views, player) {

    override fun updateVelocity() {
            dir.x = (player.x - x).toFloat();
            dir.y = (player.y - y).toFloat();
            when {
                dir.x > 0f -> dir.x = 1f
                dir.x == 0f -> dir.x = 0f
                dir.x < 0f -> dir.x = -1f;
            }
            when {
                dir.y > 0f -> dir.y = 1f
                dir.y == 0f -> dir.y = 0f
                dir.y < 0f -> dir.y = -1f;
            }
            dir.normalize()
            velocity.x = (velocity.x + (dir.x * moveSpeed))*deceleration
            velocity.y = (velocity.y + (dir.y * moveSpeed))*deceleration
    }

    override fun updatePosition(dt: Double) {
//        println("tracking enemy delta time: ${dt/1000}")
            xy(x + velocity.x ,y + velocity.y )
        if (velocity != Vec2())
            angle = atan2(velocity.y.toDouble(), velocity.x.toDouble()).radians

        rotation += rotation.shortDistanceTo(angle) * 10 * (dt / 1000)
    }
    override fun check() {
        if(this.collidesWith(player)){//set the image to be explosion if collided
            println("collision")
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
        velocity = arrival(Vec2(x.toFloat(), y.toFloat()),playerPosition,moveSpeed)
        println("""$x $y ${velocity.toString()}""")
    }

}