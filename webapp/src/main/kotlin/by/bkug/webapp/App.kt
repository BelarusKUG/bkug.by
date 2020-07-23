package by.bkug.webapp

import by.bkug.common.DefaultShutdownManager
import io.undertow.Undertow
import io.undertow.server.HttpHandler
import io.undertow.server.HttpServerExchange
import io.undertow.server.handlers.PathHandler
import io.undertow.server.handlers.resource.ClassPathResourceManager
import io.undertow.server.handlers.resource.ResourceHandler

/**
 * Runs web app:
 *
 * - authentication
 * - forms
 * - shortener
 * - storage
 *
 * @author Ruslan Ibragimov
 * @since 1.0.0
 */
fun main() {
    val rootHandler = PathHandler(100)
        .addPrefixPath("/", ResourceHandler(
            ClassPathResourceManager(
                ClassPathResourceManager::class.java.classLoader,
                "public"
            )
        ))
        .addPrefixPath("/auth", NoopHandler)
        .addPrefixPath("/form", NoopHandler)
        .addPrefixPath("/to", NoopHandler)
        .addPrefixPath("/files", NoopHandler)

    val server = Undertow.builder()
        .addHttpListener(8080, "0.0.0.0")
        .setHandler(rootHandler)
        .build()

    val manager = DefaultShutdownManager()

    manager.onShutdown("Undertow") {
        server.stop()
    }

    server.start()
}

object NoopHandler : HttpHandler {
    override fun handleRequest(exchange: HttpServerExchange) {
        exchange.endExchange()
    }
}
