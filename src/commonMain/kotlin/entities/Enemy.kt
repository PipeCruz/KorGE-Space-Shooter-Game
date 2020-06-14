package entities

import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import kotlinx.coroutines.awaitAll
import org.jbox2d.common.Vec2

abstract class Enemy(bm: SpriteAnimation, var views: Views, val player:Player, val moveSpeed: Float = 0.05f, val deceleration: Float = 0.99f, val bounciness: Float = -0.75f, var velocity: Vec2 = Vec2(0f,0f)) : Sprite(bm){
    protected val dir = Vec2()// like the Player's 'input' vector
    protected var render = true

    init {
        scale = 2.0
        center()
        addUpdater{ //adds updater to move
            move(it.milliseconds)
        }
    }

    private fun move(dt: Double) {
        var time = dt
//        println(dt)
        while (time > 0 && render) {
            check()
            updateVelocity()
            updatePosition()
            time-=10f/*100f*///I dunno about this right here being 100, when i print its between 12-14 so itll only run once, so i made it 10 - pipe
        }

    }

    abstract fun updateVelocity()

    abstract fun updatePosition()

    abstract fun check()

}
