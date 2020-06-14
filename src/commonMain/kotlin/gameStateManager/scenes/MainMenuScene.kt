package gameStateManager.scenes

import com.soywiz.korge.input.onClick
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.*
import com.soywiz.korim.color.Colors
import com.soywiz.korio.async.launchImmediately
import gameStateManager.GameDependency

class MainMenuScene(private val myDependency: GameDependency) : Scene() {

    override suspend fun Container.sceneInit() {
        text("Test Main Menu: ${myDependency.value}")
        //NOTE: the solidRect that is not deprecated requires Double parameters for width and height
        solidRect(100.0, 100.0, Colors.RED).position(containerRoot.width/2,containerRoot.height/2).center().onClick {
            launchImmediately {
                println("Switching to game")
                sceneDestroy()
                sceneContainer.changeTo<GameScene>(GameDependency("Game"))
            }
        }
    }

}