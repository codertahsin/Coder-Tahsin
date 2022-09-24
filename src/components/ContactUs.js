import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {

    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              <h1>Get In Touch</h1>
              </p>
            </div>
          </div>
          <div className="row">
            {/* <aside className="eigth columns footer-widgets"> */}
              {/* <div className="widgets"> */}

        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <form className="mt-8 space-y-6" action="#" method="POST">

            <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <input type="text" id="first-name" placeholder='Name' name="first-name" className="form-input px-3 py-2 rounded-md" required />
        </div>

        <div className="flex flex-col">
          <input type="email" placeholder='Email' id="email" name="email" className="form-input px-3 py-2 rounded-md" required />
        </div>

            <div className="flex flex-col col-span-2">
              <label htmlFor="subject">
                <div className="flex align-items">
              <span className="ml-auto opacity-75"></span>
            </div>
          </label>
          <textarea maxLength="500" rows="4" placeholder='Massage' type="text" id="subject" name="subject" className="form-input px-3 py-2 rounded-md" required />
        </div>

          </div>
          <div className="flex justify-end py-4">
        <button type="Re" class="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500">
          Submit
        </button>
      </div>
          </form>
        </div>
      </div>

              {/* </div> */}
            {/* </aside> */}
          </div>
        </section>
        );
  }
}