package entities.enemies

import com.soywiz.korge.view.Sprite
import com.soywiz.korge.view.xy
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korma.geom.*
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import math.Tracking
import org.jbox2d.common.Vec2

class DemoPlayer (bm: Bitmap) : Sprite(bm) {
    var velocity = Vec2(1F, 1f)
    var angle = 45.degrees

    init {
        scale = 3.0
        xy(400,400)
        val timeStep = 15.0
        GlobalScope.launch {
            while (true)
            {
                updatePosition(timeStep)
                velocity = Tracking.rotateVector(velocity, (-1).degrees)
                delay(timeStep.toLong())
            }
        }
    }


    private fun updatePosition(dt: Double) {
        val deltaTime = dt / 1000

        rotation -= 100.degrees * deltaTime

        velocity.x += cos(rotation + 90.degrees).toFloat()
        velocity.y += sin(rotation + 90.degrees).toFloat()

        xy(x + velocity.x * deltaTime, y + velocity.y * deltaTime)

    }

}
