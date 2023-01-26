import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from '../pages/home'
import Faqs from '../pages/faqs'
import CustomerService from '../pages/customerService'
import Privacy from '../pages/privacy'
import Booking from '../pages/booking'
import BookingList from '../pages/list'
import About from "../pages/about";
import TermsConditions from "../pages/termsCondition";
import BookingRedirect from '../pages/bookingRedirect'
import OrderData from '../pages/order'
import Loaders from '../container/loader'
import Invoice from "../pages/Invoice";
import UserAdmin from "../pages/userAdmin";
import FlightDetails from "../pages/userAdmin/flightDetails";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { SetFlightSearch } from "../action/flightActions";
const cookies = new Cookies();
const AppRoutes = (props) => {
    const history = useNavigate();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(SetFlightSearch(cookies.get('flightData')))
    }, [])
    return <>
    <Loaders />
        <Suspense fallback={<Loaders />}>
            
            {
                <Routes>
                    <Route exact path="/customer-service" element={<CustomerService history={history} />} />
                    <Route exact path="/privacy" element={<Privacy history={history} />} />
                    <Route exact path="/faqs" element={<Faqs history={history} />} />
                    <Route exact path="/" element={<Home history={history} />} />
                    <Route exact path="/recipt" element={<OrderData history={history} />} />
                    <Route exact path="/booking" element={<Booking history={history} />} />
                    <Route exact path="/list" element={<BookingList history={history} />} />
                    <Route exact path="/about" element={<About history={history} />} />
                    <Route exact path="/terms-conditions" element={<TermsConditions history={history} />} />
                    <Route exact path="/bookingRedirect" element={<BookingRedirect history={history} />} />
                    <Route exact path="/" element={<Navigate from={"/"} to={`/`} history={history} />} />
                    <Route exact path="/invoice" element={<Invoice history={history} />} />
                    <Route exact path="/user" element={<UserAdmin history={history} />} />
                    <Route exact path="/flight-details" element={<FlightDetails history={history} />} />
                </Routes>
                
            }
        </Suspense>
    </>
}
export default AppRoutes