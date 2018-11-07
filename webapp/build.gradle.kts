plugins {
    application
}

application {
    applicationName = "bkug"
    mainClassName = "by.bkug.webapp.App"
}

dependencies {
    compile(project(":common"))
    compile(project(":authentication"))
    compile(project(":calendar"))
    compile(project(":forms"))
    compile(project(":site"))
    compile(project(":shortener"))
    compile(project(":storage"))

    compile("ch.qos.logback:logback-classic:${Versions.logbackVersion}")
    compile("org.slf4j:jul-to-slf4j:${Versions.slf4jVersion}")
    compile("io.sentry:sentry-logback:${Versions.sentryVersion}")
}
