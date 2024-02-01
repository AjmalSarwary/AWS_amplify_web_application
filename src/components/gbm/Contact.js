//Contact.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PortfolioComponent.module.css';


function Contact() {
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
	  
        <h2 >Contact </h2>
		
        <p>This website is a collection of my work samples. </p>
		
		<p> It's meant to present an overview of my portfolio and skill set. </p>
		<p>If you have any feedback, inquiries, or any other concerns, I look forward to hearing from you. </p>
		<p> Please feel free to send an email to </p>
		<p>a.sarwary@dividendloops.com</p>
		
		
		
      </main>

     
      <footer className={styles.headerFooter}>
	  
        <p>© 2023 A.S. </p>
		
      </footer>
	  
    </div>
  );
}

export default Contact;