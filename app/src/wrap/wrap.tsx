import React from 'react';
import Menu from '../components/menu/menu';
import Footer from '../components/footer/footer';

export default class Wrap extends React.Component {
    render() {
        return (
            <div className="wrapper-in">
                <Menu/>
                <div className="main">
                    {this.props.children}
                    <Footer/>
                </div>
            </div>
        );
    }
}
