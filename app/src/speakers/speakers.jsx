import React from 'react';

export default class Speakers extends React.Component {
    render() {
        return (
            <div className="content container">
                <h1>Speakers</h1>
                
                <ul>
                    <li>
                        <img src={require('./photos/ruslan_ibragimov.jpg')}/>  Ruslan is a leader of Belarus Kotlin User Group
                        and Java Professionals By driver, team leader at Itransition. Every day he reads news and articles
                        from more than 500 sources using RSS. He likes to explore new technologies and aspires to get a deep
                        understanding of the problem. Hackathons, meetups and conferences? Yes this is about him.
                        Linux and other Free Software - runs the world.
                    </li>
                    <li>
                        <img src={require('./photos/anton_rutkevich.jpg')}/> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Blanditiis enim expedita explicabo hic illum, iusto labore maiores necessitatibus nihil officiis praesentium
                        quaerat quis ratione recusandae repudiandae sapiente sed temporibus voluptatibus.
                    </li>
                    <li>
                        <img src={require('./photos/ruslan_ibragimov.jpg')}/>  Ruslan is a leader of Belarus Kotlin User Group
                        and Java Professionals By driver, team leader at Itransition. Every day he reads news and articles
                        from more than 500 sources using RSS. He likes to explore new technologies and aspires to get a deep
                        understanding of the problem. Hackathons, meetups and conferences? Yes this is about him.
                        Linux and other Free Software - runs the world.
                    </li>
                    <li>
                        <img src={require('./photos/anton_rutkevich.jpg')}/> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Blanditiis enim expedita explicabo hic illum, iusto labore maiores necessitatibus nihil officiis praesentium
                        quaerat quis ratione recusandae repudiandae sapiente sed temporibus voluptatibus.
                    </li>
                </ul>
            </div>
        );
    }
}
