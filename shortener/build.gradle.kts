plugins {
    id("by.bkug.plugin.jvm")
}

dependencies {
    implementation(project(":data"))
    implementation(project(":common"))

    implementation(undertow)
}
