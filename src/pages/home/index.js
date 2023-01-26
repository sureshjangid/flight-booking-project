import React, { Component } from "react";
import Header from './header'
//import HomeBanner from './homeBanner'
import OfferSection from './offerSections'
import CancelProtection from './cancelProtection'
import WhyChooseUs from './whyChooseUs'
import AppFooter from '../footer'
import LoginPopUp from '../loginPopup'
import SearchFlight from './searchFlight'
import Cookies from "universal-cookie";

const cookies = new Cookies();
class Home extends Component {
componentDidMount() {
    cookies.remove("flightData")
}
    render() {
        console.log("history",this.props )
        return <>
       
            <Header />
            <main>
                {/* <HomeBanner /> */}
                <SearchFlight {...this.props} autoSearch={false} />
                <OfferSection />
                <CancelProtection />
                <WhyChooseUs/>
            </main>
           <AppFooter/>
           <LoginPopUp/>

        </>
    }
}


export default Home