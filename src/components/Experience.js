import React, { useState } from "react";
import "./Experience.scss";
import mindtreeLogo from "../assets/mindtree-logo.png";
import marlabsLogo from "../assets/marlabs-logo.png";
import projectdata from "../data/data.json";

function Experience() {
    const [activeLogo, setactiveLogo] = useState("Marlabs");

    return (
        <div className="experience" id="experience">
            <h1>Experience</h1>
            <hr className="experience_hr" />
            <div className="company_info">
                <div className="company_logo">
                    <img
                        src={marlabsLogo}
                        alt="marlabslogo"
                        className={`marlabs_logo ${
                            activeLogo === "Marlabs" && " logo_active"
                        }`}
                        onClick={() => setactiveLogo("Marlabs")}
                    />
                    <img
                        src={mindtreeLogo}
                        alt="mindtree-logo"
                        className={`mindtree_logo ${
                            activeLogo === "Mindtree" && " logo_active"
                        }`}
                        onClick={() => setactiveLogo("Mindtree")}
                    />
                </div>
                <div className="company_project">
                    <div>
                        {projectdata.map((item) => {
                            if (activeLogo === item.companyName) {
                                return (
                                    <>
                                        <div className="company_project_details">
                                            <div className="company_project_details_heading">
                                                <p className="company_project_details_text">
                                                    {item.role}
                                                </p>
                                                <p className="company_project_details_text">
                                                    {item.companyName}
                                                </p>
                                                <p className="company_project_details_text">
                                                    {item.duration}
                                                </p>
                                            </div>
                                        </div>

                                        {item.Projects.map((project) => {
                                            return (
                                                <div className="company_project_details_info">
                                                    <p className="company_project_details_info_text">{project.name}</p>
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: project.responsibilities,
                                                        }}
                                                    ></p>
                                                </div>
                                            );
                                        })}
                                    </>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
