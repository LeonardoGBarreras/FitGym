import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

 const Hero = () => {
   return (
    <div className="hero" id='hero'>
    <div className="blur hero-blur"></div>
     <div className="left-h">
      <Header/>
      <div className="hero-text"> 
        <div>
          <span className='stroke-text'>Shape </span>
          <span>Your</span>
        </div>
        <div>
          <span>Ideal Body</span>
        </div>
        <div>
          <span>Here we will help you to shape and build your ideal body and live up your life to fullest</span>
        </div>
      </div>
      <div className="figures">
        <div><span>+14</span><span>Expert Coaches</span></div>
        <div><span>+250</span><span>Members Joined</span></div>
        <div><span>+20</span><span>Fitness Programs</span></div>
      </div>
      <div className="hero-button">
      <button className="btn">Get Started</button>
      <button className="btn">Learn More</button>
      </div> 
      </div>
     <div className="right-h">
       <button className="btn">Join Now</button>
       <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
       </div>
       <img src={hero_image} alt="" className='hero-image' />
       <img src={hero_image_back} alt="" className='hero-image-back'/>
       <div className="calories">
       <img src={Calories} alt="" />
       <div>
       <span>Calories Burned </span>
       <span>220kcal</span>
       </div>
    </div>
      </div>
     
     </div>
   );
 }

 export default Hero

