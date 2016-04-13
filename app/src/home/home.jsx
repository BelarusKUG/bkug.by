import React from 'react';

export default class Home extends React.Component {
    componentDidMount() {
        function initMap() {
            var map = new ymaps.Map("map", {
                center: [53.8904, 27.5718],
                zoom: 17
            });

            space = new ymaps.Placemark([53.8904, 27.5718], {
                hintContent: 'EventSpace', balloonContent: 'Минск, ул. Октябрьская, 16А  EventSpace.by'
            });

            map.geoObjects.add(space);
        }

        ymaps.ready(initMap);
    }

    render() {
        return (
            <div className="content container">
                <sectin className="content__block">
                    <h2 className="content__header content__header--h2">BKUG Meetup #2</h2>
    
                    <p className="content__text">
                        12 мая пройдет второй митап Belarus Kotlin User Group который будет посвящен Dependency Injection
                        и тестированию в Kotlin.
    
                    </p>
                </sectin>

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

                <div id="map" style={{width: '600px', height: '400px'}}></div>
                <sectin className="content__block">
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
                                <h4 className="schedule__item-topic schedule__item-topic--pause">Кофе пауза</h4>
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
                </sectin>

                <sectin className="content__block">
                    <h2 className="content__header content__header--h2">Карта проезда</h2>
    
                    <div id="YMapsEvent"></div>
                </sectin>
            </div>
        );
    }
}
