package gameStateManager.scenes

import com.soywiz.klock.milliseconds
import com.soywiz.korge.input.onClick
import com.soywiz.korge.internal.KorgeUntested
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.ui.iconButton
import com.soywiz.korge.ui.uiButton
import com.soywiz.korge.view.*
import com.soywiz.korge.view.filter.BlurFilter
import com.soywiz.korgw.GameWindow
import com.soywiz.korim.color.Colors
import com.soywiz.korim.font.CreateStringTextRenderer
import com.soywiz.korim.font.readBitmapFont
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.async.delay
import com.soywiz.korio.async.launchImmediately
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.degrees
import com.soywiz.korma.geom.plus
import com.soywiz.korma.geom.sin
import entities.enemies.DemoPlayer
import gameStateManager.GameDependency
import kotlin.random.Random

class MainMenuScene(private val myDependency: GameDependency) : Scene() {

    @KorgeUntested
    override suspend fun Container.sceneInit() {

        //var blur = 10.0
        //filter = BlurFilter(blur)

        addChild(DemoPlayer(resourcesVfs["character/pitrizzo-SpaceShip-gpl3-opengameart-96x96.png"].readBitmap()))

        launchImmediately {
/*            while (blur>0) {
                filter = BlurFilter(blur)
                blur -= 0.3
                delay(10.milliseconds)
            }*/
        }
        var offset = 0.degrees

        val scale = 3.0
        val font1 = resourcesVfs["font\\font2.fnt"].readBitmapFont()
        val title = text("Star Battlers: Requiem", font = font1, textSize = 140.0)
        addUpdater {
            offset += 5.degrees
            title.xy(title.x, title.y + 2 * sin(offset))
        }

        val buttonOffset = -50

        val startButtonBitmap = resourcesVfs["buttons/BigStartButton.png"].readBitmap()
        val startButton = sprite(startButtonBitmap).position(containerRoot.width / 3 * 2 + 150, containerRoot.height / 2 + buttonOffset).center().onClick {
            launchImmediately {
                println("Switching to game")
                sceneDestroy()
                sceneContainer.changeTo<GameScene>(GameDependency("Game"))

            }
        }
        startButton?.scale = 2.0

        val manualButtonBitmap = resourcesVfs["buttons/BigManualButton.png"].readBitmap()
        val manualButton = sprite(manualButtonBitmap).position(containerRoot.width / 3 * 2 + 150, containerRoot.height / 2 + 150 + buttonOffset).center().onClick {
            launchImmediately {
                println("Switching to manual")
                sceneDestroy()
                sceneContainer.changeTo<HelpScene>(GameDependency("Manual"))
            }
        }
        manualButton?.scale = 2.0

        val exitButtonBitmap = resourcesVfs["buttons/BigExitButton.png"].readBitmap()
        val exitButton = sprite(exitButtonBitmap).position(containerRoot.width / 3 * 2 + 150, containerRoot.height / 2 + 300 + buttonOffset).center().onClick {
            launchImmediately {
                sceneDestroy()
               views.gameWindow.exit()
            }
        }
        exitButton?.scale = 2.0

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
                animation1.scale(scale)
                animation1.playAnimationLooped(spriteDisplayTime = (400 * (Random.nextFloat() / 2 + 0.75)).milliseconds)
                animation1.xy(64*xOffset,64*yOffset)
                addChildAt(animation1, 0)
            }
        }


    }

}