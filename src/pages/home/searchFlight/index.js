import React, { Component } from "react";
import { connect } from "react-redux";
import moment from 'moment'
import RoundTrip from './roundTrip'
import OneWay from './oneWay'
import MultiCity from './multiCity'
import Persons from "./persons";
import Cookies from 'universal-cookie';
import { directFlightUpdate, AddByBaggageUpdate, SeatTypeUpdate, TripTypeUpdate, PersonUpdate, MoreCityAdd, MoreCityRemove ,OneWayDateUpdate,RoundTripDateUpdate,MultiCityDateUpdate,OneWaySearchUpdate,RoundTripSearchUpdate,MultiCitySearchUpdate,onSearchFlight, ReverseReturnUpdate, SetFlightSearch, ReverseOneWayUpdate, ReverseMultiCityUpdate} from '../../../action/flightActions'
import { object } from "prop-types";
const TripeSelectedIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="18" width="18" fill="#34404b"> <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" /></svg>
}

const cookies = new Cookies();
class SearchFlight extends Component {
    state = {
        isOpen: false,
        isLoading: false,
        // flightData: cookies.get('flightData')
    }
    

    componentDidMount(){
        const { flightData, SetFlightSearch } = this.props
        this.setState({isLoading: true})
        // console.log('home', this.props)
        console.log("cookies",typeof flightData)
        console.log("cookies",cookies.get('flightData'))
        console.log("cookies",typeof cookies.get('flightData'))
        try {
            // SetFlightSearch(cookies.get('flightData'))
            console.log("cookies",flightData)
            
        } catch (error) {
            console.log("cookies", error)
        }
        // if(!flightData) {
            // const data = cookies.get('flightData')
            // console.log("cookies",data)
        // }
        this.setState({isLoading: false})

    }

    onClickToOpen = event => {
        this.setState({ isOpen: true })
    }
    onClickToClose = event => {
        this.setState({ isOpen: false })
    }
    onClickDirectFlight = event => {
        this.props.directFlightUpdate(event.target.checked)
    }
    onClickAddByBaggage = event => {
        this.props.AddByBaggageUpdate(event.target.checked)
    }
    onClickToSeatType = (type) => event => {
        this.props.SeatTypeUpdate(type)
    }

    onClickToSelectTripType = (type) => event => {
        this.props.TripTypeUpdate(type)
    }
    onIncresePersons = (type) => event => {
        let { flightData } = this.props;
        var { persons } = flightData
        console.log("sudarshan", persons)
        const updateValue = parseInt(persons[type]) + 1;
        console.log("sudarshan", type, updateValue)
        if (updateValue < 8) this.props.PersonUpdate(type, updateValue)
    }
    onDecreasePersons = (type) => event => {
        let { flightData } = this.props;
        var { persons } = flightData
        const updateValue = (parseInt(persons[type]) - 1) < 0 ? 0 : (parseInt(persons[type]) - 1);
        this.props.PersonUpdate(type, updateValue)
    }
    onOnewayDateChange = (startDate) => {
        console.log("startDate", startDate)
        this.props.OneWayDateUpdate(startDate)
    }
    onRoundWayDateChange = (type,startDate) => {
        console.log("startDate", type,startDate)
        this.props.RoundTripDateUpdate(type,startDate)
    }
    onMultiWayDateChange = (index,startDate) => {
        console.log("startDate", index,startDate)
        this.props.MultiCityDateUpdate(index,startDate)
    }
    

    onClickToMoreAddCity = event => {
        let { flightData } = this.props;
        var { addTrips } = flightData
        if (addTrips && addTrips.length > 0 && addTrips[addTrips.length - 1]) {
            const { to } = addTrips[addTrips.length - 1];
            let addValue = { from: to, to: "", deaprtDate: moment() }
            this.props.MoreCityAdd(addValue)
        }
        else {
            let addValue = { from: "", to: "", deaprtDate: moment() }
            this.props.MoreCityAdd(addValue)
        }

    }

    onClickToRemoveMultiCity = (index) => event => {
        this.props.MoreCityRemove(index)
    }
    onClickToReverseMultiCity = (index) => event => {
        this.props.ReverseMultiCityUpdate(index)
    }
    onClickToReverseRoundTrip = event => {

        this.props.ReverseReturnUpdate()
    }
    onClickToReverseOneWayTrip = event => {
        this.props.ReverseOneWayUpdate()
    }

    onSearchFlight=event=>{
       
        const{history, flightData}=this.props;
        cookies.set('flightData', flightData);
        console.log("cookies",flightData, history)

        console.log("history- history",history)
        this.props.onSearchFlight(history)
    }
    

