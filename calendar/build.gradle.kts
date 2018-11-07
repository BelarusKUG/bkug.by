dependencies {
    compile(project(":common"))

    compile("by.heap.calendar.yml:yml-ical:${Versions.ymlICalVersion}") {
        exclude("org.slf4j", "slf4j-simple")
    }
}
