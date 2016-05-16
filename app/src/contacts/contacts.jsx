import React from 'react';
import DataService from '../DataService';

export default class Contacts extends React.Component {
    render() {
        const links = DataService.contacts.links;
        const drivers = DataService.contacts.drivers;

        return (
            <div className="content container">
                <h1>Contacts</h1>

                <h2>Наши ссылочки</h2>
                <ul>
                    {links.map((link, idx) => {
                        return <li key={idx}><a href={link.url}>{link.text}</a></li>
                    })}
                </ul>

                <h2>Драйверы сообщества</h2>

                <ul>
                    {drivers.map((driver, idx) => {
                        return <li key={idx}><a href={driver.url}>{driver.text}</a></li>
                    })}
                </ul>
            </div>
        );
    }
}
