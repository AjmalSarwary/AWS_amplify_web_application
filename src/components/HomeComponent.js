import React from 'react';
import GbmSimulation from './gbm/GbmSimulation';
import IntroductionComponent from './gbm/introductioncomponent';
import styles from './HomeComponent.module.css';

function HomeComponent() {
  return (
    <div className={styles.container}>
      {/* Your existing header and navigation */}
      <header className={styles.headerFooter}>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="Home.html" className={styles.navLink}>Home</a>
            </li>
            <li className={styles.navItem}>
              <a href="Projects.html" className={styles.navLink}>Portfolio</a>
            </li>
            <li className={styles.navItem}>
              <a href="About.html" className={styles.navLink}>About</a>
            </li>
          </ul>
        </nav>
      </header>

      
    

     
      <main className={styles.mainContent}>
	  
        <h1 className={styles.titleH1}>A curated display of my work</h1>
		
        <p>Welcome to a showcase of my recent work and a sneak peek into my ongoing projects.</p>
		
		
		<IntroductionComponent />
		
        <GbmSimulation /> 
		
      </main>

     
      <footer className={styles.headerFooter}>
	  
        <p>© 2023 A.S. </p>
		
      </footer>
	  
    </div>
  );
}

export default HomeComponent;
