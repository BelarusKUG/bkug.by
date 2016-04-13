import React from 'react';

export default class Home extends React.Component {
    componentDidMount() {
        RenderMapEvent();
    }

    render() {
        return (
            <div className="content container">
                <h1 className="content__header content__header--h1">Home Page</h1>


                <h2 className="content__header content__header--h2">BKUG Meetup #2</h2>

                <p className="content__text">
                    12 мая пройдет второй митап Belarus Kotlin User Group который будет посвящен Dependency Injection
                    и тестированию в Kotlin.

                </p>

                <h3 className="content__header content__header--h3">Программа:</h3>

                <ul className="schedule">
                    <li className="schedule__item">
                        <span className="schedule__item-time">19:00 - 20:00</span>
                        <i className="schedule__item-point">&nbsp;</i>
                        <div className="schedule__item-info">
                            <h4  className="schedule__item-topic">Введение в язык и основные особенности языка</h4>
                            <small className="schedule__item-speaker">Антон Руткевич</small>
                        </div>
                    </li>
                    <li className="schedule__item">
                        <span className="schedule__item-time">20:00 - 20:15</span>
                        <i className="schedule__item-point schedule__item-point--pause">&nbsp;</i>
                        <div className="schedule__item-info">
                            <h4 className="schedule__item-topic schedule__item-topic--pause">Котлин на бэкенеде на примере Spring</h4>
                        </div>
                    </li>
                    <li className="schedule__item">
                        <span className="schedule__item-time">20:15 - 21:00</span>
                        <i className="schedule__item-point">&nbsp;</i>
                        <div className="schedule__item-info">
                            <h4  className="schedule__item-topic">Котлин на бэкенеде на примере Spring</h4>
                            <small className="schedule__item-speaker">Руслан Ибрагимов</small>
                        </div>
                    </li>                    
                </ul>

                <p className="content__text">Для участия во встрече необходима предварительная регистрация
                    (это поможет нам подготовить необходимое количество печенек :) )</p>

                <p className="content__text">Место проведения: ул. Октябрьская, 16А – EventSpace. Парковка и вход через ул. Октябрьскую, 10б.</p>

                <h2 className="content__header content__header--h2">Карта проезда</h2>

                <div id="YMapsEvent"></div>
            </div>
        );
    }
}
