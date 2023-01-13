import React, { Component } from "react";
import queryString from 'query-string'
import Header from '../home/header'
import AppFooter from '../footer'
import LoginPopUp from '../loginPopup'
import { OfferGET_Order, SeatMapGet, CheckOut } from '../../action/flightActions'
import BookingSection from './section'
class Booking extends Component {
    state = {
        bookingData: {},
        seatMapData: {},
        emailID: "",
        contactNo: "",
        seatMap: [],
        passengersDetails: [],
        payments: [],
        formData: { selectedOffers: [], passengers: [], payments: [], services: [], type: "instant" }
    }
    componentDidMount() {
        //OfferGET_Order
        var self = this
        const parsed = queryString.parse(window.location.search);
        if (parsed.booking_id) {
            OfferGET_Order(parsed.booking_id).then((ResponseData) => {
                console.log("ResponseData", ResponseData)
                const { data } = ResponseData.data
                var { formData } = self.state;
                formData.selectedOffers.push(parsed.booking_id)
                formData.passengers = data.passengers
                formData.payments = [{
                    "type": "balance",
                    "amount": data.total_amount,
                    "currency": data.total_currency
                }]
                console.log("data", data, formData)
                self.setState({ bookingData: data, formData })
            })
            SeatMapGet(parsed.booking_id).then((ResponseData) => {
                console.log("ResponseData", ResponseData)
                const { data } = ResponseData.data
                self.setState({ seatMapData: data })
            })

        }
    }
    onEmailID = event => {
        this.setState({ emailID: event.target.value }, () => {
            var { formData, emailID } = this.state;
            if (formData.passengers && formData.passengers.length > 0) {
                formData.passengers.map((item, index) => {
                    formData.passengers[index]["email"] = emailID
                })
            }
            this.setState({ formData })
        })
    }
    onCOntactNo = event => {
        this.setState({ contactNo: event.target.value }, () => {
            var { formData, contactNo } = this.state;
            if (formData.passengers && formData.passengers.length > 0) {
                formData.passengers.map((item, index) => {
                    formData.passengers[index]["phone_number"] = contactNo
                })
            }
            this.setState({ formData })
        })
    }
    onUpdateSeatMap = (data) => event => {
        let { seatMap } = this.state
        seatMap.push(data)
        this.setState({ seatMap })

    }
    onCheckOut = event => {
        const{formData}=this.state
        CheckOut(formData).then((responseData) => {
            window.location.replace(responseData.data)
            console.log("re-responseData", responseData)
        })
    }
    onUpdatePayment = (data) => event => {
        this.setState({ payments: data })
    }
    passengerDataUpdate = (index, key, value) => {
        var { formData } = this.state;
       
        if (formData && formData.passengers.length > 0 && formData.passengers[index]) {
            formData.passengers[index][key] = value;
            console.log("form",index, key, value)
            this.setState({ formData })
        }

    }
    serviceadd=(data)=>{
        console.log("data -------------")
        var { formData } = this.state;
        console.log("data -------------", formData)
        if (formData && formData.services) {
            formData.services.push(data)
            this.setState({ formData },()=>{
                var {formData}=this.state;
                if(formData && formData.payments && formData.payments.length>0 && formData.payments[0]){
                    var totalPayment=formData.payments[0].amount;
                    if(formData.services && formData.services.length>0){
                        formData.services.map((checkPayment)=>{
                            totalPayment=parseFloat(totalPayment)+parseFloat(checkPayment.total_amount);
                        })

                    }
                    formData.payments[0].amount=totalPayment

                }
                this.setState({ formData })

            })
        }

    }
    serviceRemove=(id)=>{
        var { formData } = this.state;
        if (formData && formData.services && formData.services.length>0) {
            if(formData && formData.payments && formData.payments.length>0 && formData.payments[0]){
                var totalPayment=formData.payments[0].amount;
                if(formData.services && formData.services.length>0){
                    var findServices=formData.services.filter((item)=>item.id==id)
                    if(findServices && findServices.length>0){
                        totalPayment=parseFloat(totalPayment)-parseFloat(findServices[0].total_amount);
                    }
                  

                }
                formData.payments[0].amount=totalPayment
            }


            var services=formData.services.filter((item)=>item.id!=id)
            formData.services=services

            
            this.setState({ formData })
        }
    }


