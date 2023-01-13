import React, { Suspense } from "react";
const CancelProtection = (props) => {
    return  <section id="cancelProtection" className="protection-section">
    <div className="container">
        <div className="row justify-content-center align-items-end">
            <div className="col-lg-5 col-12 order-lg-1 order-2">
                <div className="protection-img">
                    <img src="assets/images/cancellation-protection.png" className="img-fluid"/>
                </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-2 order-1">
                <div className="protection-content">
                    <div className="section-title mb-3">Cancellation Protection</div>
                    <p className="offer-disc">During these uncertain times we recommend adding <strong>Cancellation Protection</strong> to your booking</p>
                    <ul className="list-unstyled">
                        <li>
                            <div className="item">
                                <img src="assets/images/life-icon.png" alt="life icon"/>
                                <p className="m-0">Illness incl. COVID-19</p>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <img src="assets/images/weather.png" alt="life icon"/>
                                <p className="m-0">Weather</p>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <img src="assets/images/emergency.png" alt="life icon"/>
                                <p className="m-0">Emergency</p>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <img src="assets/images/refundable.png" alt="life icon"/>
                                <p className="m-0">Refundable Booking</p>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <img src="assets/images/mechanical.png" alt="life icon"/>
                                <p className="m-0">Mechanical Breakdown</p>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <img src="assets/images/plus.png" alt="life icon"/>
                                <p className="m-0">Plus much more</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
}
export default CancelProtection