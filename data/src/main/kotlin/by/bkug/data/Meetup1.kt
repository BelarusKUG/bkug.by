package by.bkug.data

import by.bkug.data.model.Article
import by.bkug.data.model.HtmlMarkup
import by.bkug.data.model.localDate
import org.intellij.lang.annotations.Language

@Language("html")
private val body = HtmlMarkup("""
<p>Приглашаем вас на митап Belarus Kotlin User Group по Kotlin, который пройдет в 19.00, 24 марта в <a href="http://eventspace.by">Space</a>.</p>
<p>На митапе выступят Антон Руткевич и Руслан Ибрагимов. Данное событие откроет серию митапов про Kotlin и будет особенно полезен тем, кто только начинает смотреть на данный язык.</p>
<h2>Программа:</h2>
<ul>
<li>19:00 - 20:00 – <strong>Антон Руткевич</strong> сделает введение в язык и расскажет об основных особенностях языка.</li>
<li>20:00 - 21:00 – <strong>Руслан Ибрагимов</strong> расскажет, как использовать Котлин на бэкенеде на примере Spring приложения, а также рассмотрит стандартную библиотеку Котлин.</li>
</ul>
<p>Встреча организованна при поддержке сообщества <a href="http://jprof.by/">Java Professionals By</a>.</p>
<p>Для участия во встрече необходима предварительная <a href="https://docs.google.com/forms/d/1GdS3ALbh1lwOWpEeAA4VY6DExQjo5dIIOrfmvKzhqlM/viewform?c=0&amp;w=1">регистрация</a> (это поможет нам подготовить необходимое количество печенек :) )</p>
<p><strong>Дата проведения</strong>: 24 марта</p>
<p><strong>Время</strong>: 19:00–21:00</p>
<p><strong>Место проведения</strong>: ул. Октябрьская, 16А – EventSpace. Парковка и вход через ул. Октябрьскую, 10б.</p>
<p><em>Еще больше докладов и общения на тему Kotlin-разработки!</em></p>
$eventSpaceMap
""".trimIndent())

val meetup1 = Article(
    title = "Анонс: BKUG #1",
    slug = "anons-bkug-1",
    category = announcements,
    date = localDate("2016-03-17"),
    body = body
)
