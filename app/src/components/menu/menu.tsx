import React from 'react';
import {Link} from 'react-router'

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
          <div className="colophon">
            <ul className="colophon-links">
              <li>
                <Link activeClassName="colophon-links-active" to="/">
                  Главная
                </Link>
              </li>
              <li>
                <Link activeClassName="colophon-links-active" to="/events">
                  События
                </Link>
              </li>
              <li>
                <Link activeClassName="colophon-links-active" to="/speakers">
                  Докладчики
                </Link>
              </li>
              <li>
                <Link activeClassName="colophon-links-active" to="/contacts">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <img src={require("./kotlin_cat.svg")} className="kotlin-cat"/>
        </div>
      </header>
    );
  }
}
