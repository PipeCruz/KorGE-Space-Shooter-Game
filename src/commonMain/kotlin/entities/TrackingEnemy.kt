package entities

import com.soywiz.klock.TimeSpan
import com.soywiz.klock.milliseconds
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.slice
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.async.launch
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korio.lang.Thread_sleep
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.delay
import math.Tracking.arrival
import org.jbox2d.common.Vec2

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
//        println("player.x = ${player.x}\nplayer.y = ${player.y}")
//        println("dir.x = ${dir.x}\ndir.y = ${dir.y}")
            velocity.x = (velocity.x + (dir.x * moveSpeed))*deceleration
            velocity.y = (velocity.y + (dir.y * moveSpeed))*deceleration

//            velocity.x += dir.x * moveSpeed
//            velocity.y += dir.y * moveSpeed
//            velocity.x *= deceleration
//            velocity.y *= deceleration
    }

    override fun updatePosition() {
            xy(x + velocity.x, y + velocity.y)
    }
    override fun check() {
        if(this.collidesWith(player)){//set the image to be explosion if collided
            println("collision")
            setFrame(1)
            playAnimation(spriteDisplayTime = 125.milliseconds)
            render = false
        }
    }

    fun trackPlayer(playerPosition: Vec2) : Unit {
        velocity = arrival(Vec2(x.toFloat(), y.toFloat()),playerPosition,moveSpeed)
        println("""$x $y ${velocity.toString()}""")
    }

}