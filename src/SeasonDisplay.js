import React from 'react';
import './SeasonDisplay.css';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'verano' : 'invierno';
  } else {
    return lat > 0 ? 'invierno' : 'verano';
  } 
};

const seasonConfig = {
  invierno: {
    text: 'Hace Frío',
    icon: 'snowflake'
  },
  verano: {
    text: 'Hace Calor',
    icon: 'sun'
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  const { text, icon } = seasonConfig[season]; 

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left huge ${icon} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-rigth huge ${icon} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;