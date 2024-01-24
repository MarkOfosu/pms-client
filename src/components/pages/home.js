import React from 'react'
import '../styles/home.css';
import '../../global.css';
import Footer from '../elements/footer'

const Home = () => {
    return (
      <div>
          <div className='page-container' >
            <div>
                <h1>Welcome</h1>
                <p>Are you a member? {" "}</p>
                <p>
                <a href='/memberPortal'> Member Portal Login </a>
                </p>
                <p>or</p>
                <p><a href='/userRegistration'> Register here</a>
                </p>
                <p>
                to become a member.</p>
            </div>

            
            </div>
          <Footer />
          </div> 
    )
}

export default Home;