import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Redirect, Route, IndexRoute, hashHistory } from 'react-router'
import Speakers from './speakers/speakers';
import Contacts from './contacts/contacts';
import Events from './events/events';
import Event from './events/event';
import Wrap from './wrap/wrap';
import Home from './home/home';
import 'normalize.css/normalize.css'
import './style.scss'

function main() {
    ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={Wrap}>
                <IndexRoute component={Home} />
                <Route path="events" component={Events} />
                <Route path="events/:eventId" component={Event} />
                <Route path="speakers" component={Speakers} />
                <Route path="contacts" component={Contacts} />
            </Route>
            <Redirect from="/*" to="/events"/>
        </Router>
    ), document.getElementById('root'));
}

main();
