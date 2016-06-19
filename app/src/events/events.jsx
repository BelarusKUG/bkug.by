import React from 'react';
import {Link} from 'react-router'
import DataService from '../DataService.ts';

export default class Events extends React.Component {
    render() {
        return (
            <div className="content container">
                <h1>Events</h1>
                <ul className="events__list">
                    <li className="events__list-item">
                        <Link to={`/events/1`} className="events__list-link">
                            <div className="events__teaser">
                                <img src="http://placehold.it/200x150" alt=""/>
                            </div>
                            <div className="events__desc">
                                <h3 className="events__title">BKUG #1</h3>
                                <p className="events__meta">
                                    <span>June 25, 2016 </span>,
                                    <span>place</span></p>
                                <p className="events__desc-p">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    A accusamus accusantium, adipisci alias atque, commodi eum fugit iure libero nam
                                    natus nemo,
                                    placeat quis quos rem repellat saepe vel voluptatem.
                                </p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}
