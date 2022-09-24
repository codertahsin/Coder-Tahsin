import React, { Component } from 'react';
import 'tw-elements';
{/* <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script> */}
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check out some of my project</h1>

        <div class="flex justify-center">
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h3 class="text-gray-900 text-xl leading-tight font-medium mb-2 text-center">E-commerce Websites</h3>
    <p class="text-gray-700 text-base mb-4">
    Technology use<br />
    -HTMl<br />
    -JavaScript<br />
    -React<br />
    -Tailwind CSS<br />
    <a href='https://ecommercewebsite000.netlify.app'>Demo</a>
    </p>

  </div>
</div>

        <div class="flex justify-center">
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h3 class="text-gray-900 text-xl leading-tight font-medium mb-2 text-center">Netflix Clone</h3>
    <p class="text-gray-700 text-base mb-4">
    Technology use<br />
    -JavaScript<br />
    -React<br />
    -Tailwind CSS<br />
    <a href='https://netflixclonebyat.netlify.app'>Demo</a>
    </p>
  </div>
</div>

<div class="flex justify-center">
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h3 class="text-gray-900 text-xl leading-tight font-medium mb-2 text-center">Zeppto Clone</h3>
    <p class="text-gray-700 text-base mb-4">
    Technology use<br />
    -HTMl<br />
    -CSS<br />
    -JavaScript<br />
    <a href='https://zepptoclone.netlify.app'>Demo</a>
    </p>
    
</div> <br />
<a style={{color:'#FFF', textAlign:'center', fontStyle:"italic", fontSize:"20px"}} href='https://github.com/codertahsin?tab=repositories'>My Repositories</a>
</div>
</div>
      </div>
      
  </section>
        );
  }
}
