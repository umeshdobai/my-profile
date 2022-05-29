import React, { useEffect } from "react";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";
import programmerImg from "../assets/Developer activity.gif";
import upArrowImg from "../assets/up-arrow.gif";
import "./Home.scss";

function Home() {
    const onScroll = () => {
        const mybutton = document.getElementById("upArrowImg");
        if (window.scrollY > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };

    window.addEventListener("scroll", onScroll);

    useEffect(() => {
        return () => {
            window.addEventListener("scroll", onScroll);
        };
    });

    const upArrowClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="home" onScroll={onScroll}>
            <div className="homedesc">
                <div className="text">
                    <span className="heading">
                        I'm <span className="nametext">Umesh Dobai</span>
                    </span>
                    <span className="prabhupadquote">
                        <p className="quote">
                            <i>
                                You should not be carried away by the dictation
                                of your mind, but the mind should be carried by
                                your dictation
                            </i>
                        </p>
                        <p className="prabhupad">A C. Bhaktivedanta Swami Prabhupada</p>
                    </span>
                </div>
                <div className="image">
                    <img
                        src={programmerImg}
                        alt="programmerImg"
                        className="programmerImg"
                    />
                </div>
            </div>
            <img
                src={upArrowImg}
                alt="upArrowImg"
                className="upArrowImg"
                id="upArrowImg"
                onClick={upArrowClick}
            />
            <Summary />
            <Experience />
            <Education />
            <Contact />
        </div>
    );
}

export default Home;
