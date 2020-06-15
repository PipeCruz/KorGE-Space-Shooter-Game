package entities

import com.soywiz.klock.Time
import com.soywiz.klock.TimeSpan
import com.soywiz.klock.milliseconds
import com.soywiz.kmem.toInt
import com.soywiz.korau.sound.NativeSound
import com.soywiz.korau.sound.readSound
import com.soywiz.korev.Key
import com.soywiz.korge.animate.play
import com.soywiz.korge.time.delay
import com.soywiz.korge.tween.rotateBy
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.*
import entities.projectiles.PlayerBullet
import input.PlayerInput
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.jbox2d.common.MathUtils
import org.jbox2d.common.Vec2
import kotlin.math.abs
import kotlin.math.atan2
import kotlin.math.floor
import kotlin.random.Random

class ExperiencePoint(bm: Bitmap, player: Player) : Sprite(bm) {
    var velocity = Vec2()
    var xpSound : NativeSound? = null

    init {
        scale = 0.25
        center()

        GlobalScope.launch {
            xpSound = resourcesVfs["sound/RetroSounds/General Sounds/Coins/sfx_coin_single4.wav"].readSound()
            xpSound?.volume = 0.25
        }

        addUpdater {
            rotationDegrees += 5

            val deltaTime = it.milliseconds / 1000
            val distanceToPlayer = Vec2(((player.x - x).toFloat()), (player.y - y).toFloat())
            if (abs(distanceToPlayer.length()) < 200) {
                //pos.x += ((player.pos.x - pos.x) * abs(1 - abs(distanceToPlayer.x / 200))) * 2 * deltaTime
                //pos.y += ((player.pos.y - pos.y) * abs(1 - abs(distanceToPlayer.y / 200))) * 2 * deltaTime
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