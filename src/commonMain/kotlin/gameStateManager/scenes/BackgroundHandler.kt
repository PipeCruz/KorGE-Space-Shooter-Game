package gameStateManager.scenes

import com.soywiz.klock.milliseconds
import com.soywiz.korge.internal.KorgeUntested
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korio.async.launchImmediately
import kotlinx.coroutines.GlobalScope
import org.jbox2d.common.Vec2
import kotlin.random.Random

class BackgroundHandler(private val bm : Bitmap, private val spriteSize : Int =64, var scale :Double = 4.0){

    private var animations = ArrayList<Sprite>()
    private val maxBackgroundTiles =  258

        @KorgeUntested
        fun updateSpritePos(playerPos : Vec2, currentScene : Container)
        {
            val relativeX = playerPos.x%spriteSize
            val relativeY = playerPos.y%spriteSize

            if(relativeX<spriteSize/2&&relativeY<spriteSize/2)
            {

                animations.add(createAnimation(playerPos,-1,-1))
                currentScene.addChildAt(animations[animations.size-1],0)
                animations.add(createAnimation(playerPos,0,-1))
                currentScene.addChildAt(animations[animations.size-1],0)
                animations.add(createAnimation(playerPos,-1,0))
                currentScene.addChildAt(animations[animations.size-1],0)


            }
            else if(relativeX<spriteSize/2&&relativeY>spriteSize/2)
            {
                animations.add(createAnimation(playerPos,-1,0))
                currentScene.addChildAt(animations[animations.size-1],0)
                animations.add(createAnimation(playerPos,-1,1))
                currentScene.addChildAt(animations[animations.size-1],0)
                animations.add(createAnimation(playerPos,0,1))
                currentScene.addChildAt(animations[animations.size-1],0)
            }

            else if(relativeX>spriteSize/2&&relativeY>spriteSize/2)
            {
                animations.add(createAnimation(playerPos,1,1))
                currentScene.addChildAt(animations[animations.size-1],0)
                animations.add(createAnimation(playerPos,0,1))
                currentScene.addChildAt(animations[animations.size-1],0)
                animations.add(createAnimation(playerPos,1,0))
                currentScene.addChildAt(animations[animations.size-1],0)
            }
            else
            {
                animations.add(createAnimation(playerPos,1,-1))
                currentScene.addChildAt(animations[animations.size-1],0)
                animations.add(createAnimation(playerPos,0,-1))
                currentScene.addChildAt(animations[animations.size-1],0)
                animations.add(createAnimation(playerPos,1,0))
                currentScene.addChildAt(animations[animations.size-1],0)
            }

            deleteUnusedTextures(currentScene)

        }

        private fun deleteUnusedTextures(currentScene : Container)
        {
//            println(animations.size)
            if(animations.size>maxBackgroundTiles) {
                GlobalScope.launchImmediately {
                    while (animations.size > maxBackgroundTiles / 2) {
                        currentScene.removeChild(animations.removeAt(0))
                    }
                }
            }
        }

        fun createAnimation(playerPos: Vec2, xOffset: Int=0,yOffset :Int =0) : Sprite
        {
            val animation1 = Sprite(SpriteAnimation(
                    spriteMap = bm,
                    spriteWidth = spriteSize,
                    spriteHeight = spriteSize,
                    columns = 4,
                    rows = 1))
            animation1.scale(scale)

            animation1.xy((playerPos.x.toInt()/(spriteSize*scale).toInt()+xOffset)*spriteSize*scale,
                    (playerPos.y.toInt()/(spriteSize*scale).toInt()+yOffset)*spriteSize*scale)

            animation1.playAnimationLooped(spriteDisplayTime = (400*(Random.nextFloat()/2+0.75)).milliseconds)
            return animation1
        }
    }

