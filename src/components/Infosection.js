import React from "react";
import "../App.css";
const Infosection = () => {
    return (
        <div className="infosection-container">
            <div className="info-row">
                <div className="info-column-image">
                    <img
                        src="/images/desktop/image-transform.jpg"
                        alt="egg"
                        width={"100%"}
                        height={"100%"}
                    />
                </div>

                <div className="info-column">
                    <h1>Transform your brand</h1>
                    <p>
                        We are a full-service creative agency specializing in
                        helping brands grow fast. Engage your clients through
                        compelling visuals that do most of the marketing for
                        you.
                    </p>
                    <a href="/">Learn More</a>
                </div>
            </div>
            <div className="info-row">
                <div className="info-column-image">
                    <img
                        src="/images/desktop/image-stand-out.jpg"
                        alt="cup"
                        width={"100%"}
                        height={"100%"}
                    />
                </div>

                <div className="info-column-reverse">
                    <h1>Stand out to the right audience</h1>
                    <p>
                        Using a collaborative formula of designers, researchers,
                        photographers, videographers, and copywriters, we’ll
                        build and extend your brand in digital places.
                    </p>
                    <a href="/">Learn More</a>
                </div>
            </div>
            <div className="info-row">
                <div className="graphic-column-left">
                    <img
                        src="images/desktop/image-graphic-design.jpg"
                        alt="graphic-design"
                        width={"100%"}
                        height={"100%"}
                    ></img>
                    <h1>Graphic Design</h1>
                    <p>
                        Great design makes you memorable. We deliver artwork
                        that underscores your brand message and captures
                        potential clients’ attention.
                    </p>
                </div>
                <div className="graphic-column-right">
                    <img
                        src="images/desktop/image-photography.jpg"
                        alt="phtography"
                        width={"100%"}
                        height={"100%"}
                    ></img>
                    <h1>Photography</h1>
                    <p>
                        Increase your credibility by getting the most stunning,
                        high-quality photos that improve your business image.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Infosection;
