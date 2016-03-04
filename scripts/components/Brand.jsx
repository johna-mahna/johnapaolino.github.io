import React from 'react';
import {text} from '../text';

export let Brand = React.createClass({
  detectMobile() {
       if ( navigator.userAgent.match(/Android/i)
       || navigator.userAgent.match(/webOS/i)
       || navigator.userAgent.match(/iPhone/i)
       || navigator.userAgent.match(/iPad/i)
       || navigator.userAgent.match(/iPod/i)
       || navigator.userAgent.match(/BlackBerry/i)
       || navigator.userAgent.match(/Windows Phone/i)
       ){
          return true;
        }
       else {
          return false;
        }
  },
  render() {
    let detectMobile = this.detectMobile();
    return (
      <div>
        <div className='capsule'>
          <div className='column full centered center-text underscore'>
            <h1>Brand</h1>
            <div>{ text.brand.general }</div>
            <div className='give-me-some-space'></div>
          </div>
        </div>

        <div className='capsule'>
          <div className='column full centered'>
            <h2>Identity</h2>
            <div>{ text.brand.collateral }</div>
            <div className='give-me-some-space'></div>
            { detectMobile ?
              <img src='../img/brand_deck.jpg' width='90%' className='underscore' style={{ textAlign: 'center' }}/> :
              <div>
                <div className='capsule underscore'>
                  <img src='../img/brand_deck.jpg' width='200px' className='column one-fourth'/>
                  <img src='../img/brand_case-study.jpg' width='200px' className='column one-fourth'/>
                  <img src='../img/brand_styleguide.png' width='200px' className='column one-half'/>
                </div>
                <div className='give-me-some-space'></div>
              </div>
            }
          </div>
        </div>

        <div className='capsule underscore'>
          <div className='column full centered'>
            <h2>Corporate Website</h2>
            <div>{ text.brand.website }</div>
            <div className='give-me-some-space'></div>
            { detectMobile ?
              <img src='../img/brand_website-home.png' width='1500px' style={{ overflow: 'hide' }}/>
              :
              <div>
                <div className='capsule'>
                  <img src='../img/brand_website-home.png' width='200px' className='column one-half'/>
                  <img src='../img/brand_website-engineering.png' width='200px' className='column one-half'/>
                </div>
                <div className='give-me-some-space'></div>
              </div>
            }
            <div className={ detectMobile ? '' : 'center-text'}>
              <a href='https://www.yieldbot.com' target='_blank'>[ Visit the Live Website ]</a>
              <div className='give-me-some-space'></div>
            </div>
          </div>
        </div>

        <div className='capsule'>
          <div className='give-me-some-space'></div>
          <div className='column full centered'>
            { detectMobile ?
              <div>
                <div>
                  <h2>UI Style Guide</h2>
                  <div>{ text.brand.website }</div>
                </div>
                <div className='give-me-some-space'></div>
                <img src='../img/brand_gaston.png' width='200px' className='column full'/>
              </div>
              :
              <div>
                <div className='column one-third'>
                  <h2>UI Style Guide</h2>
                  <div>{ text.brand.website }</div>
                </div>
                <img src='../img/brand_gaston.png' width='200px' className='column two-thirds'/>
              </div>
            }
          </div>
        </div>

        <div className='give-me-some-serious-space'></div>
        <div className='give-me-some-serious-space'></div>

      </div>
    );
  }
});
