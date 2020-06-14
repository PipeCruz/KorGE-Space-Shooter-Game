package gameStateManager.scenes

import com.soywiz.korge.input.onClick
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.*
import com.soywiz.korim.color.Colors
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.async.launchImmediately
import com.soywiz.korio.file.std.resourcesVfs
import entities.Player
import entities.TrackingEnemy
import gameStateManager.GameDependency

class GameScene(private val myDependency: GameDependency) : Scene() {
    override suspend fun Container.sceneInit() {
        text("Test Game: ${myDependency.value}")
        solidRect(100.0, 100.0, Colors.BLUE).position(containerRoot.width/2,containerRoot.height/2).center().onClick {
            launchImmediately {
                sceneDestroy()
                removeAllComponents()
                sceneContainer.changeTo<MainMenuScene>(GameDependency("MainMenu"))
            }
        }
        val player = Player(resourcesVfs["korge.png"].readBitmap(), views)
        player.xy(500.0,500.0)
        //we need to center the camera on the player
        addChild(player)
        //testing enemy
        val explosionAnimation = SpriteAnimation(
                spriteMap = resourcesVfs["homing_enemy.png"].readBitmap(),
                spriteWidth = 48,
                spriteHeight = 48,
                columns = 9,
                rows = 1
        )
        val testTrackingEnemy = TrackingEnemy(explosionAnimation, views, player)
        addChild(testTrackingEnemy)
//        var job = launchImmediately()
//        {
//            println("working")
//            while (true) {
//                testTrack.trackPlayer(Vec2(player.x.toFloat(), player.y.toFloat()))
//
//            }
//        }
        //end testing enemy
    }

//    override suspend fun sceneDestroy() {
//        super.sceneDestroy()
//        //destroy entities, since they will keep updating when the scene is changed
//    }
}