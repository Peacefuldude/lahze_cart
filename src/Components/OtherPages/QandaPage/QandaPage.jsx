import React, { useState } from "react";

// Styles
import styles from './QandaPage.module.css'

// Images
import openmark from '../../../Images/minussign.png'
import closemark from '../../../Images/plussign.png'

// Components
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const QandaPage = () => {

    // Answer States and Funncs
   const [q1state, setQ1state] = useState(false);
   const [q2state, setQ2state] = useState(false);
   const [q3state, setQ3state] = useState(false);
   const [q4state, setQ4state] = useState(false);
   const [q5state, setQ5state] = useState(false);
   const [q6state, setQ6state] = useState(false);
   const [q7state, setQ7state] = useState(false);

   const q1Handler = () => {
      setQ1state(!q1state);
      setQ2state(false);
      setQ3state(false);
      setQ4state(false);
      setQ5state(false);
      setQ6state(false);
      setQ7state(false);
   }

   const q2Handler = () => {
      setQ1state(false);
      setQ2state(!q2state);
      setQ3state(false);
      setQ4state(false);
      setQ5state(false);
      setQ6state(false);
      setQ7state(false);
   }

   const q3Handler = () => {
      setQ1state(false);
      setQ2state(false);
      setQ3state(!q3state);
      setQ4state(false);
      setQ5state(false);
      setQ6state(false);
      setQ7state(false);
   }

   const q4Handler = () => {
      setQ1state(false);
      setQ2state(false);
      setQ3state(false);
      setQ4state(!q4state);
      setQ5state(false);
      setQ6state(false);
      setQ7state(false);
   }

   const q5Handler = () => {
      setQ1state(false);
      setQ2state(false);
      setQ3state(false);
      setQ4state(false);
      setQ5state(!q5state);
      setQ6state(false);
      setQ7state(false);
   }

   const q6Handler = () => {
    setQ1state(false);
    setQ2state(false);
    setQ3state(false);
    setQ4state(false);
    setQ5state(false);
    setQ6state(!q6state);
    setQ7state(false);
 }

 const q7Handler = () => {
    setQ1state(false);
    setQ2state(false);
    setQ3state(false);
    setQ4state(false);
    setQ5state(false);
    setQ6state(false);
    setQ7state(!q7state);
 }

    return ( 
        <div className={styles.QandaPage_Container}>
            <section className={styles.main_qnada_sec}>
                <section className={styles.navbar_qnda_sec}>
                    <  Navbar  />
                </section>
                <section className={styles.questions_sec}>
                    <h1>سوالات متداول</h1>
                    <div className={styles.certainq_div}>
                        <div onClick={q1Handler}>
                            <p>چگونه می‌توانم لحظه کارت را تهیه کنم؟</p>
                            <img src={q1state ? openmark : closemark} alt="question mark closed icon" />
                        </div>
                        <span className={q1state ? styles.span_active : styles.spandeActive}>شما می توانید با مراجعه به مراکز و فروشگاه های تحت قرارداد با ما ، لحظه کارت خود را تهیه نمایید . همچنین می‌توانید با مراجعه به سایت ما به آدرس www.lahzecard.com از مراکز و فروشگاه های تحت قرار داد با ما آگاهی حاصل فرمایید.</span>
                    </div>
                    <div className={styles.certainq_div}>
                        <div onClick={q2Handler}>
                            <p>چگونه می توانم برای لحظه کارت خود پیام صوتی یا متنی ثبت کنم؟</p>
                            <img src={q2state ? openmark : closemark} alt="question mark closed icon" />
                        </div>
                        <span className={q2state ? styles.span_active : styles.spandeActive}>شما می توانید پس از فعال سازی لحظه کارت خود توسط صندوقدار مرکز یا فروشگاه مربوطه ، qr code پشت کارت خود را اسکن کرده و با وارد کردن شماره تلفن خود برای لحظه کارت خود پیام صوتی یا متنی دلخواه خود را ثبت فرمایید.</span>
                    </div>
                    <div className={styles.certainq_div}>
                        <div onClick={q3Handler}>
                            <p>آیا میتوان از لحظه کارت خریداری شده برای مراکز های دیگر استفاده کرد؟</p>
                            <img src={q3state ? openmark : closemark} alt="question mark closed icon" />
                        </div>
                        <span className={q3state ? styles.span_active : styles.spandeActive}>خیر ، لحظه کارت فقط قابل استفاده در مرکزی می باشد که کارت از آنجا تهیه شده است می باشد.</span>
                    </div>
                    <div className={styles.certainq_div}>
                        <div onClick={q4Handler}>
                            <p>چگونه می توانم از لحظه کارت استفاده کنم؟</p>
                            <img src={q4state ? openmark : closemark} alt="question mark closed icon" />
                        </div>
                        <span className={q4state ? styles.span_active : styles.spandeActive}>بعد از تحویل هدیه خود ، شما می‌توانید با اسکن qr code پشت کارت خود و وارد کردن رمز کارت که در زیر qr code ثبت شده است ، پیام صوتی یا متنی دوست خود را ببینید . همچنین از مبلغ کارت و باقی مانده اعتبار آن و تاریخ انقضا کارت مطلع شوید . همچنین آدرس مرکز یا فروشگاهی که می‌توانید از امکانات آن استفاده فرمایید در همان صفحه به شما نمایش داده می‌شود. با مراجعه به مکان نمایش داده شده و تحویل کارت به صندوقدار می توانید از لحطه کارت خود استفاده کنید . 
لحظه کارت ، همراه لحظه های خوش شما</span>
                    </div>
                    <div className={styles.certainq_div}>
                        <div onClick={q5Handler}>
                            <p>آیا لحظه کارت تاریخ انقضاء دارد؟</p>
                            <img src={q5state ? openmark : closemark} alt="question mark closed icon" />
                        </div>
                        <span className={q5state ? styles.span_active : styles.spandeActive}>بله ، پس از فال سازی لحظه کارت شما توسط صندوقدار ، کارت شما به مدت ...... اعتبار دارد . همچنین شما می توانید با اسکن qr code پشت کارت و وارد کردن رمز آن ، از زمان اتمام اعتبار کارت خود مطلع شوید .</span>
                    </div>
                    <div className={styles.certainq_div}>
                        <div onClick={q6Handler}>
                            <p>چگونه می توانم از مانده اعتبار لحظه کارت خود مطلع شوم؟</p>
                            <img src={q6state ? openmark : closemark} alt="question mark closed icon" />
                        </div>
                        <span className={q6state ? styles.span_active : styles.spandeActive}>شما می توانید با اسکن qr code پشت کارت و وارد کردن رمز ثبت شده زیر qr code ، از مانده اعتبار لحظه کارت خود مطلع شوید.</span>
                    </div>
                    <div className={styles.certainq_div}>
                        <div onClick={q7Handler}>
                            <p>آیا لحظه کارت قابل استرداد است؟</p>
                            <img src={q7state ? openmark : closemark} alt="question mark closed icon" />
                        </div>
                        <span className={q7state ? styles.span_active : styles.spandeActive}>خیر ، لحظه کارت پس از فعال سازی ، قابل استرداد نمی باشد . لطفا هنگام تصمیم گیری خود ، دقت فرمایید.</span>
                    </div>
                </section>
            </section>
            <  Footer  />
        </div>
     );
}
 
export default QandaPage;