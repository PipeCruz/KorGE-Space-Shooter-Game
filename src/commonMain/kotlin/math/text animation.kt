//package math
//
//class TextAnimation(text : String, renderTime: Float) {
//    var originalText: String
//        private set
//    var edited: String
//        private set
//    private val time = 0f
//    private var timePerLetter: Float = Text.length / renderTime
//    private var dTime = 0f
//    var hasspecialChar = false
//
//    constructor(Text: String, renderTime: Float) {
//        originalText = Text
//        edited = ""
//        timePerLetter = Text.length / renderTime
//        println("time per letter $timePerLetter")
//    }
//
//    constructor(Text: String) {
//        originalText = Text
//        edited = ""
//        timePerLetter = 75f
//    }
//
//    //animates text by: Origional: hello world
//    //1. h|
//    //2. he|
//    //...
//    //11. hello world|
//    //12. hello world
//    //13. hello world|
//    fun animateTyping(deltaTime: Float) {
//        dTime += deltaTime
//        if (dTime > 2 * timePerLetter) {
//            dTime = 0f
//        }
//        var numberOfCharToRender = (timePerLetter * dTime).toInt()
//        if (numberOfCharToRender < 0) {
//            numberOfCharToRender = 1
//        } else if (hasspecialChar) {
//            edited = edited.substring(0, edited.length - 1)
//            hasspecialChar = false
//        }
//        if (edited.length + numberOfCharToRender < originalText.length && numberOfCharToRender > 0) {
//            edited += originalText.substring(edited.length, numberOfCharToRender + edited.length)
//            dTime = 0f
//        } else if (edited.length < originalText.length && edited.length + numberOfCharToRender >= originalText.length) {
//            edited = originalText.substring(0)
//            dTime = 0f
//        } else if (originalText == edited && dTime > 0.5f) {
//            edited += "|"
//            hasspecialChar = true
//            dTime = -0.8f
//        }
//    }
//
//
//}