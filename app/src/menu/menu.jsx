import React from 'react';

export default class Menu extends React.Component {
  render() {
    return (
      <header className="masthead">
        <div className="masthead-inner">
          <h1>Belarus Kotlin User Group</h1>
          <p className="lead"></p>

          <div className="colophon">
            <ul className="colophon-links">
              <li>
                <a href="https://github.com/mdo/hyde/archive/v1.0.0.zip">Download</a>
              </li>
              <li>
                <a href="https://github.com/mdo/hyde">GitHub project</a>
              </li>
              <li>Currently v1.1</li>
            </ul>
            <p>&copy; 2013. All rights reserved.</p>
          </div>

        </div>
      </header>
    );
  }
}
