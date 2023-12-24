import React from 'react'
import Layout from '../layout';
import '../styles/home.css';
import '../../global.css';
import Footer from '../pages/footer'

const Home = () => {
    return (
      <div>
        <Layout />
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