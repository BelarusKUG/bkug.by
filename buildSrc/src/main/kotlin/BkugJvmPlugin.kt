import org.gradle.api.JavaVersion
import org.gradle.api.Plugin
import org.gradle.api.Project
import org.gradle.api.plugins.JavaPluginExtension
import org.gradle.kotlin.dsl.getByType
import org.gradle.kotlin.dsl.repositories
import org.gradle.kotlin.dsl.dependencies
import org.gradle.kotlin.dsl.withType
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

class BkugJvmPlugin : Plugin<Project> {
    override fun apply(project: Project) = with(project) {
        pluginManager.apply("org.jetbrains.kotlin.jvm")

        repositories {
            jcenter()
        }

        val byteCodeVersion = JavaVersion.VERSION_11

        tasks.withType<KotlinCompile> {
            kotlinOptions {
                jvmTarget = byteCodeVersion.toString()
            }
        }

        extensions.getByType<JavaPluginExtension>().apply {
            sourceCompatibility = byteCodeVersion
            targetCompatibility = byteCodeVersion
        }

        dependencies {
            add("implementation", "org.jetbrains.kotlin:kotlin-stdlib-jdk8:$kotlinVersion")
            add("implementation", "org.jetbrains.kotlinx:kotlinx-coroutines-jdk8:$coroutinesVersion")

            add("implementation", "org.slf4j:slf4j-api:$slf4jVersion")

            add("testImplementation", "org.junit.jupiter:junit-jupiter-api:$junitVersion")
            add("testRuntimeOnly", "org.junit.jupiter:junit-jupiter-engine:$junitVersion")
            add("testImplementation", "io.mockk:mockk:$mockkVersion")
        }

        Unit
    }
}
