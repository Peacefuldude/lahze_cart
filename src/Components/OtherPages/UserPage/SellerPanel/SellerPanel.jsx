import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';
// Style
import styles from './Sellerpanel.module.css'

// Images
import userprof from '../../../../Images/partner2.png'
import phone from '../../../../Images/phone.png'
import instagram from '../../../../Images/instagram.png'
import home from '../../../../Images/home.png'
import edit from '../../../../Images/edit.png'
import exit from '../../../../Images/exit.png'
import attention from '../../../../Images/attantion.png'
import close from '../../../../Images/close.png'
import tic from '../../../../Images/tic.png'
import greentic from '../../../../Images/green_tic.png'

const SellerPanel = () => {

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

    // Gathering data func and states
    const [data, setData] = useState({
        name: "",
        phonenumber: "",
        cardnumber: "",
        amount: ""
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    // Alert message state
    const [cardalert, setcardalert] = useState(false);
    const AlertHandler = () => {
        setcardalert(true)
        setTimeout(() => {
            setcardalert(false)
            console.log(alert);
        }, 2000);
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

    const submitHandler = (event) => {
        event.preventDefault();
        const LOGIN_DATA = data;
        setButtonDisable(true)
        axios.post("https://api.vip4care.ir/auth/login", LOGIN_DATA, axiosConficPost)
            .then((response)=> {
                if (response.data.success) {
                    localStorage.setItem('user', JSON.stringify(response.data))
                    setWelcomeMassage(true)
                    AlertHandler();
                }
            })

            .catch((errors)=> {
                if (errors.response.data.message) {
                    setIsError_1(errors.response.data.message)
                    console.log(errors)
                    setButtonDisable(false)
                }
            })

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
                    <div className={styles.Activation_Container}>
                        <form onSubmit={submitHandler}>
                            <section className={styles.activation_input_sec}>
                                <p>نام</p>
                                <input
                                    className={styles.formInput}
                                    type='text'
                                    name='name'
                                    value={data.name}
                                    onChange={changeHandler}
                                />
                            </section>
                            <section className={styles.activation_input_sec}>
                                <p>شماره تلفن</p>
                                <input
                                    className={styles.formInput}
                                    type='text'
                                    name='phonenumber'
                                    value={data.phonenumber}
                                    onChange={changeHandler}
                                />
                            </section>
                            <section className={styles.activation_input_sec}>
                                <p>شماره کارت</p>
                                <input
                                    className={styles.formInput}
                                    type='text'
                                    name='cardnumber'
                                    value={data.cardnumber}
                                    onChange={changeHandler}
                                />
                            </section>
                            <section className={styles.activation_input_sec}>
                                <p>مبلغ شارژ</p>
                                <input
                                    className={styles.formInput}
                                    type='text'
                                    name='amount'
                                    value={data.amount}
                                    onChange={changeHandler}
                                />
                                <span>ریال</span>
                            </section>
                            <section className={styles.err_sec}>
                                <p>{isError_1}</p>
                            </section>
                            <section className={styles.activation_btn_sec}>
                                <button ><img src={tic} alt="" />فعالسازی</button>
                                <div></div>
                                <div></div>
                            </section>
                            <div className={cardalert ? styles.alert_div : styles.alert_div_notactive}>
                                <section className={styles.alert_sec} >
                                    <img src={greentic} alt="green tic for an alert message" />
                                    <p>کارت با موفقیت فعال شد.</p>
                                </section>
                            </div>
                        </form>
                    </div>
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
 
export default SellerPanel;