    render() {
        const { isOpen, isLoading } = this.state;
        const { flightData,OneWaySearchUpdate,RoundTripSearchUpdate,MultiCitySearchUpdate, SetFlightSearch } = this.props
        const { tripType, persons, seatType,roundTrips } = flightData

        console.log("cookies", roundTrips)
      
        return <>
           <section className="search-filter-main position-relative">
                <img src={"assets/images/banner-2.jpg"} alt="Banner" className="img-fluid" width="100%" height="auto"/>
                <div className="search-container">
                    <div className="site-banner position-relative">
                        <div className="banner-content text-left">
                            <h1 className="banner-title">Let The Journey Begin</h1>
                            <p className="banner-disc">Find and book a great experiance.</p>
                        </div>
                    </div>
                    <div className="search-filter">
                        <div>
                            <div className="form-row d-flex mb-3">
                                <div className="select-box select-trip">
                                    <div className="dropdown">
                                        <button className="dropdown-toggle" type="button" id="selectTrip" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="20" width="20" fill="#34404b">
                                                <path d="M482.3 192C516.5 192 576 221 576 256C576 292 516.5 320 482.3 320H365.7L265.2 495.9C259.5 505.8 248.9 512 237.4 512H181.2C170.6 512 162.9 501.8 165.8 491.6L214.9 320H112L68.8 377.6C65.78 381.6 61.04 384 56 384H14.03C6.284 384 0 377.7 0 369.1C0 368.7 .1818 367.4 .5398 366.1L32 256L.5398 145.9C.1818 144.6 0 143.3 0 142C0 134.3 6.284 128 14.03 128H56C61.04 128 65.78 130.4 68.8 134.4L112 192H214.9L165.8 20.4C162.9 10.17 170.6 0 181.2 0H237.4C248.9 0 259.5 6.153 265.2 16.12L365.7 192H482.3z" />
                                            </svg>
                                            <span>{
                                                tripType === 0 ? `Round Trip` : tripType === 1 ? `One-way` : tripType === 2 ? `Multi-city` : null}</span>

                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="selectTrip">
                                            <li>
                                                <a href="javascrip:void()" className={`${tripType}` === 0 ? 'dropdown-item d-flex align-items-center justify-content-between active' : "dropdown-item"} onClick={this.onClickToSelectTripType(0)}>
                                                    <span>Round Trip</span>
                                                    {tripType === 0 ? <TripeSelectedIcon /> : null}
                                                </a></li>
                                            <li><a href="javascrip:void()" className={`${tripType}` === 1 ? 'dropdown-item d-flex align-items-center justify-content-between active' : "dropdown-item"} onClick={this.onClickToSelectTripType(1)}><span>One-way</span> {tripType === 1 ? <TripeSelectedIcon /> : null}</a></li>
                                            <li><a href="javascrip:void()" className={`${tripType}` === 2 ? 'dropdown-item d-flex align-items-center justify-content-between active' : "dropdown-item"} onClick={this.onClickToSelectTripType(2)}><span>Multi-city</span> {tripType === 2 ? <TripeSelectedIcon /> : null}
                                            </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="select-box select-person">
                                    <div className="dropdown">
                                        <button className="dropdown-toggle" type="button" id="selectTrip" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" onClick={this.onClickToOpen}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="20" width="20" fill="#34404b" className="me-1"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" /></svg>
                                            {
                                                parseInt(persons.adults) + parseInt(persons.children) + parseInt(persons.infants)
                                            } <span>Person</span>
                                        </button>
                                        <Persons onClickToClose={this.onClickToClose} onClickToOpen={this.onClickToOpen} isOpen={isOpen} persons={persons} onDecreasePersons={this.onDecreasePersons} onIncresePersons={this.onIncresePersons} />
                                    </div>
                                </div>
                                <div className="select-box select-flight">
                                    <div className="dropdown">
                                        <button className="dropdown-toggle" type="button" id="selectTrip" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="20" width="20" fill="#34404b" className="me-1"><path d="M472.8 168.4C525.1 221.4 525.1 306.6 472.8 359.6L360.8 472.9C351.5 482.3 336.3 482.4 326.9 473.1C317.4 463.8 317.4 448.6 326.7 439.1L438.6 325.9C472.5 291.6 472.5 236.4 438.6 202.1L310.9 72.87C301.5 63.44 301.6 48.25 311.1 38.93C320.5 29.61 335.7 29.7 344.1 39.13L472.8 168.4zM.0003 229.5V80C.0003 53.49 21.49 32 48 32H197.5C214.5 32 230.7 38.74 242.7 50.75L410.7 218.7C435.7 243.7 435.7 284.3 410.7 309.3L277.3 442.7C252.3 467.7 211.7 467.7 186.7 442.7L18.75 274.7C6.743 262.7 0 246.5 0 229.5L.0003 229.5zM112 112C94.33 112 80 126.3 80 144C80 161.7 94.33 176 112 176C129.7 176 144 161.7 144 144C144 126.3 129.7 112 112 112z" /></svg>
                                            <span>{seatType === 1 ? `Economy` : seatType === 2 ? `Premium economy` : seatType === 3 ? `Business` : seatType === 4 ? `First` : null}</span>

                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="selectTrip">
                                            <li><a href="javascrip:void()" className={`dropdown-item d-flex align-items-center justify-content-between ${seatType === 1 ? `active` : ``}`} onClick={this.onClickToSeatType(1)}>
                                                <span>Economy</span>
                                                {
                                                    seatType === 1 ? <TripeSelectedIcon /> : null
                                                }
                                            </a></li>
                                            <li><a href="javascrip:void()" className={`dropdown-item d-flex align-items-center justify-content-between ${seatType === 2 ? `active` : ``}`} onClick={this.onClickToSeatType(2)}> <span>Premium economy</span>
                                                {
                                                    seatType === 2 ? <TripeSelectedIcon /> : null
                                                }</a></li>
                                            <li><a href="javascrip:void()" className={`dropdown-item d-flex align-items-center justify-content-between ${seatType === 3 ? `active` : ``}`} onClick={this.onClickToSeatType(3)}> <span>Business</span>
                                                {
                                                    seatType === 3 ? <TripeSelectedIcon /> : null
                                                }</a></li>
                                            <li><a href="javascrip:void()" className={`dropdown-item d-flex align-items-center justify-content-between ${seatType === 4 ? `active` : ``}`} onClick={this.onClickToSeatType(4)}> <span>First</span>
                                                {
                                                    seatType === 4 ? <TripeSelectedIcon /> : null
                                                }</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
    
                            {tripType === 0 ? <RoundTrip {...flightData} onClickToReverseRoundTrip={this.onClickToReverseRoundTrip}  onRoundWayDateChange={this.onRoundWayDateChange}  RoundTripSearchUpdate={RoundTripSearchUpdate} onSearchFlight={this.onSearchFlight}/> : null}
                            {tripType === 1 ? <OneWay  {...flightData} onClickToReverseOneWayTrip={this.onClickToReverseOneWayTrip} onOnewayDateChange={this.onOnewayDateChange} OneWaySearchUpdate={OneWaySearchUpdate} onSearchFlight={this.onSearchFlight}/> : null}
                            {tripType === 2 ? <MultiCity  {...flightData} onClickToRemoveMultiCity={this.onClickToRemoveMultiCity} onClickToReverseMultiCity={this.onClickToReverseMultiCity} onMultiWayDateChange={this.onMultiWayDateChange} MultiCitySearchUpdate={MultiCitySearchUpdate}/> : null}

                            {tripType === 2 ?
                            <div className="form-row">
                                <div className="multy-city-submit">
                                    {tripType === 2 ? <button type="button" className="btn-add me-2" onClick={this.onClickToMoreAddCity}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="18" width="18" fill="#fff"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" /></svg>
                                        Add More
                                    </button> : null}
                                    {tripType === 2 ?  <button type="button" className="btn-primary" onClick={this.onSearchFlight}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="18" width="18" fill="#fff"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" /></svg>
                                        Search
                                    </button>:null}
                                </div>
                            </div> : null}
                        </div>
                    </div>
                </div>
            </section>

        </>
    }
}
const mapStateToProps = (state) => {
    return {
        flightData: state.flight
    }
}
const mapDispatchToProps = dispatch => {
    return {
        directFlightUpdate: (value) => dispatch(directFlightUpdate(value)),
        AddByBaggageUpdate: (value) => dispatch(AddByBaggageUpdate(value)),
        SeatTypeUpdate: (value) => dispatch(SeatTypeUpdate(value)),
        TripTypeUpdate: (value) => dispatch(TripTypeUpdate(value)),
        PersonUpdate: (type, value) => dispatch(PersonUpdate(type, value)),
        MoreCityAdd: (value) => dispatch(MoreCityAdd(value)),
        MoreCityRemove: (value) => dispatch(MoreCityRemove(value)),
        OneWayDateUpdate: (value) => dispatch(OneWayDateUpdate(value)),
        RoundTripDateUpdate: (type,startDate) => dispatch(RoundTripDateUpdate(type,startDate)),
        MultiCityDateUpdate: (index,startDate) => dispatch(MultiCityDateUpdate(index,startDate)),
        OneWaySearchUpdate: (type,search) => dispatch(OneWaySearchUpdate(type,search)),
        RoundTripSearchUpdate: (type,search) => dispatch(RoundTripSearchUpdate(type,search)),
        MultiCitySearchUpdate: (index,type,search) => dispatch(MultiCitySearchUpdate(index,type,search)),
        onSearchFlight: (history) => dispatch(onSearchFlight(history)),
        ReverseReturnUpdate: () => dispatch(ReverseReturnUpdate()),
        ReverseOneWayUpdate: () => dispatch(ReverseOneWayUpdate()),
        ReverseMultiCityUpdate: (index) => dispatch(ReverseMultiCityUpdate(index)),
        SetFlightSearch: (obj) => dispatch(SetFlightSearch(obj))
        

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchFlight);