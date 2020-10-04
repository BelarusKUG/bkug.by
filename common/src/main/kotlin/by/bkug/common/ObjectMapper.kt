package by.bkug.common

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import com.fasterxml.jackson.module.kotlin.KotlinModule

interface YamlMapperProvider {
    fun get(): ObjectMapper
}

class DefaultYamlMapperProvider : YamlMapperProvider {
    private val mapper by lazy {
        ObjectMapper(YAMLFactory())
            .registerModule(KotlinModule())
            .registerModule(JavaTimeModule())
    }

    override fun get(): ObjectMapper = mapper
}
