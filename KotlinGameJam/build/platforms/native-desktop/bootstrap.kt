import main
fun main(args: Array<String>): Unit = RootGameMain.runMain(args)
object RootGameMain {
	fun runMain() = runMain(arrayOf())
	@Suppress("UNUSED_PARAMETER") fun runMain(args: Array<String>): Unit = com.soywiz.korio.Korio { main() }
}
