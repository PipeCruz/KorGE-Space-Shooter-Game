package entities

import com.soywiz.klock.TimeSpan
import com.soywiz.klock.milliseconds
import com.soywiz.kmem.toInt
import com.soywiz.korau.sound.NativeSound
import com.soywiz.korau.sound.readSound
import com.soywiz.korge.time.delay
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.*
import entities.projectiles.PlayerBullet
import input.PlayerInput
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.jbox2d.common.Vec2
import kotlin.math.atan2

class Player(bm: Bitmap, views: Views, private var reloadTime: TimeSpan = 100.milliseconds) : Sprite(bm) {

    private val moveSpeed = 10f
    private val deceleration = 0.99f

    val velocity = Vec2()
    private val input = Vec2()
    var angle = 0.radians
    var xp: Int = 0
    var health = 100
    private var damageSound: NativeSound? = null

    private val playerInput = PlayerInput(views)

    private var deltaTime = 0.0
    init {
        scale = 0.5
        center()
        shoot()

        GlobalScope.launch {
            damageSound = resourcesVfs["sound/playerDamage(sfx_exp_short_hard_2).wav"].readSound()
            damageSound?.volume = 0.25
        }

        addUpdater {
            deltaTime = it.milliseconds / 1000

            input.x = (playerInput.pressingRight().toInt() - playerInput.pressingLeft().toInt()).toFloat()
            input.y = (playerInput.pressingDown().toInt() - playerInput.pressingUp().toInt()).toFloat()
            input.normalize()

            velocity.x = (velocity.x + input.x * moveSpeed) * deceleration
            velocity.y = (velocity.y + input.y * moveSpeed) * deceleration

            if (xp >= 5 && playerInput.pressingBoost() && input != Vec2()) {
                velocity.x = input.x * moveSpeed * 100
                velocity.y = input.y * moveSpeed * 100
                rotation = atan2(velocity.y.toDouble(), velocity.x.toDouble()).radians + 90.degrees
                xp-=5
//                println("Boost Used.\n$xp\nRemaining")
            }

            xy(x + velocity.x * deltaTime,y + velocity.y * deltaTime)

            if (velocity != Vec2()) {
                angle = atan2(velocity.y.toDouble(), velocity.x.toDouble()).radians
            }
            rotation += rotation.shortDistanceTo(angle + 90.degrees) * 10 * deltaTime
            if(health<=0){ playDead() }
        }
    }

    private fun playDead() {
        removeFromParent()
    }

    private fun shoot() {
        GlobalScope.launch {
            while(true) {
                delay(165.milliseconds)
                if (playerInput.pressingAttack()) {
                    val animation = SpriteAnimation(
                                spriteMap = resourcesVfs["animations/projectiles/Projectile3.png"].readBitmap(),
                                spriteWidth = 42,
                                spriteHeight = 7,
                                columns = 3,
                                rows = 1)

                    PlayerBullet(this@Player, animation).xy(x + cos(rotation) * 16, y + sin(rotation) * 16).shootNew(deltaTime)
                    PlayerBullet(this@Player, animation).xy(x - cos(rotation) * 16, y - sin(rotation) * 16).shootNew(deltaTime)
                    //velocity.x -= cos(rotation).toFloat() * 100f
                    //velocity.y -= sin(rotation).toFloat() * 100f
                    delay(reloadTime)
                }
            }
        }
    }

    fun damage(amnt: Int) {
        damageSound?.play()
        health -= amnt
        velocity.mulLocal(0.25f)
    }

}