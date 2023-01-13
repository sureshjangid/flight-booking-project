import React, { Component } from "react";
import MultiRangeSlider from "./MultiRangeSlider";
import { getAirlines } from '../../../action/flightActions'
const Slider = () => <>sd</>

class Aside extends Component {
    state = {
        airlines: [],

    }
    componentDidMount() {
        getAirlines().then((responseData) => {
            const { data } = responseData.data
            this.setState({ airlines: data })

        })
    }

    render() {
        const { countData } = this.props
        const { airlines } = this.state
        console.log("getAirlines", airlines)
        return (<aside className="aside-filter">
            <div className="aside-filter-heading d-flex justify-content-between mb-2">
                <h6 className="filter-title mb-0">Filter</h6>
                <p className="count-result mb-0">{countData} results</p>
            </div>
            <div className="accordion" id="searchFilterAccordion">
            <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                            Popular Filters
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive">
                        <div className="accordion-body">
                            <div className="airlince-list">
                                <ul className="list-unstyled">
                                    <li>
                                        <div className="airlince-list-items">
                                            <input type="checkbox" />
                                            <span></span>
                                            Nearby airports with baggage
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Departure times
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo">
                        <div className="accordion-body">
                            <div className="departure-list">
                                <div className="range-bar mb-2">
                                    <div className="">
                                        <p className="mb-0"><strong>Outbound - Inbound</strong></p>
                                        <p>00:00 - 23:59</p>
                                    </div>
                                    <MultiRangeSlider min={0} max={1000} onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Airlines
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                        <div className="accordion-body">
                            <div className="airlince-list">
                                <ul className="list-unstyled">
                                    {
                                        airlines && airlines.map((item, airIndex) => <li key={airIndex}>
                                            <div className="airlince-list-items">
                                                <input type="checkbox" />
                                                <span></span>
                                                {item.name}
                                            </div>
                                        </li>)
                                    }


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Stops
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                        <div className="accordion-body">
                            <div className="stops-list pb-3">
                                <ul className="list-unstyled d-flex flex-wrap">
                                    <li>
                                        <div className="stops-list-item position-relative">
                                            <input type="checkbox" />
                                            <label>Any</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="stops-list-item position-relative">
                                            <input type="checkbox" />
                                            <label>Direct</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="stops-list-item position-relative">
                                            <input type="checkbox" />
                                            <label>1 Stop</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="stops-list-item position-relative">
                                            <input type="checkbox" />
                                            <label>2 Stop</label>
                                        </div>
                                    </li>
                                </ul>
                                <p className="mb-0 allow-all position-relative">
                                    <input type="checkbox" />
                                    <span></span>
                                    <label>Allow overnight stopovers</label>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                            Price
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour">
                        <div className="accordion-body">
                            <div className="range-bar">
                                <MultiRangeSlider min={0} max={1000} onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
        );
    }
}
export default Aside