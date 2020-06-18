package entities

import com.soywiz.korau.sound.NativeSound
import com.soywiz.korau.sound.readSound
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korio.file.std.resourcesVfs
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.jbox2d.common.Vec2
import kotlin.math.abs
import kotlin.random.Random

class ExperiencePoint(bm: Bitmap, player: Player) : Sprite(bm) {
    var velocity = Vec2()
    private var xpSound: NativeSound? = null

    init {
        scale = 0.25
        center()

        GlobalScope.launch {
            xpSound = resourcesVfs["sound/experience(sfx_coin_single_4).wav"].readSound()
            xpSound?.volume = 0.25
        }

        addUpdater {
            rotationDegrees += 5

            val deltaTime = it.milliseconds / 1000
            val distanceToPlayer = Vec2(((player.x - x).toFloat()), (player.y - y).toFloat())
            if (abs(distanceToPlayer.length()) < 200) {
                velocity.x += (player.pos.x - pos.x).toFloat() * 5 * deltaTime.toFloat()
                velocity.y += (player.pos.y - pos.y).toFloat() * 5 * deltaTime.toFloat()
            }

            if (collidesWith(player)) {
                xpSound?.play()
                player.xp += 1
                removeFromParent()
                player.velocity.mulLocal(1.1f)
            }

            velocity.x *= 0.99f
            velocity.y *= 0.99f

            xy(pos.x + velocity.x * deltaTime, pos.y + velocity.y * deltaTime)
        }
    }

    fun explode() {
        velocity.x = Random.nextInt(-300, 300).toFloat()
        velocity.y = Random.nextInt(-300, 300).toFloat()
    }
}