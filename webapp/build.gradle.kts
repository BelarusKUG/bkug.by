plugins {
    id("by.bkug.plugin.jvm")
    application
}

application {
    applicationName = "bkug"
    mainClassName = "by.bkug.webapp.AppKt"
}

dependencies {
    implementation(project(":common"))
    implementation(project(":authentication"))
    implementation(project(":calendar"))
    implementation(project(":forms"))
    implementation(project(":site"))
    implementation(project(":shortener"))
    implementation(project(":storage"))

    implementation(undertow)

    implementation("ch.qos.logback:logback-classic:$logbackVersion")
    implementation("org.slf4j:jul-to-slf4j:$slf4jVersion")
}
