package gameStateManager.scenes

import com.soywiz.klock.seconds
import com.soywiz.korev.Key
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.time.delay
import com.soywiz.korge.view.*
import com.soywiz.korim.color.Colors
import com.soywiz.korim.font.readBitmapFont
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.async.launchImmediately
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.*
import entities.Player
import entities.SpawningManager
import gameStateManager.GameDependency
import kotlinx.coroutines.GlobalScope
import org.jbox2d.common.Vec2
import kotlin.random.Random

class GameScene(private val myDependency: GameDependency) : Scene() {

    override suspend fun Container.sceneInit() {
        val windowSize = Size(1280, 720)

        text("Test Game: ${myDependency.value}")
        fun playerDead()
        {
            GlobalScope.launchImmediately {
                delay(3.seconds)
//                println("Switching to game")
                sceneDestroy()
                sceneContainer.changeTo<GameScene>(GameDependency("Game"))
            }
        }

        val backgroundHandler = BackgroundHandler(resourcesVfs["animations/background/space2_4-frames.png"].readBitmap())
        val background = resourcesVfs["animations/background/space2_4-frames.png"].readBitmap()
        for (xPos in 0..windowSize.width.toInt() step background.width) {
            for (yPos in 0..windowSize.height.toInt() + background.height step background.height) {
                val backdrop = backgroundHandler.createAnimation(Vec2(xPos.toFloat(), yPos.toFloat()))
                addChild(backdrop)
                backdrop.addUpdater {
                    if (-parent?.x!! - width > x) {
                        x += width * 6
                    }

                    if (-parent?.x!! + windowSize.width.toInt() < x) {
                        x -= width * 6
                    }


                    if (-parent?.y!! > y) {
                        y += height * 4
                    }

                    if (-parent?.y!! + windowSize.height.toInt() < y) {
                        y -= height * 4
                    }
                }
            }
        }


        val player = Player(resourcesVfs["character/pitrizzo-SpaceShip-gpl3-opengameart-96x96.png"].readBitmap(), views)
        addChild(player)
        position((-player.x + windowSize.width / 2) - pos.x, ((-player.y + windowSize.height / 2) - pos.y))

        var timeMS = 0

        //cameralag
        val font2 = resourcesVfs["font/font2.fnt"].readBitmapFont()
        val pointCounter = text("point", 32.0, font = font2)
        val playerHealth = text("health", 32.0, font = font2)
        pointCounter.xy(-550, -350)
        playerHealth.xy(550, -350)
        pointCounter.color = Colors.GREEN
        addHrUpdater {
            val deltaTime = it.millisecondsDouble / 1000

            val target = Point(((-player.x + windowSize.width / 2) - pos.x), ((-player.y + windowSize.height / 2) - pos.y)) * 8 * deltaTime
            position(pos.x + target.x, pos.y + target.y)
            timeMS = it.millisecondsInt


            pointCounter.xy(pointCounter.x - target.x, pointCounter.y - target.y)
            pointCounter.text = """${player.xp * 100}"""

            if (player.health > 0) {
                playerHealth.xy(playerHealth.x - target.x, playerHealth.y - target.y)
                playerHealth.text = """ ${player.health}"""
            } else {
                playerHealth.xy(pointCounter.x - target.x+1000, pointCounter.y - target.y)
                playerHealth.text = "Game Over"
                playerDead()
            }

            if (views.input.keys[Key.ESCAPE]) {
                switchScene()
            }
        }



        val minSpawningRange = 800
        val maxSpawningRange = 1200

        launchImmediately {
            while (true) {
                val spawnPos = Point(player.x + cos(timeMS.radians) * Random.nextInt(minSpawningRange, maxSpawningRange), player.y + sin(timeMS.radians) * Random.nextInt(minSpawningRange, maxSpawningRange))
                SpawningManager.spawnRangedEnemy(spawnPos.x, spawnPos.y, views, player, this)
                delay(Random.nextInt(8, 12).seconds)
            }
        }
        launchImmediately {
            while (true) {
                val spawnPos = Point(player.x + cos(timeMS.radians) * Random.nextInt(minSpawningRange, maxSpawningRange), player.y + sin(timeMS.radians) * Random.nextInt(minSpawningRange, maxSpawningRange))
                SpawningManager.spawnTrackingEnemy(spawnPos.x, spawnPos.y, views, player, this)
                delay(Random.nextInt(3, 8).seconds)
            }
        }
        launchImmediately {
            while (true) {
                val spawnPos = Point(player.x + cos(timeMS.radians) * Random.nextInt(minSpawningRange, maxSpawningRange), player.y + sin(timeMS.radians) * Random.nextInt(minSpawningRange, maxSpawningRange))
                SpawningManager.spawnAsteroid(spawnPos.x, spawnPos.y, views, player, this, Random.nextInt(1, 4))
                //SpawningManager.spawnAsteroid(spawnPos.x, spawnPos.y, views, player, this, 3)
                delay(Random.nextInt(1, 3).seconds)
            }
        }
    }

    fun switchScene() {
        GlobalScope.launchImmediately {
            sceneDestroy()
            sceneContainer.changeTo<MainMenuScene>(GameDependency("MainMenu"))
        }
    }
}