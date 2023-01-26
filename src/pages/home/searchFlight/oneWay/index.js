import React, { Component } from "react";
import DateRange from '../../../../container/datepicker'
import PlaceSearch from '../placeSearch'
import moment from "moment";
class OneWay extends Component{
    componentDidMount(){
        const { autoSearch } = this.props
        if (window.performance) {
            if (performance.navigation.type == 1 && autoSearch) {
                setTimeout(() => {
                      this.props.onSearchFlight()
                }, 1000);
            }
          }
    }
    onSearchFrom=(value)=>{
        console.log("onSearchFrom", value)
        this.props.OneWaySearchUpdate("from",value)
    }
    onSearchTo=(value)=>{
        console.log("onSearchTo", value)
        this.props.OneWaySearchUpdate("to",value)
    }
    render(){
        const{oneWayTrips,onClickToReverseOneWayTrip,onOnewayDateChange,onSearchFlight}=this.props
        return <><div className="form-row">
        <div className="serach-box align-items-center">
            <div className="serach-box-item d-flex w-100 align-items-center search-one-way">
                <div className="form-group type-input from-to">
                    {/* <input type="text" className="form-control" placeholder="From?" value={oneWayTrips.from} /> */}
                    <PlaceSearch value={oneWayTrips.from && Object.keys(oneWayTrips.from).length>0 && oneWayTrips.from.name?oneWayTrips.from.name:""} onSearchUpdate={this.onSearchFrom} placeholder="Where From"/>
                </div>
                <div className="revert-box">
                    <button type="button" className="revert-btn" onClick={onClickToReverseOneWayTrip}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="16" width="16" fill="#0f294c"><path d="M32 176h370.8l-57.38 57.38c-12.5 12.5-12.5 32.75 0 45.25C351.6 284.9 359.8 288 368 288s16.38-3.125 22.62-9.375l112-112c12.5-12.5 12.5-32.75 0-45.25l-112-112c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L402.8 112H32c-17.69 0-32 14.31-32 32S14.31 176 32 176zM480 336H109.3l57.38-57.38c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-112 112c-12.5 12.5-12.5 32.75 0 45.25l112 112C127.6 508.9 135.8 512 144 512s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L109.3 400H480c17.69 0 32-14.31 32-32S497.7 336 480 336z" /></svg>
                    </button>
                </div>
                <div className="form-group type-input where-to">
                    {/* <input type="text" className="form-control" placeholder="To?" value={oneWayTrips.to} /> */}
                    <PlaceSearch value={oneWayTrips.to && Object.keys(oneWayTrips.to).length>0 && oneWayTrips.to.name?oneWayTrips.to.name:""} onSearchUpdate={this.onSearchTo} placeholder="Where To"/>
                </div>
            </div>
            <div className="saprator-horizantal"></div>
            <div className="serach-box-item d-flex w-100 align-items-center oneway-date">
                <div className="form-group type-input">
                    <DateRange onDateChange={onOnewayDateChange} key="oneway">
                        <input type="text" className="form-control" placeholder="dd/mm/yyyy" value={moment(oneWayTrips.deaprtDate).format("DD/MM/YYYY")} />
                    </DateRange>
                </div>
                <div className="saprator-vertical"></div>
                <div className="form-group type-input oneway-date-disable">
                    <DateRange onDateChange={onOnewayDateChange} key="oneway">
                        <input type="text" className="form-control" placeholder="dd/mm/yyyy" value={moment(oneWayTrips.deaprtDate).format("DD/MM/YYYY")} disabled/>
                    </DateRange>
                </div>
            </div>
            <div className="search-btn">
                <button type="submit" className="btn btn-primary" onClick={onSearchFlight}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="22" width="22" fill="#fff"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" /></svg> <span>Search</span>
                </button>
            </div>
        </div>

    </div></>
    }
}

export default OneWay;