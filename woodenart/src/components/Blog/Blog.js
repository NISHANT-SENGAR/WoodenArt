import React from "react";
import './Blog.css'


const Blog = () => {
    return (
        <>
            <section id="contact" className="contact flex-columns">
                <div className="row">
                    <div className="column">
                        <div className="column-1">
                            <img
                                src="./Images/section.png"
                                alt="blog"
                            />
                        </div>
                    </div>
                    <div className="column">
                        <div className="column-2 bg-light">
                            <h2 id='blog'>Blog Posts</h2>
                            <form action="" class="callback-form">
                                <div className="description">
                                    <p>
                                        {" "}
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Totam quaerat, modi doloremque necessitatibus eum dolor
                                        nesciunt delectus, voluptate blanditiis, obcaecati beatae ab
                                        aut ipsa consequuntur
                                    </p>
                                </div>

                                <button className="btn">Read More</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;