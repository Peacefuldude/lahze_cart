import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';
// Style
import styles from './HistoryPanel.module.css'

// Images
import userprof from '../../../../Images/partner2.png'
import phone from '../../../../Images/phone.png'
import instagram from '../../../../Images/instagram.png'
import home from '../../../../Images/home.png'
import edit from '../../../../Images/edit.png'
import exit from '../../../../Images/exit.png'
import attention from '../../../../Images/attantion.png'
import close from '../../../../Images/close.png'
import search from '../../../../Images/search.png'

// Components
import Remaningcard from "../Remaining/Remaningcard/Remaningcard";

const HistoryPanel = () => {

    // Gathering data

    const [data, setData] = useState({
        cardnumber: "",
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    const [buttonDisable, setButtonDisable] = useState(false);
    const [welcomeMassage, setWelcomeMassage] = useState(false);

    const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pblVzZXJuYW1lIjoic2luYWtoIiwiaWF0IjoxNjcwMzUxNTE4LCJleHAiOjE2NzEyMTU1MTh9.zUx8Imt-8g7RecOZ39Jez3esTRJ-huQP99uGmArPVqA"
    const axiosConficPost = {
        headers: {
            "Dev": "vip4c@reDevelop3r",
            "Authorization": "Bearer " + jwtToken,

            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers":"*",
            // "Access-Control-Allow-Methods":"*"
        },
    };

    const [isError_1, setIsError_1] = useState("")

    // Sending data to the server to get info

    const submitHandler = (event) => {
        event.preventDefault();
        const LOGIN_DATA = data;
        setButtonDisable(true)
        axios.post("https://api.vip4care.ir/auth/login", LOGIN_DATA, axiosConficPost)
            .then((response)=> {
                if (response) {
                    setWelcomeMassage(true)
                    // Get data that must be shown, here. the const is history.
                }
            })

            .catch((errors)=> {
                if (errors) {
                    setIsError_1(errors.response.data.message)
                    console.log(errors)
                    setButtonDisable(false)
                }
            })
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

                <section className={styles.threebtn}>
                <Link to="/UserPage" className={styles.rowbtn1}><div >فعالسازی</div></Link>
                <Link to="/AmountPanel"className={styles.rowbtn2}><div >موجودی</div></Link>
                <Link to="/HistoryPanel"className={styles.rowbtn3}><div >سوابق</div></Link>
            </section>
                <section className={styles.threebtninf}>
                    <section className={styles.remaining_input_sec}>
                        <input
                            className={styles.formInput}
                            placeHolder="شماره کارت مد نظر را وارد کنید"
                            type='text'
                            name='cardnumber'
                            value={data.cardnumber}
                            onChange={changeHandler}
                        />
                        <img src={search} alt="" onClick={submitHandler}/>
                    </section>
                        <section className={styles.remaining_sec}>
                            {/* <h2>سوابق کارت</h2>
                            {
                                history?.map(service => <  Remaningcard key={service._id} productData={service} />)
                            } */}
                        </section>
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
 
export default HistoryPanel;