plugins {
    id("by.bkug.plugin.jvm")
}

repositories {
    maven {
        url = uri("https://kotlin.bintray.com/kotlinx")
    }
}

dependencies {
    implementation(kotlinxHtml)
    implementation(project(":common"))
}
