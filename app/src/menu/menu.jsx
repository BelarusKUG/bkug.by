import React from 'react';

export default class Menu extends React.Component {
  render() {
    return (
      <header className="masthead">
        <div className="masthead-inner">
          <h1 className="main-title">
            <span className="main-title__belarus">Belarus </span>
            <span className="main-title__kotlin">Kotlin </span>
            <span className="main-title__user-group">User Group</span>
          </h1>
          <img src={require("./kotlin_cat.svg")} className="kotlin-cat"/>
          <div className="colophon">
            <ul className="colophon-links">
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Speakers</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>

        </div>
      </header>
    );
  }
}
