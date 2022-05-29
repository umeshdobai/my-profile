import React from "react";
import "./Summary.scss";

const Summary = () => {
    return (
        <div className="summary" id="summary">
            <h1 className="summary_heading">Summary</h1>
            <hr className="summary_hr" />
            <ul>
                <li className="summary_list">I love computer science.</li>
                <li className="summary_list">
                    I am a <b>Software Engineer(UI Developer)</b> having around 2.9
                    years of experience of helping client to make application
                    robust by providing software application.I have worked with
                    various clients accross the globe.I have experience in react
                    js, Redux, Flux, efficient design pattern, webpack, npm and
                    worked on latest react JS concepts like react hooks.
                </li>
                <li className="summary_list">
                    I would like to do the work with top cutting edge
                    technology.
                </li>
                <li className="summary_list">
                    Designed web application modules using front end
                    technologies like React, Angular.I have designed some
                    personal projects like "POMODORO" app and one library
                    management system using Angular and Java.
                </li>
                <li className="summary_list">
                    If you have any oppprtunity or any query feel free to
                    conatct me.
                </li>
            </ul>
        </div>
    );
};

export default Summary;
