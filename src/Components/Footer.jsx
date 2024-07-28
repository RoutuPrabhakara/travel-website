import React from 'react'

function Footer() {
  return (
    <div>
        
        <div className="Footer m-5 p-5  ">
            <h3 className="text-white">Trippy</h3>
            <p className="text-white">Choose Your Favourite Destination</p>
            <div className="icons  d-flex  gap-3 justify-content-space-between">
                <p><i class="bi bi-facebook"></i></p>
                <p><i class="bi bi-instagram"></i></p>
                <p><i class="bi bi-threads"></i></p>
                <p><i class="bi bi-threads"></i></p>
                
            </div>
            <div className="dis d-flex justify-content-between">
            <div className="project text-white">
            <h3 className="text-white">Project</h3>
            <p>Charging</p>
            <p>status</p>
            <p>Licence</p>
            <p>All Versions</p>
        </div>
        <div className="project text-white">
            
            <h3 className="text-white">Community</h3>
            <p>GitHub</p>
            <p>issues</p>
            <p>project</p>
            <p>Twitter</p>
        </div>

        <div className="project text-white">
            <h3 className="text-white">Help</h3>
            <p>Support</p>
            <p>Troubleshooting</p>
            <p>contact us</p>
           
        </div>
        </div>

        </div>
       
       
    </div>
  )
}

export default Footer