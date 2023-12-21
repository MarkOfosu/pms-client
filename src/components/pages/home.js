import React from 'react'
import Layout from '../layout';
import '../styles/home.css';
import '../../global.css';
import Footer from '../pages/footer'
// import background from '../../background.jpg';

const Home = () => {
    return (
      <div>
        <Layout />
          <div >
            <div className='home-container'>
                <h1>Welcome</h1>
                <p>Please {" "}</p>
                <p>
                <a href='/login'> sign in </a>
                </p>
                <p>or</p>
                <p><a href='/userRegistration'> register </a>
                </p>
                <p>
                to continue.</p>
            </div>
          <Footer />
          </div>
      </div>  
    )
}

export default Home;