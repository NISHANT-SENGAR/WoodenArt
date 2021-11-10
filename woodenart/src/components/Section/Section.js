import React from "react";
import "./Section.css";


const Section = () => {
    return (
        <>
            <div className="product-center">
                <img src="./Images/Chilling.png" width='700px' alt="Err" />
                <section className="content-prod">
                    <h1> Design Your Comfort Zone.</h1>

                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                        quaerat, modi doloremque necessitatibus eum dolor nesciunt delectus,
                        voluptate blanditiis, obcaecati beatae ab aut ipsa consequuntur
                        tempora cumque. Ut quo enim vero odio minus nostrum eveniet,
                    </p>


                    <button className="btn">Order Now</button>

                </section>
            </div>
        </>
    )
}

export default Section;