plugins {
    id("by.bkug.plugin.jvm")
}

dependencies {
    implementation(project(":common"))

    implementation("com.rometools:rome:$romeVersion")
}
