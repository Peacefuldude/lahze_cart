import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { AudioRecorder } from 'react-audio-voice-recorder';

// Style
import styles from './ActivationPage.module.css'

// Images
import userlogo from '../../../../Images/partner2.png'
import instagram from '../../../../Images/instagram.png'
import phone from '../../../../Images/phone.png'
import website from '../../../../Images/website.png'
import map from '../../../../Images/map.png'
import attetiongrey from '../../../../Images/attentiongrey.png'
import trash from '../../../../Images/trash.png'
import step1 from '../../../../Images/activationpage1.png'
import step2 from '../../../../Images/activationpage2.png'

// Componentes

const ActivationPage = () => {

    // Voice recording Funcs and states
    const [voiceFile, setVoiceFile] = useState(false);
    const [voiceMessage, setVoiceMessage] = useState();
    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.src = url;
        audio.controls = true;
        setVoiceMessage(audio.src)
        // console.log(audio.src);
        if (voiceFile) return
        document.getElementById("voiceRec").appendChild(audio);
        setVoiceFile(true);
    };

    const removeChildHandler = () => {
        setVoiceFile(false)
        const parent =  document.getElementById("voiceRec");
        parent.removeChild(parent.firstElementChild);
    }

    // Gathering data

    const [data, setData] = useState({
        text: "",
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    const axiosConficPost = {
        headers: {
            "Dev": "vip4c@reDevelop3r",
            "Content-Type": "multipart/form-data"

        },
    };

    const [userMessage, setUserMessage] = useState([]);

    const submitHandler = (event) => {
        event.preventDefault();
        let formedata = new FormData();
        formedata.append('text', data.text)
        formedata.append('voice', voiceMessage)
        const CARD_DATA = formedata;
        console.log(formedata);
        axios.post("https://api.lahzecard.com/api/user/uploadData", CARD_DATA, axiosConficPost)
            // .then((response)=> setUserMessage(response.data.user))
            .then((response)=> console.log(response))
            .catch((error)=> console.log(error))
    }


    return ( 
        <div className={styles.ActivationPage_Container}>
            <section className={styles.right_sec}>
                <img src={step1} alt="first step" />
            </section>
            <section className={styles.left_sec}>
                <div className={styles.activation_info_div}>
                    <section className={styles.activation_info_div_sec_img}>
                        <img src={userlogo} alt="user logo" />
                    </section>
                    <section className={styles.activation_info_div_sec_info}>
                        <h2>کافه حیات انسان</h2>
                        <div className={styles.activation_info_div_sec_info_div}>
                            <div className={styles.removeinphone}>
                                <img src={website} alt="user info" />
                                <p>https://pizzapelleh.ir</p>
                            </div>
                            <div>
                                <img src={instagram} alt="user info" />
                                <p>pelle_pizza</p>
                            </div>
                            <div>
                                <img src={phone} alt="user info" />
                                <p>02833654052</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className={styles.activation_input_div}>
                    <img src={map} alt="user map address" className={styles.user_map_address}/>
                    <section className={styles.activation_input_sec}>
                        <input
                            className={styles.activation_input}
                            placeholder="متن پیام دلخواه"
                            type='text'
                            name='text'
                            value={data.text}
                            onChange={changeHandler}
                        />
                    </section>
                    <section className={styles.voice_input_sec} id="voiceRec">
                        { voiceFile ?
                            <div className={styles.trash_icon} onClick={removeChildHandler}>
                                <img src={trash} alt="trash icon" />
                            </div>
                                : 
                            <AudioRecorder
                                onRecordingComplete={addAudioElement}
                                audioTrackConstraints={{
                                    noiseSuppression: true,
                                    echoCancellation: true,
                                }} 
                                // True the elemnt below to make the auto download possible
                                downloadOnSavePress={false}
                                downloadFileExtension="webm"
                            />
                        }
                        {/* THe Audio file will be created here: */}
                    </section>
                    <section className={styles.btn_sec}>
                        <div>
                            <img src={attetiongrey} alt="attention sign" />
                            <p>در صورت نقض قوانین جمهوری اسلامی صدای شما حذف می شود.</p>
                        </div>
                        <button className={styles.submit_btn} onClick={submitHandler}>
                            ثبت پیام
                        </button>
                    </section>
                </div>
            </section>
        </div>
     );
}
 
export default ActivationPage;