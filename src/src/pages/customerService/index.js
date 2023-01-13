import React from "react";
import { Link } from "react-router-dom";
import AppFooter from "../footer";
import Header from '../home/header'

function About(){
    return(
        <>
        <Header/>
            <main>
                <section className="site-banner position-relative inside-banner-two">
                    <img src="assets/images/banner-3.jpg" className="img-fluid" width="100%" height="auto" />
                    <div className="banner-content">
                        <h1 className="banner-title">Get in touch</h1>
                        <p>Want get in touch? We'd love to here from you. Here's how you can reach us...</p>
                    </div>
                </section>
                <section className="py-5 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-5">
                                <div className="contact-card mb-3">
                                    <div className="d-flex flex-wrap justify-content-center">
                                       <div className="phone-icon me-4">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="30" width="30" fill="#34404b"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg></span>
                                       </div>
                                        <div className="contact-info">
                                            <h5>Talk to Support</h5>
                                            <p className="mb-0"><a className="text-dark text-decoration-none" href="">+1 123 456 7890</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7">
                                <div className="contact-form">
                                    <div className="mb-5">
                                        <h3 className="text-center mb-3">Book a Meeting</h3>
                                        <p className="text-center">To schedule time to speak with one of our sales representatives, complete to form, then click "next" to choose a data and time that works for you.</p>
                                    </div>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-2">First Name<span>*</span></label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-2">Last Name<span>*</span></label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-2">Email<span>*</span></label>
                                                    <input type="email" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-2">Phone<span>*</span></label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-2">Message<span>*</span></label>
                                                    <textarea cols="40" rows="7" className="form-control" placeholder="Write us a few lines about what you are looking for in the demo and how you want to use the product..."/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <input type="checkbox"/> I agree to <Link to="/terms-conditions" className="text-link text-decoration-none">Terms of service.<span>*</span></Link>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-primary w-100 py-2 rounded-0">Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <AppFooter/>
        </>
    )
}

export default About;