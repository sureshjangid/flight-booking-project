import React, { Component } from "react";
import queryString from 'query-string'
import {RECIPT} from '../../action/api'
import { PaymentSuccess } from '../../action/flightActions'
import './style.css'
function replacer(key, value) {
    return value.replace(/\r\n/, '');
}
class Booking extends Component {
    componentDidMount() {
        const parsed = queryString.parse(decodeURI(window.location.search));
        console.log("dataReponse", parsed)
        const selectedOffers = JSON.parse(parsed.selectedOffers)
        const passengers = JSON.parse(parsed.passengers)
        const payments = JSON.parse(parsed.payments)
        const services = JSON.parse(parsed.services)
        const type = JSON.parse(parsed.type)

        console.log("dataReponse", selectedOffers, passengers, payments, services, type)
        //PaymentSuccess
        //window.location.replace(`${RECIPT}?order_id=ord_0000AO5PLSVzTd9QefOLrE`)
        PaymentSuccess(selectedOffers, passengers, payments, services, type).then((dataReponse) => {
            const {data}=dataReponse.data;
            if(Object.keys(data).length>0 && data.id){
            //ord_0000AO5PLSVzTd9QefOLrE
            window.location.replace(`${RECIPT}?order_id=${data.id}`)
            }
            console.log("dataReponse", dataReponse)
        })
    }

    render() {
        //console.log("booking redirect",window.location.search)
        return <>
        Booking confirmation
        </>
    }
}
export default Booking