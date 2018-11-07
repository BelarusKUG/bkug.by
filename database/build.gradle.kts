dependencies {
    compile(project(":common"))

    compile("com.zaxxer:HikariCP:${Versions.hikariVersion}")
    compile("org.postgresql:postgresql:${Versions.postgresqlVersion}")
    compile("org.jooq:jooq:${Versions.jooqVersion}")
    compile("org.jooq:jooq-meta:${Versions.jooqVersion}")
    compile("org.jooq:jooq-codegen:${Versions.jooqVersion}")
    compile("org.flywaydb:flyway-core:${Versions.flywayVersion}")
}
