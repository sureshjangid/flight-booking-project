import { TRIP_TYPE_UPDATE, PERSONS_UPDATE, SEAT_TYPE_UPDATE, MULTI_TRIP_FROM_TO_UPDATE, ONE_WAY_TRIP_FROM_TO_UPDATE, ROUND_TRIP_FROM_TO_UPDATE, PASSENGER_DETAILS, PAYMENT_DETAILS, DIRECT_FLIGHT_UPDATE, BAGGAGE_UPDATE, MORE_CITY_ADD, MORE_CITY_REMOVE, REVERSE_MULTI_CITY, REVERSE_ONE_WAY, REVERSE_RETURN_CITY, ONE_WAY_DATE_UPDATE, ROUND_TRIP_DATE_UPDATE, MULTI_WAY_DATE_UPDATE, ONE_WAY_SEARCH_UPDATE, ROUND_TRIP_SEARCH_UPDATE, MULTI_WAY_SEARCH_UPDATE, SET_SEARCH_FROM_COOKIES } from '../reducersKeys'
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


const initialState = {
    tripType: 0, persons: { adults: 1, children: 0, infants: 0 }, seatType: 1,
    addTrips: [{ from: "", to: "", deaprtDate: moment() }, { from: "", to: "", deaprtDate: moment() }],
    roundTrips: { from: "", to: "", deaprtDate: moment(), returnDate: moment()},
    oneWayTrips: { from: "", to: "", deaprtDate: moment() },
    addnearByBaggage: false,
    directFlight: false,
    passengerDetails: [{
        "type": "adult",
        "loyaltyProgrammeAccounts": [
        ],
        "givenName": "",
        "familyName": ""
    }]
}

//PERSONS_UPDATE,SEAT_TYPE_UPDATE,MULTI_TRIP_FROM_TO_UPDATE,ONE_WAY_TRIP_FROM_TO_UPDATE,ROUND_TRIP_FROM_TO_UPDATE,PASSENGER_DETAILS,PAYMENT_DETAILS
export default function reducer(state = initialState, action) {
    switch (action.type) {

        case SET_SEARCH_FROM_COOKIES: {
            console.log("cookies", {...state, ...action.payload})
            return {...state, ...action.payload}
        }

        //ONE_WAY_SEARCH_UPDATE,ROUND_TRIP_SEARCH_UPDATE,MULTI_WAY_SEARCH_UPDATE

        case ONE_WAY_SEARCH_UPDATE: {
            var { oneWayTrips } = state
            const { type, search } = action.payload
            oneWayTrips[type] = search
            return { ...state, oneWayTrips }
        }
        case MULTI_WAY_SEARCH_UPDATE: {
            var { addTrips } = state
            const { index, type, search } = action.payload;
            if (addTrips && addTrips[index]) {
                addTrips[index][type] = search;
            }
            return { ...state, addTrips }
        }

        case ROUND_TRIP_SEARCH_UPDATE: {
            var { roundTrips } = state
            const { type, search } = action.payload
            roundTrips[type] = search
            return { ...state, roundTrips }
        }

        case ONE_WAY_DATE_UPDATE: {
            var { oneWayTrips } = state
            oneWayTrips.deaprtDate = action.payload
            return { ...state, oneWayTrips }
        }
        case MULTI_WAY_DATE_UPDATE: {
            var { addTrips } = state
            const { index, startDate } = action.payload;
            if (addTrips && addTrips[index]) {
                addTrips[index]["deaprtDate"] = startDate;
            }
            return { ...state, addTrips }
        }

        case ROUND_TRIP_DATE_UPDATE: {
            var { roundTrips } = state
            const { type, startDate } = action.payload
            roundTrips[type] = startDate
            return { ...state, roundTrips }
        }

        case REVERSE_MULTI_CITY: {
            var { addTrips } = state
            if (addTrips && addTrips[action.payload]) {
                let clonedWidget = Object.assign({}, addTrips[action.payload]);
                addTrips[action.payload].from = clonedWidget.to
                addTrips[action.payload].to = clonedWidget.from
            }
            return { ...state, addTrips }
        }
        case REVERSE_ONE_WAY: {

            var { oneWayTrips } = state

            if (oneWayTrips && Object.keys(oneWayTrips).length > 0) {
                let clonedWidget = Object.assign({}, oneWayTrips);
                oneWayTrips.from = clonedWidget.to
                oneWayTrips.to = clonedWidget.from
            }
            return { ...state, oneWayTrips }
        }
        case REVERSE_RETURN_CITY: {
            var { roundTrips } = state
            if (roundTrips && Object.keys(roundTrips).length > 0) {
                let clonedWidget = Object.assign({}, roundTrips);
                roundTrips.from = clonedWidget.to
                roundTrips.to = clonedWidget.from
            }
            console.log("data", roundTrips)
            return { ...state, roundTrips }
        }
        case MORE_CITY_ADD: {
            var { addTrips } = state
            addTrips.push(action.payload)
            return { ...state, addTrips }
        }
        case MORE_CITY_REMOVE: {
            var { addTrips } = state
            if (action.payload > -1) {
                addTrips.splice(action.payload, 1);
            }
            return { ...state, addTrips }
        }
        case BAGGAGE_UPDATE: {
            return { ...state, addnearByBaggage: action.payload }
        }
        case DIRECT_FLIGHT_UPDATE: {
            return { ...state, directFlight: action.payload }
        }
        case TRIP_TYPE_UPDATE: {
            return { ...state, tripType: action.payload }
        }
        case PERSONS_UPDATE: {
            var { persons } = state
            const { type, value } = action.payload;
            persons[type] = value;

            const totalCount = parseInt(persons.adults) + parseInt(persons.children) + parseInt(persons.infants);

            const updateLoop = new Array(totalCount).fill(0);
            var passengerDetails = []
            updateLoop.map((item, index) => {
                console.log("updateLoop", item, parseInt(persons.adults))
                if (parseInt(persons.adults) > parseInt(index)) {
                    passengerDetails.push({
                        "type": "adult",
                        "loyaltyProgrammeAccounts": [
                        ],
                        "givenName": "",
                        "familyName": ""
                    })
                }
                else {
                    passengerDetails.push({
                        "type": null,
                        "loyaltyProgrammeAccounts": [
                        ],
                        "givenName": "",
                        "familyName": "",
                        age: 7
                    })
                }

            })



            return { ...state, persons, passengerDetails }
        }
        case SEAT_TYPE_UPDATE: {
            return { ...state, seatType: action.payload }
        }
        case MULTI_TRIP_FROM_TO_UPDATE: {
            return { ...state, seatType: action.payload }
        }
        case ONE_WAY_TRIP_FROM_TO_UPDATE: {
            return { ...state, seatType: action.payload }
        }
        case ROUND_TRIP_FROM_TO_UPDATE: {
            return { ...state, seatType: action.payload }
        }
        case PASSENGER_DETAILS: {
            return { ...state, seatType: action.payload }
        }
        case PAYMENT_DETAILS: {
            return { ...state, seatType: action.payload }
        }

        default:
            return { ...state }
    }

}