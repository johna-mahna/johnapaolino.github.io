import React from 'react';
import ReactDOM from 'react-dom';
import {text} from '../text';

export let Projects = React.createClass({
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
          <div className='column full centered underscore'>
            <h1>Recent Projects</h1>
            <div>{ text.projects.general }</div>
            <div className='give-me-some-space'></div>
          </div>
        </div>

        <div className='capsule'>
          <div className='column full centered underscore'>
            <div className='give-me-some-space'></div>
            <h2>Publisher Account Management</h2>
            <div>{ text.projects.pub }</div>
            <div className='give-me-some-space'></div>
            <div>
              <strong>Role: Design + Dev</strong>
              <div>{ text.projects.pub_role }</div>
            </div>
            <div className='give-me-some-space'></div>
            { detectMobile ?
              <img src="../img/pub_gif.gif" width='1500px' style={{ overflow: 'hide' }}/> :
              <div className='capsule'>
                <img src="../img/pub_gif.gif" className='column two-thirds'/>
                <img src="../img/pub_code.png" className='column one-third'/>
              </div>
            }
            <div className='give-me-some-space'></div>
            <div className='give-me-some-space'></div>
          </div>
        </div>

        <div className='capsule'>
          <div className='column full centered underscore'>
            <h2>Ad Hoc Reporting Tool</h2>
            <div>{ text.projects.reporting }</div>
            <div className='give-me-some-space'></div>
            <div>
              <strong>Role: Design + Dev</strong>
              <div>{ text.projects.reporting_role }</div>
            </div>
            <div className='give-me-some-space'></div>
            { detectMobile ?
              <img src="../img/reporting-locked.gif" width='1500px' style={{ overflow: 'hide' }}/> :
              <div className='capsule'>
                <img src="../img/reporting_code.png" className='column one-third'/>
                <img src="../img/reporting-locked.gif" className='column two-thirds'/>
              </div>
            }
            <div className='give-me-some-space'></div>
          </div>
        </div>

        <div className='capsule'>
          <div className='column full centered'>
            <h2>Ad Builder</h2>
            <div>{ text.projects.builder }</div>
            <div className='give-me-some-space'></div>
            <div>
              <strong>Role: Design</strong>
              <div>{ text.projects.builder_role }</div>
            </div>
            <div className='give-me-some-space'></div>
            { detectMobile ?
              <img src="../img/builder.gif" width='1500px' style={{ overflow: 'hide' }}/> :
              <div className='capsule'>
                <img src="../img/builder.gif" className='column four-fifths centered'/>
              </div>
            }
            <div className='give-me-some-space'></div>
            <div className='give-me-some-space'></div>
          </div>
        </div>

        <div className='give-me-some-space'></div>
        <div className='give-me-some-serious-space'></div>
      </div>
    );
  }
});
