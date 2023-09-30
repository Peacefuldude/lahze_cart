import React, { useState, useEffect } from 'react';
// import * as Validate from "./validate"
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from "./Hamkari.module.css"
import axios from "axios";
const Hamkari = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        type: "",
        city:"",
        phonenumber:""
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validate = (data) => {

        const errors = {};
            if (!data.name.trim()) {
                errors.name = "*اجباری"
            } else {
                delete errors.name
            }
            if (!data.email) {
                errors.email = "*اجباری"
            } else if (!/\S+@\S+\.\S+/.test(data.email)) {
                errors.email = "درست نیست"
            } else {
                delete errors.email
            }
        
    
        return errors;
    }
    useEffect(() => {
        setErrors(validate(data))
    }, [data, touched])

    const changeHandler = event => {
        if (event.target.name === "type") {
            setData({ ...data, [event.target.name]: event.target.value })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
    }

    const focusHanlder = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            // notify("You signed up successfully", "success")
            axios.post("link",data)
            .then(Response=>console.log(Response))
        } else {
            // notify("Invalid data!", "error")
            
            setTouched({
                name: true,
                email: true,
                city:true,
                type: true,
                phonenumber:true
            })
        }
    }




    return (
        <div className={styles.motherbox}>
           <section className={styles.background}>
                <section className={styles.navbar}>
                    <  Navbar  />
                </section>
                <br />
                <section className={styles.text}>
                    <p><h1 className={styles.text_topic}>همکاری با ما</h1></p><br /><br />
                    <p>لحظه کارت با افتخار به عنوان یکی از استارت آپ های برتر کشور در عرصه فروش گیفت کارت ها مشغول به فعالیت است، هدف اصلی این استارت آپ ساخت هدیه ایی خلاقانه به منظور ایجاد لحظات شاد و خاطره انگیز است.</p><br />
                    <p><h3 className={styles.text_mein}>لحظه کارت به کسب و کار شما چه کمکی می کند:</h3></p>
                    <p>ما با هدف کمک کردن به Camping Marketing شما به تولید گیفت کارت های هوشمند پرداخته ایم و جامعه هدف ما Generation Z یا همان نسل جوان هست و ما با در نظر گرفتن علایق و خواسته های این نسل جوان این گیفت کارت های نوآورانه که با افتخار اعلام میکنیم برای اولین بار در ایران ساخته شده است را طراحی کرده ایم.</p>
                    <ul className={styles.list}>
                        <header><h1>چرا لحظه کارت:</h1></header>
                        <li>هر تعداد دلخواهی که بخواید در سراسر ایران براتون ارسال می کنیم</li>
                        <li>مهم نیست چه کسب و کاری دارید ما برای شما هم گیفت کارت درست می کنیم.</li>
                        <li>شما حتی میتونید براساس برند و لوگوی خودتون و با سلیقه خودتون لحظه کارت سفارش بدید.</li>
                        <dl>دیگه بقیه صحبت ها باشه برای وقتی که شمارتونو میذارید و ما باهاتون تماس میگیریم:</dl>
                    </ul>

    {/* form */}


                    <form onSubmit={submitHandler} className={styles.formContainer}>
            <section className={styles.formingresponse}>
                <section className={styles.formingresponsecol} >
                <div className={styles.formField}>
                    <label>نام و نام خانوادگی</label>
                    <input
                        className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput}
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={changeHandler}
                        onFocus={focusHanlder}
                    />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>


                <div className={styles.formField}>
                    <label for="city">شهر</label>
                            <select className={styles.city} name="city">
                                <option value="تهران">تهران</option>
                                <option value="گیلان">گیلان</option>
                                <option value="قزوین">قزوین</option>
                                <option value="اصفهان">اصفهان</option>
                                <option value="مشهد">مشهد</option>
                                <option value="شیراز">شیراز</option>
                                <option value="زنجان">زنجان</option>
                            </select>
                            
                            {errors.phonenumber && touched.phonenumber && <span className={styles.error}>{errors.city}</span>}

                </div>
                </section>
                    <section className={styles.formingresponsecol}>
                        <div className={styles.formField}>
                                    <label className={styles.labelrect}>شماره همراه</label>
                                        <input className={styles.Rectangle131} onChange={changeHandler} value={data.phonenumber} type="text" name="phonenumber"  onFocus={focusHanlder}  />
                                        {errors.phonenumber && touched.phonenumber && <span className={styles.error}>{errors.phonenumber}</span>}
                            </div> 


                            <div className={styles.formField}>
                                <label>ایمیل</label>
                                <input
                                    className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                                    type="text"
                                    name="email"
                                    value={data.email}
                                    onChange={changeHandler}
                                    onFocus={focusHanlder} />
                                {errors.email && touched.email && <span>{errors.email}</span>}
                            </div>
                    </section>  
            </section>
            <section className={styles.formingresponse}>
            <section className={styles.formingresponsecol}>
                <div className={styles.formField}>
                <label>  حوزه کاری </label>
                    <div className={styles.checkBoxContainer}>
                        <input
                            type="radio"
                            name="type"
                            value={"کافی شاپ"}
                            onChange={changeHandler}
                            onFocus={focusHanlder} />
                            <label>کافی شاپ</label>
                            <br />
                            <input
                            type="radio"
                            name="type"
                            value={" رستوران"}
                            onChange={changeHandler}
                            onFocus={focusHanlder} />
                            <label>رستوران</label>
                            <br />
                            <input
                            type="radio"
                            name="type"
                            value={" سایر موارد"}
                            onChange={changeHandler}
                            onFocus={focusHanlder} />
                            <label>سایر موارد</label>
                        
                    </div>
                    {errors.type && touched.type && <span>{errors.type}</span>}
                    </div>
            </section>


            <section className={styles.formingresponsecol}>
                <div className={styles.formField}>
                    <label>تعداد سفارش لحظه کارت</label>   
                    <div className={styles.checkBoxContainer}>
                        <input
                            type="radio"
                            name="Buynum"
                            value={"10-20"}
                            onChange={changeHandler}
                            onFocus={focusHanlder} />
                            <label>10-20</label>
                            <br />
                            <input
                            type="radio"
                            name="Buynum"
                            value={"20-50"}
                            onChange={changeHandler}
                            onFocus={focusHanlder} />
                            <label>20-50</label>
                            <br />
                            <input
                            type="radio"
                            name="Buynum"
                            value={"50-100"}
                            onChange={changeHandler}
                            onFocus={focusHanlder} />
                            <label>50-100</label>
                            <br />
                            <input
                            type="radio"
                            name="Buynum"
                            value={" سایر موارد"}
                            onChange={changeHandler}
                            onFocus={focusHanlder} />
                            <label>سایر موارد</label>
                        
                    </div>
                    {errors.type && touched.type && <span>{errors.type}</span>}
                    </div>
                    </section>
                </section>
                <div className={styles.formButtons}>
                    <button type="submit">ارسال</button>
                </div>
            </form>

                </section>
            </section>
           <Footer/>
        </div>
    );
};

export default Hamkari;