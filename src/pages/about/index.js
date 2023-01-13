import React from "react";
import AppFooter from "../footer";
import Header from '../home/header'

function About(){
    return(
        <>
        <Header/>
            <main>
                <section className="site-banner position-relative inside-banner-two">
                    <img src="assets/images/banner-2.jpg" className="img-fluid" width="100%" height="auto" />
                    <div className="banner-content">
                        <h1 className="banner-title">About Us</h1>
                    </div>
                </section>
                <section className="py-5 bg-white">
                    <div className="container">
                        <h3 className="small-title mb-3"><strong>About Upright Holiday</strong></h3>
                        <p>Launched in 2022, Upright Holiday is a technology company focused on empowering Indian travellers to plan, book and manage their trips across air. We assist travellers in making smarter travel decisions by leveraging artificial intelligence, machine learning and data science led innovations on our OTA platforms, comprising our websites and mobile applications. Our vision is to become the most customer-centric travel company, by offering the best customer experience to our users. Our focus on travel utility and customer experience for travellers in the ‘next billion user’ segment is driven by technology, cost-efficiency and our culture of innovation has made us India’s leading travel ecosystem for the ‘next billion users’. Our OTA platforms allow travellers to book flight tickets while providing travel utility tools and services developed using in-house proprietary algorithms and crowd-sourced information, flight status updates, pricing and availability alerts, deal discovery, destination content, personalized recommendations, instant fare alerts and automated customer support services.</p>
                    </div>
                </section>
            </main>
            <AppFooter/>
        </>
    )
}

export default About;