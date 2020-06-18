package entities.projectiles

import com.soywiz.korge.view.Sprite
import com.soywiz.korge.view.SpriteAnimation
import com.soywiz.korge.view.addUpdater
import com.soywiz.korge.view.center

abstract class Projectile(bm: SpriteAnimation, val bulletSpeed: Float = 5.0f) : Sprite(bm) {
    abstract fun check()
    abstract suspend fun shootNew(deltaTime: Double)
    abstract fun updateVelocity(dt: Double)

    private var render = true

    init {
        scale = 0.5
        center()
        addUpdater {
            move(it.milliseconds)
        }
    }

    private fun move(dt: Double) {
        var time = dt
        while (time > 0 && render) {
            updateVelocity(dt)
            check()
            time-=5f
        }
    }


}