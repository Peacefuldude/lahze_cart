import React from "react";

// Styles
import styles from './SocialCumments.module.css'

// Images
import cumment1 from '../../Images/cumment1.jpg'
import cumment2 from '../../Images/cumment2.jpg'
import cumment3 from '../../Images/cumment3.jpg'
import cumment4 from '../../Images/cumment4.jpg'
import cumment5 from '../../Images/cumment5.jpg'

// Components
import CertainCumment from "./CertainCumment/CertainCumment";

const SocialCumments = () => {
    return ( 
        <div className={styles.SocialCumments_Container}>
            <div className={styles.background_div}>
                <section className={styles.icons_sec}>
                    <section className={styles.img1}>
                        <img className={styles.abcde} src={cumment2} alt="customer profile picture" />
                    </section>
                    <section className={styles.img3}>
                        <img className={styles.abcde} src={cumment3} alt="customer profile picture" />
                    </section>
                    <section className={styles.img5}>
                        <img className={styles.abcde} src={cumment5} alt="customer profile picture" />
                    </section>
                    <section className={styles.img2}>
                        <img className={styles.abcde} src={cumment1} alt="customer profile picture" />
                    </section>
                    <section className={styles.img4}>
                        <img className={styles.abcde} src={cumment4} alt="customer profile picture" />
                    </section>
                </section>
                <section className={styles.cumment_sec}>
                    <  CertainCumment  />
                </section>
                <section className={styles.icons_sec}>
                    <section className={styles.img4}>
                        <img className={styles.abcde} src={cumment4} alt="customer profile picture" />
                    </section>
                    <section className={styles.img2}>
                        <img className={styles.abcde} src={cumment1} alt="customer profile picture" />
                    </section>
                    <section className={styles.img5}>
                        <img className={styles.abcde} src={cumment5} alt="customer profile picture" />
                    </section>
                    <section className={styles.img3}>
                        <img className={styles.abcde} src={cumment3} alt="customer profile picture" />
                    </section>
                    <section className={styles.img1}>
                        <img className={styles.abcde} src={cumment2} alt="customer profile picture" />
                    </section>
                </section>
            </div>
        </div>
     );
}
 
export default SocialCumments;