package entities.enemies

import com.soywiz.korge.view.*
import com.soywiz.korma.geom.radians
import entities.Player
import org.jbox2d.common.Vec2

abstract class Enemy(bm: SpriteAnimation, open var views: Views, var player: Player, var moveSpeed: Float = 0.05f, val deceleration: Float = 0.99f, val bounciness: Float = -0.75f, var velocity: Vec2 = Vec2(0f,0f), var health: Int, var hitboxSize : Int = 100) : Sprite(bm){
    var render = true
    var angle = 0.radians

    init {
        scale = 2.0
        center()
        addUpdater{ //adds updater to move
            move(it.milliseconds)
        }
    }

    private fun move(dt: Double) {
        var time = dt
        while (time > 0 && render) {
            check()
            updateVelocity()
            updatePosition(dt)
            time-=10f/*100f*///I dunno about this right here being 100, when i print its between 12-14 so itll only run once, so i made it 10 - pipe
        }
    }

    abstract fun updateVelocity()

    abstract fun updatePosition(dt: Double)

    abstract fun check()

}
