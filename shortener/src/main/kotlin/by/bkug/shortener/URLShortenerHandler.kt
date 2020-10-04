package by.bkug.shortener

import by.bkug.data.shortLinks
import io.undertow.server.HttpHandler
import io.undertow.server.HttpServerExchange
import io.undertow.util.Headers
import io.undertow.util.StatusCodes

class URLShortenerHandler : HttpHandler {
    private val linksIndex = shortLinks.associateBy { it.from }

    override fun handleRequest(exchange: HttpServerExchange) {
        val link = linksIndex[exchange.relativePath]

        if (link != null) {
            exchange.statusCode = StatusCodes.FOUND
            exchange.responseHeaders.put(Headers.LOCATION, link.to)
        }

        exchange.endExchange()
    }
}
