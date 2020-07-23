plugins {
    id("by.bkug.plugin.jvm")
}

dependencies {
    implementation(project(":common"))

    implementation("com.zaxxer:HikariCP:$hikariVersion")
    implementation("org.postgresql:postgresql:$postgresqlVersion")
    implementation("org.jooq:jooq:$jooqVersion")
    implementation("org.jooq:jooq-meta:$jooqVersion")
    implementation("org.flywaydb:flyway-core:$flywayVersion")
}
