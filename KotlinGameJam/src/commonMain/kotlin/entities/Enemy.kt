package entities

import com.soywiz.korge.view.Image
import com.soywiz.korge.view.Views
import com.soywiz.korge.view.addUpdater
import com.soywiz.korge.view.center
import com.soywiz.korim.bitmap.Bitmap
import org.jbox2d.common.Vec2

abstract class Enemy(bm : Bitmap, var views : Views, var moveSpeed : Float = 1f, val deceleration : Float = 0.99f, val bounciness: Float = -0.75f, var velocity :Vec2 = Vec2(0f,0f)) : Image(bm){

    fun move(dt: Double)
    {
        var time = dt
        while (time>0) {

            updateAcceleration()
            updateVelocity()
            updatePosition()
            updateAngle(time)
            time-=10f

        }
    }

    init {
        center()
    }

    abstract fun updateAcceleration()

    abstract fun updateVelocity()

    abstract fun updatePosition()

    abstract fun updateAngle(dt: Double)


    init
    {
        scale = 1/4.0
        addUpdater{//adds updater to move

            move(it.milliseconds); ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;
        }
    }

}
