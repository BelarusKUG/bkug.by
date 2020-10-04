package by.bkug.data

import org.intellij.lang.annotations.Language

@Language("yaml")
val meetup2 = """
time:
  date: Mar 24, 2016
  start: '19:00'
  end: '21:00'
title: 'BKUG Meetup #2'
description: >
  12 мая пройдет второй митап Belarus Kotlin User Group который будет посвящен Dependency Injection и тестированию в Kotlin.
schedule:
  - name: Антон Руткевич сделает введение в язык и расскажет об основных особенностях языка.
    type: speech
    start: '19:00'
    end: '20:00'
  - name: Кофе пауза
    type: break
    start: '19:00'
    end: '20:00'
  - name: Руслан Ибрагимов расскажет, как использовать Котлин на бэкенеде на примере Spring приложения, а также рассмотрит стандартную библиотеку Котлин.
    type: speech
    start: '21:00'
    end: '20:00'
"""
