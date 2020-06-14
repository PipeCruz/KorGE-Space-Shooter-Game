package math

import com.soywiz.korma.geom.*
import org.jbox2d.common.Vec2
import kotlin.math.acos
import kotlin.math.min
import kotlin.math.sqrt
import kotlin.random.Random

object Tracking {

    //takes in the entity's position and target position
    //returns a vec2 that follow the straight line  between the two objects
    //and has a length <=1 so that you can multiply the individual parts of the vector with the speed multiplier
    private fun trackingVector(position : Vec2, target : Vec2) : Vec2 {
        //creates the vector with the angle
        val movement = Vec2(position.x-target.x, position.y-target.y);

        //checks whether any value is >1 and scales it down by the biggest value
        if (movement.x>movement.y&&movement.x>1) {
            movement.x/=movement.x
            movement.y/=movement.x
        }else if (movement.x<movement.y&&movement.y>1) {
            movement.x/=movement.y
            movement.y/=movement.y
        }
        return movement;
    }

    //takes in the target's movement vector,
    // the angle change scale ( ex. 0 = 0 degree change, 0.5 means 90 deg change, 1 = 180 degree change) dom: (0,1),
    //the leftRightProbability determines if the the the target will be more likely to turn left or right dom: (-0.5,0.5); -0.5 = always left 0.5 means always right
    //the turnAmountBasedOnProbability determines whether or not the creature will have a chance to turn not the full angle ex. turnAmountBasedOnProbability = true && angleChangeScale = 0.5 that the creature can do an 50 deg change instead of 90
    //used to move the target's acceleration vector left or right to avoid obstacle
    //returns the vector rotated left or right by a certain angle
    fun randomMoveLeftRight(movementVector: Vec2, angle : Angle = 50.degrees, leftRightProbability : Float=0f , turnAmountBasedOnProbability: Boolean = true) : Vec2{

        //left = false, right = true;
        var leftOrRight = Random.nextFloat()+leftRightProbability >= 0.5;

        var randomScale = 1f;
        if (turnAmountBasedOnProbability) {
            randomScale= min(0.5f + Random.nextFloat(),1f)
        }

        val oldX = movementVector.x

        //rotates the vector components
        movementVector.x = ((movementVector.x * cos(angle*randomScale) - movementVector.y * sin(angle*randomScale)).toFloat())

        movementVector.y = ((oldX * sin(angle* randomScale) + movementVector.y * cos(angle*randomScale)).toFloat())

        return movementVector;
    }

    //tracks target and slows down when near
    //unlike tracking vector this actually returns a speed vector
    fun arrival(currentPos : Vec2, target : Vec2, maxSpeed : Float, arrivingRadius: Int = 30, arrivedRadius: Int = 2) : Vec2
    {
        var velocityVector = trackingVector(currentPos,target);
        val distanceToTarget = calcDistance(currentPos,target)
        if(distanceToTarget>arrivedRadius)
        {
            var speed = maxSpeed*distanceToTarget/arrivingRadius;
            speed= min(speed,maxSpeed)
            velocityVector= velocityVector.mul(speed);
        }
        return velocityVector;
    }

    //tracks by angling the the vector to the target
    //almost like missile tracking
    //max angle determines the max angle the missile can turn
    // returns the rotated VELOCITY vector for the ship
    fun curvingTracking(currentPos : Vec2, target : Vec2, currentVelocityVector : Vec2, maxAngle: Angle = 10.degrees) : Vec2 {
        //so help me my trig skills will come and help me
        var a = calcDistance(currentPos.add(currentVelocityVector),target)
        var b = calcDistance(currentPos,target)
        var c = calcDistance(currentPos,currentPos.add(currentVelocityVector))
        var angle =  (acos(b*b+c*c-a*a)/(2*b*c)).radians
        if (angle>maxAngle)
        {
            angle=maxAngle;
        }
        return rotateVector(currentVelocityVector,angle)
    }

    private fun rotateVector(vector : Vec2, angle: Angle) : Vec2 {
        //refactored
        vector.set((vector.x * cos(angle) - vector.y * sin(angle)).toFloat(), (vector.x * sin(angle) + vector.y * cos(angle)).toFloat())
//        vector.x = ((vector.x * cos(angle) - vector.y * sin(angle)).toFloat())
//        vector.y = ((vector.x * sin(angle) + vector.y * cos(angle)).toFloat())
        return vector
    }

    fun calcDistance(pos1: Vec2, pos2: Vec2) : Float {
        val sumVector = pos1.sub(pos2)
        return sqrt(sumVector.x * sumVector.x + sumVector.y * sumVector.y)
    }

}