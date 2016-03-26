import React from 'react';
import ReactDOM from 'react-dom';
import Page from './page/page.jsx';
import './style.scss'
import 'css!../../node_modules/normalize.css/normalize.css' // TODO: WHY?!

function main() {
    ReactDOM.render(<Page/>, document.getElementById('root'));
}

main();
