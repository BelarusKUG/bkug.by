import React from 'react';

export default class Events extends React.Component {
    render() {
        return (
            <div className="content container">
                <h1>Events</h1>

                <div>
                    <h2>BKUG #1</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        A accusamus accusantium, adipisci alias atque, commodi eum fugit iure libero nam natus nemo,
                        placeat quis quos rem repellat saepe vel voluptatem.
                    </p>

                    <h3>Название доклада</h3>

                    <p><a>Антон Руткевич (будет ссылка на страницу докладчиков)</a></p>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4gv1pZMg4r8" frameborder="0" allowfullscreen></iframe>
                    <iframe src="//slides.com/antonrutkevich/kotlin-intro-march-2016/embed" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

                    <p><a>Руслан Ибрагимов (будет ссылка на страницу докладчиков)</a></p>

                    <p>Полезная ссылка с доклада <a>тут</a></p>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/zpIJTUXtj0A" frameborder="0" allowfullscreen></iframe>

                </div>
            </div>
        );
    }
}
