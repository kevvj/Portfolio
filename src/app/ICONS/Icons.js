import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter as Twitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub as GitHub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin as Linkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as Mail } from "@fortawesome/free-regular-svg-icons";
import { faPhone as Phone } from "@fortawesome/free-solid-svg-icons";

export const TwitterIcon = () => {
    return (
        <div className="icons">
            <FontAwesomeIcon icon={Twitter} className="custom-icon">
            </FontAwesomeIcon>
        </div>
    )
}

export const GitHubIcon = () => {
    return (
        <div className="icons"><FontAwesomeIcon icon={GitHub} className="custom-icon"></FontAwesomeIcon></div>
    )
}
export const LinkedinIcon = () => {
    return (
        <div className="icons"><FontAwesomeIcon icon={Linkedin} className="custom-icon"></FontAwesomeIcon></div>
    )
}
export const MailIcon = () => {
    return (
        <div className="icons"><FontAwesomeIcon icon={Mail} className="custom-icon"></FontAwesomeIcon></div>
    )
}
export const PhoneIcon = () => {
    return (
        <div className="icons"><FontAwesomeIcon icon={Phone} className="custom-icon"></FontAwesomeIcon></div>
    )
}