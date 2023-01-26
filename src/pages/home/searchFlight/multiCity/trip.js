import moment from "moment";
import React, { Component } from "react";
import DateRange from '../../../../container/datepicker'
import PlaceSearch from '../placeSearch'
class TripCity extends Component{
    onDepartDate=(startDate)=>{
        const{onMultiWayDateChange,index}=this.props
        onMultiWayDateChange(index,startDate);
    }

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
        const{index}=this.props
        console.log("onSearchFrom", value)
        this.props.MultiCitySearchUpdate(index,"from",value)
    }
    onSearchTo=(value)=>{
        const{index}=this.props
        console.log("onSearchTo", value)
        this.props.MultiCitySearchUpdate(index, "to",value)
    }
    render(){
        const{addTrips,onClickToRemoveMultiCity,onClickToReverseMultiCity,onMultiWayDateChange,item,index}=this.props;
        console.log("item-item--",item)
        console.log("multi",this.props)
        return <div className="form-row mb-3">
            <div className="serach-box align-items-center mb-3 serch-multi-city">
                <div className="serach-box-item d-flex align-items-center serch-multi-city-one">
                    <div className="form-group type-input">
                        {/* <input type="text" className="form-control" placeholder="From?" value={item.from} /> */}
                        <PlaceSearch value={item.from && Object.keys(item.from).length>0 && item.from.name?item.from.name:""} onSearchUpdate={this.onSearchFrom} placeholder="Where From"/>
                    </div>
                    <div className="revert-box">
                        <button type="button" className="revert-btn" onClick={onClickToReverseMultiCity(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="16" width="16" fill="#0f294c"><path d="M32 176h370.8l-57.38 57.38c-12.5 12.5-12.5 32.75 0 45.25C351.6 284.9 359.8 288 368 288s16.38-3.125 22.62-9.375l112-112c12.5-12.5 12.5-32.75 0-45.25l-112-112c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L402.8 112H32c-17.69 0-32 14.31-32 32S14.31 176 32 176zM480 336H109.3l57.38-57.38c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-112 112c-12.5 12.5-12.5 32.75 0 45.25l112 112C127.6 508.9 135.8 512 144 512s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L109.3 400H480c17.69 0 32-14.31 32-32S497.7 336 480 336z" /></svg>
                        </button>
                    </div>
                    <div className="form-group type-input">
                        {/* <input type="text" className="form-control" placeholder="To?" value={item.to} /> */}
                        <PlaceSearch value={item.to && Object.keys(item.to).length>0 && item.to.name?item.to.name:""} onSearchUpdate={this.onSearchTo} placeholder="Where To"/>
                    </div>
                </div>
                <div className="saprator-horizantal"></div>
                <div className="serach-box-item d-flex align-items-center serch-multi-city-two">
                    <div className="form-group type-input w-100">
                        <DateRange onDateChange={this.onDepartDate} key={index}>
                            <input type="text" className="form-control" placeholder="dd/mm/yyyy" value={moment(item.deaprtDate).format("DD/MM/YYYY")} />
                        </DateRange>
                    </div>
                    <div className="search-btn">
                        <button type="submit" className="bg-transparent border-0" onClick={onClickToRemoveMultiCity(index)} style={index==0?{display:'none'}:{}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="22" width="22" fill="#0f294c"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
    
        </div>
    }
}

export default TripCity;