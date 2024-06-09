import React from 'react';
import '../styles/home.css';
import '../../global.css';
import Footer from '../../components/elements/footer';
import NavigationCard from '../elements/NavigationCard';
// import '../styles/slider.css';

// <header className="page-header relative full-page-section">
// <h1 data-text="Welcome">Welcome</h1>

// </header>
const Home = () => {
  return (
      <>
          <section className="slider-section full-page-section">
          <NavigationCard /> 
          </section>
          <Footer />
      </>
  );
}

export default Home;