package by.bkug.data

import by.bkug.data.model.Calendar
import by.bkug.data.model.CalendarEvent
import java.time.ZonedDateTime

val calendar = Calendar(
    name = "Belarus Kotlin User Group Events",
    url = "https://bkug.by/",
    events = listOf(
        CalendarEvent(
            name = "Belarus Kotlin User Group Meetup #7",
            start = ZonedDateTime.parse("2017-12-19T19:00+03:00"),
            end = ZonedDateTime.parse("2017-12-19T21:00+03:00"),
            description = "https://bkug.by/2017/12/17/anons-bkug-7/",
            location = "Event Space, Вход через ул. Октябрьскую, 10б, vulica Kastryčnickaja 16А, Minsk, Belarus"
        ),
        CalendarEvent(
            name = "Belarus Kotlin User Group Meetup #8",
            start = ZonedDateTime.parse("2018-02-21T19:00+03:00"),
            end = ZonedDateTime.parse("2018-02-21T21:00+03:00"),
            description = "https://bkug.by/2018/02/08/anons-bkug-8/",
            location = "Event Space, Вход через ул. Октябрьскую, 10б, vulica Kastryčnickaja 16А, Minsk, Belarus"
        ),
    )
)

val internalCalendar = Calendar(
    name = "Internal BKUG Events",
    url = "https://bkug.by/",
    events = listOf()
)
