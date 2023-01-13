import HttpClient from "./http-client";
import { DIRECT_FLIGHT_UPDATE, BAGGAGE_UPDATE, SEAT_TYPE_UPDATE, TRIP_TYPE_UPDATE, PERSONS_UPDATE, MORE_CITY_ADD, MORE_CITY_REMOVE, REVERSE_MULTI_CITY, REVERSE_ONE_WAY, REVERSE_RETURN_CITY, ONE_WAY_DATE_UPDATE, ROUND_TRIP_DATE_UPDATE, MULTI_WAY_DATE_UPDATE, ONE_WAY_SEARCH_UPDATE, ROUND_TRIP_SEARCH_UPDATE, MULTI_WAY_SEARCH_UPDATE, FLIGHT_SEARCH_DATA, FLIGHT_OFFER_BOOKED_ID, SET_SEARCH_FROM_COOKIES } from '../redux/reducersKeys'
import { SUGGESTIONS, BOOKING_SEARCH, AIRLINES, OFFER_REQUEST_BY_ID, OFFER_REQUEST_BY_ID_SELECT, SEAT_MAP_GET, ORDER_CREATE, ORDER_PAYMENT_SUCCESS, ORDER_GET } from './api'
import store from '../redux/store'
import moment from "moment";

export const directFlightUpdate = (value) => {
    return (dispatch) => {
        dispatch({ type: DIRECT_FLIGHT_UPDATE, payload: value });
    }
}
export const AddByBaggageUpdate = (value) => {
    return (dispatch) => {
        dispatch({ type: BAGGAGE_UPDATE, payload: value });
    }
}

export const SeatTypeUpdate = (value) => {
    return (dispatch) => {
        dispatch({ type: SEAT_TYPE_UPDATE, payload: value });
    }
}
export const TripTypeUpdate = (value) => {
    return (dispatch) => {
        dispatch({ type: TRIP_TYPE_UPDATE, payload: value });
    }
}

export const PersonUpdate = (type, value) => {
    return (dispatch) => {
        dispatch({ type: PERSONS_UPDATE, payload: { type, value } });
    }
}

export const MoreCityAdd = (value) => {
    return (dispatch) => {
        dispatch({ type: MORE_CITY_ADD, payload: value });
    }
}
export const MoreCityRemove = (value) => {
    return (dispatch) => {
        dispatch({ type: MORE_CITY_REMOVE, payload: value });
    }
}

export const ReverseMultiCityUpdate = (value) => {
    return (dispatch) => {
        dispatch({ type: REVERSE_MULTI_CITY, payload: value });
    }
}
export const ReverseOneWayUpdate = () => {
    return (dispatch) => {
        dispatch({ type: REVERSE_ONE_WAY });
    }
}
export const ReverseReturnUpdate = () => {
    return (dispatch) => {
        dispatch({ type: REVERSE_RETURN_CITY });
    }
}


export const OneWayDateUpdate = (startDate) => {
    return (dispatch) => {
        dispatch({ type: ONE_WAY_DATE_UPDATE, payload: startDate });
    }
}

export const OneWaySearchUpdate = (type, search) => {
    return (dispatch) => {
        dispatch({ type: ONE_WAY_SEARCH_UPDATE, payload: { type, search } });
    }
}

export const RoundTripDateUpdate = (type, startDate) => {
    return (dispatch) => {
        dispatch({ type: ROUND_TRIP_DATE_UPDATE, payload: { type, startDate } });
    }
}
export const RoundTripSearchUpdate = (type, search) => {
    return (dispatch) => {
        dispatch({ type: ROUND_TRIP_SEARCH_UPDATE, payload: { type, search } });
    }
}


export const MultiCityDateUpdate = (index, startDate) => {
    return (dispatch) => {
        dispatch({ type: MULTI_WAY_DATE_UPDATE, payload: { index, startDate } });
    }
}

export const MultiCitySearchUpdate = (index, type, search) => {
    return (dispatch) => {
        dispatch({ type: MULTI_WAY_SEARCH_UPDATE, payload: { index, type, search } });
    }
}




export const SearchLocation = (location) => {
    return new HttpClient().post(`${SUGGESTIONS}`, {
        query: location
    }
    )
};

export const OfferBooked = (id) => {
    return new HttpClient().post(`${OFFER_REQUEST_BY_ID}`, {
        id: id
    }
    )
};
export const OfferGET_Order = (id) => {
    return new HttpClient().post(`${OFFER_REQUEST_BY_ID_SELECT}`, {
        id: id
    }
    )
};
export const SeatMapGet = (id) => {
    return new HttpClient().post(`${SEAT_MAP_GET}`, {
        offer_id: id
    }
    )
};


export const offerRequestID = (id, history) => {
    return (dispatch) => {
        dispatch({ type: FLIGHT_OFFER_BOOKED_ID, payload: id });
        setTimeout(() => history(`/booking?booking_id=${id}`), 300)
    }
}


export const getAirlines = () => {
    return new HttpClient().get(`${AIRLINES}`)
};


