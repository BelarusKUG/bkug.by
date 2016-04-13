import React from 'react';

export default class Home extends React.Component {
    componentDidMount() {
        function initMap() {
            var map = new ymaps.Map("map", {
                center: [53.890611, 27.567859],
                zoom: 17
            });

            const space = new ymaps.Placemark([53.890025, 27.569422], {
                hintContent: 'EventSpace',
                iconContent: 'EventSpace'
            }, {
                preset: "islands#blueStretchyIcon"
            });

            const address = new ymaps.Placemark([53.890816, 27.567568], {
                hintContent: 'ул. Октябрьская, 10б',
                iconContent: 'ул. Октябрьская, 10б'
            }, {
                preset: "islands#blueStretchyIcon"
            });

            const fence = new ymaps.Placemark([53.890527, 27.567618], {
                hintContent: 'Забор с домофоном',
                iconContent: 'Забор с домофоном'
            }, {
                preset: "islands#blueStretchyIcon"
            });

            var polyline = new ymaps.Polyline([
                [53.890527, 27.567618], [53.890012, 27.569253], [53.890025, 27.569422]
            ], {
                hintContent: "Road to EventSpace"
            }, {
                strokeColor: '#0095d5',
                strokeWidth: 5
            });

            map.geoObjects.add(space);
            map.geoObjects.add(fence);
            map.geoObjects.add(address);
            map.geoObjects.add(polyline);
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
                    <h3 className="content__header content__header--h3">Выступают:</h3>
                    <ul className="speaker">
                        <li className="speaker__item">
                            <picture className="speaker__item-pic">
                                <img className="speaker__item-img" src={require('../speakers/photos/anton_rutkevich.jpg')} alt="MDN"/>
                            </picture>
                            <div className="speaker__item-info">
                                <h4 className="speaker__item-name">Антон Руткевич</h4>
                                <h5 className="speaker__item-position">Software Engineer Juno Inc.</h5>
                                <small className="speaker__item-overview">Сделает введение в язык и расскажет об основных особенностях языка</small>
                            </div>
                        </li>
                        <li className="speaker__item">
                            <picture className="speaker__item-pic">
                                <img className="speaker__item-img" src={require('../speakers/photos/ruslan_ibragimov.jpg')} alt="MDN"/>
                            </picture>
                            <div className="speaker__item-info">
                                <h4 className="speaker__item-name">Руслан Ибрагимов</h4>
                                <h5 className="speaker__item-position">Software Engineer Itransition</h5>
                                <small className="speaker__item-overview">Расскажет, как использовать Котлин на бэкенеде на примере
                                    Spring приложения, а также рассмотрит стандартную библиотеку Котлин.</small>
                            </div>
                        </li>
                    </ul>
                </sectin>

                <sectin className="content__block">
                    <h2 className="content__header content__header--h2">Карта проезда</h2>
                    
                    <div id="map" style={{width: '600px', height: '400px'}}></div>
                </sectin>
            </div>
        );
    }
}
