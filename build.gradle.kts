import org.jetbrains.kotlin.gradle.dsl.Coroutines
import org.jetbrains.kotlin.gradle.dsl.KotlinJvmCompile
import org.jetbrains.kotlin.gradle.plugin.KotlinPlatformJvmPlugin

plugins {
    application
    kotlin("jvm") version "1.3.0"
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

        testCompile("org.junit.jupiter:junit-jupiter-api:${Versions.junitVersion}")
        testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine:${Versions.junitVersion}")
        testCompile("io.mockk:mockk:${Versions.mockkVersion}")
    }
}

project(":authentication") {
    dependencies {
        compile(project(":common"))

        compile("io.undertow:undertow-core:${Versions.undertowVersion}")
    }
}

project(":calendar") {
    dependencies {
        compile(project(":common"))

        compile("by.heap.calendar.yml:yml-ical:${Versions.ymlICalVersion}") {
            exclude("org.slf4j", "slf4j-simple")
        }
    }
}

project(":common") {
    dependencies {
        compile("io.undertow:undertow-core:${Versions.undertowVersion}")
        compile("com.atlassian.commonmark:commonmark:${Versions.commonmarkVersion}")

        compile("com.fasterxml.jackson.core:jackson-core:${Versions.jacksonVersion}")
        compile("com.fasterxml.jackson.dataformat:jackson-dataformat-yaml:${Versions.jacksonVersion}")
        compile("com.fasterxml.jackson.datatype:jackson-datatype-jsr310:${Versions.jacksonVersion}")
        compile("com.fasterxml.jackson.module:jackson-module-kotlin:${Versions.jacksonVersion}")
    }
}

project(":database") {
    dependencies {
        compile(project(":common"))

        compile("com.zaxxer:HikariCP:${Versions.hikariVersion}")
        compile("org.postgresql:postgresql:${Versions.postgresqlVersion}")
        compile("org.jooq:jooq:${Versions.jooqVersion}")
        compile("org.jooq:jooq-meta:${Versions.jooqVersion}")
        compile("org.jooq:jooq-codegen:${Versions.jooqVersion}")
        compile("org.flywaydb:flyway-core:${Versions.flywayVersion}")
    }
}

project(":forms") {
    dependencies {
        compile(project(":common"))

        compile("io.undertow:undertow-core:${Versions.undertowVersion}")
    }
}

project(":site") {
    dependencies {
        compile(project(":common"))

        compile("com.rometools:rome:${Versions.romeVersion}")
    }
}

project(":shortener") {
    dependencies {
        compile(project(":common"))

    }
}

project(":storage") {
    dependencies {
        compile(project(":common"))

        compile("io.undertow:undertow-core:${Versions.undertowVersion}")
    }
}

project(":webapp") {
    apply<ApplicationPlugin>()

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
}

