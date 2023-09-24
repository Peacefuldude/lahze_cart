import React, { useContext, useState,useEffect,useRef } from 'react';
import styles from "./Shomarecart.module.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation,faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'
import { Helmet } from "react-helmet";
import axios from "axios";
const Shomarecart = () => {


        //for input focus
        const ref = useRef(null);    
        const ref2 = useRef(null);
        const ref3 = useRef(null);
        const ref4 = useRef(null);
        const ref5 = useRef(null);
        const ref6 = useRef(null);
        const ref7 = useRef(null);
        const ref8 = useRef(null);
        const ref9 = useRef(null);
        const ref10 = useRef(null);
        const ref11 = useRef(null);
        const ref12 = useRef(null);
        const ref13 = useRef(null);
        const ref14 = useRef(null);
        const ref15 = useRef(null);
        const ref16 = useRef(null);

        const Keyup=(event)=>{
            
            if(event.target.id=="ref2")
            {ref2.current.focus();}
            else
            if(event.target.id=="ref3")
            {ref3.current.focus();}
            else
            if(event.target.id=="ref4")
            {ref4.current.focus();}
            else
            if(event.target.id=="ref5")
            {ref5.current.focus();}
            else
            if(event.target.id=="ref6")
            {ref6.current.focus();}
            else
            if(event.target.id=="ref7")
            {ref7.current.focus();}
            else
            if(event.target.id=="ref8")
            {ref8.current.focus();}
            else
            if(event.target.id=="ref9")
            {ref9.current.focus();}
            else
            if(event.target.id=="ref10")
            {ref10.current.focus();}
            else
            if(event.target.id=="ref11")
            {ref11.current.focus();}
            else
            if(event.target.id=="ref12")
            {ref12.current.focus();}
            else
            if(event.target.id=="ref13")
            {ref13.current.focus();}
            else
            if(event.target.id=="ref14")
            {ref14.current.focus();}
            else
            if(event.target.id=="ref15")
            {ref15.current.focus();}
            else
            if(event.target.id=="ref16")
            {ref16.current.focus();}
            
        }


    // const inf=useContext(kharidarContext);
    const[Data,SetData]=useState({
        cardNum:""
    })


    
    const Changehandler = (event)=>{
        SetData({...Data,[event.target.name]:event.target.value})
    }

    //valid
    const validate = Data=>{
        const error={};
        
        if(!Data.cardNum.trim()){
            error.cardNum=" !شماره کارت را وارد کنید"
        }else
        if(isNaN(Data.cardNum))
        {
         error.cardNum=" !شماره کارت را درست وارد کنید" 
        }
        else{
            delete error.cardNum;
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
        // for(let i ;i<=16;i++){
        //     code=`${ref`${i}`.current.value}+${code}`
        //     console.log("hello")
        // }
        //نیاز به ریسپانس از بک اند هست که چک شود
        const code=`${ref.current.value}${ref2.current.value}${ref3.current.value}${ref4.current.value}${ref5.current.value}${ref6.current.value}${ref7.current.value}${ref8.current.value}${ref9.current.value}${ref10.current.value}${ref11.current.value}${ref12.current.value}${ref13.current.value}${ref14.current.value}${ref15.current.value}${ref16.current.value}`;
        console.log(code)
        axios.post("link",code)
        .then(Response=>console.log(Response))
    }
    return (

        <div className={styles.login_seller}>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Helmet>
        <div className={styles.left}>

        


            {/* <div className={styles.Group198}> */}
            {/* </div> */}            
            <div className={styles.Group153 }>فقط چند لحظه تا باز کردن کادوت مونده </div>
            <div className={styles.Group154 }> شماره کارت رو وارد کن   </div>

            <form className={styles.cardNum} onSubmit={Submithandler}>
                    <div className={styles.input} >
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref}   id='ref2'  name="cardNum" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref2}  id='ref3'  name="cardNum" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref3}  id='ref4'  name="cardNum" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref4}  id='ref5'  name="cardNum" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref5}  id='ref6'  name="cardNum" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref6}  id='ref7'  name="cardNum" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref7}  id='ref8'  name="cardNum" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref8}  id='ref9'  name="cardNum" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref9}  id='ref10' name="cardNum" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref10} id='ref11' name="cardNum" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref11} id='ref12' name="cardNum" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref12} id='ref13' name="cardNum" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref13} id='ref14' name="cardNum" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref14} id='ref15' name="cardNum" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref15} id='ref16' name="cardNum" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref16}            name="cardNum" type='text' maxLength="1" />
                    
                    
                    </div>
                    <div className={styles.errorbox}>{error.cardNum && Touched.cardNum && <span className={styles.error}>{error.cardNum}</span>}</div>
                <button className={styles.circle}  type='submit'><FontAwesomeIcon icon={faArrowLeftLong} size="2xl" style={{fontSize:"48px",color: "#F4E3EE"}} /></button>
            </form>
            
        </div>
        
<div className={styles.Group420}><div className={styles.image4}></div></div>
    

    </div>

    );
};

export default Shomarecart;