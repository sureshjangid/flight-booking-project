import React, { Component } from "react";
import { connect } from "react-redux";
import Aside from './aside'
import ListData from './listData'
import {offerRequestID} from '../../action/flightActions'
class SearchList extends Component {
    state={
        searchData:{}
    }

    filterClick = () =>{
        document.body.classList.toggle('filter-open');
    }

    componentDidMount(){
        const{searchData}=this.props;
        this.setState({searchData})
    }

    render() {
        const { searchData } = this.props
        console.log("searchData", searchData.offers)
        return <>
            {searchData && Object.keys(searchData).length > 0 ? <section className="flight-listings pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-12">
                            <div className="mobile-filter text-end mb-3">
                                <button className="btn btn-dark rounded-0 px-4" onClick={this.filterClick}>Filter</button>
                            </div>
                            {searchData.offers.length>0?<Aside countData={searchData.offers.length} />:
                            <div className="aside-filter">
                                <div className="border-bottom pb-3">
                                    <div className="sk_line sk_line_20 sk_line_height_20 m-0 mr-4"></div>
                                </div>
                                <div className="border-bottom pb-3">
                                    <div className="d-flex align-items-center justify-content-between py-3">
                                        <p className="sk_line sk_line_height_10 sk_line_40 m-0"></p>
                                        <div className="sk_line sk_line_height_16 sk_line_20 m-0"></div>
                                    </div>
                                    <div className="d-flex align-items-center py-2">
                                        <p className="sk_line sk_line_height_10 sk_line_80 m-0"></p>
                                    </div>
                                    <div className="d-flex align-items-center py-2">
                                        <p className="sk_line sk_line_height_10 sk_line_80 m-0"></p>
                                    </div>
                                    <div className="d-flex align-items-center py-2">
                                        <p className="sk_line sk_line_height_10 sk_line_80 m-0"></p>
                                    </div>
                                    <div className="d-flex align-items-center py-2">
                                        <p className="sk_line sk_line_height_10 sk_line_80 m-0"></p>
                                    </div>
                                    <div className="d-flex align-items-center py-2">
                                        <p className="sk_line sk_line_height_10 sk_line_80 m-0"></p>
                                    </div>
                                    <div className="d-flex align-items-center py-2">
                                        <p className="sk_line sk_line_height_10 sk_line_80 m-0"></p>
                                    </div>
                                    <div className="d-flex align-items-center py-2">
                                        <p className="sk_line sk_line_height_10 sk_line_80 m-0"></p>
                                    </div>
                                    <div className="d-flex align-items-center py-2">
                                        <p className="sk_line sk_line_height_10 sk_line_80 m-0"></p>
                                    </div>
                                </div>
                                <div className="border-bottom pb-3">
                                    <div className="d-flex align-items-center justify-content-between py-3">
                                        <p className="sk_line sk_line_height_10 sk_line_40 m-0"></p>
                                        <div className="sk_line sk_line_height_16 sk_line_20 m-0"></div>
                                    </div>
                                    <div className="d-flex align-items-center py-2">
                                        <p className="sk_line sk_line_height_10 sk_line_80 m-0"></p>
                                    </div>
                                    <div className="d-flex align-items-center py-2">
                                        <p className="sk_line sk_line_height_10 sk_line_80 m-0"></p>
                                    </div>
                                    <div className="d-flex align-items-center py-2">
                                        <p className="sk_line sk_line_height_10 sk_line_80 m-0"></p>
                                    </div>
                                </div>
                                <div className="border-bottom pb-3">
                                    <div className="d-flex align-items-center justify-content-between py-3">
                                        <p className="sk_line sk_line_height_10 sk_line_40 m-0"></p>
                                        <div className="sk_line sk_line_height_16 sk_line_20 m-0"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="">
                                                <div className="sk_line sk_rect sk_line_height_50"></div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="">
                                                <div className="sk_line sk_rect sk_line_height_50"></div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="">
                                                <div className="sk_line sk_rect sk_line_height_50"></div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="">
                                                <div className="sk_line sk_rect sk_line_height_50"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-bottom pb-3">
                                    <div className="d-flex align-items-center justify-content-between py-3">
                                        <p className="sk_line sk_line_height_10 sk_line_40 m-0"></p>
                                        <div className="sk_line sk_line_height_16 sk_line_20 m-0"></div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="">
                                            <div className="sk_line sk_thumb m-0 mr-3"></div>
                                        </div>
                                        <div className="w-100">
                                            <div className="sk_line sk_line_height_10 sk_line_100 m-0 rounded-0"></div>
                                        </div>
                                        <div className="">
                                            <div className="sk_line sk_thumb m-0 mr-3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className="col-lg-9 col-12">
                            <div className="flight-listing-main">
                                <ul className="flight-nav nav nav-tabs justify-content-between mb-sm-4 mb-3" id="flightTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="recommended-tab" data-bs-toggle="tab" data-bs-target="#recommended" type="button" role="tab" aria-controls="recommended" aria-selected="true">Recommended</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="cheapest-tab" data-bs-toggle="tab" data-bs-target="#cheapest" type="button" role="tab" aria-controls="cheapest" aria-selected="false">Cheapest Price</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="fatest-tab" data-bs-toggle="tab" data-bs-target="#fatest" type="button" role="tab" aria-controls="fatest" aria-selected="false">Fatest</button>
                                    </li>
                                </ul>
                                <div className="tab-content flight-list-Content" id="flightTabContent">
                                    <div className="tab-pane fade show active" id="recommended" role="tabpanel" aria-labelledby="recommended-tab">
                                        <div className="bestdeal-list">
                                            {searchData.offers && searchData.offers.length > 0 ? <ul className="list-unstyled" id="flightMoreDetails">
                                                {
                                                    searchData.offers.map((item, indexKey) => <ListData item={item} indexKey={indexKey} key={indexKey} offerRequestID={this.props.offerRequestID} {...this.props}/>)
                                                }

                                            </ul> : <><div className="data-error text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={18} width={18} className="me-1"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg> This search returned no offers.</div></>}
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="cheapest" role="tabpanel" aria-labelledby="cheapest-tab">
                                    
                                    </div>
                                    <div className="tab-pane fade" id="fatest" role="tabpanel" aria-labelledby="fatest-tab">C</div>
                                </div>
                            </div>
                            <div className="flight-listing-main mb-4 d-none">
                                <div className="flight-nav p-4">
                                    <div className="row">
                                        <div className="col-4 py-3">
                                            <p className="sk_line sk_line_height_10 sk_line_50 m-0"></p>
                                        </div>
                                        <div className="col-4 py-3">
                                            <p className="sk_line sk_line_height_10 sk_line_50 m-auto"></p>
                                        </div>
                                        <div className="col-4 py-3">
                                            <p className="sk_line sk_line_height_10 sk_line_50 m-0 float-end"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bestdeal-list d-none">
                                <ul className="list-unstyled">
                                    <li>
                                        <div className="row align-items-center">
                                            <div className="col-md-9">
                                                <div className="d-flex w-100 align-items-center mb-3">
                                                    <div className="d-flex w-100 align-items-center m_grid_author">
                                                        <div className="sk_line sk_img m-0 me-4 rounded"></div>
                                                        <div className="sk_line sk_line_20 sk_line_height_20 m-0"></div>
                                                        <p className="sk_line sk_line_height_10 sk_line_50 mb-0 mt-0 mx-4"></p>
                                                        <div className="sk_line sk_line_20 sk_line_height_20 m-0"></div>
                                                    </div>
                                                </div>
                                                <div className="d-flex w-100 align-items-center">
                                                    <div className="d-flex w-100 align-items-center m_grid_author">
                                                        <div className="sk_line sk_img m-0 me-4 rounded"></div>
                                                        <div className="sk_line sk_line_20 sk_line_height_20 m-0"></div>
                                                        <p className="sk_line sk_line_height_10 sk_line_50 mb-0 mt-0 mx-4"></p>
                                                        <div className="sk_line sk_line_20 sk_line_height_20 m-0"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="flight-info text-center">
                                                    <div className="sk_line sk_line_50 sk_line_height_20 m-auto mb-3"></div>
                                                    <p className="sk_line sk_line_height_10 sk_line_50 m-auto mb-3"></p>
                                                    <div className="sk_line sk_rect m-0 me-4 rounded-0 m-auto"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row align-items-center">
                                            <div className="col-md-9">
                                                <div className="d-flex w-100 align-items-center mb-3">
                                                    <div className="d-flex w-100 align-items-center m_grid_author">
                                                        <div className="sk_line sk_img m-0 me-4 rounded"></div>
                                                        <div className="sk_line sk_line_20 sk_line_height_20 m-0"></div>
                                                        <p className="sk_line sk_line_height_10 sk_line_50 mb-0 mt-0 mx-4"></p>
                                                        <div className="sk_line sk_line_20 sk_line_height_20 m-0"></div>
                                                    </div>
                                                </div>
                                                <div className="d-flex w-100 align-items-center">
                                                    <div className="d-flex w-100 align-items-center m_grid_author">
                                                        <div className="sk_line sk_img m-0 me-4 rounded"></div>
                                                        <div className="sk_line sk_line_20 sk_line_height_20 m-0"></div>
                                                        <p className="sk_line sk_line_height_10 sk_line_50 mb-0 mt-0 mx-4"></p>
                                                        <div className="sk_line sk_line_20 sk_line_height_20 m-0"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="flight-info text-center">
                                                    <div className="sk_line sk_line_50 sk_line_height_20 m-auto mb-3"></div>
                                                    <p className="sk_line sk_line_height_10 sk_line_50 m-auto mb-3"></p>
                                                    <div className="sk_line sk_rect m-0 me-4 rounded-0 m-auto"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row align-items-center">
                                            <div className="col-md-9">
                                                <div className="d-flex w-100 align-items-center mb-3">
                                                    <div className="d-flex w-100 align-items-center m_grid_author">
                                                        <div className="sk_line sk_img m-0 me-4 rounded"></div>
                                                        <div className="sk_line sk_line_20 sk_line_height_20 m-0"></div>
                                                        <p className="sk_line sk_line_height_10 sk_line_50 mb-0 mt-0 mx-4"></p>
                                                        <div className="sk_line sk_line_20 sk_line_height_20 m-0"></div>
                                                    </div>
                                                </div>
                                                <div className="d-flex w-100 align-items-center">
                                                    <div className="d-flex w-100 align-items-center m_grid_author">
                                                        <div className="sk_line sk_img m-0 me-4 rounded"></div>
                                                        <div className="sk_line sk_line_20 sk_line_height_20 m-0"></div>
                                                        <p className="sk_line sk_line_height_10 sk_line_50 mb-0 mt-0 mx-4"></p>
                                                        <div className="sk_line sk_line_20 sk_line_height_20 m-0"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="flight-info text-center">
                                                    <div className="sk_line sk_line_50 sk_line_height_20 m-auto mb-3"></div>
                                                    <p className="sk_line sk_line_height_10 sk_line_50 m-auto mb-3"></p>
                                                    <div className="sk_line sk_rect m-0 me-4 rounded-0 m-auto"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row align-items-center">
                                            <div className="col-md-9">
                                                <div className="d-flex w-100 align-items-center mb-3">
                                                    <div className="d-flex w-100 align-items-center m_grid_author">
                                                        <div className="sk_line sk_img m-0 me-4 rounded"></div>
                                                        <div className="sk_line sk_line_20 sk_line_height_20 m-0"></div>
                                                        <p className="sk_line sk_line_height_10 sk_line_50 mb-0 mt-0 mx-4"></p>
                                                        <div className="sk_line sk_line_20 sk_line_height_20 m-0"></div>
                                                    </div>
                                                </div>
                                                <div className="d-flex w-100 align-items-center">
                                                    <div className="d-flex w-100 align-items-center m_grid_author">
                                                        <div className="sk_line sk_img m-0 me-4 rounded"></div>
                                                        <div className="sk_line sk_line_20 sk_line_height_20 m-0"></div>
                                                        <p className="sk_line sk_line_height_10 sk_line_50 mb-0 mt-0 mx-4"></p>
                                                        <div className="sk_line sk_line_20 sk_line_height_20 m-0"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="flight-info text-center">
                                                    <div className="sk_line sk_line_50 sk_line_height_20 m-auto mb-3"></div>
                                                    <p className="sk_line sk_line_height_10 sk_line_50 m-auto mb-3"></p>
                                                    <div className="sk_line sk_rect m-0 me-4 rounded-0 m-auto"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row align-items-center">
                                            <div className="col-md-9">
                                                <div className="d-flex w-100 align-items-center mb-3">
                                                    <div className="d-flex w-100 align-items-center m_grid_author">
                                                        <div className="sk_line sk_img m-0 me-4 rounded"></div>
                                                        <div className="sk_line sk_line_20 sk_line_height_20 m-0"></div>
                                                        <p className="sk_line sk_line_height_10 sk_line_50 mb-0 mt-0 mx-4"></p>
                                                        <div className="sk_line sk_line_20 sk_line_height_20 m-0"></div>
                                                    </div>
                                                </div>
                                                <div className="d-flex w-100 align-items-center">
                                                    <div className="d-flex w-100 align-items-center m_grid_author">
                                                        <div className="sk_line sk_img m-0 me-4 rounded"></div>
                                                        <div className="sk_line sk_line_20 sk_line_height_20 m-0"></div>
                                                        <p className="sk_line sk_line_height_10 sk_line_50 mb-0 mt-0 mx-4"></p>
                                                        <div className="sk_line sk_line_20 sk_line_height_20 m-0"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="flight-info text-center">
                                                    <div className="sk_line sk_line_50 sk_line_height_20 m-auto mb-3"></div>
                                                    <p className="sk_line sk_line_height_10 sk_line_50 m-auto mb-3"></p>
                                                    <div className="sk_line sk_rect m-0 me-4 rounded-0 m-auto"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section> : null}
        </>

    }
}

const mapStateToProps = (state) => {
    return {
        searchData: state.searchData.searchData
    }
}
const mapDispatchToProps = dispatch => {
    return {

        offerRequestID: (id,history) => dispatch(offerRequestID(id,history)),
        

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchList);