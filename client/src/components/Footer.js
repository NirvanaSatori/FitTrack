import React from 'react'

function Footer() {
  return (
    <div className='main-footer'> 
      <div className='container'>
        <div className='row'>
          { /*column 1 */}
          <div className='col'>
            <h4>FITTRACK</h4>
            <ul className='list-unstyled'>
              <li>254719529448</li>
              <li>Nairobi, Kenya</li>
              <li>123,Kimathi Street</li>
            </ul>

          </div>
          { /*column 2 */} 
          <div classname="col">
            <h4>STUFF</h4>
            <ul className='list-unstyled'>
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF </li>
            </ul>
          </div>
          { /*column 1 */}
          <div classname="col">
            <h4>STUFF</h4>
            <ul className='list-unstyled'>
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF </li>
            </ul>
          </div>

        </div>
        <hr/>
        <div className='row'></div>
        <p className='col-sm'>
          &copy;{new Date().getFullYear} FITTRACK | All rights reserved |Terms Of Service |Privacy
        </p>

      </div>
     
      
    </div>
  )
}

export default Footer
