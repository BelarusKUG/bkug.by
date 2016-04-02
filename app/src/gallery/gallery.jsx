import React from 'react';

export default class Gallery extends React.Component {
  render() {
    return (
        <section className="c-gallery clearfix">
          <div className="c-gallery__container c-gallery__container--product js-gallery">
            <a href="/" data-size="1800x1800" className="c-gallery__item js-href-image js-gallery-item"
               data-img-mx="http://placehold.it/1800x1800/E8117F/ffffff">
              <picture className="c-gallery__img">
                <source srcSet="http://placehold.it/500x500/E8117F/FFFFFF" media="(min-width: 1200px)"/>
                <source srcSet="http://placehold.it/300x300/E8117F/FFFFFF" media="(min-width: 992px)"/>
                <source srcSet="http://placehold.it/300x300/E8117F/FFFFFF" media="(min-width: 480px)"/>
                <source srcSet="http://placehold.it/200x200/E8117F/FFFFFF" media="(max-width: 479px)"/>
                <img className="c-gallery__img" src="http://placehold.it/200x200/E8117F/ffffff" alt="MDN"/>
              </picture>
            </a>
            <a href="/" data-size="1800x1800" className="c-gallery__item js-href-image js-gallery-item"
               data-img-mx="http://placehold.it/1800x1800/E8117F/ffffff">
              <picture className="c-gallery__img">
                <source srcSet="http://placehold.it/500x500/E8117F/FFFFFF" media="(min-width: 1200px)"/>
                <source srcSet="http://placehold.it/300x300/E8117F/FFFFFF" media="(min-width: 992px)"/>
                <source srcSet="http://placehold.it/300x300/E8117F/FFFFFF" media="(min-width: 480px)"/>
                <source srcSet="http://placehold.it/200x200/E8117F/FFFFFF" media="(max-width: 479px)"/>
                <img className="c-gallery__img" src="http://placehold.it/200x200/E8117F/ffffff" alt="MDN"/>
              </picture>
            </a>
            <a href="/" data-size="1800x1800" className="c-gallery__item js-href-image js-gallery-item"
               data-img-mx="http://placehold.it/1800x1800/E8117F/ffffff">
              <picture className="c-gallery__img">
                <source srcSet="http://placehold.it/500x500/E8117F/FFFFFF" media="(min-width: 1200px)"/>
                <source srcSet="http://placehold.it/300x300/E8117F/FFFFFF" media="(min-width: 992px)"/>
                <source srcSet="http://placehold.it/300x300/E8117F/FFFFFF" media="(min-width: 480px)"/>
                <source srcSet="http://placehold.it/200x200/E8117F/FFFFFF" media="(max-width: 479px)"/>
                <img className="c-gallery__img" src="http://placehold.it/200x200/E8117F/ffffff" alt="MDN"/>
              </picture>
            </a>
            <a href="/" data-size="1800x1800" className="c-gallery__item js-href-image js-gallery-item"
               data-img-mx="http://placehold.it/1800x1800/E8117F/ffffff">
              <picture className="c-gallery__img">
                <source srcSet="http://placehold.it/500x500/E8117F/FFFFFF" media="(min-width: 1200px)"/>
                <source srcSet="http://placehold.it/300x300/E8117F/FFFFFF" media="(min-width: 992px)"/>
                <source srcSet="http://placehold.it/300x300/E8117F/FFFFFF" media="(min-width: 480px)"/>
                <source srcSet="http://placehold.it/200x200/E8117F/FFFFFF" media="(max-width: 479px)"/>
                <img className="c-gallery__img" src="http://placehold.it/200x200/E8117F/ffffff" alt="MDN"/>
              </picture>
            </a>
            <a href="/" data-size="1800x1800" className="c-gallery__item js-href-image js-gallery-item"
               data-img-mx="http://placehold.it/1800x1800/E8117F/ffffff">
              <picture className="c-gallery__img">
                <source srcSet="http://placehold.it/500x500/E8117F/FFFFFF" media="(min-width: 1200px)"/>
                <source srcSet="http://placehold.it/300x300/E8117F/FFFFFF" media="(min-width: 992px)"/>
                <source srcSet="http://placehold.it/300x300/E8117F/FFFFFF" media="(min-width: 480px)"/>
                <source srcSet="http://placehold.it/200x200/E8117F/FFFFFF" media="(max-width: 479px)"/>
                <img className="c-gallery__img" src="http://placehold.it/200x200/E8117F/ffffff" alt="MDN"/>
              </picture>
            </a>
          </div>
        </section>
    );
  }
}
