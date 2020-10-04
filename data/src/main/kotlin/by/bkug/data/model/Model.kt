package by.bkug.data.model

import java.time.LocalDate
import java.time.LocalDateTime
import java.time.LocalTime
import java.time.ZoneId
import java.time.ZonedDateTime

data class Article(
    val title: String,
    val slug: String,
    val category: Category,
    val date: LocalDate,
    val body: Markup
)

data class Page(
    val title: String,
    val slug: String,
    val body: Markup,
    val parent: Page? = null
)

data class Category(
    val slug: String,
    val title: String,
    val parent: Category? = null
)

data class Talk(
    val title: String,
    val description: Markup,
    val type: TalkType,
    val speakers: List<Speaker>,
    val links: List<Link>
)

enum class TalkType {
    INTRODUCTION,
    PRACTICAL,
    HARDCORE,
}

data class Link(
    val href: String,
    val title: String
)

data class Speaker(
    val slug: String,
    val name: String,
    val avatar: String,
    val description: Markup
)

sealed class Markup
class HtmlMarkup(val data: String) : Markup()
class MarkdownMarkup(val data: String) : Markup()

data class ShortLink(
    val from: String,
    val to: String
)

data class Calendar(
    val name: String,
    val url: String,
    val events: List<CalendarEvent>
)

data class CalendarEvent(
    val name: String,
    val start: ZonedDateTime,
    val end: ZonedDateTime,
    val description: String,
    val location: String
)

data class SocialLink(
    val link: String,
    val icon: String
)

fun localDate(date: String): LocalDate {
    return LocalDate.parse(date)
}

fun minskDateTime(date: String, time: String): ZonedDateTime {
    val localDate = LocalDate.parse(date)
    val localTime = LocalTime.parse(time)
    return ZonedDateTime.of(LocalDateTime.of(localDate, localTime), ZoneId.of("Europe/Minsk"))
}
