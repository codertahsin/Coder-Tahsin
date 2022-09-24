import React, { Component } from 'react';
import { Typewriter } from 'react-simple-typewriter'

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <>
      <header id="home">
        <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div className="row banner">
            <div className="banner-text">
        <h2 style={{color:'#FFF', fontFamily:'revert', fontSize:'43px',}}> {''}
        <span>
          <Typewriter
            words={['Im Ahanf Tahsin']}
            cursor
            cursorStyle=''
            typeSpeed={200}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        </h2>
              <h3 style={{color:'#FFF', fontFamily:'sans-serif',}}>
                Contribute myself as a professional <br/> {''} 
              <span>
                <Typewriter
                words={['Software Engineer.', 'MERN Stuck Developer.',]}
                loop={50}
                cursor
                cursorStyle='|'
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
              </h3>
              <hr/>
              <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
              </ul>
            </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
      </header>
      </>
    );
  }
}