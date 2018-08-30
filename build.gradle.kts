import org.jetbrains.kotlin.gradle.dsl.Coroutines
import org.jetbrains.kotlin.gradle.dsl.KotlinJvmCompile
import org.jetbrains.kotlin.gradle.plugin.KotlinPlatformJvmPlugin

plugins {
  application
  kotlin("jvm") version "1.2.61"
}

val undertowVersion: String by project
val slf4jVersion: String by project
val coroutinesVersion: String by project
val jacksonVersion: String by project
val ymlICalVersion: String by project
val httpClientVersion: String by project
val romeVersion: String by project
val commonmarkVersion: String by project

val sentryVersion: String by project
val logbackVersion: String by project

val hikariVersion: String by project
val postgresqlVersion: String by project
val jooqVersion: String by project
val flywayVersion: String by project

val junitVersion: String by project
val mockkVersion: String by project

subprojects {
  apply<KotlinPlatformJvmPlugin>()

  kotlin.experimental.coroutines = Coroutines.ENABLE

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
    compile("org.slf4j:slf4j-api:$slf4jVersion")

    compile(kotlin("stdlib-jdk8"))
    compile("org.jetbrains.kotlinx:kotlinx-coroutines-jdk8:$coroutinesVersion")

    testCompile("org.junit.jupiter:junit-jupiter-api:$junitVersion")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine:$junitVersion")
    testCompile("io.mockk:mockk:$mockkVersion")
  }
}

project(":authentication") {
  dependencies {
    compile(project(":common"))

    compile("io.undertow:undertow-core:$undertowVersion")
  }
}

project(":calendar") {
  dependencies {
    compile(project(":common"))

    compile("by.heap.calendar.yml:yml-ical:$ymlICalVersion") {
      exclude("org.slf4j", "slf4j-simple")
    }
  }
}

project(":common") {
  dependencies {
    compile("io.undertow:undertow-core:$undertowVersion")
    compile("com.atlassian.commonmark:commonmark:$commonmarkVersion")

    compile("com.fasterxml.jackson.core:jackson-core:$jacksonVersion")
    compile("com.fasterxml.jackson.dataformat:jackson-dataformat-yaml:$jacksonVersion")
    compile("com.fasterxml.jackson.datatype:jackson-datatype-jsr310:$jacksonVersion")
    compile("com.fasterxml.jackson.module:jackson-module-kotlin:$jacksonVersion")
  }
}

project(":database") {
  dependencies {
    compile("com.zaxxer:HikariCP:$hikariVersion")
    compile("org.postgresql:postgresql:$postgresqlVersion")
    compile("org.jooq:jooq:$jooqVersion")
    compile("org.jooq:jooq-meta:$jooqVersion")
    compile("org.jooq:jooq-codegen:$jooqVersion")
    compile("org.flywaydb:flyway-core:$flywayVersion")
  }
}

project(":forms") {
  dependencies {
    compile(project(":common"))

    compile("io.undertow:undertow-core:$undertowVersion")
  }
}

project(":site") {
  dependencies {
    compile(project(":common"))

    compile("com.rometools:rome:$romeVersion")
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

    compile("io.undertow:undertow-core:$undertowVersion")
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

    compile("ch.qos.logback:logback-classic:$logbackVersion")
    compile("org.slf4j:jul-to-slf4j:$slf4jVersion")
    compile("io.sentry:sentry-logback:$sentryVersion")
  }
}

