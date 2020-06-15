import com.soywiz.klock.DayOfWeek.Companion.get
import com.soywiz.korge.Korge
import com.soywiz.korge.scene.Module
import com.soywiz.korgw.GameWindow
import com.soywiz.korim.format.readBitmap
import com.soywiz.korim.vector.Drawable
import com.soywiz.korim.vector.FuncDrawable
import com.soywiz.korim.vector.SizedDrawable
import com.soywiz.korinject.AsyncInjector
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.Anchor
import com.soywiz.korma.geom.ScaleMode
import com.soywiz.korma.geom.Size
import com.soywiz.korma.geom.SizeInt
import gameStateManager.GameDependency
import gameStateManager.scenes.GameOverScene
import gameStateManager.scenes.GameScene
import gameStateManager.scenes.HelpScene
import gameStateManager.scenes.MainMenuScene

suspend fun main() = Korge(Korge.Config(module = GameModule))

//Starts the game and manages which scene is rendered
object GameModule : Module() {

    override val title = "Star Battlers: Requiem"
    override val icon = "character/pitrizzo-SpaceShip-gpl3-opengameart-96x96.png"

    override val size = SizeInt(1280, 720) // Virtual Size
    override val windowSize = SizeInt(1280, 720) // Window Size

    override val mainScene = MainMenuScene::class     // The default scene is the main menu
//    override val fullscreen: Boolean = true

    override suspend fun AsyncInjector.configure() { // Allow different scenes to change between each other
        mapInstance(GameDependency("Star Battle Infinitum "))  // call the first scene Main Menu
        //DONT FORGET TO ADD THE SCENES TO THE MAP PROTOTYPE OR YOU WILL GET AN ERROR ABOUT THE SCENE MANAGER NOT BEING
        //ABLE TO FIND IT
        mapPrototype { MainMenuScene(get()) }
        mapPrototype { GameScene(get())}
        mapPrototype { GameOverScene(get()) }
        mapPrototype { HelpScene(get()) }
    }

}