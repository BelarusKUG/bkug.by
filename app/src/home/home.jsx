import React from 'react';

export default class Home extends React.Component {
    componentDidMount() {
        RenderMapEvent();
    }

    render() {
        return (
            <div className="content container">
                <h1>Home Page</h1>


                <h2>BKUG Meetup #2</h2>

                <p>
                    12 мая пройдет второй митап Belarus Kotlin User Group который будет посвящен Dependency Injection
                    и тестированию в Kotlin.

                </p>

                <h3>Программа:</h3>

                <ul>
                    <li>19:00 - 20:00 – Антон Руткевич сделает введение в язык и расскажет об основных особенностях языка.</li>
                    <li>20:00 - 21:00 – Руслан Ибрагимов расскажет, как использовать Котлин на бэкенеде на примере
                        Spring приложения, а также рассмотрит стандартную библиотеку Котлин.
                    </li>
                </ul>

                <p>Для участия во встрече необходима предварительная регистрация
                    (это поможет нам подготовить необходимое количество печенек :) )</p>

                <p>Место проведения: ул. Октябрьская, 16А – EventSpace. Парковка и вход через ул. Октябрьскую, 10б.</p>

                <h2>Карта проезда</h2>

                <div id="YMapsEvent"></div>
            </div>
        );
    }
}
