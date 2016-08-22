import React from 'react';

export default class Speakers extends React.Component {
  render() {
    return (
      <div className="content container">
        <h1>Speakers</h1>

        <ul className="speaker">
          <li className="speaker__item--column">
            <div className="speaker__item speaker__item--main">
              <picture className="speaker__item-pic">
                <img className="speaker__item-img" src={require('./photos/ruslan_ibragimov.jpg')}/>
              </picture>
              <div className="speaker__item-info">
                <h4 className="speaker__item-name">Руслан Ибрагимов</h4>
                <a className="speaker__item-social speaker__item-social--twitter">@heapyhop</a>
                <a className="speaker__item-social speaker__item-social--github">IRus</a>
              </div>
            </div>
            <div className="speaker__item--desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis enim expedita explicabo hic illum, iusto labore maiores necessitatibus nihil
              officiis
              praesentium
              quaerat quis ratione recusandae repudiandae sapiente sed temporibus voluptatibus.
              <a src="">links</a>
            </div>
          </li>
          <li className="speaker__item--column">
            <div className="speaker__item speaker__item--main">
              <picture className="speaker__item-pic">
                <img className="speaker__item-img" src={require('./photos/anton_rutkevich.jpg')}/>
              </picture>
              <div className="speaker__item-info">
                <h4 className="speaker__item-name">Антон Руткевич</h4>

              </div>
            </div>
            <div className="speaker__item--desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis enim expedita explicabo hic illum, iusto labore maiores necessitatibus nihil
                officiis
                praesentium
                quaerat quis ratione recusandae repudiandae sapiente sed temporibus voluptatibus.
                <a src="">links</a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
