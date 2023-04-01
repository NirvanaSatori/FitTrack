import React from 'react'
import Trainer from "../images/trainer.png"


function Home() {
  return (
    
    
    <div className='maincontainer'>
    
      <div className= "container1">

        <div className='text-container'>
        <h2>TIME TO GET <br className='pro'>PROLIFE FITNESS</br></h2>
        
      

        </div>
        <div className='image-container'>
          <img className= "img" src={Trainer}alt='trainerimage'></img>
        

        </div>
        
      </div> 
      <div className='container-two'>
      <div className='card'> 
       <h3>Enjoy our services</h3>
          <div className='cardimage'>
          <img className='exercise'
          alt="gym"
          src="https://media.4rgos.it/i/Argos/5021-m0014-m007-m050-asym-m008-m022-smallgymideas-steppers-9190306?maxW=1200&qlt=75&fmt.jpeg.interlaced=true"
        />

          </div>
          <div className='cardtext'>
            <h5> EXERCISES AND WORKOUT</h5>
            <p>Exercise and workouts are physical activities that are perfomed to improve health, fitness, and overall well-being
            . They can range from simple activities such as walking, to more intense workouts like weightlifting and high-intensity
            interval training.
              </p>
             

          </div>
        </div>
        <div className='card'> 
          <div className='cardimage'>

          <img className="exercise"
          alt="gym"
          src="https://images.squarespace-cdn.com/content/v1/5d59f351fddabe00013cf3e6/9d48584f-c1a5-414e-addf-403aa6a2d21f/PRE-WORKOUT+NUTRITION.png"
        />
          </div>
          <div className='cardtext'> 
          <h5>FOOD AND NUTRITION</h5>
          <p>Food and nurtition play an important role in exercise and physical activity. Proper nutrition helps you improve
      your atletic perfomances, reduce fatigue , and speed up recovery time after worksouts
          </p>

          </div>
        </div>
        <div className='card'> 
          <div className='cardimage'>
          <img className="exercise"
          alt="gym"
          src="https://www.health.com/thmb/0ZP6oyiCMMOhoqm7ykYTqIKCKKA=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc()/fitness-journals-gettyimages-914593896-2000-02a5845d9d4a44e6ba56db2cc4c9566e.jpg"
        />

          </div>
          <div className='cardtext'> 
          <h5>DAILY TARGETS</h5>
          <p>setting daily targets for exercises will help yo stay motivated and on track towars your fitness goal</p>

          </div>
        </div>
         



      </div>

    </div>


  
    
  )
}

export default Home

/* <div className='main-container'> 
      <div className= "container1">

        <div className='text-container'>
        <h1>TIME TO GET PROLIFE FITNESS</h1>
        
      

        </div>
        <div className='image-container'>
          <img className= "img" source={Trainer}alt='trainerimage'></img>
        

        </div>
        
      </div> 
     <div className='container2'>

        <div className='card'> 
       <h3>Our </h3>
          <div className='cardimage'>
          <img className='exercise'
          alt="gym"
          src="https://media.4rgos.it/i/Argos/5021-m0014-m007-m050-asym-m008-m022-smallgymideas-steppers-9190306?maxW=1200&qlt=75&fmt.jpeg.interlaced=true"
        />

          </div>
          <div className='cardtext'>
            <h5> EXERCISES AND WORKOUT</h5>
            <p>Exercise and workouts are physical activities that are perfomed to improve health, fitness, and overall well-being
            . They can range from simple activities such as walking, to more intense workouts like weightlifting and high-intensity
            interval training.
              </p>
             

          </div>
        </div>
        <div className='card'> 
          <div className='cardimage'>

          <img className="exercise"
          alt="gym"
          src="https://images.squarespace-cdn.com/content/v1/5d59f351fddabe00013cf3e6/9d48584f-c1a5-414e-addf-403aa6a2d21f/PRE-WORKOUT+NUTRITION.png"
        />
          </div>
          <div className='cardtext'> 
          <h5>FOOD AND NUTRITION</h5>
          <p>Food and nurtition play an important role in exercise and physical activity. Proper nutrition helps you improve
      your atletic perfomances, reduce fatigue , and speed up recovery time after worksouts
          </p>

          </div>
        </div>
        <div className='card'> 
          <div className='cardimage'>
          <img className="exercise"
          alt="gym"
          src="https://www.health.com/thmb/0ZP6oyiCMMOhoqm7ykYTqIKCKKA=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc()/fitness-journals-gettyimages-914593896-2000-02a5845d9d4a44e6ba56db2cc4c9566e.jpg"
        />

          </div>
          <div className='cardtext'> 
          <h5>DAILY TARGETS</h5>
          <p>setting daily targets for exercises will help yo stay motivated and on track towars your fitness goal</p>

          </div>
        </div>
         
        


      </div> 
      
    </div> */