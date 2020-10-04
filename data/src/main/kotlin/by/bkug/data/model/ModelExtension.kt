package by.bkug.data.model

val Article.url: String
    get() = "/${date.year}/${date.month}/${date.dayOfMonth}/$slug/"
