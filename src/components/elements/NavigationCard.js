import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigationCard.css'; 
import image1 from '../../resource/background3.png';
import image2 from '../../resource/background1.png';

const cards = [
  {
    index: 0,
    headline: 'Become a Member',
    button: 'Join Now',
    src: image1,
    link: '/becomeMember'
  },
  {
    index: 1,
    headline: 'Member Portal',
    button: 'Enter Portal',
    src: image2,
    link: '/memberPage'
  }
];

const NavigationCard = () => {
  return (
    <div className="cards">
      <div className="cards__wrapper">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card__image-wrapper">
              <img src={card.src} alt={card.headline} className="card__image" />
              <div className="card__content">
                <h2 className="card__headline">{card.headline}</h2>
                <Link to={card.link} className="card__action btn">
                  {card.button}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationCard;
