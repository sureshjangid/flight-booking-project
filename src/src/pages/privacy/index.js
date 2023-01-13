import React from "react";
import AppFooter from "../footer";
import Header from '../home/header'

function TermsConditions(){
    return(
        <>
        <Header/>
            <main>
                <section className="site-banner position-relative inside-banner-two">
                    <img src="assets/images/banner-2.jpg" className="img-fluid" width="100%" height="auto" />
                    <div className="banner-content">
                        <h1 className="banner-title">Privacy</h1>
                    </div>
                </section>
                <section id="whyChooseUs" className="why-choose-section py-5 bg-white">
                    <div className="container">
                        <div className="why-choose-content">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <h4 className="small-title">PrivacyPrivacyPrivacyPrivacyPrivacyPrivacyPrivacy</h4>
                                    <p>PrivacyPrivacyPrivacyPrivacyPrivacyPrivacyPrivacy PrivacyPrivacyPrivacyPrivacyPrivacyPrivacyPrivacyPrivacyPrivacy  PrivacyPrivacyPrivacy
                                    </p>
                                    <p>Upright Holiday is not a travel agent and is not responsible for providing, setting or controlling the prices applicable to, any of the travel options or products which you find and book via our Services (“Third Party Travel Products”). All such Third Party Travel Products are provided by independent travel airlines and are subject to the terms and conditions of those third parties.</p>
                                    <p>Our Services and Platforms are provided by Upright Holiday Limited, a private limited company incorporated and registered in England & Wales with company number 123456.  Other entities that directly or indirectly control, are controlled by, or are under common control with Upright Holiday and referred to in these terms as Upright Holiday Group Companies”. You can find our details, including correspondence address and registered office, on our Company Details page.</p>
                                </li>
                                <li>
                                    <h4 className="small-title">How do you find the cheapest airfare?</h4>
                                    <p className="m-0">To find the cheapest airfare, you can visit our site or download the app and enter your departure and arrival cities and find out the cheapest days to fly with our fare calendar. In compare to full service carriers, low cost airlines offer cheaper fares. By considering budget airlines, you can do great savings on airline tickets.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <AppFooter/>
        </>
    )
}

export default TermsConditions;