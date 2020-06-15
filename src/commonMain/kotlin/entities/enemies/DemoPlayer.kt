package entities.enemies

import com.soywiz.korge.view.Sprite
import com.soywiz.korge.view.SpriteAnimation
import com.soywiz.korge.view.Views
import com.soywiz.korge.view.xy
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korma.geom.*
import entities.Player
import entities.SpawningManager
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import math.Tracking
import org.jbox2d.common.Vec2
import kotlin.math.atan2
import kotlin.time.milliseconds

class DemoPlayer (bm: Bitmap) : Sprite(bm) {
    var velocity = Vec2(1F, 1f);
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
        //xy(x + velocity.x, y + velocity.y)
        //xy(x+velocity.y,y-velocity.x)
        //if (velocity != Vec2())
            //angle = atan2(velocity.y.toDouble(), velocity.x.toDouble()).radians

        //rotation += rotation.shortDistanceTo(angle) * 10 * (dt / 1000)
        val deltaTime = dt / 1000

        rotation -= 100.degrees * deltaTime

        velocity.x += cos(rotation + 90.degrees).toFloat()
        velocity.y += sin(rotation + 90.degrees).toFloat()

        xy(x + velocity.x * deltaTime, y + velocity.y * deltaTime)

    }

}
