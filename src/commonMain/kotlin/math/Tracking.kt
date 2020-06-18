package math

import com.soywiz.korma.geom.*
import org.jbox2d.common.MathUtils.Companion.atan2
import org.jbox2d.common.Vec2
import kotlin.math.min
import kotlin.math.sqrt

object Tracking {

    //takes in the entity's position and target position
    //returns a vec2 that follow the straight line  between the two objects
    //and has a length <=1 so that oyu can multiply the individal parts of the vector with the speed multiplier
    fun trackingVector(position: Vec2, target: Vec2): Vec2 {
        //creates the vector with the angle
        val movement = Vec2(target.x - position.x, target.y - position.y)
        movement.normalize()
        //println("""movement: $movement""")
        return movement
    }

    //tracks target and slows down when near
    //unlike tracking vector this actually returns a speed vector
    //arried radious controlls how close the enemy gets
    //good idea for enemees that need to get close but stop before they reach the player
    fun arrival(currentPos: Vec2, target: Vec2, maxSpeed: Float, arrivingRadius: Int = 800, arrivedRadius: Int = 300): Vec2 {
        var velocityVector = trackingVector(currentPos, target)
        val distanceToTarget = calcDistance(currentPos, target)
        //println("""Distance to target: $distanceToTarget""")
        if (distanceToTarget > arrivedRadius) {
            var speed = maxSpeed * distanceToTarget / arrivingRadius
            speed = min(speed, maxSpeed)
            velocityVector = velocityVector.mul(speed)
        } else {
            return Vec2(0f, 0f)
        }
        return velocityVector
    }

    //tracks by angling the the vector to the target
    //almost like missle tracking
    //max angle determines the max angle the missle can turn
    // returns the rotated VELOCITY vector for the ship
    fun curvingTracking(currentPos: Vec2, target: Vec2, angle: Angle, maxAngle: Angle = 7.degrees): Vec2 {
        val targetRelativePosition = target.sub(currentPos)
        var targetAngle = atan2(targetRelativePosition.y, targetRelativePosition.x).radians
        //println("""target angle $targetAngle""")
        if (targetAngle < angle - maxAngle) {
            targetAngle = angle - maxAngle
        } else if (targetAngle > maxAngle + angle) {
            targetAngle = maxAngle + angle
        }
        return Vec2(cos(targetAngle).toFloat(), sin(targetAngle).toFloat())
    }

    fun rotateVector(vector: Vec2, angle: Angle): Vec2 {
        vector.x = ((vector.x * cos(angle) - vector.y * sin(angle)).toFloat())
        vector.y = ((vector.x * sin(angle) + vector.y * cos(angle)).toFloat())
        return vector
    }

    private fun calcDistance(pos1: Vec2, pos2: Vec2): Float {
        val sumVector = pos1.sub(pos2)
        return sqrt(sumVector.x * sumVector.x + sumVector.y * sumVector.y)
    }

}