package input

import com.soywiz.korev.Key
import com.soywiz.korev.KeyEvent
import com.soywiz.korge.component.KeyComponent
import com.soywiz.korge.input.InputKeys
import com.soywiz.korge.view.View
import com.soywiz.korge.view.Views

open class InputManager(var views : Views)
{
    fun pressingKey(key: Key) = views.input.keys[key]
}

data class PlayerInput(val playerView: Views, var upKey : Key = Key.W, var downKey : Key = Key.S, var leftKey : Key = Key.A, var rightKey : Key = Key.D, var attackKey : Key = Key.SPACE) : InputManager(views = playerView)
{
    fun pressingUp(): Boolean = pressingKey(upKey)
    fun pressingDown(): Boolean = pressingKey(downKey)
    fun pressingLeft(): Boolean = pressingKey(leftKey)
    fun pressingRight(): Boolean = pressingKey(rightKey)
    fun pressingAttack(): Boolean = pressingKey(attackKey)
}