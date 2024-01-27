<<<<<<< HEAD
import React from 'react';
import './homebanner.css';
import { useTheme } from "../../context/ThemeContext";
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { LuPen } from "react-icons/lu";

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

import heart from '../../assets/Home/heart.png';
import view from '../../assets/Home/view.png';
import pen from '../../assets/Home/pen.png';
import link from '../../assets/Home/link.png';
import play from '../../assets/Home/play.png';
import download from '../../assets/Home/download.png';
import profile from '../../assets/Home/woman.png';
import homeBannerUI from '../../assets/Home/homeBannerUI.png';
import johnDoe from '../../assets/Home/johnDoe.png';

=======
// src/components/Banner/HomeBanner.js
import React from "react";
import doodleCollabGif from "../../assets/ReadMe/doodleCollab.gif";
import "./homebanner.css";
>>>>>>> c760fec6c9e6e9f29cb88c63367c9a950ba010d2

const HomeBanner = () => {

  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
<<<<<<< HEAD
    <section className="homebanner-section">
        <div className="homebanner-container">
          <p className="homebanner-head">DoodleCollab</p>
          <p className="homebanner-head-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt</p>
          <div className="homebanner-head-button">
            <button className="getStarted">Get Started Now</button>
            <button className={`watchVideo ${isDarkMode ? 'dark-mode' : 'white-mode'}`}>
              <FaPlay style={{ marginRight: '5px' }}/>Watch Video</button>
          </div>

          <div className="homebanner-cards">
          
            <div className="homebanner-card-first-column">
            <div className="homebanner-card-icons">
                  <ul className="homebanner-card-icons-ul">
                    <button><img src={heart} alt="" /></button>
                    <button><img src={view} alt="" /></button>
                    <button><img src={pen} alt="" /></button>
                    <button><img src={link} alt="" /></button>
                    <button><img src={play} alt="" /></button>
                    <button><img src={download} alt="" /></button>
                  </ul>
            </div>
              {/* <div className="homebanner-card-first-column-first-row">
                
              </div> */}
              <div className="homebanner-card-first-column-remaining-rows">
                <div className="homebanner-card-first-column-remaining-row-container">

                <div className="homebanner-card-first-column-second-row">
                      <div className="homebanner-card-second-row-image">
                        <img src={profile} alt="profile" className="homebanner-card-image" />
                      </div>
                    </div>
                    <div className="homebanner-card-first-column-third-row">

                      <p >lorem Ipsum</p>

                    </div>
                    <div className="homebanner-card-first-column-fourth-row">
                  
                      <button className="follow"><span className="follow-text">Follow</span> <i><FaPlus style={{marginLeft: '30px' }}/></i></button>
                      <button className="message"><span className="message-text">Message</span> <i><LuMessageSquare style={{marginLeft: '20px' }} />
                      </i></button>

                    </div>

                </div>
                 
                  </div>
              
            </div>
            <div className="homebanner-card-second-column">

                    <div className="homebanner-card-second-column-first-row">

                          <div className="homebanner-card-second-column-first-row-container">
                                
                            <div className="homebanner-card-second-column-first-row-top-image">
                              <img src={homeBannerUI} alt="homeBannerProfile" className="homebanner-card-second-column-first-row-top-image" />

                            </div>
                        
                            <div className="homebanner-card-second-column-first-row-bottom-card">

                                 <div className="homebanner-card-second-column-first-row-bottom-card-container" >

                                            <p><i><img src={profile} alt="profile" className="homebanner-card-second-column-first-row-bottom-card-image" /></i></p>
                                            <p className="homebanner-card-second-column-first-row-bottom-card-name">lorem Ipsum</p>
                                            <p><i><FaRegHeart style={{marginLeft: '95px' }} className="homebanner-card-second-column-first-row-bottom-card-icon"/></i></p>
                                  </div> 

                             </div>
                          </div>

                          
                          
                    </div>
                    <div className="homebanner-card-second-column-second-row">
                        <div className="homebanner-card-second-column-second-row-container">

                           <p><i><img src={johnDoe} alt="johnDoe" /></i></p>
                           <p><p className="name">John Doe</p>
                            <p className="position">UI/UX Designer</p> 
                           </p>
                           <p><i><LuPen style={{marginLeft: '68px' }}  /></i></p>

                        </div>
                    </div>

            </div>
            <div className="homebanner-card-third-column">
                 <div className="homebanner-card-third-column-container" >
                     <p className="login-text">Login into your account</p>
                   <div className="login-para">
                     <p >Don't have an account yet? </p> <a href="#"><p className="login-para-link"> Create Now </p></a> 
                   </div>
                    <div className="form-control-mail-icon"><input type="text" placeholder="johndoe@gmail.com" id='username' /><i className="icon-input-icon"> <HiOutlineMail size={24} /></i></div> 
                    <div className="form-control-password-icon"><input type="text" placeholder="Password" id='password' /><i className="icon-input-icon"> <MdOutlineRemoveRedEye size={24} /></i></div> 
                    <div className="login-button">
                      <button>Login</button>
                    </div>
                 </div>

            </div>
            
          </div>
        </div>

    </section>
  )
}

export default HomeBanner
=======
    <div className="home-banner">
      <br></br>
      <br></br>
      <img src={doodleCollabGif} alt="DoodleCollab" className="banner-image" />
      <div className="banner-text">
      </div>
      <br></br>
      <br></br>
      <p style={{ fontFamily: 'Indie Flower', fontSize: '1.2rem', lineHeight: '1.5' }}>
      <span style={{ color: 'purple' }}>DoodleCollab</span> is a <span style={{ color: 'red' }}>cutting-edge</span> application designed to <span style={{ color: 'blue' }}>transform</span> the
          way we <span style={{ color: 'green' }}>collaborate</span>, offering an <span style={{ color: 'orange' }}>unparalleled</span> whiteboard and sharing experience.
        </p>
        <br></br>
        <br></br>
        <br></br>
    </div>
  );
};

export default HomeBanner;
>>>>>>> c760fec6c9e6e9f29cb88c63367c9a950ba010d2
