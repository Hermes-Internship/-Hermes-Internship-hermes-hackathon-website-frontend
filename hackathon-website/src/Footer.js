import './Footer.css';

import React from "react";

function Footer() {
    return (
        <footer>

            <h1 id={"contact-heading"} className="col-sm-12"><strong>Contact</strong></h1>
            
            <div className={"row"}>
                <div id={"address-info"} className={"col-sm-4"}>
                    <span><strong>Adresă:</strong></span>
                    <br/>
                    <span>Cantina Hasdeu,</span><br/>
                    <span>Complex Studentesc Hasdeu,</span><br/>
                    <span>Bogdan Petriceicu Hasdeu street, number 45,</span><br/>
                    <span>Cluj-Napoca</span><br/>
                    <span>Romania</span><br/>

                </div>

                <div id={"email-info"} className={"col-sm-4"}>
                    <span><strong>Email:</strong></span>
                    <br/>
                    <span>hackathon@societatahermes.com</span>
                </div>

                <div id={"socialmedia-info"} className={"col-sm-4"}>
                    <span><strong>Social Media</strong></span>
                    <br/>
                    <div id={"socialmedia-icons"}>
                        <img src="../.." alt="fb"/>
                        <img src="../.." alt="it"/>
                    </div>
                </div>
            </div>
            
            <div id={"logo-container"} className={"col-sm-12"}>
                <span>Un eveniment marca:</span>
                <br/>
                <img id={"logo"} src={""} alt={"logo hermes"} />
            </div>

        </footer>
    )
}

export default Footer