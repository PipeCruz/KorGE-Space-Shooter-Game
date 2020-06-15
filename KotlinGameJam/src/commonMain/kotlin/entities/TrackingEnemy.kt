package entities

import com.soywiz.korge.view.Views
import com.soywiz.korim.bitmap.Bitmap
import math.Tracking.trackingVector
import org.jbox2d.common.Vec2

class TrackingEnemy(bm: Bitmap, views: Views,val health: Int = 2) : Enemy(bm, views)
{
    init {
        velocity = Vec2(0.1f,0.1f)
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
        TODO("Not yet implemented")
    }


    fun trackPlayer(playerPosition: Vec2) : Unit
    {
        moveSpeed=0.1f
        velocity = trackingVector(Vec2(x.toFloat(), y.toFloat()),playerPosition).mul(moveSpeed)
    }


}