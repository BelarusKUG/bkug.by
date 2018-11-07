dependencies {
    compile("io.undertow:undertow-core:${Versions.undertowVersion}")
    compile("com.atlassian.commonmark:commonmark:${Versions.commonmarkVersion}")

    compile("com.fasterxml.jackson.core:jackson-core:${Versions.jacksonVersion}")
    compile("com.fasterxml.jackson.dataformat:jackson-dataformat-yaml:${Versions.jacksonVersion}")
    compile("com.fasterxml.jackson.datatype:jackson-datatype-jsr310:${Versions.jacksonVersion}")
    compile("com.fasterxml.jackson.module:jackson-module-kotlin:${Versions.jacksonVersion}")
}
