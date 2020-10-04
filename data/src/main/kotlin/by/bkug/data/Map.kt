package by.bkug.data

import by.bkug.data.model.HtmlMarkup
import org.intellij.lang.annotations.Language

@Language("html")
val eventSpaceMap = HtmlMarkup("""
<iframe width="425" height="350" 
    frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
    src="https://www.openstreetmap.org/export/embed.html?bbox=27.56789714097977%2C53.8893663940954%2C27.570608854293827%2C53.89084120779472&amp;layer=mapnik&amp;marker=53.890103807450096%2C27.569252997636795" 
    style="border: 1px solid black"></iframe>
<br/>
<small>
    <a href="https://www.openstreetmap.org/?mlat=53.89010&amp;mlon=27.56925#map=19/53.89010/27.56925">
        View Larger Map
    </a>
</small>
""".trimIndent())
