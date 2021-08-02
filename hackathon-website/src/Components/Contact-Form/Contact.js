import React from 'react';
import './Contact.css'

function Contact() {
    return (
        <div className={"contact-card"}>
            <h1>Contact</h1>
            <div className={"contact-form"}>
                <img src={""} alt={"logo hermes"}/>
                <div className={"input-container"}>
                    <input id={"email"} type={"text"} placeholder={"Email-ul tau"}/>
                    <input id={"subject"} type={"text"} placeholder={"Subiect"}/>
                    <label id={"message"}>
                        <span>Mesajul tau</span>
                        <textarea/>
                    </label>
                </div>
                <button id={"submit-button"}>Trimite</button>
            </div>
        </div>

    )
}

export default Contact