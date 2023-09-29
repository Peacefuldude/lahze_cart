import React from "react";

// Satyles
import styles from './CertainCumment.module.css'

// Imgaes
import cum6 from '../../../Images/cumment6.jpg'

const CertainCumment = () => {
    return ( 
        <div className={styles.CertainCumment_Container}>
            <section className={styles.CerCum_Sec}>
                <img src={cum6} alt="user profile" />
                <h3>Sharifi Eli</h3>
                <p>
هدیه ای باحال و جدید بود برای سالگرد ازدواج پدر و مادرم خریدم که باهام ۲تایی رفتن رستوران مورد علاقه مادرم،تونستم براشون خاطره سازی کنم
</p>
            </section>
            <button className={styles.cumment_btn}>ثبت نظر</button>
        </div>
     );
}
 
export default CertainCumment;