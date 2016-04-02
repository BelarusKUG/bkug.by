import React from 'react';
import Menu from '../components/menu/menu.jsx';

export default class Wrap extends React.Component {
    render() {
        return (
            <div>
                <Menu/>
                {this.props.children}
            </div>
        );
    }
}
