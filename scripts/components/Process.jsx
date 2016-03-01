import React from 'react';
import {text} from '../text';

export let Process = React.createClass({
  //TODO get scroll to top working better
  render() {
    return (
      <div className='fade-in'>
        <div>
          <div className='give-me-some-space'></div>
          <h1 ref='myRefString'>Design Development Process</h1>
          <div>{ text.process.general }</div>
        </div>
        <div className='give-me-some-space'></div>
        <div className='capsule underscore'></div>
        <div className='capsule' style={{ textAlign: 'left' }}>
          <div className='give-me-some-space'></div>
          <h2>1. Research</h2>
          <div>{ text.process.research }</div>
          <div className='give-me-some-space'></div>
          <img src='https://photos-5.dropbox.com/t/2/AAC0g6wQ5H4xHtVRz-0QwB4sn9n_hu6r0pME94W7TuOv-w/12/539740967/jpeg/32x32/1/_/1/2/ux_research_3.jpg/ENyR5agEGA8gAigC/HPtVVeUTP6l097nXaM4r-EJf9SpOa471fbEMCqeNyEI?size=1024x768&size_mode=3'
            width='200px' className='column one-third mobile-full'/>
          <img src='https://photos-2.dropbox.com/t/2/AABkr_DXeCC0OKtD4_aO96-ferReQ995v0VqsjtCqgcHgQ/12/539740967/jpeg/32x32/1/_/1/2/ux_research_2.jpg/ENyR5agEGA8gAigC/AvNgUQ9L6NaHbJLeZd3r5yiLLEBmf3VeIuj-75pMIHs?size=1024x768&size_mode=3'
            width='200px' className='column one-third mobile-hide'/>
          <img src='https://photos-2.dropbox.com/t/2/AAA_QwyYQHFdUp2o3M7ox_vxKkX145xwx10-ivDr0TbtGg/12/539740967/jpeg/32x32/1/_/1/2/ux_research_1.jpg/ENyR5agEGA8gAigC/yqhCLZlvDRd9jurkqDKPp-xLr44I7LwUddXrPap1MH0?size=1024x768&size_mode=3'
            width='200px' className='column one-third mobile-hide'/>
        </div>
        <div className='give-me-some-space'></div>
        <div className='capsule underscore'></div>
        <div className='capsule'>
          <div className='give-me-some-space'></div>
          <div className='column one-third mobile-full' style={{ textAlign: 'left' }}>
            <h2>2. Rough Ideas</h2>
            <div>{ text.process.ideas }</div>
          </div>
          <img src='../img/ux_rough.png' className='column two-thirds mobile-full'/>
        </div>
        <div className='capsule underscore'></div>
        <div className='capsule'>
          <div className='give-me-some-space'></div>
          <img src='../img/ux_collaborate_1.png' className='column two-thirds mobile-full'/>
          <div className='column one-third mobile-full' style={{ textAlign: 'left' }}>
            <h2>3. Collaborate</h2>
            <div>{ text.process.collaborate }</div>
          </div>
        </div>
        <div className='give-me-some-space'></div>
        <div className='capsule underscore'></div>
        <div className='capsule'>
          <div className='give-me-some-space'></div>
          <div className='column one-third mobile-full' style={{ textAlign: 'left' }}>
            <h2>4. Execute</h2>
            <div>{ text.process.execute }</div>
          </div>
          <img src='../img/ux_execute.png' className='column two-thirds mobile-full'/>
        </div>
        <div className='give-me-some-serious-space'></div>
      </div>
    );
  }
});
