import React from 'react'
import './Style.css'

function Navabar() {
  return (
<div className="Navbar">
    <div>
<nav className='d-flex justify-content-between align-items-center p-3 shadow Navbar_link'>
        <h3 className="">Tripy</h3>
        <div className="ul_list">
            <ul className='d-flex gap-5'>
              <a href="/">Home</a>
              <a href="/About">About</a>
              <a href="/Service">Service</a>
              <a href="/Contacts">Contacts</a>
              <a href="/Signup">Sign up</a>
            </ul>
        </div>

</nav>
<div className="your-journey text-center m-5">
    <h3 className="text-center text-primary">Your Journey Your Story</h3>
    <p className="text-center text-primary">Choose your Fouvarite Destination</p>
    <button className="text-center text-primary p-2 mb-5">Travel Plan</button>
</div>
    </div> 
    </div>

  )
}

export default Navabar