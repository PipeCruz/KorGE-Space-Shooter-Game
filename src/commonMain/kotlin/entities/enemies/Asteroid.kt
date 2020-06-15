package entities.enemies

import com.soywiz.korau.sound.NativeSound
import com.soywiz.korau.sound.readSound
import com.soywiz.korge.view.*
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.*
import entities.Player
import entities.SpawningManager
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlin.random.Random

class Asteroid(val bm: SpriteAnimation, views: Views, player: Player, private val asteroidSize: Int) : Enemy(bm, views, player, moveSpeed = 1f, health = asteroidSize, hitboxSize = asteroidSize * 25) {

    var explodeSound : NativeSound? = null

    init {
        velocity.x = Random.nextInt(-200, 200).toFloat()
        velocity.y = Random.nextInt(-200, 200).toFloat()

        GlobalScope.launch {
            explodeSound = resourcesVfs["sound/RetroSounds/Explosions/Short/sfx_exp_short_hard6.wav"].readSound()
            explodeSound?.volume = 0.25
        }
    }

    override fun updateVelocity() {

    }

    override fun updatePosition(dt: Double) {
        val deltaTime = dt / 1000
        xy(x + velocity.x * deltaTime, y + velocity.y * deltaTime)

        rotation += 150.degrees * deltaTime
    }

    override fun check() {
        if (pos.distanceTo(player.pos) < hitboxSize) {//set the image to be explosion if collided
            player.damage(asteroidSize * 5)
            health = 0
        }

        if (pos.distanceTo(player.pos) > 1600)
            health = 0

        if (health <= 0) {
            if (pos.distanceTo(player.pos) <= 1600) {
                when (asteroidSize) {
                    3 -> {
                        for (i in 0..1)
                            SpawningManager.spawnAsteroid(x, y, views, player, parent, 2)

                        if (pos.distanceTo(player.pos) > hitboxSize)
                            for (i in 0..5)
                                SpawningManager.spawnXP(x + Random.nextInt(-30, 30), y + Random.nextInt(-30, 30), player, parent)
                    }
                    2 -> {
                        for (i in 0..2)
                            SpawningManager.spawnAsteroid(x, y, views, player, parent, 1)

                        if (pos.distanceTo(player.pos) > hitboxSize)
                            for (i in 0..2)
                                SpawningManager.spawnXP(x + Random.nextInt(-30, 30), y + Random.nextInt(-30, 30), player, parent)
                    }
                    1 -> {
                        if (pos.distanceTo(player.pos) > hitboxSize)
                            SpawningManager.spawnXP(x + Random.nextInt(-30, 30), y + Random.nextInt(-30, 30), player, parent)
                    }
                }

                SpawningManager.spawnExplosion(x, y, angle, parent, asteroidSize.toDouble())
                explodeSound?.play()
            }

            removeFromParent()
        }
    }

    fun Split(currentScene : Container)
    {
        currentScene.removeChild(this)
        currentScene.addChild(createSplitter())
        currentScene.addChild(createSplitter())

    }

    private fun createSplitter(): Asteroid = Asteroid(bm, views, player, health - 1)
}