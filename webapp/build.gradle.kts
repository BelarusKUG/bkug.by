plugins {
    id("by.bkug.plugin.jvm")
    application
}

application {
    applicationName = "bkug"
    mainClass.set("by.bkug.webapp.AppKt")
}

dependencies {
    implementation(project(":common"))
    implementation(project(":data"))
    implementation(project(":authentication"))
    implementation(project(":calendar"))
    implementation(project(":forms"))
    implementation(project(":site"))
    implementation(project(":shortener"))
    implementation(project(":storage"))

    implementation(undertow)
}
