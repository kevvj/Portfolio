
import { TwitterIcon as Twitter} from "../app/ICONS/Icons.js";
import { GitHubIcon as GitHub } from "../app/ICONS/Icons.js";
import { LinkedinIcon as Linkedin } from "../app/ICONS/Icons.js";
import { MailIcon, PhoneIcon } from "../app/ICONS/Icons.js";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { basics } from "../../cv.json";
import Section from "./Section";

const { name, label, image, location, profiles, phone, email } = basics

const { city, region } = location

const SOCIAL_ICONS = {
    Twitter,
    GitHub,
    Linkedin
}

const LinkedInfo = profiles.find(({network}) => network === "GitHub")
const Linkedurl = LinkedInfo?.url




const Hero = () => {
    return (

        <Section >
            <div className="hero-container">

                <div className="info">

                    <h1>{name}</h1>
                    <h2>{label}</h2>

                    <span>
                    <div className="icons"><FontAwesomeIcon icon={faGlobe} className="custom-icon"></FontAwesomeIcon></div>

                        {city}, {region}
                    </span>

                    <footer className="print">
                    {email} • {phone} • {Linkedurl}
                    </footer>

                    <footer className="no-print">
                        
                        {
                            email && (
                                <a 
                                    title={`envia un correo a: ${name} al correo ${email}`}
                                    target="_black"
                                    rel="noopener noreferrer"
                                >


                                    <MailIcon />
                                </a>
                            )
                        }

{
                            phone && (
                                <a 
                                    title={`Llamar por telefono a: ${name} al numero ${phone}`}
                                    target="_black"
                                    rel="noopener noreferrer"
                                >


                                    <PhoneIcon />
                                </a>
                            )
                        }

                        {
                            profiles.map(({network,url, username}) =>{

                                const Icons = SOCIAL_ICONS[network]

                                return(

                                    <a href={url} 
                                    title = {`Visitar el perfil de ${name} en ${network}`}
                                    target = "_black"
                                    rel="noopener noreferrer"
                                >
                                    <Icons></Icons>
                                </a>
                                    
                                )
                                

                            })
                        }

                    </footer>

                </div>

                <figure>
                    <img src= "./ICONS/icon.jpg" alt={name}></img>
                </figure>



            </div>
        </Section>


    );
}

export default Hero