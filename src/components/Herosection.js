import React from "react";

export const Herosection = () => {
    return (
        <div className="hero-container">
            <div className="hero-component">
                <img
                    src="images/desktop/image-header.jpg"
                    // width={"100%"}
                    // height={"100%"}
                    alt="Hero"
                ></img>
                <div className="arrow-container">
                    <img
                        src="images/icon-arrow-down.svg"
                        className="arrow1"
                    ></img>
                </div>

                <h1>We are creatives</h1>
            </div>
        </div>
    );
};
