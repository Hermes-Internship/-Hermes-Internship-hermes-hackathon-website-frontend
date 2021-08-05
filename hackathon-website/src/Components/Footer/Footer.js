import React from "react";
import styles from './Footer.module.css';
function Footer() {
    return (
        <footer>
            <h1 id={`${styles.contact_heading}`} className="col-sm-12"><strong>Contact</strong></h1>
            <div className={"row"}>
                <div id={`${styles.address_info}`} className={"col-sm-4"}>
                    <span><strong>Adresă:</strong></span>
                    <br/>
                    <span>Cantina Hasdeu,</span><br/>
                    <span>Complex Studentesc Hasdeu,</span><br/>
                    <span>Bogdan Petriceicu Hasdeu street, number 45,</span><br/>
                    <span>Cluj-Napoca</span><br/>
                    <span>Romania</span><br/>
                </div>
                <div id={`${styles.email_info}`} className={"col-sm-4"}>
                    <span><strong>Email:</strong></span>
                    <br/>
                    <span>hackathon@societatahermes.com</span>
                </div>
                <div id={`${styles.socialmedia_info}`} className={"col-sm-4"}>
                    <span><strong>Social Media</strong></span>
                    <br/>
                    <div id={`${styles.socialmedia_icons}`}>
                        <img src="../.." alt="fb"/>
                        <img src="../.." alt="it"/>
                    </div>
                </div>
            </div>
            <div id={`${styles.logo_container}`} className={"col-sm-12"}>
                <span>Un eveniment marca:</span>
                <br/>
                <img id={`${styles.logo}`} src={""} alt={"logo hermes"} />
            </div>
        </footer>
    )
}
export default Footer