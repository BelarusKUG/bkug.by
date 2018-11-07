import org.jetbrains.kotlin.gradle.dsl.Coroutines
import org.jetbrains.kotlin.gradle.dsl.KotlinJvmCompile
import org.jetbrains.kotlin.gradle.plugin.KotlinPlatformJvmPlugin

plugins {
    kotlin("jvm").version("1.3.0")
}

repositories {
    jcenter()
}

subprojects {
    apply<KotlinPlatformJvmPlugin>()

    tasks {
        withType<KotlinJvmCompile> {
            kotlinOptions.jvmTarget = "1.8"
        }
    }

    repositories {
        jcenter()
        maven { setUrl("https://dl.bintray.com/heapy/heap/") }
    }

    dependencies {
        compile("org.slf4j:slf4j-api:${Versions.slf4jVersion}")

        compile(kotlin("stdlib-jdk8"))
        compile("org.jetbrains.kotlinx:kotlinx-coroutines-jdk8:${Versions.coroutinesVersion}")

        testApi("org.junit.jupiter:junit-jupiter-api:${Versions.junitVersion}")
        testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine:${Versions.junitVersion}")
        testCompile("io.mockk:mockk:${Versions.mockkVersion}")
    }
}
