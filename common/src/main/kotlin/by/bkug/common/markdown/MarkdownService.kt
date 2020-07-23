package by.bkug.common.markdown

import kotlinx.coroutines.Dispatchers.IO
import kotlinx.coroutines.withContext
import org.commonmark.parser.Parser
import org.commonmark.renderer.Renderer
import org.commonmark.renderer.html.HtmlRenderer

/**
 * Service that parses markdown string, and return html string.
 *
 * @author Ruslan Ibragimov
 */
interface MarkdownService {
    suspend fun render(md: String): String
}

internal class CommonMarkMarkdownService(
    private val parser: Parser = Parser.builder().build(),
    private val renderer: Renderer = HtmlRenderer.builder().build()
) : MarkdownService {
    override suspend fun render(md: String): String = withContext(IO) {
        val document = parser.parse(md)
        renderer.render(document)
    }
}
