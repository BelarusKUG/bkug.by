package by.bkug.calendar

import biweekly.Biweekly
import biweekly.ICalVersion
import biweekly.ICalendar
import biweekly.component.VEvent
import biweekly.io.TimezoneAssignment
import biweekly.property.Geo
import biweekly.property.Location
import biweekly.property.Organizer
import biweekly.util.Duration
import java.nio.file.Path
import java.nio.file.Paths
import java.util.Date
import java.util.TimeZone

/**
 * Generates calendar with community events.
 *
 * @author Ruslan Ibragimov
 * @since 1.0.0
 */
interface CalendarGenerator {
    fun generate(from: Path, to: Path)
}

class IcsCalendarGenerator : CalendarGenerator {
    override fun generate(from: Path, to: Path) {
        val ical = ICalendar()
        val event = VEvent()
        val summary = event.setSummary("Team Meeting")
        summary.language = "en-us"

        //build a TimezoneAssignment object
        val javaTz = TimeZone.getTimeZone("America/New_York")
        val newYork = TimezoneAssignment.download(javaTz, false)

        ical.timezoneInfo.defaultTimezone = newYork

        val start = Date()
        event.setDateStart(start)

        val duration = Duration.Builder().hours(1).build()
        event.setDuration(duration)


        val geo = Geo(40.714623, -74.006605)
        event.geo = geo

        val location = Location("Room 32B")
        event.location = location

        val organizer = Organizer("John Doe", "johndoe@example.com")

        event.organizer = organizer

        ical.addEvent(event)

        val warnings = ical.validate(ICalVersion.V2_0)
        println(warnings.toString())

        val str = Biweekly.write(ical).go() //ics
        println(str)
    }
}

fun main() {
    IcsCalendarGenerator().generate(Paths.get(""), Paths.get(""))
}
