package gameStateManager.scenes

import com.soywiz.korge.input.onClick
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.Container
import com.soywiz.korge.view.position
import com.soywiz.korge.view.solidRect
import com.soywiz.korge.view.text
import com.soywiz.korim.color.Colors
import com.soywiz.korio.async.launchImmediately
import gameStateManager.GameDependency

class MainMenuScene(private val myDependency: GameDependency) : Scene() {
    override suspend fun Container.sceneInit() {
        text("Test Main Menu: ${myDependency.value}")
        solidRect(100, 100, Colors.RED).position(200, 100).onClick {
            launchImmediately {
                sceneContainer.changeTo<GameScene>(GameDependency("Game"))
            }
        }
    }
}