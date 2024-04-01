import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
              <img src={about_img} alt="" className="about-img"/>
              <img src={play_icon} alt="" className="play-icon"/>
            </div>
          <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum and expert faculty are dedicated to nurturing the next generation of leaders in the world.</p>
            <p>Join us on this transformative journey and unlock the power of knowledge and skills to shape the future.</p>
            <p>Whether you aspire to become a teacher, administrator, or educational leader. Explore our perfect pathway to achieve your goals and unlock your full potential in shaping future of education.</p>
          </div>
        </div>
    );
};

export default About;