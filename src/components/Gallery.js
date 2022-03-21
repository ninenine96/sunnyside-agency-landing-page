import React from "react";

const Gallery = () => {
    return (
        <div className="gallery-container">
            <div className="gallery-cards">
                <img
                    src="images/desktop/image-gallery-milkbottles.jpg"
                    alt="milkbottles"
                    height={"100%"}
                />
            </div>
            <div className="gallery-cards">
                <img
                    src="images/desktop/image-gallery-orange.jpg"
                    alt="Orange"
                    height={"100%"}
                />
            </div>
            <div className="gallery-cards">
                <img
                    src="images/desktop/image-gallery-cone.jpg"
                    alt="Cone"
                    height={"100%"}
                />
            </div>
            <div className="gallery-cards">
                <img
                    src="images/desktop/image-gallery-sugarcubes.jpg"
                    alt="Sugarcubes"
                    height={"100%"}
                />
            </div>
        </div>
    );
};

export default Gallery;
