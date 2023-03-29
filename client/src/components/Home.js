import React from 'react'
// import index.css


function Home() {

  return (
    <>
      <div className='container'>
        
        <img className="background"
          alt="gym"
          src="https://t4.ftcdn.net/jpg/00/84/54/71/360_F_84547156_ZFXIAmvcgfHNpIoMBwWQm02YZpQ29SUY.jpg"
        />
        <div className='topright'> NO PAIN, NO GAIN</div>
        <div className='bottomleft'> FEEL THE POWER WITHIN</div>
      </div>
<div className='maindiv'>
      <h4>GET STARTED NOW</h4>
      <h3>What you will get in here</h3>


  <div className="row">
    <div className="column" >
      <h6>EXERCISES AND WORKOUT</h6>
      <div className='execisediv'>
      <img className="exercise"
          alt="gym"
          src="https://media.4rgos.it/i/Argos/5021-m0014-m007-m050-asym-m008-m022-smallgymideas-steppers-9190306?maxW=1200&qlt=75&fmt.jpeg.interlaced=true"
        />
        </div> 

      
      <p>Exercise and workouts are physical activities that are perfomed to improve health, fitness, and overall well-being
        . They can range from simple activities such as walking, to more intense workouts like weightlifting and high-intensity
        interval training.
      </p>
    </div>
    <div class="column" >
    <h6>FOOD AND NUTRITION</h6>
    <div className='execisediv'>
      <img className="exercise1"
          alt="gym"
          src="https://images.squarespace-cdn.com/content/v1/5d59f351fddabe00013cf3e6/9d48584f-c1a5-414e-addf-403aa6a2d21f/PRE-WORKOUT+NUTRITION.png"
        />
        </div> 

    <p>Food and nurtition play an important role in exercise and physical activity. Proper nutrition helps you improve
      your atletic perfomances, reduce fatigue , and speed up recovery time after worksouts
    </p>
    </div>
    <div class="column" >
      
    <h6>DAILY TARGETS</h6>
    <div className='execisediv'>
      <img className="exercise"
          alt="gym"
          src="https://www.health.com/thmb/0ZP6oyiCMMOhoqm7ykYTqIKCKKA=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc()/fitness-journals-gettyimages-914593896-2000-02a5845d9d4a44e6ba56db2cc4c9566e.jpg"
        />
        </div> 

    <p>setting daily targets for exercises will help yo stay motivated and on track towars your fitness goal</p>
    </div>
</div>
</div>
      
    
  </>
  );
  
  
}

export default Home
