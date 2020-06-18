package entities

import com.soywiz.klock.milliseconds
import com.soywiz.korge.view.*
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.async.launch
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.Angle
import com.soywiz.korma.geom.radians
import entities.enemies.Asteroid
import entities.enemies.Missile
import entities.enemies.RangedEnemy
import entities.enemies.TrackingEnemy
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.delay
import math.Tracking
import org.jbox2d.common.Vec2
import kotlin.math.atan2

//USE THIS TO STORE THE ENEMY BITMAPS AND ASSOCIATED FILES SO THAT CALLING THEM WILL BE EASY
object SpawningManager {


     fun spawnTrackingEnemy(x :Double, y :Double, view: Views, player :Player, parent: Container?){
         GlobalScope.launch {
             val testingSpriteAnimation = SpriteAnimation(
                     spriteMap = resourcesVfs["enemies\\tracker ship.png"].readBitmap(),
                     spriteWidth = 48,
                     spriteHeight = 48,
                     columns = 9,
                     rows = 1
             )
             val enemy = TrackingEnemy(testingSpriteAnimation, view, player)
             enemy.xy(x, y)
             parent?.addChild(enemy)
             enemy.scale=3.0
             enemy.addUpdater {
                 val deltaTime = it.milliseconds / 1000
                 trackPlayer(Vec2(player.x.toFloat(), player.y.toFloat()), deltaTime)
             }
         }
    }

     fun spawnRangedEnemy(x :Double, y :Double, view: Views, player: Player, parent: Container?){
         GlobalScope.launch {
             val enemyBitmap = resourcesVfs["enemies/otherRanged.png"].readBitmap()
             val enemy = RangedEnemy(SpriteAnimation(enemyBitmap, spriteWidth = 62, spriteHeight = 62), view, player)
             enemy.xy(x, y)
             parent?.addChild(enemy)
             enemy.scale=3.0
             enemy.addUpdater {
                 enemy.trackPlayer(Vec2(player.x.toFloat(), player.y.toFloat()))
             }
                 while (true) {
                     delay(2500)
                     enemy.shootMissiles()
                 }
         }
     }

    fun spawnMissile(x :Double, y :Double, view: Views, player :Player, parent: Container?) {
        GlobalScope.launch {
            val enemyBitmap = resourcesVfs["animations/projectiles/rocket.png"].readBitmap()
            val enemy = Missile(SpriteAnimation(enemyBitmap), view, player)
            enemy.xy(x, y)
            parent?.addChild(enemy)
            enemy.scale=3.0
            enemy.rotation = atan2(player.y-enemy.y,player.x-enemy.x).radians
            enemy.velocity = Tracking.trackingVector(Vec2(enemy.x.toFloat(), enemy.y.toFloat()),Vec2(player.x.toFloat(), player.y.toFloat()))
            enemy.velocity.mulLocal(enemy.moveSpeed)
//            enemy.addUpdater
            while(true) {
                enemy.trackPlayer(Vec2(player.x.toFloat(), player.y.toFloat()))
                delay(50)
            }
        }
    }

     fun spawnExplosion(x:Double, y: Double, angle: Angle, parent: Container?, size: Double) {
         GlobalScope.launch {
             val bitmap = resourcesVfs["animations/explosions/explosion-6.png"].readBitmap()

             val sprite = Sprite(SpriteAnimation(
                     spriteMap = bitmap,
                     spriteWidth = 48,
                     spriteHeight = 48,
                     columns = 9,
                     rows = 1
             ))
             parent?.addChild(sprite)
             sprite.xy(x, y)
             sprite.rotation = angle
             sprite.scale = size
             sprite.playAnimation(spriteDisplayTime = 70.milliseconds)
             sprite.center()
             sprite.onAnimationCompleted {
                 sprite.removeFromParent()
             }
         }
     }

    fun spawnAsteroid(x:Double, y:Double, views: Views, player: Player, parent: Container?, size: Int) {
        GlobalScope.launch {
            val testingSpriteAnimation = SpriteAnimation(
                    spriteMap = resourcesVfs["enemies/Asteroid.png"].readBitmap(),
                    spriteWidth = 48,
                    spriteHeight = 48,
                    columns = 9,
                    rows = 1
            )
            val asteroid = Asteroid(testingSpriteAnimation,views, player,size)
            asteroid.xy(x, y)
            parent?.addChild(asteroid)
            asteroid.scale = size.toDouble()
            asteroid.addUpdater {
                if (pos.distanceTo(player.pos) > 1600)
                    health = 0
            }
        }
    }

     fun spawnXP(x: Double, y: Double, player:Player, parent: Container?)  {
         GlobalScope.launch {
             val randedEnemyBitmap = resourcesVfs["animations/projectiles/exp.png"].readBitmap()
             val exp = ExperiencePoint(randedEnemyBitmap, player)
             exp.xy(x, y)
             exp.explode()
             parent?.addChild(exp)
         }
    }

}