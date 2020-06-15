package entities

import com.soywiz.kmem.toInt
import com.soywiz.korev.Key
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korma.geom.*
import input.PlayerInput
import org.jbox2d.common.Vec2
import kotlin.math.atan2
import kotlin.math.floor


class Player(bm : Bitmap, var views : Views) : Image(bm) {
    private val moveUpKey = Key.W
    private val moveLeftKey = Key.A
    private val moveDownKey = Key.S
    private val moveRightKey = Key.D

    private val moveSpeed = 10f
    private val deceleration = 0.99f

    private val velocity = Vec2()
    private val input = Vec2()
    private val bounciness = -0.75f
    private val gunRecoil = 10
    private var angle = 0.radians

    private val playerInput = PlayerInput(views)

    init {
        scale = 0.25
        center()
        addUpdater {
            val deltaTime = it.milliseconds / 1000

            input.x = (playerInput.pressingRight().toInt() - playerInput.pressingLeft().toInt()).toFloat()
            input.y = (playerInput.pressingDown().toInt() - playerInput.pressingUp().toInt()).toFloat()
            input.normalize()

            velocity.x += input.x * moveSpeed
            velocity.y += input.y * moveSpeed

            velocity.x *= deceleration
            velocity.y *= deceleration

            xy(x + velocity.x * deltaTime,y + velocity.y * deltaTime)

            if (velocity != Vec2())
                angle = atan2(velocity.y.toDouble(), velocity.x.toDouble()).radians

            rotation += rotation.shortDistanceTo(angle) * 10 * deltaTime
        }
    }
}