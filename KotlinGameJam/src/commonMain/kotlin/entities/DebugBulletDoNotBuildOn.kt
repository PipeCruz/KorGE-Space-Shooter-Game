package entities

import com.soywiz.korge.view.Views
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korma.geom.*
import math.Tracking.curvingTracking
import math.Tracking.randomMoveLeftRight
import org.jbox2d.common.Vec2
import kotlin.math.atan2

class DebugBulletDoNotBuildOn(bm: Bitmap, views: Views, val health: Int = 2) : Enemy(bm, views)
{
    private var angle = 90.degrees
    //var s
    init {
        moveSpeed=3f
    }
    override fun updateAcceleration() {
        //TODO("Not yet implemented")
    }

    override fun updateVelocity() {
        //TODO("Not yet implemented")
    }

    override fun updatePosition() {

        x+=velocity.x
        y+=velocity.y
    }

    override fun updateAngle(dt: Double) {
        if (velocity != Vec2()) {
            angle = atan2(velocity.y.toDouble(), velocity.x.toDouble()).radians
        }


        rotation += rotation.shortDistanceTo(angle+90.degrees) * 10 * dt/1000
    }


    fun trackPlayer(playerPosition: Vec2) : Unit
    {


        velocity = curvingTracking(Vec2(x.toFloat(), y.toFloat()), playerPosition, velocity, angle).mul(moveSpeed)
    }


}