## Подготовка:

- [ ] Взять этот чеклист, адоптировать под предстоящий митап, повесить как issue и назначить ответственных по каждому пункту
- [ ] Помощью спикерам, прослушивание
- [ ] Печать стикеров, маек, т.д.
- [ ] Форма регистрации
- [ ] Написание анонса
- [ ] Анонс запаблишить на [bkug.by](https://bkug.by/), [events.dev.by](https://events.dev.by/) и [@BelarusKUG](https://twitter.com/BelarusKUG), [Facebook](https://www.facebook.com/BelarusKUG/)
- [ ] Репост и рассылка от партнеров: Space, JavaDay
- [ ] Сделать рассылку анонса (Mailchimp)
- [ ] Сделать таблички с направлением к митапу

Стикеры обычно заказываем у [sorokdva.by](http://sorokdva.by/), email: ap@sorokdva.by

Анонс можно рассылать за неделю, и в день митапа. Должен содержать программу и карту проезда.

## Пред Митап

- [ ] Развесить таблички
- [ ] Фотосъемка
- [ ] Видеозапись
- [ ] Вступительная речь
- [ ] Кофе-пауза

Фотосъемка - можно назначить ответственного, кто сделает десяток хороших кадров, либо заказать фотографа если есть средства на это.

Видеозапись - напомнить площадке что требуется видеозапись, обсудить шаблон (то какая будет компоновка видео).

Вступительная речь - если требуется, заранее составить, дабы ничего не забыть.

Кофе-пауза - договориться о кофе-паузе.

## Митап

- [ ] Разложить стикеры
- [ ] Выставить роллап
- [ ] Объявление спикеров
- [ ] Собрать у спикеров материалы (код, презентации)

## Пост Митап

- [ ] Сделать опрос
- [ ] Написать отчет на сайт, зарепостить везде
- [ ] Ссылку на отчет и опрос отправить в рассылку на зарегистрированных участников


<!--
    # Описалово что нужно для проведения митапа
    (warning! mind dump)
    
    1. Социальные площадки
     facebook
     twitter
     dev.by
     mailchimp
    
    # Подготовка анонса:
      Написать анонс
        markdown (github PR)
        опубликовать на bkug.by (merge of PR -> build on travis)
      Форма регистрации
        сейчас google
        дальше kursus (данные о митапе из github)
          закрытие сразу после митапа
          отправлять письма с подтверждением
          добавить в mailchimp
      Публикация на dev.by
        автоматизировать (issue on github + github bot or standalone service \w dashboard?)
      Публикация ссылки в твиттер
        автоматизировать (issue on github + github bot or standalone service \w dashboard?)
      Создания ивента в facebook 
        автоматизировать (issue on github + github bot or standalone service \w dashboard?)
        или просто поручить тому кто активно пользуется facebook?
      Обновление календарей сообщества
        автоматизировать, см bjug.by, yml-ical
      Рассылка с анонсом - mailchimp api, custom template?
      Рассылка в день мероприятия? (а так ли она нужна? может спросить пользователей, посмотреть отчеты на mailchimp?)
    
    # Подготовка отчета:
      Собрать материалы
      Собрать фотографии
      
      Форма отзывов
        автоматически закрывать после 10 дней и отправлять результаты на team@bkug.by
      Написать отчет, добавить видео, фотографии, слайды, другие материалы
      Рассылка с отчетом на зарегистрированных пользователей
    
    Для всех задач автоматизации лучше всего подойдет dashboard с результатами и возможность перезапустить задачу.
    (причем дашборд может просто отображать что происходит на гитхабе, и сам представлять из себя какой-нибудь yml с 
    описанием тех issues/pr за которыми нужно следить. или дашборд будет мордой для пачки API, и сами задачи будут 
    работать не из гитхаба).
    
    Отдельная задача (например публикация на devby) может состоять из нескольких маленький шагов. и иметь более 
    одного этапа одобрения через мажорити.
    
    Например:
    Шаг 1. Создание реквеста на создание поста ("голосовалка")
    Шаг 2. Дергаем апи которое делает логин + создание поста, апи в свою очередь делает скрин - превью ивента - 
    отдает на dashboard
    Шаг 3. Овнеры проверяют что пост выглядит как надо (на скрине) и апрувают либо запрашивают изменения, повторяется
     цикл.
    
    Каждую голосовалку неплохо было бы отправлять в чат сообщества, чтобы все заинтересованные лица были всегда в 
    курсе апдейтов. Либо отправлять в личку, если на деле таких уведомлений будет много.
    
    
    Классно было бы иметь возможность консенсуса по каждой части:
      создание поста: нельзя замержить пока мажорити "овнеров" не заапрувить
      твит: твит не затвитится пока можорити.. ну вы поняли
      новый "овнер" - не будет добавлен, пока все не будут согласны
      etc
    
    В общем получается что задач по автоматизации много, и не все они тривиальны :)
-->