export const onSearchFlight = (history) => {
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
    return (dispatch) => {

        var documentLoader = document.querySelector("#preloader")
        if (documentLoader) {
            documentLoader.classList.remove("d-none")
            document.body.classList.toggle('preloader-show');
        }
        const { tripType, seatType, addTrips, addnearByBaggage, directFlight, oneWayTrips, passengerDetails, roundTrips, persons } = store.getState().flight
        console.log(store.getState().flight)
        var slices = []; var passengers = passengerDetails; var cabinClass = ""; var return_offers = false
        if (seatType == 1) cabinClass = "economy"
        else if (seatType == 2) cabinClass = "Premium Economy"
        else if (seatType == 3) cabinClass = "Bussiness"
        else if (seatType == 4) cabinClass = "First"

        if (tripType == 0) {
            if (roundTrips.from != "" && Object.keys(roundTrips.from).length > 0 && roundTrips.to != "" && Object.keys(roundTrips.to).length > 0) {
                slices.push({
                    "origin": roundTrips.from.data.iata_code,
                    "destination": roundTrips.to.data.iata_code,
                    "departure_date": moment(roundTrips.deaprtDate).add(1, 'day').startOf('day').toISOString().replace(/T.*/gi, 'T06:30:00.000Z')
                })

                slices.push({
                    "origin": roundTrips.to.data.iata_code,
                    "destination": roundTrips.from.data.iata_code,
                    "departure_date": moment(roundTrips.returnDate).add(1, 'day').startOf('day').toISOString().replace(/T.*/gi, 'T06:30:00.000Z')
                })
                return_offers = true
            }
        }
        else if (tripType == 1) {
            var dateUpdate = moment(oneWayTrips.deaprtDate).add(1, "d");


            if (oneWayTrips.from != "" && Object.keys(oneWayTrips.from).length > 0 && oneWayTrips.to != "" && Object.keys(oneWayTrips.to).length > 0) {
                slices.push({
                    "origin": oneWayTrips.from.data.iata_code,
                    "destination": oneWayTrips.to.data.iata_code,
                    "departure_date": moment(oneWayTrips.deaprtDate).add(1, 'day').startOf('day').toISOString().replace(/T.*/gi, 'T06:30:00.000Z')
                })
            }

        }
        else if (tripType == 2) {
            if (addTrips && addTrips.length > 0) {
                addTrips.map((checkItem) => {
                    slices.push({
                        "origin": checkItem.from.data.iata_code,
                        "destination": checkItem.to.data.iata_code,
                        "departure_date": moment(checkItem.deaprtDate).add(1, 'day').startOf('day').toISOString().replace(/T.*/gi, 'T06:30:00.000Z')
                    })
                })
            }
        }

        new HttpClient().post(`${BOOKING_SEARCH}?trace=true&return_offers=false&supplierTimeout=30000`, {
            slices, passengers, cabinClass
        }).then((responseData) => {
            const { data } = responseData.data;
            setTimeout(() => history("/list"), 100)
            setTimeout(() => dispatch({ type: FLIGHT_SEARCH_DATA, payload: data }), 400)
            var documentLoader = document.querySelector("#preloader")
        if (documentLoader) {
            documentLoader.classList.add("d-none")
            document.body.classList.remove('preloader-show')
        }

        })

    }
}


export const OrderSuccess = (id) => {
    return new HttpClient().post(`${ORDER_GET}`, { id })

};
export const CheckOut = (formData) => {
    const { selectedOffers, passengers, payments, services, type } = formData
    return new HttpClient().post(`${ORDER_CREATE}`, {
        selectedOffers: selectedOffers, passengers: passengers, payments: payments,
        services: services,
        type: type
    }, {
        headers: {
            "Content-Type": 'application/json'
        }
    }
    )
    // return new HttpClient().post(`${ORDER_CREATE}`, {
    //     selectedOffers: ["off_0000ANzvgiKMn495nvkuxW"], passengers: [{
    //         "type": "adult",
    //         "id": "pas_0000ANzvghjV08efxaVTUc",
    //         "given_name": "test",
    //         "family_name": "test",
    //         "gender": "m",
    //         "title": "mr",
    //         "born_on": "1990-12-06T00:00:00.000Z",
    //         "email": "test@gmail.com",
    //         "phone_number": "+917999946233",
    //         "loyaltyProgrammeAccounts": [
    //         ]
    //     }], payments: [{
    //         "type": "balance",
    //         "amount": "236.79",
    //         "currency": "USD"
    //     }],
    //     services: [],
    //     type: "instant",
    //     "metadata": {
    //         "payment_intent_id": "pit_00009htYpSCXrwaB9DnUm2"
    //     }
    // }, {
    //     headers: {
    //         "Content-Type": 'application/json'
    //     }
    // }
    // )
};
export const PaymentSuccess = (selectedOffers, passengers, payments, services, type) => {

    return new HttpClient().post(`${ORDER_PAYMENT_SUCCESS}`, {
        selectedOffers: selectedOffers, passengers: passengers, payments: payments,
        services: services,
        type: type
    })

};

export const SetFlightSearch = (obj) => {
    return (dispatch) => {
        dispatch({type: SET_SEARCH_FROM_COOKIES, payload: obj})
    }
}