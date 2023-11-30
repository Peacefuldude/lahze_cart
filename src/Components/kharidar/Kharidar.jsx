import React, { useState,useEffect } from 'react';
import styles from "./Kharidar.module.css";
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";




const Kharidar = () => {
const[Data,SetData]=useState({
    phone:""
    })

const Changehandler = (event)=>{
        SetData({
            ...Data,[event.target.name]:event.target.value

        })
    }
    const Navigate = useNavigate();


    

    //valid
    const validate = Data=>{
        const error={};
        if(!Data.phone.trim()){
            error.phone=" !شماره تلفن را کامل کنید"
        }else
        if(isNaN(Data.phone))
        {
         error.phone=" !شماره تلفن را درست وارد کنید" 
        }
        else{
            delete error.phone;
        }
        return error;
    }
    //error
    const [error,SetError]=useState({})
    const [err,SetErr]=useState()


    //check for error
    useEffect(()=>{
        SetError(validate(Data))
        console.log(error)
    },[Data])
    
    const [Touched,SetTouched]=useState({})

    const Focused=event=>{
        SetTouched({...Touched,[event.target.name]:true})
    }
    const Submithandler = (event)=>{
        event.preventDefault();
        // const phone=`${Data.phone}`;
        console.log(Data)
        axios.post("http://185.105.239.124/api/user/login",Data)
        .then((response)=> {
            
            if (response) {
                console.log("post shod")
                console.log(response)
                
                localStorage.setItem('phone', JSON.stringify(Data.phone))
                
                setTimeout(()=>Navigate("/customerotp"), 100)
            }
        })

                // .catch((errors)=> {
                //     console.log(errors)

                // })

        .catch((errors)=> {
            console.log(errors);
            SetErr(errors.response.data.message)
            console.log(err);



        })
    }

    return (

        <div>
    <div className={styles.login_seller}>

    <div className={styles.left}>




        {/* <div className={styles.Group198}> */}


            <div className={styles.Union}> 

                <div className={styles.customer}>
                    <div className={styles.Rectangle130}>خریدار</div>
                    <Link to="/seller" className={styles.Rectangle130prim}>فروشنده</Link>
                 </div>           


            <div className={styles.joziyat}>
                <div className={styles.header}>ورود برای آماده سازی کارت هدیه</div>
                
                {/* <div className={styles.phone}> */}
                    
                    {/* <div className={styles.Rectangle131}> */}
                        
                        {/* </div> */}
                        <form className={styles.phonenumber} onSubmit={Submithandler}>
                            <label className={styles.labelrect}>شماره همراه</label>
                        <input className={styles.Rectangle131} onChange={Changehandler} value={Data.phone} type="text" name="phone"  onFocus={Focused}  />
                        {error.phone && Touched.phone && <span className={styles.error}>{error.phone}</span>}
                        {err && <span className={styles.error}>{err}</span>}
                        <button  className={styles.Rectangle132prim} type='submit'><span className={styles.links}>ارسال کد</span></button>
                    </form>
                {/* </div> */}
                
                
            </div>

        </div>
    {/* </div> */}            
    

     
</div>

<div className={styles.Group420}><div className={styles.image4}></div><div className={styles.Group153 }>چند قدم تا ساخت لحظات شیرین برای نزدیکانت با لحظه کارت</div></div>



</div>
        </div>
    );
};

export default Kharidar;