package by.bkug.common

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.async
import kotlinx.coroutines.runBlocking
import org.slf4j.LoggerFactory
import java.util.concurrent.atomic.AtomicBoolean
import kotlin.concurrent.thread

/**
 * Used for graceful shutdown resources.
 *
 * @author Ruslan Ibragimov
 */
interface ShutdownManager {
    fun onShutdown(name: String, callback: ShutdownCallback)
    val isShutdown: Boolean
}

typealias ShutdownCallback = suspend () -> Unit

class DefaultShutdownManager : ShutdownManager {
    init {
        Runtime.getRuntime().addShutdownHook(thread(start = false) {
            LOGGER.info("Stopping server")
            runBlocking {
                callbacks.map {
                    async(Dispatchers.IO) {
                        it()
                    }
                }.forEach { it.await() }
                LOGGER.info("Server stopped")
            }
        })
    }

    private val callbacks: MutableList<ShutdownCallback> = mutableListOf()

    override fun onShutdown(name: String, callback: ShutdownCallback) {
        callbacks.add {
            LOGGER.info("Stopping $name")
            callback()
            LOGGER.info("$name stopped")
        }
    }

    private val _isShutdown = AtomicBoolean(false)

    override val isShutdown = _isShutdown.get()

    private val LOGGER = LoggerFactory.getLogger(DefaultShutdownManager::class.java)
}


