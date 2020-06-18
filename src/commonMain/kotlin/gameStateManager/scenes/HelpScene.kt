package gameStateManager.scenes

import com.soywiz.klock.milliseconds
import com.soywiz.korev.Key
import com.soywiz.korge.input.onClick
import com.soywiz.korge.internal.KorgeUntested
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.*
import com.soywiz.korim.font.readBitmapFont
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.async.launchImmediately
import com.soywiz.korio.file.std.resourcesVfs
import gameStateManager.GameDependency
import kotlinx.coroutines.GlobalScope
import kotlin.random.Random

class HelpScene : Scene() {
    @KorgeUntested
    override suspend fun Container.sceneInit() {
        launchImmediately {

        }
        addUpdater {
            onClick {
                sceneDestroy()
                sceneContainer.changeTo<MainMenuScene>(GameDependency("MainMenu"))
            }

            if (views.input.keys[Key.ESCAPE]) {
                GlobalScope.launchImmediately {
                    sceneDestroy()
                    sceneContainer.changeTo<MainMenuScene>(GameDependency("MainMenu"))
                }
            }
        }
        val font1 = resourcesVfs["font/font1.fnt"].readBitmapFont()
        text("Welcome to\n" +
                "Star Battlers: Requiem, Commander!\n" +
                "Here's some tips to get you started on your journey:\n\n" +
                "To move, use WASD controls\n" +
                "To shoot, press the space bar\n" +
                "Destroy enemies and collect experience points!\n" +
                "After you have 500 points, press V to get a boost!\n" +
                "press anywhere to return to the Main Menu\n\n" +
                "Find us on github @michaelocity, @bdebiase, @PipeCruz", font = font1, textSize = 50.0)


        val background = resourcesVfs["animations/background/space2_4-frames.png"].readBitmap()
        for (xOffset in 0..17)
        {
            for (yOffset in 0..9) {
                val animation1 = Sprite(SpriteAnimation(
                        spriteMap = background,
                        spriteWidth = 64,
                        spriteHeight = 64,
                        columns = 4,
                        rows = 1))
                animation1.scale(3.0)
                animation1.playAnimationLooped(spriteDisplayTime = (400 * (Random.nextFloat() / 2 + 0.75)).milliseconds)
                animation1.xy(64*xOffset,64*yOffset)
                addChildAt(animation1, 0)
            }
        }
    }
}