    render() {
        const { bookingData, emailID, contactNo, seatMapData, formData } = this.state;
        console.log("bookingData-bookingData", formData)
        return <>
            <Header />
            <main>
                <section className="site-banner position-relative inside-banner-two">
                    <img src="assets/images/banner-2.jpg" className="img-fluid" width="100%" height="auto" />
                    <div className="banner-content">
                        <h1 className="banner-title">Checkout</h1>
                    </div>
                </section>

                {bookingData && Object.keys(bookingData).length > 0 ? <BookingSection bookingData={bookingData} onEmailID={this.onEmailID} onCOntactNo={this.onCOntactNo} emailID={emailID} contactNo={contactNo} onUpdateSeatMap={this.onUpdateSeatMap} seatMapData={seatMapData} onCheckOut={this.onCheckOut} onUpdatePayment={this.onUpdatePayment} formData={formData} passengerDataUpdate={this.passengerDataUpdate} serviceadd={this.serviceadd} serviceRemove={this.serviceRemove}/> : null}
            </main>
            <AppFooter />
            <div className="modal fade" id="fareRulesModal" tabIndex="-1" aria-labelledby="fareRulesLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0">
                        <div className="modal-body p-4 pb-5">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <h4 className="modal-title mb-4">Fare rules</h4>
                            <div className="rules-content-box">
                                <ul className="nav nav-tabs mb-3" id="FareRulesTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="cancellation-tab" data-bs-toggle="tab" data-bs-target="#cancellation" type="button" role="tab" aria-controls="cancellation" aria-selected="true">Cancellation Charges</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="dateChange-tab" data-bs-toggle="tab" data-bs-target="#dateChange" type="button" role="tab" aria-controls="dateChange" aria-selected="false">Date change charges</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="FareRulesTabContent">
                                    <div className="tab-pane fade show active" id="cancellation" role="tabpanel" aria-labelledby="cancellation-tab">
                                        <div className="accordion" id="FareRulesAccordion">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="routeOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#roundOne" aria-expanded="true" aria-controls="rouneOne">
                                                        <img src="assets/images/0S.png" alt="flight-logo" className="img-fluid" />
                                                        New Delhi-Bengaluru (via stop 1 - VTZ )
                                                    </button>
                                                </h2>
                                                <div id="roundOne" className="accordion-collapse collapse show" aria-labelledby="routeOne" data-bs-parent="#FareRulesAccordion">
                                                    <div className="accordion-body">
                                                        <div className="flightDetails text-dark fontSize12 mb-3">
                                                            <div className="DateChangeInfo">
                                                                <div className="flightDetailsInfoLeft">
                                                                    <p className="fontSize14 text-dark">
                                                                        <strong>Time frame</strong>
                                                                    </p>
                                                                    <p>(From Scheduled flight departure)</p>
                                                                </div>
                                                                <div className="flightDetailsInfoLeft">
                                                                    <p className="fontSize14 text-dark">
                                                                        <strong>Airline Fee + MMT Fee</strong>
                                                                    </p>
                                                                    <p>(Per passenger)</p>
                                                                </div>
                                                            </div>
                                                            <div className="DateChangeInfo">
                                                                <div className="flightDetailsInfoLeft">
                                                                    <p className="appendBottom3">0 hours to 2 hours*</p>
                                                                </div>
                                                                <div className="flightDetailsInfoRight">
                                                                    <p>ADULT : <strong>Non Refundable</strong><br /></p>
                                                                </div>
                                                            </div>
                                                            <div className="DateChangeInfo">
                                                                <div className="flightDetailsInfoLeft">
                                                                    <p className="mb-3">2 hours to 3 days*</p>
                                                                </div>
                                                                <div className="flightDetailsInfoRight">
                                                                    <p>ADULT : <strong>₹ 3,500 + ₹ 300</strong><br /></p>
                                                                </div>
                                                            </div>
                                                            <div className="DateChangeInfo">
                                                                <div className="flightDetailsInfoLeft">
                                                                    <p className="mb-3">3 days to 365 days*</p>
                                                                </div>
                                                                <div className="flightDetailsInfoRight">
                                                                    <p>ADULT : <strong>₹ 3,000 + ₹ 300</strong><br /></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="darkText fontSize12 appendBottom12 appendLeft10 appendTop10 mb-0">*From the Date of Departure</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="dateChange" role="tabpanel" aria-labelledby="dateChange-tab">...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LoginPopUp />
        </>
    }
}
export default Booking