import React from "react";
import "../App.css";

const Testimonials = () => {
    return (
        <div>
            <h1 className="testimonials-heading">Client Testimonials</h1>
            <div className="testimonials-container">
                <div className="testimonial-card">
                    <img src="images/image-emily.jpg" alt=""></img>
                    <p>
                        We put our trust in Sunnyside and they delivered, making
                        sure our needs were met and deadlines were always hit.
                    </p>
                    <h3>Emily R.</h3>

                    <h4>Marketing Director</h4>
                </div>
                <div className="testimonial-card">
                    <img src="images/image-thomas.jpg" alt=""></img>
                    <p>
                        Sunnyside’s enthusiasm coupled with their keen interest
                        in our brand’s success made it a satisfying and
                        enjoyable experience.
                    </p>
                    <h3>Thomas S.</h3>

                    <h4>Chief Operating Officer</h4>
                </div>
                <div className="testimonial-card">
                    <img src="images/image-jennie.jpg" alt=""></img>
                    <p>
                        Incredible end result! Our sales increased over 400%
                        when we worked with Sunnyside. Highly recommended!
                    </p>
                    <h3>Jennie F.</h3>

                    <h4>Business Owner</h4>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
