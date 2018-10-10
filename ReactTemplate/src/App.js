import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import fbLogo from './img/bg-img/facebook.jpeg'
import twtrLogo from './img/bg-img/twitter.jpeg'

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <header class="header-area">
        
        <div class="clever-main-menu">
        
        <div class="top-header-area d-flex justify-content-between align-items-center">
        
                <div class="contact-info">
                    <a styles="color:#4C6E78"><span>Phone:</span> +91 000000000</a>
                    <a styles="color:#4C6E78"><span>Email:</span> info@test.com</a>
                </div>
                
                <div class="follow-us">
                    <span styles="color:#4C6E78">Follow us</span>
                    <a href="#" ><img src={fbLogo}/></a>
                    <a href="#"><img src={twtrLogo}/></a>
                </div>
            </div>
            <div class="classy-nav-container breakpoint-off">
                
                <nav class="classy-navbar justify-content-between" id="cleverNav">

                    
                    <div class="classy-menu">

                        
                        <div class="classycloseIcon">
                            <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                        </div>

                        
                        <div class="classynav">
                            <ul>
                                <li><a href="index.html">Home</a></li>
								                <li><a href="blog.html">Blog</a></li>
								                <li><a href="Admin.html">Admin</a></li>
								                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                        </div>
                </nav>
            </div>
        </div>
    </header>

      </div>
    );
  }
}

export default App;
