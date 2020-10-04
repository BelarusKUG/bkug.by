package by.bkug.calendar

import biweekly.Biweekly
import biweekly.ICalVersion
import biweekly.ICalendar
import biweekly.component.VEvent
import biweekly.io.TimezoneAssignment
import biweekly.property.Location
import biweekly.property.Organizer
import biweekly.property.Uid
import biweekly.property.Url
import by.bkug.data.model.Calendar
import org.slf4j.LoggerFactory
import java.util.Date
import java.util.TimeZone

interface CalendarGenerator {
    fun generate(calendar: Calendar): String
}

class IcsCalendarGenerator : CalendarGenerator {
    override fun generate(calendar: Calendar): String {
        val ical = ICalendar()

        //build a TimezoneAssignment object
        val javaTz = TimeZone.getTimeZone("Europe/Minsk")
        val minskTz = TimezoneAssignment.download(javaTz, false)

        ical.addName(calendar.name)
        ical.url = Url(calendar.url)
        ical.timezoneInfo.defaultTimezone = minskTz

        calendar.events.forEach { dto ->
            val event = VEvent()
            event.uid = Uid(dto.id)

            val summary = event.setSummary(dto.name)
            summary.language = "en-us"

            event.setDateStart(Date.from(dto.start.toInstant()))
            event.setDateEnd(Date.from(dto.end.toInstant()))

            val location = Location(dto.location)
            event.location = location

            val organizer = Organizer("BKUG", "team@bkug.by")
            event.organizer = organizer

            ical.addEvent(event)
        }


        val warnings = ical.validate(ICalVersion.V2_0)
        LOGGER.warn("Validate ICS: {}", warnings.toString())

        return Biweekly.write(ical).go()
    }

    companion object {
        private val LOGGER = LoggerFactory.getLogger(IcsCalendarGenerator::class.java)
    }
}
