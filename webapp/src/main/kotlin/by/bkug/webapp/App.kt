package by.bkug.webapp

import by.bkug.common.DefaultShutdownManager
import by.bkug.shortener.URLShortenerHandler
import io.undertow.Undertow
import io.undertow.server.HttpHandler
import io.undertow.server.HttpServerExchange
import io.undertow.server.RoutingHandler
import io.undertow.server.handlers.PathHandler
import io.undertow.server.handlers.resource.ClassPathResourceManager
import io.undertow.server.handlers.resource.PathResourceManager
import io.undertow.server.handlers.resource.ResourceHandler
import io.undertow.util.StatusCodes
import java.nio.file.Paths

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
            ), ResourceHandler(
                PathResourceManager(
                    Paths.get("web-theme", "dist")
                )
            )
        ))
        .addPrefixPath("/auth", NoopHandler)
        .addPrefixPath("/form", NoopHandler)
        .addPrefixPath("/to", URLShortenerHandler())
        .addPrefixPath("/files", NoopHandler)
        .addPrefixPath("/api", ApiHandler())

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

class HealthCheckHandler : HttpHandler {
    override fun handleRequest(exchange: HttpServerExchange) {
        exchange.statusCode = StatusCodes.OK
        exchange.responseSender.send("ok")
    }
}

class ApiHandler : HttpHandler {
    private val pathHandler = RoutingHandler()
        .get("/healthcheck", HealthCheckHandler())

    override fun handleRequest(exchange: HttpServerExchange) {
        pathHandler.handleRequest(exchange)
    }

}

object NoopHandler : HttpHandler {
    override fun handleRequest(exchange: HttpServerExchange) {
        exchange.responseSender.send(exchange.requestPath)
    }
}
