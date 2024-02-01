//Home.js 
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeComponent.module.css';

function HomeComponent() {
  return (
    <div className={styles.container}>
      
      <header className={styles.headerFooter}>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
             
			  <Link to="/" className={styles.navLink}>Home</Link>
            </li>
            <li className={styles.navItem}>
              
			  <Link to="/portfolio" className={styles.navLink}>Portfolio</Link> 
            </li>
            <li className={styles.navItem}>
              <Link to="/contact" className={styles.navLink}>Contact</Link> 
            </li>
          </ul>
        </nav>
      </header>

      
    

     
      <main className={styles.mainContent}>
	  
	  <h2> Home </h2>
	  
        <h3 className={styles.titleH1}>A curated display of my work</h3>
		
        <p>Welcome to a showcase of my recent work and a sneak peek into my ongoing projects.</p>
		<p>
		   <ul>
			    <li>Stochastic Simulation of Investment Scenarios - Interactive Widget</li>
			</ul> 
		</p>
<div className="mainContent">
		 <div className="tags">
        <span className="tag" >Data Modeling</span>
		<span className="tag">Plotly</span>
        <span className="tag">Javascript</span>
		<span className="tag">React</span>
		<span className="tag">AWS</span>
        <span className="tag">Live Dashboard</span>

       

	  </div>
	  </div>
		
		<Link to="/portfolio">
  <img
    src="/gbm.png"
    alt="Portfolio Preview"
    style={{ width: '40%' }} 
  />
</Link>
		
      </main>

     
      <footer className={styles.headerFooter}>
	  
        <p>© 2023 A.S. </p>
		
      </footer>
	  
    </div>
  );
}

export default HomeComponent;
