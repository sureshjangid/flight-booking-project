import React, { Suspense } from "react";
const HomeBanner = (props) => {
    return ( 
    <section className="site-banner position-relative">
        <img src="assets/images/banner-2.jpg" className="img-fluid" width="100%" height="auto"/>
        <div className="banner-content">
            <h1 className="banner-title">Let The Journey Begin</h1>
            <p className="banner-disc">Find and book a great experiance.</p>
        </div>
    </section>
       );
}
export default HomeBanner