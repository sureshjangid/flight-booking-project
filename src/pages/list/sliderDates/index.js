import React, { Component } from "react";
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
class SliderDates extends Component{
    render(){
        return <>
        <Glider draggable slidesToShow={7} slidesToScroll={7} className="list-unstyled d-flex justify-content-between mb-0">
            <div>
                <div className="date-box">
                    <div className="flight-date">Tue 04 Feb</div>
                    <p>$3000</p>
                </div>
            </div>
            <div>
                <div className="date-box">
                    <div className="flight-date">Tue 04 Feb</div>
                    <p>$3000</p>
                </div>
            </div>
            <div className="text-active">
                <div className="date-box">
                    <div className="flight-date">Tue 04 Feb</div>
                    <p>$3000</p>
                </div>
            </div>
            <div className="box-active-before">
                <div className="date-box">
                    <div className="flight-date">Tue 04 Feb</div>
                    <p>$3000</p>
                </div>
            </div>
            <div className="box-active">
                <div className="date-box">
                    <div className="flight-date">Tue 04 Feb</div>
                    <p>$3000</p>
                </div>
            </div>
            <div className="box-active-after">
                <div className="date-box">
                    <div className="flight-date">Tue 04 Feb</div>
                    <p>$3000</p>
                </div>
            </div>
            <div>
                <div className="date-box">
                    <div className="flight-date">Tue 04 Feb</div>
                    <p>$3000</p>
                </div>
            </div>
            <div>
                <div className="date-box">
                    <div className="flight-date">Tue 04 Feb</div>
                    <p>$3000</p>
                </div>
            </div>
            <div>
                <div className="date-box">
                    <div className="flight-date">Tue 04 Feb</div>
                    <p>$3000</p>
                </div>
            </div> 
        </Glider>
        </>    
    }
}

export default SliderDates