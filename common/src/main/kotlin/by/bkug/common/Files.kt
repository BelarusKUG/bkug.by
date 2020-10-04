package by.bkug.common

import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.StandardOpenOption

/**
 * Extension to write data to path.
 *
 * @author Ruslan Ibragimov
 * @since 1.0.0
 */
fun Path.write(data: String) {
    this.parent.also { parent ->
        if (!Files.exists(parent)) {
            Files.createDirectories(parent)
        }
    }

    Files.write(
        this,
        data.toByteArray(charset = Charsets.UTF_8),
        StandardOpenOption.CREATE,
        StandardOpenOption.TRUNCATE_EXISTING
    )
}
