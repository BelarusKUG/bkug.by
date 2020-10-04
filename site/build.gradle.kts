plugins {
    id("by.bkug.plugin.jvm")
}

dependencies {
    implementation(project(":common"))

    implementation(undertow)
    implementation(rome)
}
