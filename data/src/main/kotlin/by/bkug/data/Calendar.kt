package by.bkug.data

import by.bkug.data.model.Calendar
import by.bkug.data.model.CalendarEvent
import by.bkug.data.model.minskDateTime
import java.time.ZonedDateTime

val calendar = Calendar(
    name = "Belarus Kotlin User Group Events",
    url = "https://bkug.by/",
    events = listOf(
        CalendarEvent(
            id = "02b3710f-f3ce-43e9-8134-60d6f3a64726",
            name = "Belarus Kotlin User Group Meetup #7",
            start = minskDateTime("2017-12-19", "19:00"),
            end = minskDateTime("2017-12-19", "21:00"),
            description = "https://bkug.by/2017/12/17/anons-bkug-7/",
            location = "Event Space, Вход через ул. Октябрьскую, 10б, vulica Kastryčnickaja 16А, Minsk, Belarus"
        ),
        CalendarEvent(
            id = "a39b0fa6-0add-4745-98c2-157878c24305",
            name = "Belarus Kotlin User Group Meetup #8",
            start = minskDateTime("2017-02-21", "19:00"),
            end = minskDateTime("2017-02-21", "21:00"),
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
