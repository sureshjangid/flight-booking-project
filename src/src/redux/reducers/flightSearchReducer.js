import { FLIGHT_SEARCH_DATA, FLIGHT_OFFER_BOOKED_ID, FLIGHT_SELECECTED_OFFERID, FLIGHT_SELECETED_PASSENGES, FLIGHT_PAYMENT, FLIGHT_SERVICE_UPDATE } from '../reducersKeys'
import moment from 'moment'
/*
Trip Type
0: Round Trip
1: One Way
2: Multi City


Seat Type

Economy : 1
Premium Economy : 2
Bussiness : 3
First : 4

*/

//FLIGHT_SELECECTED_OFFERID, FLIGHT_SELECETED_PASSENGES, FLIGHT_PAYMENT, FLIGHT_SERVICE_UPDATE
const initialState = {
    searchData: [],
    offerBookedID: "",
    checkOutData: { selectedOffers: [], passengers: [], payments: [], services: [] }
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FLIGHT_SELECECTED_OFFERID: {
            var { selectedOffers } = state
            selectedOffers.push(action.payload)
            return { ...state, selectedOffers }
        }
        case FLIGHT_SELECETED_PASSENGES: {
            return { ...state, passengers: action.payload }
        }
        case FLIGHT_PAYMENT: {
            return { ...state, payments: action.payload }
        }
        case FLIGHT_SERVICE_UPDATE: {
            var { services } = state
            services.push(action.payload)
            return { ...state, services: action.payload }
        }
        case FLIGHT_SEARCH_DATA: {
            return { ...state, searchData: action.payload }
        }
        case FLIGHT_OFFER_BOOKED_ID: {
            return { ...state, offerBookedID: action.payload }
        }
        default:
            return { ...state }
    }

}