import React from 'react'
import './AboutUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons' 


function AboutUs() {
    return (
      <div style={{ backgroundColor: "#f7f7f7", padding: "20px", margin:"50px" }}>
        <h1 style={{ textAlign:"center", padding:"10px", margin:"15px",fontSize:"28px", fontWeight:"500"}}>ABOUT US</h1>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"40px"}}>
          <div style={{ margin: "auto" }}>
            <img src=" https://cdn.pixabay.com/photo/2018/02/06/14/07/ease-3134828__340.jpg" alt="fitness" style={{ width: "100%", height: "100%" }} />
          </div>
          <div style={{padding:"20px"}}>
            <p style={{ fontSize:"18px", fontWeight:"400"}}>Fittrack, is a fitness website designed to help users maintain a healthy lifestyle by suggesting recommended food and exercises to achieve a specified target.</p>
            <p style={{ fontSize:"18px"}}>Our targets are divided into three categories: lose weight, maintain weight, and gain weight. According to each target, a user can get the recommended foods and exercises. After a target is achieved, a user can delete the target and set a new one. Say YES to maintaining a healthy lifestyle.</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", margin: "20px, 20px " , padding:"10px"}}>
          <div style={{ marginRight: "10px" }}>
            <a href='https://www.facebook.com/fittrackapp/' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#4267B2", fontSize:"26" , padding:"3px", margin:"10px, 0px"}} />
            </a>
          </div>
          <div style={{ marginRight: "10px"}}>
            <a href='https://twitter.com/fittrackapp' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#1DA1F2", fontSize:"26", padding:"3px", margin:"10px, 0px"}} />
            </a>
          </div>
          <div>
            <a href='https://www.instagram.com/fittrackapp/' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faInstagram} style={{ color: "#C13584",fontSize:"26" , padding:"3px", margin:"10px, 0px"}} />
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutUs
  