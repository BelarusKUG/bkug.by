package by.bkug.data

import by.bkug.data.model.MarkdownMarkup
import by.bkug.data.model.Speaker

val RuslanIbragimov = Speaker(
    slug = "ruslan_ibragimov",
    name = "Руслан Ибрагимов",
    avatar = "/speakers/ruslan_ibragimov.jpg",
    description = MarkdownMarkup("""
        Senior Developer (data technologies) @ Ask Apps
    """.trimIndent())
)

val AntonRutkevich = Speaker(
    slug = "anton_rutkevich",
    name = "Антон Руткевич",
    avatar = "/speakers/anton_rutkevich.jpg",
    description = MarkdownMarkup("""
        Android Develop @ Juno
    """.trimIndent())
)
