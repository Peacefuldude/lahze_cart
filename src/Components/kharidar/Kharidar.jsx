import React, { useState,useEffect } from 'react';
import styles from "./Kharidar.module.css";
import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import axios from "axios";
// import { kharidarContext } from '../App';

const Kharidar = () => {

// const inf=useContext(kharidarContext);
const[Data,SetData]=useState({
        phonenumber:""
    })

const Changehandler = (event)=>{
        SetData({
            ...Data,[event.target.name]:event.target.value

        })
    }



    

    //valid
    const validate = Data=>{
        const error={};
        // console.log(isNaN(Data.phonenumber))
        if(!Data.phonenumber.trim()){
            error.phonenumber=" !شماره تلفن را وارد کنید"
        }else
        if(isNaN(Data.phonenumber))
        {
         error.phonenumber=" !شماره تلفن را درست وارد کنید" 
        }
        else{
            delete error.phonenumber;
        }
        return error;
    }
    //error
    const [error,SetError]=useState({})

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
        console.log("hi");
        axios.post("link",Data)
        .then(Response=>console.log(Response))
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
                
                {/* <div className={styles.phonenumber}> */}
                    
                    {/* <div className={styles.Rectangle131}> */}
                        
                        {/* </div> */}
                        <form className={styles.phonenumber} onSubmit={Submithandler}>
                            <label className={styles.labelrect}>شماره همراه</label>
                        <input className={styles.Rectangle131} onChange={Changehandler} value={Data.phonenumber} type="text" name="phonenumber"  onFocus={Focused}  />
                        {error.phonenumber && Touched.phonenumber && <span className={styles.error}>{error.phonenumber}</span>}
                        <button  className={styles.Rectangle132prim} type='submit'><Link className={styles.links}to="/customerotp">ارسال کد</Link></button>
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