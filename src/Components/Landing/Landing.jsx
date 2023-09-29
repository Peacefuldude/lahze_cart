import React from 'react'
import { Link } from 'react-router-dom';
// Images
import Landingimg from '../../Images/LandingNoBack.png'
import littlearrow from '../../Images/littlearrow.png'
import arrow from '../../Images/arrow.png'

// Styles
import styles from './Landing.module.css'

const Landing = () => {
    return ( 
        <div className={styles.Landing_Container}>
            <img src={Landingimg} alt="landing image" />
            <section className={styles.landing_text_sec}>
                <h1>لحظه کارت،<br/> لحظه سازی از جنس صدای شما</h1>
                <img src={arrow} alt="arrow icon" className={styles.arrow_img}/>
                <section className={styles.landing_btn_sec}>
                    <p>ما از لحظه هایی حرف میزنیم که نقاط عطف زندگی هایمان را می سازند.</p>
                    <Link to="/customer"><button className={styles.landing_first_btn}>همین الان هدیه تو آماده کن<img src={littlearrow} alt="littlearrow icon" /></button></Link>
                </section>
            </section>
        </div>
     );
}
 
export default Landing;