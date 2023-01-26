import React, { Component } from "react";
import { connect } from "react-redux";
import Header from '../home/header'
import AppFooter from '../footer'
import LoginPopUp from '../loginPopup'
import SliderDates from './sliderDates'
import ListBanner from './banner'
//import Filters from './filters'
import SearchList from './searchData'
import SearchFlight from "../home/searchFlight";
class BookingList extends Component {

    render() {
        const{searchData}=this.props
        console.log("searchData",searchData)
        return <>
            <Header />
            <main>
               <div className="searchList-filter mb-sm-5 mb-3">
                <div className="list-search-form">
                <SearchFlight autoSearch={true}/>
                </div>
               </div>
               {/* <Filters/> */}
                <section className="flight-offer-dates py-lg-5 py-4 d-none">
                    <div className="container">
                        <div className="flight-date-box">
                            <SliderDates />
                        </div>
                        <div className="flight-date-box py-4">
                            <div className="row">
                                <div className="col-2">
                                    <div className="sk_loader_">
                                        <h4 className="sk_line sk_line_70 sk_line_height_12 mt-0"></h4>
                                        <p className="sk_line sk_line_40 sk_line_height_8 mb-0"></p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="sk_loader_">
                                        <h4 className="sk_line sk_line_70 sk_line_height_12 mt-0"></h4>
                                        <p className="sk_line sk_line_40 sk_line_height_8 mb-0"></p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="sk_loader_">
                                        <h4 className="sk_line sk_line_70 sk_line_height_12 mt-0"></h4>
                                        <p className="sk_line sk_line_40 sk_line_height_8 mb-0"></p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="sk_loader_">
                                        <h4 className="sk_line sk_line_70 sk_line_height_12 mt-0"></h4>
                                        <p className="sk_line sk_line_40 sk_line_height_8 mb-0"></p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="sk_loader_">
                                        <h4 className="sk_line sk_line_70 sk_line_height_12 mt-0"></h4>
                                        <p className="sk_line sk_line_40 sk_line_height_8 mb-0"></p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="sk_loader_">
                                        <h4 className="sk_line sk_line_70 sk_line_height_12 mt-0"></h4>
                                        <p className="sk_line sk_line_40 sk_line_height_8 mb-0"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {searchData.searchData.offers ? <SearchList {...this.props}/> : null}
            </main>
            <AppFooter />
            <LoginPopUp />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        searchData: state.searchData
    }
}
const mapDispatchToProps = dispatch => {
    return {



    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookingList);