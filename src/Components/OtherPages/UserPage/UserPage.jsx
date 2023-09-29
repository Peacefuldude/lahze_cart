import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

// Style
import styles from './UserPage.module.css'

// Images
import userprof from '../../../Images/partner2.png'
import phone from '../../../Images/phone.png'
import instagram from '../../../Images/instagram.png'
import home from '../../../Images/home.png'
import edit from '../../../Images/edit.png'
import exit from '../../../Images/exit.png'
import attention from '../../../Images/attantion.png'
import close from '../../../Images/close.png'

// Componentes
import Activation from "./Activation/Activation";
import Remaining from "./Remaining/Remaining";

const UserPage = () => {

    // const userToken = JSON.parse(localStorage.getItem('user'));

    // const axiosConficPost = {
    //     headers: {
    //         "Dev": "vip4c@reDevelop3r",
    //         "Authorization": "Bearer " + userToken.token,
    //     },
    // };

    // const [userProfile, setUserProfile] = useState([]);

    // useEffect(() => {
    //     const getServices = async () => {
    //         axios.get("https://api.vip4care.ir/user/profile", axiosConficPost)
    //             .then((response)=> setUserProfile(response.data.user))
    //             // .catch((error)=> console.log(error))
    //     };

    //     getServices();

    // }, []);

    // button handlers

    const [btn1, setBtn1] = useState(true);
    const [btn2, setBtn2] = useState(false);

    const btn1Handler = () => {
        setBtn1(!btn1);
        setBtn2(false);
    }

    const btn2Handler = () => {
        setBtn2(!btn2);
        setBtn1(false);
    }

    // LogoutHandler func and state

    const Navigate = useNavigate();

    const [alert, setAlert] = useState(false);
    const LogoutHandler = () => {
        setAlert(true)
    }

    const logoutCancel = () => {
        setAlert(false)
    }

    const logoutActivate = () => {
        // Delete the user data from the computer.
        // localStorage.clear("user");
        console.log("askljfgalsg");
        Navigate("/home");
    }

    // navbar funcs and states
    const [navbarAvtive, setNavbarActive] = useState(false)
    const navbarHandler = () => {
        setNavbarActive(!navbarAvtive)
    }

    return ( 
        <div className={styles.UserPage_Container}>
            <section className={styles.right_sec}>
                <section className={styles.user_profile_info}>
                    <img src={userprof} alt="user profile" className={styles.user_prof_img}/>
                    <h3>کافه انسان</h3>
                </section>
                <section className={styles.user_profile_info_phone}>
                    <section>
                        <img src={userprof} alt="user profile" className={styles.user_prof_img}/>
                        <h3>کافه انسان</h3>
                    </section>
                    <div onClick={navbarHandler}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </section>
                <section className={styles.user_info_sec}>
                    <section>
                        <p>جانبازان،بلوار مطهری، برج های مسکونی راژیا</p>
                    </section>
                    <section>
                        <img src={phone} alt="telephone" />
                        <p>0284368482</p>
                    </section>
                    <section>
                        <img src={instagram} alt="instagram" />
                        <p>coffee_ensannnn</p>
                    </section>
                </section>
                <section className={styles.user_btn_sec}>
                    <section>
                        <img src={edit} alt="edit" />
                        <p>ویرایش اطلاعات</p>
                    </section>
                    <section>
                        <img src={home} alt="home" />
                        <p>خانه</p>
                    </section>
                    <section onClick={LogoutHandler}>
                        <img src={exit} alt="exit" />
                        <p>خروج از حساب کاربری</p>
                    </section>
                </section>
            </section>
            <section className={styles.left_sec}>
                <section className={styles.btns_sec}>
                    <button className={btn1 ? styles.user_btn_active : styles.user_btn_notactive2} onClick={btn1Handler}>فعال سازی</button>
                    <button className={btn2 ? styles.user_btn_active : styles.user_btn_notactive1} onClick={btn2Handler}>موجودی</button>
                </section>
                <section className={styles.inputs_sec}>
                    {
                        btn1 ?
                        <  Activation  />
                            :
                        <  Remaining  />
                    }
                </section>
            </section>
            <div className={alert ? styles.alert_div : styles.alert_div_notactive}>
                <section className={styles.alert_sec} >
                    <div className={styles.alert_div_message}>
                        <img src={attention} alt="green tic for an alert message" />
                        <p>می خواهید از حساب خود خارج شوید؟</p>
                    </div>
                    <div className={styles.alert_btn_div}>
                        <button className={styles.logout_activate} onClick={logoutActivate}>بلی</button>
                        <button className={styles.logout_cancel} onClick={logoutCancel}>خیر</button>
                    </div>
                </section>
            </div>
            <div className={navbarAvtive ? styles.navbarAvtive : styles.navbarDeactive}>
                <img className={styles.nav_close_btn} src={close} alt="close button" onClick={navbarHandler} />
                <section className={styles.user_btn_sec_fornav}>
                    <section>
                        <img src={edit} alt="edit" />
                        <p>ویرایش اطلاعات</p>
                    </section>
                    <section>
                        <img src={home} alt="home" />
                        <p>خانه</p>
                    </section>
                    <section onClick={LogoutHandler}>
                        <img src={exit} alt="exit" />
                        <p>خروج از حساب کاربری</p>
                    </section>
                </section>
            </div>
        </div>
     );
}
 
export default UserPage;