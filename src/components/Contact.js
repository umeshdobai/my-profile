import React from "react";
import "./Contact.scss";
import facebookIcon from "../assets/facebook-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import linkedIcon from "../assets/linkedin-icon.svg";
import githubIcon from "../assets/github-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            {/* <h1>Contact</h1> */}
            <hr />
            <div className="contact_image">
                <img src={facebookIcon} alt="meta" />

                <img src={twitterIcon} alt="twitter" />
                <a href="https://www.linkedin.com/in/umesh-dobai-091b61108/">
                    <img src={linkedIcon} alt="linkedin" />
                </a>
                <a href="https://github.com/umeshdobai">
                    <img src={githubIcon} alt="github" />
                </a>
                <img src={instagramIcon} alt="instagram" />
            </div>
        </div>
    );
};

export default Contact;
