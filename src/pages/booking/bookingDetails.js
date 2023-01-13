import { Component } from "react";
import moment from 'moment'
import { parse, serialize } from 'tinyduration';
const timeUpdate = (durationObj) => {
    var dateCustom = ""
    if (durationObj && Object.keys(durationObj).length > 0) {
        if (durationObj.years) dateCustom += `${durationObj.years}y `
        else if (durationObj.months) dateCustom += `${durationObj.months}m `
        else if (durationObj.days) dateCustom += `${durationObj.days}d `
        else if (durationObj.hours) dateCustom += `${durationObj.hours}h `
        else if (durationObj.minutes) dateCustom += `${durationObj.minutes}m `
        else if (durationObj.seconds) dateCustom += `${durationObj.seconds}s `
        else dateCustom += ``
    }
    return dateCustom

}
class BookingDetails extends Component{
    render (){
        const{slicesItem,bookingData}=this.props;
        const durationObj = parse(slicesItem.duration);
        const segmentsData=(slicesItem.segments && slicesItem.segments[0])?slicesItem.segments[0]:{}
        console.log(slicesItem,bookingData)
        return <>
        <h4 className="booking-details-title mb-sm-4 mb-3 text-dark">{slicesItem.origin.city_name} → {slicesItem.destination.city_name}</h4>
                    <div className="flight-details-box mb-sm-5 mb-3">
                        <div className="d-flex w-100 align-items-center flight-item">
                            <div className="flight-logo">
                                <img src={bookingData.owner.logo_symbol_url} alt="flight-logo" className="img-fluid" />
                            </div>
                            <div className="flight-timing d-flex">
                                <div className="start-date">
                                    <div className="start-time">{(slicesItem.segments && slicesItem.segments[0]) ? moment(slicesItem.segments[0].departing_at).format("LT") : ""}</div>
                                    <div className="flight-airport">{slicesItem.origin.iata_code}</div>
                                </div>
                                <div className="flight-duration text-center">
                                    <div className="flight-duration-time">{timeUpdate(durationObj)}</div>
                                    <div className="flight-duration-border"></div>
                                    <div className="flight-stops text-danger">Non stops</div>
                                </div>
                                <div className="start-date">
                                    <div className="start-time">{(slicesItem.segments && slicesItem.segments[0]) ? moment(slicesItem.segments[0].arriving_at).format("LT") : ""}</div>
                                    <div className="flight-airport">{slicesItem.destination.iata_code}</div>
                                </div>
                            </div>
                        </div>
                        <div className="flight-other-details">
                            <div className="time-details mb-3">
                                <div className="makeFlex d-flex align-items-center justify-content-between">
                                    <p className="m-0">
                                        <strong className="scheduleNumber">QP 6501</strong>
                                    </p>
                                    <p className="m-0">
                                        <span className="fontSize14 me-1"><font color="#249995"><b>{segmentsData && Object.keys(segmentsData).length>0 &&  segmentsData.passengers.length>0?segmentsData.passengers[0].cabin_class_marketing_name:""}</b></font></span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="16" width="16" fill="#5A5A5A"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z" /></svg></span>
                                    </p>
                                </div>
                            </div>
                            <div className="time-details mb-3">
                                <div className="makeFlex d-flex align-items-center justify-content-between">
                                    <p className="m-0">
                                        <span className="scheduleDay">{(slicesItem.segments && slicesItem.segments[0]) ? moment(slicesItem.segments[0].departing_at).format("LL") : ""}</span> | <span className="scheduleTime">Non Stop · {timeUpdate(durationObj)}</span>
                                    </p>
                                    <p className="m-0">
                                        <a data-bs-toggle="modal" data-bs-target="#fareRulesModal">View Fare Rules</a>
                                    </p>
                                </div>
                            </div>
                            <div className="flightItenary d-flex flex-wrap justify-content-between align-items-center">
                                <div className="flexOne">
                                    <div className="itenaryLeft position-relative">
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex align-items-center justify-content-between time-info-ui me-3">
                                                <strong className="fontSize14">{(slicesItem.segments && slicesItem.segments[0]) ? moment(slicesItem.segments[0].departing_at).format("HH:mm") : ""}</strong>
                                                <span className="layoverCircle"></span>
                                            </div>
                                            <div className="">
                                                <strong className="fontSize14">{slicesItem.origin.city_name}</strong>
                                                <span className="fontSize14">. {slicesItem.origin.name}, {(slicesItem.segments && slicesItem.segments[0]) ? `Terminal T${slicesItem.segments[0].origin_terminal}`:``}</span>
                                            </div>
                                        </div>
                                        <div className="layover">
                                            <span className="fontSize14">{timeUpdate(durationObj)}</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex align-items-center justify-content-between time-info-ui me-3">
                                                <strong className="fontSize14">{(slicesItem.segments && slicesItem.segments[0]) ? moment(slicesItem.segments[0].arriving_at).format("HH:mm") : ""}</strong>
                                                <span className="layoverCircle"></span>
                                            </div>
                                            <div className="">
                                                <strong className="fontSize14">{slicesItem.destination.city_name} </strong>
                                                <span className="fontSize14">. {slicesItem.destination.name}, {(slicesItem.segments && slicesItem.segments[0]) ? `Terminal T${slicesItem.segments[0].destination_terminal}`:``}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="itenaryRight">
                                    <ul className="itenaryList list-unstyled">
                                        <li>
                                            <span className="fontSize12">Baggage</span>
                                            <span className="fontSize12">Check-in</span>
                                            <span className="fontSize12">Cabin</span>
                                        </li>
                                        <li>
                                            <span className="fontSize12"><strong>ADULT</strong></span>
                                            <span className="fontSize12"><strong>15 Kgs</strong></span>
                                            <span className="fontSize12"><strong>7 Kgs (1 piece only)</strong></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="mmtConnectReviewInfo">
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="fontSize14">
                                            <strong>
                                                <font color="#cf8100">Change of planes</font>
                                            </strong>
                                            <br />
                                            <b>2h 50m</b>
                                            Layover in Visakhapatnam
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="flightItenary d-flex flex-wrap justify-content-between align-items-center">
                                <div className="flexOne">
                                    <div className="itenaryLeft position-relative">
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex align-items-center justify-content-between time-info-ui me-3">
                                                <strong className="fontSize14">22:00</strong>
                                                <span className="layoverCircle"></span>
                                            </div>
                                            <div className="">
                                                <strong className="fontSize14">Visakhapatnam</strong>
                                                <span className="fontSize14">. Visakhapatnam International Airport</span>
                                            </div>
                                        </div>
                                        <div className="layover">
                                            <span className="fontSize14">2h 50m</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex align-items-center justify-content-between time-info-ui me-3">
                                                <strong className="fontSize14">22:00</strong>
                                                <span className="layoverCircle"></span>
                                            </div>
                                            <div className="">
                                                <strong className="fontSize14">Bengaluru </strong>
                                                <span className="fontSize14">. Bengaluru International Airport</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="itenaryRight">
                                    <ul className="itenaryList list-unstyled">
                                        <li>
                                            <span className="fontSize12">Baggage</span>
                                            <span className="fontSize12">Check-in</span>
                                            <span className="fontSize12">Cabin</span>
                                        </li>
                                        <li>
                                            <span className="fontSize12"><strong>ADULT</strong></span>
                                            <span className="fontSize12"><strong>15 Kgs</strong></span>
                                            <span className="fontSize12"><strong>7 Kgs (1 piece only)</strong></span>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
        </>
    }
}

export default BookingDetails;