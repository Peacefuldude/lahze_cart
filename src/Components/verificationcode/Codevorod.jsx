import React, { useState } from 'react';
import styles from "./codevorod.module.css"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation,faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import {useRef} from 'react';
import axios from "axios";

const Codevorod = () => {
    const[Data,SetData]=useState({
        phonenumber:""
    })

    const Changehandler = (event)=>{
        SetData({
            ...Data,[event.target.name]:event.target.value

        }) 

    }





    //for input focus
    const ref = useRef(null);    
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const Keyup=(event)=>{
        if(event.target.name=="ref2")
        {ref2.current.focus();}
        else
        if(event.target.name=="ref3")
        {ref3.current.focus();}
        else
        if(event.target.name=="ref4")
        {ref4.current.focus();}
        
    }

    const Submithandler = (event)=>{
        event.preventDefault();
        //نیاز به ریسپانس از بک اند هست که چک شود
        const code=`${ref.current.value}${ref2.current.value}${ref3.current.value}${ref4.current.value}`;
        // console.log(code)
        axios.post("link",code)
        .then(Response=>console.log(Response))
    }

    //
    return (


    <div className={styles.login_seller}>


        <div className={styles.left}>

        


            {/* <div className={styles.Group198}> */}


                <div className={styles.Union}> 
                 


                    <div className={styles.joziyat}>
                        <div className={styles.header}>لطفا کد ارسال شده را وارد کنید </div>
                        
                        {/* <div className={styles.phonenumber}> */}
                            
                            {/* <div className={styles.Rectangle131}> */}
                                
                                {/* </div> */}
                            <form className={styles.phonenumber} onSubmit={Submithandler}>
                                {/* <input className={styles.Rectangle131} onChange={Changehandler} value={Data.phonenumber} type="text" name="phonenumber" /> */}
                               
                                    
                                <div className={styles.input} >
                                    <input className={styles.input1} onChange={Changehandler} onKeyUp={Keyup} ref={ref} name='ref2' id='input1' type='text' maxLength="1" />
                                    <input className={styles.input2} onChange={Changehandler} onKeyUp={Keyup} ref={ref2} name='ref3' id='input2' type='text' maxLength="1" />
                                    <input className={styles.input3} onChange={Changehandler} onKeyUp={Keyup} ref={ref3} id='input3' name='ref4' type='text' maxLength="1" />
                                    <input className={styles.input4} onChange={Changehandler} onKeyUp={Keyup} ref={ref4} id='input4' type='text' maxLength="1" />
                                </div>

                            {/*  */}
                            {/*  */}
  {/*شرط های لازم واسه کد ورود باید در این قسمت اضافه شود */}
                                <div className={styles.errore}>.کد وارد شده صحیح نمی باشد<FontAwesomeIcon icon={faTriangleExclamation} style={{margin:"0px 0 0 12px",color: "#ff0000",}} /></div>
                                <button className={styles.Rectangle132prim} type='submit'>  <Link className={styles.links} to="/UserPage">تایید کد</Link></button>
                                <button className={styles.Rectangle132pp} type='submit'> ارسال مجدد کد</button>
                            
                            {/*  */}
                            {/*  */}
                            {/*  */}

                            </form>
                        {/* </div> */}
                        
                        
                    </div>
                </div>
            {/* </div> */}            
            
            <Link to="/seller" className={styles.circle}><FontAwesomeIcon icon={faArrowLeftLong} size="2xl" style={{fontSize:"48px",color: "#F4E3EE"}} /></Link>
        </div>
        
          
        
        <div className={styles.Group420}>
            <div className={styles.image4}></div>
            <div className={styles.Group153}>چند قدم تا ساخت لحظات شیرین برای نزدیکانت با لحظه کارت</div>     
        </div>

    

    </div>
    );
};

export default Codevorod;