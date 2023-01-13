import moment from 'moment';
import React from 'react'
import { Component } from 'react';
import { parse } from 'tinyduration';

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

class ListData extends Component {
    onBookNow = event => {
        const { item, history } = this.props
        this.props.offerRequestID(item.id, history)
    }
    render() {
        const { item, indexKey } = this.props;
        console.log("item, indexKey", item, indexKey)
        return <>
            <li>
                <div className="row align-items-center mb-3">
                    <div className="col-md-9">
                        {
                            item.slices.map((slicesItem) => {
                                const durationObj = parse(slicesItem.duration);
                                console.log("durationObj", durationObj, timeUpdate(durationObj))
                                return <div className="d-flex w-100 align-items-center mb-4 flight-item-main">
                                    <div className="flight-logo" style={{ textAlign: 'center' }}>
                                        <img src={item.owner.logo_symbol_url} alt="flight-logo" className="img-fluid" />
                                        <span style={{ fontSize: 10 }}>{item.owner.name}</span>
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
                                        <div className="start-date text-sm-end text-sm-start text-end">
                                            <div className="start-time">{(slicesItem.segments && slicesItem.segments[0]) ? moment(slicesItem.segments[0].arriving_at).format("LT") : ""}</div>
                                            <div className="flight-airport">{slicesItem.destination.iata_code}</div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }


                    </div>
                    <div className="col-md-3">
                        <div className="flight-info text-center">
                            <div className="flight-amount">
                                <div className="flight-price mb-1">
                                    ${item.base_amount}
                                </div>
                                <div className="flight-total mb-sm-2 mb-0">
                                    ${item.total_amount} total
                                </div>
                            </div>
                            <div className="booking-btn">
                                <button className="btn btn-primary w-100 rounded-0 py-2" onClick={this.onBookNow}>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="flight-more-details">
                    <div className="accordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="otherDetials">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#one" + indexKey} aria-expanded="true" aria-controls={"#one" + indexKey}>
                                    <span className="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="18" width="18" fill="#34404B"><path d="M482.3 192C516.5 192 576 221 576 256C576 292 516.5 320 482.3 320H365.7L265.2 495.9C259.5 505.8 248.9 512 237.4 512H181.2C170.6 512 162.9 501.8 165.8 491.6L214.9 320H112L68.8 377.6C65.78 381.6 61.04 384 56 384H14.03C6.284 384 0 377.7 0 369.1C0 368.7 .1818 367.4 .5398 366.1L32 256L.5398 145.9C.1818 144.6 0 143.3 0 142C0 134.3 6.284 128 14.03 128H56C61.04 128 65.78 130.4 68.8 134.4L112 192H214.9L165.8 20.4C162.9 10.17 170.6 0 181.2 0H237.4C248.9 0 259.5 6.153 265.2 16.12L365.7 192H482.3z" /></svg>
                                    </span>
                                    <span className="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="18" width="18" fill="#34404B"><path d="M221.6 148.7C224.7 161.3 224.8 174.5 222.1 187.2C219.3 199.1 213.6 211.9 205.6 222.1C191.1 238.6 173 249.1 151.1 254.1V472C151.1 482.6 147.8 492.8 140.3 500.3C132.8 507.8 122.6 512 111.1 512C101.4 512 91.22 507.8 83.71 500.3C76.21 492.8 71.1 482.6 71.1 472V254.1C50.96 250.1 31.96 238.9 18.3 222.4C10.19 212.2 4.529 200.3 1.755 187.5C-1.019 174.7-.8315 161.5 2.303 148.8L32.51 12.45C33.36 8.598 35.61 5.197 38.82 2.9C42.02 .602 45.97-.4297 49.89 .0026C53.82 .4302 57.46 2.303 60.1 5.259C62.74 8.214 64.18 12.04 64.16 16V160H81.53L98.62 11.91C99.02 8.635 100.6 5.621 103.1 3.434C105.5 1.248 108.7 .0401 111.1 .0401C115.3 .0401 118.5 1.248 120.9 3.434C123.4 5.621 124.1 8.635 125.4 11.91L142.5 160H159.1V16C159.1 12.07 161.4 8.268 163.1 5.317C166.6 2.366 170.2 .474 174.1 .0026C178-.4262 181.1 .619 185.2 2.936C188.4 5.253 190.6 8.677 191.5 12.55L221.6 148.7zM448 472C448 482.6 443.8 492.8 436.3 500.3C428.8 507.8 418.6 512 408 512C397.4 512 387.2 507.8 379.7 500.3C372.2 492.8 368 482.6 368 472V352H351.2C342.8 352 334.4 350.3 326.6 347.1C318.9 343.8 311.8 339.1 305.8 333.1C299.9 327.1 295.2 320 291.1 312.2C288.8 304.4 287.2 296 287.2 287.6L287.1 173.8C288 136.9 299.1 100.8 319.8 70.28C340.5 39.71 369.8 16.05 404.1 2.339C408.1 .401 414.2-.3202 419.4 .2391C424.6 .7982 429.6 2.62 433.9 5.546C438.2 8.472 441.8 12.41 444.2 17.03C446.7 21.64 447.1 26.78 448 32V472z" /></svg>
                                    </span>
                                    <span className="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="18" width="18" fill="#34404B"><path d="M368 128h-47.95l.0123-80c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48L128 128H80C53.5 128 32 149.5 32 176v256C32 458.5 53.5 480 80 480h16.05L96 496C96 504.9 103.1 512 112 512h32C152.9 512 160 504.9 160 496L160.1 480h128L288 496c0 8.875 7.125 16 16 16h32c8.875 0 16-7.125 16-16l.0492-16H368c26.5 0 48-21.5 48-48v-256C416 149.5 394.5 128 368 128zM176.1 48h96V128h-96V48zM336 384h-224C103.2 384 96 376.8 96 368C96 359.2 103.2 352 112 352h224c8.801 0 16 7.199 16 16C352 376.8 344.8 384 336 384zM336 256h-224C103.2 256 96 248.8 96 240C96 231.2 103.2 224 112 224h224C344.8 224 352 231.2 352 240C352 248.8 344.8 256 336 256z" /></svg>
                                    </span>
                                    <span className="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="18" width="18" fill="#34404B"><path d="M319.1 351.1c-35.35 0-64 28.66-64 64.01s28.66 64.01 64 64.01c35.34 0 64-28.66 64-64.01S355.3 351.1 319.1 351.1zM320 191.1c-70.25 0-137.9 25.6-190.5 72.03C116.3 275.7 115 295.9 126.7 309.2C138.5 322.4 158.7 323.7 171.9 312C212.8 275.9 265.4 256 320 256s107.3 19.88 148.1 56C474.2 317.4 481.8 320 489.3 320c8.844 0 17.66-3.656 24-10.81C525 295.9 523.8 275.7 510.5 264C457.9 217.6 390.3 191.1 320 191.1zM630.2 156.7C546.3 76.28 436.2 32 320 32S93.69 76.28 9.844 156.7c-12.75 12.25-13.16 32.5-.9375 45.25c12.22 12.78 32.47 13.12 45.25 .9375C125.1 133.1 220.4 96 320 96s193.1 37.97 265.8 106.9C592.1 208.8 600 211.8 608 211.8c8.406 0 16.81-3.281 23.09-9.844C643.3 189.2 642.9 168.1 630.2 156.7z" /></svg>
                                    </span>
                                </button>
                            </h2>
                            <div id={"one" + indexKey} className="accordion-collapse collapse" aria-labelledby="otherDetials" data-bs-parent="#flightMoreDetails">
                                <div className="accordion-body px-0 pb-0">
                                    <div className="other-detial">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>BAGGAGE SUMMARY</th>
                                                    <th>DETAILS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Check In Baggage
                                                    </td>
                                                    <td>
                                                        15 Kg (1 Piece Only) -  EACH ADULT & CHILD
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Hand Baggage
                                                    </td>
                                                    <td>
                                                        7 Kg -  EACH ADULT & CHILD
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="disclaimer">
                                            <h6>Baggage Disclaimer:-</h6>
                                            <p>
                                                <strong>Hand Baggage:</strong>  Airlines permits only one (1pc) bag weighing not more than 7 KGS.
                                                In addition to the one piece of Hand Baggage permitted, Few Airlines may permit Customer to carry one additional personal article such as ladies purse or a small bag containing laptop not weighing more than 3 KGS.
                                            </p>
                                            <p>
                                                <strong>Infant Baggage:</strong> Passenger Traveling with <strong>Infant</strong> are allowed to carry <strong>1 Pc of additional Hand Baggage</strong>  not exceeding 7 KGS.
                                            </p>
                                            <p>The baggage information is just for reference, Please check with airline for more specific information.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    }
}


export default ListData;