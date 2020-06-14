import com.soywiz.korge.Korge
import com.soywiz.korge.scene.Module
import com.soywiz.korinject.AsyncInjector
import gameStateManager.GameDependency
import gameStateManager.scenes.GameScene
import gameStateManager.scenes.MainMenuScene

suspend fun main() = Korge(Korge.Config(module = GameModule))

//Starts the game and manages which scene is rendered
object GameModule : Module() {
    override val mainScene = MainMenuScene::class     // The default scene is the main menu

    override suspend fun AsyncInjector.configure() { // Allow different scenes to change between each other
        mapInstance(GameDependency("Main Menu"))  // call the first scene Main Menu

        //DONT FORGET TO ADD THE SCENES TO THE MAP PROTOTYPE OR YOU WILL GET AN ERROR ABOUT THE SCENE MANAGER NOT BEING
        //ABLE TO FIND IT
        mapPrototype { MainMenuScene(get()) }
        mapPrototype { GameScene(get())     }
    }

}