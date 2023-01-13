import React, { Component } from "react";
import BookingDetails from "./bookingDetails";
import TravellersDetails from './travellerDetails'
import SeatMaps from './seatMap'
class BookingSection extends Component {
render(){
    const{bookingData,onEmailID,onCOntactNo,emailID , contactNo,onUpdateSeatMap,seatMapData,onCheckOut,formData,passengerDataUpdate,serviceadd,serviceRemove}=this.props;
    return <>  
    <section className="booking-details-main py-sm-5 py-3">
    <div className="container">
        <div className="row">
            <div className="col-lg-9 col-12">
                <div className="booking-details">
                    {(bookingData && bookingData.slices && bookingData.slices.length>0)? bookingData.slices.map((slicesItem)=><BookingDetails slicesItem={slicesItem} bookingData={bookingData} />):null}
                </div>
                <div className="BpkBannerAlert mb-sm-5 mb-4">
                    <h5 className="BpkBannerAlert-title mb-4 text-dark"><strong>Book your ticket</strong></h5>

                    <div className="BpkBannerAlert-content">
                        <div className="BpkBannerAlert-head mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="16" width="16" fill="#5A5A5A"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z" /></svg> Read before booking
                        </div>
                        <div className="BpkBannerAlert-body">
                            <p className="BpkText_bpk-text__YWQwM">
                                <span>Prices shown always include an estimate of all mandatory taxes and charges, but remember to <em>check ALL ticket details, final prices and terms and conditions</em> on the booking website before you book.</span>
                            </p>
                            <ul>
                                <li className="ReadBeforeBooking_listItem">
                                    <p className="m-0"><strong>Check for extra fees</strong></p>
                                    <span>Some airlines / travel agencies charge extra for <em>baggage</em>, <em>insurance</em> or use of <em>credit cards</em> and include a service fee.</span>
                                </li>
                                <li className="ReadBeforeBooking_listItem">
                                    <p className="m-0"><strong>Check T&Cs for travellers aged 12-16</strong></p>
                                    <span>Restrictions may apply to young passengers travelling alone.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="traveller-details mb-sm-4 mb-4">
                    <h4 className="traveller-details-title mb-sm-4 mb-3 text-dark fontWeightBold">Enter Passengers Details</h4>
                    <div className="traveller-details-box">
                       {
                        (formData.passengers && formData.passengers.length>0)?<>
                        {
                            formData.passengers.map((passengerItem,index)=><TravellersDetails key={index} passengerItem={passengerItem} bookingData={bookingData} passengerDataUpdate={passengerDataUpdate} insertIndex={index} serviceadd={serviceadd} serviceRemove={serviceRemove}/>)
                        }
                        </>:null
                       } 
                        
                        <div className="bookingDetailsForm">
                            <p className="fontSize14 mb-3 text-dark"><strong>Booking details will be sent to</strong></p>
                            <div className="adultDetailsInnner">
                                <form>
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-6 col-12">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="mb-3">
                                                        <label className="fontSize14">Email</label>
                                                        <input type="email" className="form-control" value={emailID} placeholder="Email" onChange={onEmailID}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-8 col-12">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-3 col-md-3 col-sm-4 col-5">
                                                    <div className="mb-3">
                                                        <label className="fontSize14">Country Code</label>
                                                        <select className="form-control">
                                                            <option value="">India(91)</option>
                                                            <option value="">India(91)</option>
                                                            <option value="">India(91)</option>
                                                            <option value="">India(91)</option>
                                                            <option value="">India(91)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-8 col-md-9 col-sm-8 col-12">
                                                    <div className="mb-3">
                                                        <label className="fontSize14">Mobile No</label>
                                                        <input type="text" className="form-control" placeholder="Mobile No" value={contactNo} onChange={onCOntactNo}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="seatSelection">
                            <p className="traveller-details-title mb-3 text-dark fontWeightBold">Seat selection</p>
                            {
                                
                                    (bookingData.passengers && bookingData.passengers.length>0)?<>
                                    {
                                        bookingData.passengers.map((passengerItem,index)=><><SeatMaps key={index} passengerItem={passengerItem} onUpdateSeatMap={onUpdateSeatMap} seatMapData={seatMapData} bookingData={bookingData}/></>)
                                    }</>:null 
                            }
                            
                        
                        </div>
                    </div>
                </div>
                <div className="payment-btn text-end mb-md-0 mb-5">
                    <button type="submit" className="btn-primary px-3 py-2 rounded-0" onClick={onCheckOut}>Proceed To Payment</button>
                </div>
                <div className="sk_loader">
                    <h5 className="sk_line sk_line_20 sk_line_height_20 mb-3"></h5>
                    <div className="box-shadow bg-white p-4 rounded-5 mb-4">
                        <div className="d-flex w-100 align-items-center mb-3">
                            <div className="d-flex w-100 align-items-center m_grid_author border-bottom pb-3">
                                <div className="sk_line sk_img m-0 me-4 rounded"></div>
                                <h5 className="sk_line sk_line_20 sk_line_height_20 m-0"></h5>
                                <p className="sk_line sk_line_height_10 sk_line_50 mb-0 mt-0 mx-4"></p>
                                <h5 className="sk_line sk_line_20 sk_line_height_20 m-0"></h5>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5 className="sk_line sk_line_10 sk_line_height_20 m-0"></h5>
                            <p className="sk_line sk_line_height_10 sk_line_10 mb-0 mt-0"></p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <p className="sk_line sk_line_height_10 sk_line_20 m-0"></p>
                            <p className="sk_line sk_line_height_10 sk_line_20 m-0"></p>
                        </div>
                        <div className="sk_line rounded-0 mt-3 mb-0"></div>
                    </div>
                    <h5 className="sk_line sk_line_20 sk_line_height_20 mb-3"></h5>
                    <div className="box-shadow bg-white p-4 rounded-5 mb-4">
                        <div className="d-flex w-100 align-items-center mb-3">
                            <div className="d-flex w-100 align-items-center m_grid_author border-bottom pb-3">
                                <div className="sk_line sk_img m-0 me-4 rounded"></div>
                                <h5 className="sk_line sk_line_20 sk_line_height_20 m-0"></h5>
                                <p className="sk_line sk_line_height_10 sk_line_50 mb-0 mt-0 mx-4"></p>
                                <h5 className="sk_line sk_line_20 sk_line_height_20 m-0"></h5>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5 className="sk_line sk_line_10 sk_line_height_20 m-0"></h5>
                            <p className="sk_line sk_line_height_10 sk_line_10 mb-0 mt-0"></p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <p className="sk_line sk_line_height_10 sk_line_20 m-0"></p>
                            <p className="sk_line sk_line_height_10 sk_line_20 m-0"></p>
                        </div>
                        <div className="sk_line rounded-0 mt-3 mb-0"></div>
                    </div>
                    <h5 className="sk_line sk_line_20 sk_line_height_20 mb-3"></h5>
                    <div className="box-shadow bg-white p-4 rounded-5 mb-4">
                        <div className="mb-3">
                            <h5 className="sk_line sk_line_10 sk_line_height_20 mt-0"></h5>
                            <p className="sk_line sk_line_height_10 sk_line_100 mt-0"></p>
                            <p className="sk_line sk_line_height_10 sk_line_100 mt-0"></p>
                            <p className="sk_line sk_line_height_10 sk_line_50 mt-0 mb-4"></p>
                            <h5 className="sk_line sk_line_10 sk_line_height_20 mt-0"></h5>
                            <p className="sk_line sk_line_height_10 sk_line_50 mt-0"></p>
                            <h5 className="sk_line sk_line_10 sk_line_height_20 mt-0"></h5>
                            <p className="sk_line sk_line_height_10 sk_line_80 mt-0"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-12">
                <div className="fare-summary">
                    <h4 className="fare-summary-title mb-4 text-dark">Fare Summary</h4>
                    <div className="fare-summary-box mb-4">
                        <div className="mb-3">
                            <p className="fare-summary-subtitle mb-1 text-dark fontWeightBold fontSize12">Base Fare</p>
                            <div className="fareSubList ps-2">
                                <p className="d-flex justify-content-between mb-1">
                                    <span className="fontSize12 text-dark">
                                        <span>Adult(s) ({bookingData.passengers.length})</span>
                                    </span>
                                    <span className="fontSize12 text-dark">
                                        <span>${bookingData.base_amount}</span>
                                    </span>
                                </p>
                                <p className="d-flex justify-content-between mb-1">
                                    <span className="fontSize12 text-dark">
                                        <span>Tax Amount</span>
                                    </span>
                                    <span className="fontSize12 text-dark">
                                        <span>${bookingData.tax_amount}</span>
                                    </span>
                                </p>
                               
                            </div>
                        </div>
                        <div className="">
                            <p className="fare-summary-subtitle mb-1 text-dark fontWeightBold fontSize12">Fee & Surcharges</p>
                            <div className="fareSubList ps-2 ">
                                <p className="d-flex justify-content-between mb-1">
                                    <span className="fontSize12 text-dark">
                                        <span>GST</span>
                                    </span>
                                    <span className="fontSize12 text-dark">
                                        <span>${((bookingData.base_amount / 100) * 18).toFixed(2)}</span>
                                    </span>
                                </p>
                                
                                <p className="d-flex justify-content-between mb-1">
                                    <span className="fontSize12 text-dark">
                                        <span>User Development Fee</span>
                                    </span>
                                    <span className="fontSize12 text-dark ">
                                        <span>${((bookingData.base_amount / 100) * 1).toFixed(2)}</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="total-amount">
                            <p className="mb-0 d-flex align-items-center justify-content-between text-dark">
                                <span className="fontSize16 blackFont">Total Amount</span>
                                <span className="fontSize16 blackFont">${parseFloat(bookingData.total_amount+((bookingData.base_amount / 100) * 18).toFixed(2)+((bookingData.base_amount / 100) * 1).toFixed(2)).toFixed(2)}</span>
                            </p>
                        </div>
                    </div>
                    <h4 className="fare-summary-title mb-4 text-dark">Promo Code</h4>
                    <div className="fare-summary-box mb-4">
                        <p className="fare-summary-subtitle mb-3 text-dark fontWeightBold fontSize12">Have a Promo Code?</p>
                        <div className="promo-select-ui flights d-xl-flex">
                            <input type="text" className="form-control" />
                            <button className="btn-primary px-3 py-2 rounded-0">Apply</button>
                        </div>
                    </div>
                    <h5 className="sk_line sk_line_30 sk_line_height_20 mt-0"></h5>
                    <div className="fare-summary-box mb-4">
                        <h5 className="sk_line sk_line_30 sk_line_height_10 mt-0 mb-3"></h5>
                        <div className="d-flex align-items-center justify-content-between ps-3">
                            <p className="sk_line sk_line_height_10 sk_line_30 mt-0"></p>
                            <p className="sk_line sk_line_height_10 sk_line_30 mt-0"></p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between ps-3">
                            <p className="sk_line sk_line_height_10 sk_line_30 mt-0"></p>
                            <p className="sk_line sk_line_height_10 sk_line_30 mt-0"></p>
                        </div>
                        <h5 className="sk_line sk_line_30 sk_line_height_10 mt-4 mb-3"></h5>
                        <div className="d-flex align-items-center justify-content-between ps-3">
                            <p className="sk_line sk_line_height_10 sk_line_30 mt-0"></p>
                            <p className="sk_line sk_line_height_10 sk_line_30 mt-0"></p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between ps-3">
                            <p className="sk_line sk_line_height_10 sk_line_30 mt-0"></p>
                            <p className="sk_line sk_line_height_10 sk_line_30 mt-0"></p>
                        </div>
                        <hr/>
                        <div className="d-flex align-items-center justify-content-between px-3">
                            <h5 className="sk_line sk_line_30 sk_line_height_10 m-0"></h5>
                            <h5 className="sk_line sk_line_30 sk_line_height_10 m-0"></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section></>
}
}
export default BookingSection