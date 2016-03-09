import React from 'react';

export let BikeBlock = React.createClass({
  render () {
   return (
     <div>
       <div className='capsule'>
         <div className='column full centered'>
           <h2>Simple Bike Animation Block</h2>
           <div>Just starting to play around with scss & keyframes.</div>
           <div className='give-me-some-space'></div>
         </div>
       </div>
       <div className='capsule'>
         <div className='column full centered'>
           <iframe width="100%" height="300" src="//jsfiddle.net/johnapao/qy44mjpL/10/embedded/html,css,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
         </div>
       </div>
     </div>
   );
  }
});
