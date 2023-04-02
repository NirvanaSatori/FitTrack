import React from 'react'
import Trainer from "../images/trainer.png"
import Exer from "../images/gym-02.png"


function Home() {
  return (

  <>
    
    
    <div className='maincontainer'>
    
      <div className= "container1">

        <div className='text-container'>
        <h2>TIME TO GET <b className='pro'>PROLIFE FITNESS</b></h2>
        <p className='planding'> Fit<b className='track'>Track</b>, is a fitness website designed to help users maintain a healthy lifestyle by suggesting recommended
           food and exercises to achieve a specified target</p>
        
      

        </div>
        <div className='image-container'>
          <img className= "img" src={Trainer}alt='trainerimage'></img>
        

        </div>
        
      </div> 
      <h3><u>Enjoy our services</u></h3>
      <div className='container-two'>
      
      <div className='card'> 
      <h5> EXERCISES AND WORKOUT</h5>
       
          <div className='cardimage'>
          <img className='exercise'
          alt="gym"
          src="https://media.4rgos.it/i/Argos/5021-m0014-m007-m050-asym-m008-m022-smallgymideas-steppers-9190306?maxW=1200&qlt=75&fmt.jpeg.interlaced=true"
        />

          </div>
          <div className='cardtext'>
            
            <p>Exercise and workouts are physical activities that are perfomed to improve health, fitness, and overall well-being
            . They can range from simple activities such as walking, to more intense workouts like weightlifting and high-intensity
            interval training.
              </p>
             

          </div>
        </div>
        <div className='card'>
        <h5>FOOD AND NUTRITION</h5> 
        
          <div className='cardimage'>
         

          <img className="exercise"
          alt="gym"
          src="https://images.squarespace-cdn.com/content/v1/5d59f351fddabe00013cf3e6/9d48584f-c1a5-414e-addf-403aa6a2d21f/PRE-WORKOUT+NUTRITION.png"
        />
          </div>
          <div className='cardtext'> 
          
          <p>Food and nurtition play an important role in exercise and physical activity. Proper nutrition helps you improve
      your atletic perfomances, reduce fatigue , and speed up recovery time after worksouts
          </p>

          </div>
        </div>
        <div className='card'> 
        <h5>TRACK YOUR PLAN</h5> 
        
          <div className='cardimage'>
          <img className="exercise"
          alt="gym"
          src="https://www.health.com/thmb/0ZP6oyiCMMOhoqm7ykYTqIKCKKA=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc()/fitness-journals-gettyimages-914593896-2000-02a5845d9d4a44e6ba56db2cc4c9566e.jpg"
        />

          </div>
          <div className='cardtext'> 
          
          <p>Setting up your daily targets for exercises will help yo stay motivated and on track towars your fitness goal</p>

          </div>
        </div>
         



      </div>

    </div>

</>
  
    
  )
}

export default Home

