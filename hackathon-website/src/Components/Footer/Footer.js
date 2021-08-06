import React from "react";
import styles from './Footer.module.css';
import {SocialIcon} from "react-social-icons";
function Footer() {
    return (
        <footer>
            <h1 id={`${styles.contact_heading}`} className="col-sm-12"><strong>Contact</strong></h1>
            <div className={"row"}>
                <div id={`${styles.address_info}`} className={"col-sm-4"}>
                    <span><strong>Adresă:</strong></span>
                    <br/>
                    <span>Cantina Hașdeu,</span><br/>
                    <span>Complex Studențesc Hașdeu,</span><br/>
                    <span>Bogdan Petriceicu Hașdeu street, number 45,</span><br/>
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
                        <SocialIcon className={styles.social_icon} url={"https://www.facebook.com/societateahermes/"} network={"facebook"}></SocialIcon>
                        <SocialIcon className={styles.social_icon} url={"https://www.instagram.com/societatea.hermes/"} network={"instagram"}></SocialIcon>
                    </div>
                </div>
            </div>
            <div id={`${styles.logo_container}`} className={"col-sm-12"}>
                <span>Un eveniment marca:</span>
                <br/>
                {/*<img id={`${styles.logo}`} src={"https://res.cloudinary.com/dpwd5h80b/image/upload/c_scale,w_768/v1628240944/Hermes-Original-SubText-White_cv5vyr.png"} alt={"logo hermes"} />*/}
            </div>
        </footer>
    )
}
export default Footer