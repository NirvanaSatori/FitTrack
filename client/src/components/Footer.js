import React from 'react'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons' 
import './Footer.css'

function Footer() {
  return ( 
      <footer className='main-footer "mt-auto"'>
        <div className='row'>
          {/* first column */}
          <div className='col-md-4 text-black'>
          <h4 className='font-bold mb-3'>Stay Connected with FitTrack</h4>
            <ul className='list-unstyled'>
              <li className='mb-2'>
                <FontAwesomeIcon icon={faPhone} className='mr-2' />
                +254-712-345-678-FITTRACK
              </li>
              <li className='mb-2'>
                <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
                support@fittrackapp.com
              </li>
              <li className='mb-2'>31st Street, Anytown, Kenya</li>
            </ul>

          </div>
          {/* second column */}
          <div className='col-md-4 text-black'>
          <h4 className='font-bold mb-3'>About FitTrack</h4>
            <ul className='list-unstyled'>
              <li className='mb-2'>Track your fitness goals and progress</li>
              <li className='mb-2'>Customizable workout plans</li>
              <li className='mb-2'>Connect with other fitness enthusiasts</li>
            </ul>

          </div>
          {/* third column */}
          <div className='col-md-4 text-black'>
          <h4 className='font-bold mb-3'>Follow Us</h4>
          <a href='https://www.facebook.com/fittrackapp/' target='_blank' rel='noreferrer' className='text-gray-400 hover:text-gray-300 mr-4'>
                <FontAwesomeIcon icon={faFacebook} className='w-6 h-6' />
              </a>
              <a href='https://twitter.com/fittrackapp' target='_blank' rel='noreferrer' className='text-gray-400 hover:text-gray-300 mr-4'>
                <FontAwesomeIcon icon={faTwitter} className='w-6 h-6' />
              </a>
              <a href='https://www.instagram.com/fittrackapp/' target='_blank' rel='noreferrer' className='text-gray-400 hover:text-gray-300'>
                <FontAwesomeIcon icon={faInstagram} className='w-6 h-6' />
              </a>

          </div>

        </div>
      </footer>
    
 
    )
}

export default Footer