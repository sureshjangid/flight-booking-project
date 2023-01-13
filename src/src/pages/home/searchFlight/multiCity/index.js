import React, { Component } from "react";
import DateRange from '../../../../container/datepicker'
import TripCity from './trip'
class MultiCity extends Component{
  
    render(){
        const{addTrips,onClickToRemoveMultiCity,onClickToReverseMultiCity,onMultiWayDateChange}=this.props;
        console.log("addTrips",addTrips)
        return addTrips && addTrips.length>0?<>
        {
            addTrips.map((item,index)=><TripCity item={item} index={index} {...this.props}/>)
        }
        
       </>:null
    }
}

export default MultiCity;