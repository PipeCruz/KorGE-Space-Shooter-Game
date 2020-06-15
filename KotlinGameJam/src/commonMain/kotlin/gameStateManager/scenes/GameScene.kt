package gameStateManager.scenes

import com.soywiz.klock.milliseconds
import com.soywiz.kmem.toInt
import com.soywiz.korge.input.onClick
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.*
import com.soywiz.korim.color.Colors
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.async.delay
import com.soywiz.korio.async.launchImmediately
import com.soywiz.korio.file.std.resourcesVfs
import entities.DebugBulletDoNotBuildOn
import entities.Player
import entities.TrackingEnemy
import gameStateManager.GameDependency
import org.jbox2d.common.Vec2

class GameScene(private val myDependency: GameDependency) : Scene() {
    override suspend fun Container.sceneInit() {
        text("Test Game: ${myDependency.value}")
        solidRect(100, 100, Colors.BLUE).position(100, 100).onClick {
            launchImmediately {
                sceneContainer.changeTo<MainMenuScene>(GameDependency("MainMenu"))
            }
        }

        val player = Player(resourcesVfs["korge.png"].readBitmap(), views)
        addChild(player)

        //testing enemy
        val testTrack = DebugBulletDoNotBuildOn(resourcesVfs["knakles.jpg"].readBitmap(), views)
        testTrack.x=500.0
        testTrack.y=500.0
        addChild(testTrack)
        var job = launchImmediately()
        {
            println("working")
            while (true) {
                testTrack.trackPlayer(Vec2(player.x.toFloat(), player.y.toFloat()))
                delay(40.milliseconds)
            }
        }
        //end testing enemy
    }
}