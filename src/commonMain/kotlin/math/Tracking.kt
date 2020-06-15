package math

import com.soywiz.korma.geom.*
import org.jbox2d.common.MathUtils.Companion.atan2
import org.jbox2d.common.Vec2
import kotlin.math.min
import kotlin.math.sqrt
import kotlin.random.Random

object Tracking {

    //takes in the entity's position and target position
    //returns a vect that follow the straight line  between the two objects
    //and has a length <=1 so that oyu can multiply the individal parts of the vector with the speed multiplier
    fun trackingVector(position : Vec2, target : Vec2) : Vec2
    {
        //creates the vector with the angle
        val movement = Vec2(target.x-position.x, target.y-position.y);
        movement.normalize()
        //println("""movement: $movement""")
        return movement;
    }

    //takes in the target's movement vector,
    // the angle change scale ( ex. 0 = 0 degree change, 0.5 means 90 deg change, 1 = 180 degree change) dom: (0,1),
    //the leftRightProbability determines if the the the target will be more likely to turn left or right dom: (-0.5,0.5); -0.5 = always left 0.5 means always right
    //the turnAmountBasedOnProbability determines whether or not the creature will have a chance to turn not the full angle ex. turnAmountBasedOnProbability = true && angleChangeScale = 0.5 that the creature can do an 50 deg change instead of 90
    //used to move the target's acceleration vector left or right to avoid obstacle
    //returns the vector rotated left or right by a certain angle
    fun randomMoveLeftRight(movementVector: Vec2, angle : Angle = 90.degrees, leftRightProbability : Float=0f , turnAmountBasedOnProbability: Boolean = true) : Vec2 {

        //left = false, right = true;
        var leftOrRight = Random.nextFloat() + leftRightProbability >= 0.5;

        var randomScale = 1f;
        if (turnAmountBasedOnProbability) {
            randomScale = min(0.5f + Random.nextFloat(), 1f)
        }

        val oldX = movementVector.x

        //rotates the vector components
        if (leftOrRight) {
            movementVector.x = ((movementVector.x * cos(angle * randomScale) - movementVector.y * sin(angle * randomScale)).toFloat())

            movementVector.y = ((oldX * sin(angle * randomScale) + movementVector.y * cos(angle * randomScale)).toFloat())
        }
        else{
            movementVector.x = ((movementVector.x * cos(angle.times(-1) * randomScale) - movementVector.y * sin(angle.times(-1) * randomScale)).toFloat())

            movementVector.y = ((oldX * sin(angle.times(-1) * randomScale) + movementVector.y * cos(angle.times(-1) * randomScale)).toFloat())
        }

        return movementVector;
    }

    //tracks target and slows down when near
    //unlike tracking vector this actually returns a speed vector
    //arried radious controlls how close the enemy gets
    //good idea for enemees that need to get close but stop before they reach the player
    fun arrival(currentPos : Vec2, target : Vec2, maxSpeed : Float, arrivingRadius: Int= 800, arrivedRadius: Int =300) : Vec2
    {
        var velocityVector = trackingVector(currentPos,target);
        var distanceToTarget = calcDistance(currentPos,target)
        //println("""Distance to target: $distanceToTarget""")
        if(distanceToTarget>arrivedRadius)
        {
            var speed = maxSpeed*distanceToTarget/arrivingRadius;
            speed= min(speed,maxSpeed)
            velocityVector= velocityVector.mul(speed);
        }
        else
        {
            return Vec2(0f,0f);
        }
        return velocityVector;
    }

    //tracks by angling the the vector to the target
    //almost like missle tracking
    //max angle determines the max angle the missle can turn
    // returns the rotated VELOCITY vector for the ship
    fun curvingTracking(currentPos : Vec2, target : Vec2, currentVelocityVector : Vec2, angle: Angle, maxAngle: Angle = 7.degrees) : Vec2
    {
        val targetRelativePosition = target.sub(currentPos)
        var targetAngle = atan2(targetRelativePosition.y,targetRelativePosition.x).radians

        //println("""target angle $targetAngle""")


        if(targetAngle< angle-maxAngle)
        {
            targetAngle = angle-maxAngle;
        }
        else if(targetAngle> maxAngle+angle)
        {
            targetAngle = maxAngle+angle;
        }


        return Vec2(cos(targetAngle).toFloat(), sin(targetAngle).toFloat())
    }

    fun rotateVector(vector : Vec2, angle: Angle) : Vec2
    {
        var vec2 = vector;
        vec2.x = ((vector.x * cos(angle) - vector.y * sin(angle)).toFloat())

        vec2.y = ((vector.x * sin(angle) + vector.y * cos(angle)).toFloat())

        return vec2
    }

    fun calcDistance(pos1: Vec2, pos2: Vec2) : Float
    {
        val sumVector = pos1.sub(pos2)
        return sqrt(sumVector.x*sumVector.x+sumVector.y*sumVector.y)
    }


    fun rotateVectorAroundMaster( velocityVector: Vec2,currentPos: Vec2, masterPos : Vec2, maxSpeed : Float, angle: Angle, arrivingRadius: Int= 800, arrivedRadius: Int =300, turnRight: Boolean=false) : Vec2
    {
        if (currentPos.sub(masterPos).length()>arrivedRadius*1.3)
        {
            return arrival(currentPos,masterPos,maxSpeed,arrivingRadius,arrivedRadius)
        }
        if(turnRight)
        {
            return rotateVector(velocityVector,-angle)
        }
        return rotateVector(velocityVector,angle)
    }


}