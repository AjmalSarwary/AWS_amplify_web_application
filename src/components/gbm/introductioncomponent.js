// IntroductionComponent.js
import React from 'react';
import styles from './gbm_styles.css';


const IntroductionComponent = () => {
  return (
    <div id="introduction">
	<main className={styles.mainContent}>
      <br />
      <p><b> Basic Investment Simulation </b></p>
      <br />
	  
        
      <p>This interactive dashboard, featuring a Geometric Brownian Motion simulation, showcases my competencies in data analysis and web development.</p>
      <p>It represents the synthesis of several skills:</p><br />
	  </main>
      <div className="tags">
        <span className="tag">Data Modeling</span>
        <span className="tag">Javascript</span>
        <span className="tag">AWS</span>
        <span className="tag">Interactive Dashboard</span>
		<span className="tag">React</span>
        <span className="tag">HTML/CSS</span>
        <span className="tag">Web-Analytics</span>
       
      </div><br />
      <p>This widget simulates the wealth evolution of an investment using a stochastic model, presenting the data through an interactive web interface.</p>
    </div>
  );
};

export default IntroductionComponent;
