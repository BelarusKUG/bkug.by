import React from 'react';

export default class Contacts extends React.Component {
    render() {
        return (
            <div className="content container">
                <h1>Contacts</h1>

                <h2>Наши ссылочки</h2>

                <ul>
                    <li><a>Youtube channel</a></li>
                    <li><a>Gitter Chat</a></li>
                </ul>

                <h2>Драйверы сообщества</h2>

                <ul>
                    <li>
                        <p>Руслан Ибрагимов</p>
                        <p><a href="mailto:ruslan@ibragimov.by">ruslan@ibragimov.by</a></p>
                    </li>
                    <li>
                        <p>Руслан Ибрагимов</p>
                        <p><a href="mailto:ruslan@ibragimov.by">ruslan@ibragimov.by</a></p>
                    </li>
                    <li>
                        <p>Руслан Ибрагимов</p>
                        <p><a href="mailto:ruslan@ibragimov.by">ruslan@ibragimov.by</a></p>
                    </li>
                    <li>
                        <p>Руслан Ибрагимов</p>
                        <p><a href="mailto:ruslan@ibragimov.by">ruslan@ibragimov.by</a></p>
                    </li>
                </ul>
            </div>
        );
    }
}
