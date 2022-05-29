import React from "react";
import "./Education.scss";
import collegeImage from "../assets/college.png";

const Education = () => {
    return (
        <div className="education" id="education">
            <h1>Education</h1>
            <hr />
            <div className="image">
                <img src={collegeImage} alt="college" className="collegeImg" />
                <p className="image_text">
                    GITA Autonomous College, Bhubaneswar
                    <br /> Bachelor of Technology <br />
                    2014-2018
                </p>
            </div>
            <div>
                <p></p>
            </div>
        </div>
    );
};

export default Education;
