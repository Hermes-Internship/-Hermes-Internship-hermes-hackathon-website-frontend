import React from 'react';
import styles from './About.module.css'
function About() {
    return (
        <article>
            <h1 className={`${styles.heading}`}>Despre</h1>
            <div id={`${styles.about_container}`}>
                <section className={`${styles.about_section}`}>
                    <h2 className={`${styles.subheading}`}>Ce este hermesHackathon?</h2>
                    <p>
                        hermesHackathon este un marathon de coding de 24 de ore ce implică crearea unei
                        aplicații mobile, web sau desktop plecând de la o idee. Ținta evenimentului este de a găsi
                        soluții care vor îmbunătății calitatea de viață a cetățenilor și care să ajute mediul
                        înconjurător.
                    </p>
                </section>
                <section className={`${styles.about_section}`}>
                    <h2 className={`${styles.subheading}`}>Publicul țintă</h2>
                    <p>
                        hermesHackathon se adreasează studenților, freelancerilor și oricui este
                        pasionat de programare și vrea să contribuie la o societate mai bună.
                    </p>
                </section>
                <section className={`${styles.about_section}`}>
                    <h2 className={`${styles.subheading}`}>Cum decurge hermesHackathon?</h2>
                    <p>
                        Fiecare echipă poate avea până în patru membri, așa că poți să-ți aduni prietenii și să
                        participați împreună sau poți participa de unul singur. În decursul celor 24 de ore de
                        concurs vor avea loc cel puțin două sesiuni de mentorat, în cadrul cărora participanții vor
                        primi sfaturi și vor fi îndrumați să-și construiască cea mai bună versiune a aplicației lor.
                    </p>
                </section>
            <section id={`${styles.topics_panel}`}>
                <h2>Teme</h2>
                <div className={"row"}>
                    <figure className={`${styles.topic} col-sm`}>
                        <img src={""} alt={"Online Education"}/>
                        <figcaption>Online Education</figcaption>
                    </figure>
                    <figure className={`${styles.topic} col-sm`}>
                        <img src={""} alt={"Smart Agriculture"}/>
                        <figcaption>Smart Agriculture</figcaption>
                    </figure>
                    <figure className={`${styles.topic} col-sm`}>
                        <img src={""} alt={"Remote Work"}/>
                        <figcaption>Remote Work</figcaption>
                    </figure>
                    <figure className={`${styles.topic} col-sm`}>
                        <img src={""} alt={"Medical Soft"}/>
                        <figcaption>Medical Soft</figcaption>
                    </figure>
                </div>
            </section>
            </div>
        </article>
    )
}
export default About;