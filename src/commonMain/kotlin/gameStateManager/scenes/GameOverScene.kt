package gameStateManager.scenes

import com.soywiz.klock.milliseconds
import com.soywiz.korge.internal.KorgeUntested
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.time.delay
import com.soywiz.korge.view.*
import com.soywiz.korim.font.readBitmapFont
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs
import gameStateManager.GameDependency
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlin.random.Random

class GameOverScene : Scene() {
    @KorgeUntested
    override suspend fun Container.sceneInit() {
        val text = """Don't give up \n commander!! \n You can always take on \n another day """
        val font1 = resourcesVfs["font/font1.fnt"].readBitmapFont()
        val message = text("", 32.0, font = font1)

        GlobalScope.launch {
            for (item in text) {
                message.text += item
                delay(100.milliseconds)
            }
            delay(2000.milliseconds)
            sceneDestroy()
            sceneContainer.changeTo<MainMenuScene>(GameDependency("Manual"))
        }

        val background = resourcesVfs["animations/background/space2_4-frames.png"].readBitmap()

        for (xOffset in 0..17){

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