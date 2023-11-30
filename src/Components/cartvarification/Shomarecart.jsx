import React, { useContext, useState,useEffect,useRef } from 'react';
import styles from "./Shomarecart.module.css";
import { Link,useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation,faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'
import { Helmet } from "react-helmet";
import axios from "axios";
const Shomarecart = () => {
    const Navigate = useNavigate();
    
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
            
            if(event.code==="ArrowRight"){

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
                
            }else if(event.code==="ArrowLeft"){
                
                // if(event.target.id=="ref2")
                // {ref.current.focus();}
                // else
                if(event.target.id=="ref3")
                {ref.current.focus();}
                else
                if(event.target.id=="ref4")
                {ref2.current.focus();}
                else
                if(event.target.id=="ref5")
                {ref3.current.focus();}
                else
                if(event.target.id=="ref6")
                {ref4.current.focus();}
                else
                if(event.target.id=="ref7")
                {ref5.current.focus();}
                else
                if(event.target.id=="ref8")
                {ref6.current.focus();}
                else
                if(event.target.id=="ref9")
                {ref7.current.focus();}
                else
                if(event.target.id=="ref10")
                {ref8.current.focus();}
                else
                if(event.target.id=="ref11")
                {ref9.current.focus();}
                else
                if(event.target.id=="ref12")
                {ref10.current.focus();}
                else
                if(event.target.id=="ref13")
                {ref11.current.focus();}
                else
                if(event.target.id=="ref14")
                {ref12.current.focus();}
                else
                if(event.target.id=="ref15")
                {ref13.current.focus();}
                else
                if(event.target.id=="ref16")
                {ref14.current.focus();}

                if(event.target.id=="ref17")
                {ref15.current.focus();}
            }
        }


    // const inf=useContext(kharidarContext);
    const[Data,SetData]=useState({
        cardNum1:"",
        cardNum2:"",
        cardNum3:"",
        cardNum4:"",
        cardNum5:"",
        cardNum6:"",
        cardNum7:"",
        cardNum8:"",
        cardNum9:"",
        cardNum10:"",
        cardNum11:"",
        cardNum12:"",
        cardNum13:"",
        cardNum14:"",
        cardNum15:"",
        cardNum16:""

    })
    const[cardNumber,SetCardnumber]=useState("")
  
    
    const Changehandler = (event)=>{
        SetData({...Data,[event.target.name]:event.target.value})
        // SetData()
        SetCardnumber(`${Data.cardNum1}${Data.cardNum2}${Data.cardNum3}${Data.cardNum4}${Data.cardNum5}${Data.cardNum6}${Data.cardNum7}${Data.cardNum8}${Data.cardNum9}${Data.cardNum10}${Data.cardNum11}${Data.cardNum12}${Data.cardNum13}${Data.cardNum14}${Data.cardNum15}${Data.cardNum16}`)
        console.log(cardNumber)
        console.log(event.target.value)
        console.log(Data)

    }

    //valid
    const validate = (Data)=>{
        const error={};
            console.log(Data)
        if(Data.length<16){
            error.cardNum=" !شماره کارت را کامل  کنید"

            console.log("cardNumber")

            
        }else
        if(isNaN(Data))
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
        console.log(Data)
        SetCardnumber(`${Data.cardNum1}${Data.cardNum2}${Data.cardNum3}${Data.cardNum4}${Data.cardNum5}${Data.cardNum6}${Data.cardNum7}${Data.cardNum8}${Data.cardNum9}${Data.cardNum10}${Data.cardNum11}${Data.cardNum12}${Data.cardNum13}${Data.cardNum14}${Data.cardNum15}${Data.cardNum16}`)
        SetError(validate(cardNumber))
        console.log(error)
    },[Data,cardNumber])
    
    const [Touched,SetTouched]=useState({})

    const Focused=event=>{
        SetTouched({...Touched,[event.target.name]:true})
    }
    const UserToken=JSON.parse(localStorage.getItem('Lahzeusertoken'));
    const[header,setHeader]=useState({
        headers:{
            "Content-Type":"application/json",   
           "Authorization": "Bearer "+UserToken
        }
      }) 
    const Submithandler = (event)=>{
        event.preventDefault();
        axios.get(`http://185.105.239.124/api/user/card${cardNumber}`,header)
                        .then((response)=> {
                            
                            console.log(response)
                            localStorage.setItem('Carddetail', JSON.stringify(response.data.cardInfo))
                            // setBus(response.data.data.buses)
                            setTimeout(()=>Navigate("/ActivationPage"), 100)
                           
                        })
        
                        .catch((errors)=> {
                            console.log(errors)
    
                        })
                
        //نیاز به ریسپانس از بک اند هست که چک شود
        console.log(cardNumber)
        // console.log(Data)
        // Navigate("/ActivationPage")

    }
    return (

        <div className={styles.login_seller}>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Helmet>
        <div className={styles.left}>

        


            {/* <div className={styles.Group198}> */}
            {/* </div> */}            
            <div className={styles.Group153 }>فقط چند لحظه تا آماده کردن کادوت مونده </div>
            <div className={styles.Group154 }> شماره کارت رو وارد کن   </div>

            <form className={styles.cardNum} onSubmit={Submithandler}>
                    <div className={styles.input} >
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref}   id='ref2'  name="cardNum1" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref2}  id='ref3'  name="cardNum2" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref3}  id='ref4'  name="cardNum3" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref4}  id='ref5'  name="cardNum4" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref5}  id='ref6'  name="cardNum5" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref6}  id='ref7'  name="cardNum6" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref7}  id='ref8'  name="cardNum7" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref8}  id='ref9'  name="cardNum8" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref9}  id='ref10' name="cardNum9" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref10} id='ref11' name="cardNum10" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref11} id='ref12' name="cardNum11" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref12} id='ref13' name="cardNum12" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref13} id='ref14' name="cardNum13" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref14} id='ref15' name="cardNum14" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref15} id='ref16' name="cardNum15" type='text' maxLength="1" />
                                    <input className={styles.inputs} onChange={Changehandler} onFocus={Focused} onKeyUp={Keyup} ref={ref16} id='ref17' name="cardNum16" type='text' maxLength="1" />
                    
                    
                    </div>
                    <div className={styles.errorbox}>{error.cardNum && Touched.cardNum1 && <span className={styles.error}>{error.cardNum}</span>}</div>
                    <button  className={styles.circle}  type='submit' disabled={error.cardNum}><FontAwesomeIcon icon={faArrowLeftLong} size="2xl" style={{fontSize:"48px",color: "#F4E3EE"}} /></button>
            </form>
            
        </div>
        
<div className={styles.Group420}><div className={styles.image4}></div></div>
    

    </div>

    );
};

export default Shomarecart;