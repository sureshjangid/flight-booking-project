import { Component } from "react";
import moment from 'moment'
import DateRange from "../../container/datepicker";


class TravellersDetails extends Component {
    state = {
        name: "",
        lastName: "",
        id: "",
        givenName: "",
        familyName: "",
        gender: "m",
        title: "mr",
        bornOn: "",
        email: "",
        phoneNumber: "",
        loyaltyProgrammeAccounts: [
        ],
        service: [],
        baggage: [],
    }
    componentDidMount() {
        const { passengerItem ,passengerDataUpdate,insertIndex} = this.props
        this.setState({ id: passengerItem.id })
        passengerDataUpdate(insertIndex,"title","mr")
        passengerDataUpdate(insertIndex,"gender","m")
    }
    onName = event => {
        this.setState({ name: event.target.value }, () => {
            const{passengerDataUpdate,insertIndex}=this.props;
            passengerDataUpdate(insertIndex,"given_name",`${this.state.name} ${this.state.lastName}`)

            passengerDataUpdate(insertIndex,"family_name",`${this.state.name} ${this.state.lastName}`)       
                //  this.setState({ givenName: `${this.state.name} ${this.state.lastName}`, familyName: `${this.state.name} ${this.state.lastName}` })
        })
    }
    onLastName = event => {
        this.setState({ lastName: event.target.value }, () => {
            const{passengerDataUpdate,insertIndex}=this.props;
            passengerDataUpdate(insertIndex,"given_name",`${this.state.name} ${this.state.lastName}`)

            passengerDataUpdate(insertIndex,"family_name",`${this.state.name} ${this.state.lastName}`)  
            // this.setState({ givenName: `${this.state.name} ${this.state.lastName}`, familyName: `${this.state.name} ${this.state.lastName}` })
        })
    }
    onTitle = event => {
        this.setState({ title: event.target.value },()=>{
            const{passengerDataUpdate,insertIndex}=this.props;
            passengerDataUpdate(insertIndex,"title",this.state.title)
        })

    }
    onGender = event => {
        this.setState({ gender: event.target.value },()=>{
            const{passengerDataUpdate,insertIndex}=this.props;
            passengerDataUpdate(insertIndex,"gender",this.state.gender)
        })
    }
    onDoB = event => {
        this.setState({ bornOn: event.target.value },()=>{
            const{passengerDataUpdate,insertIndex}=this.props;
            passengerDataUpdate(insertIndex,"born_on",this.state.bornOn)
        })
    }
    clickToaddBaggege = (bItem, index) => event => {
        console.log("data"," ------------- clickToaddBaggege")
        console.log("data-----------------", this.state.service)
        try{
            let { service, baggage } = this.state;
            service.push(bItem)
            var bg = baggage
            const i = bg.findIndex(b => b.index == index)
            if(i < 0) {
                bg.push({index: index, count: 1})
            }
           else{ 
            console.log("data", "else", bg)
            const i = bg.findIndex(b => b.index == index)
            bg[i].count += 1
            console.log("data", bg[i].count)

            // bg.map((b,i) => b.index == index ? (bg[i]['count'] += 1) : null )
           }
            this.setState({baggage: bg})
            const{serviceadd}=this.props
            serviceadd(bItem)
            this.setState({ service })
        }
        catch(e){
            console.log("data", e)
        }
    }
    clickToRemoveBaggege = (id,index, idx) => event => {
        let { service, baggage } = this.state;
        var bg = baggage
        const i = bg.findIndex(b => b.index == idx)
        if(i < 0) {
            // bg.push({index: index, count: 1})
        }
       else{ 
        console.log("data", "else", bg)
        const i = bg.findIndex(b => b.index == idx)
        bg[i].count -= 1

        // bg.map((b,i) => b.index == index ? (bg[i]['count'] += 1) : null )
       }
       this.setState({baggage: bg})

        if (service.length > 0 && service[index]) {
            const{serviceRemove}=this.props
            service.splice(index, 1);
            serviceRemove(id)
        }

        this.setState({ service })
    }

    render() {
        const { passengerItem, bookingData } = this.props;
        const { baggage } = this.state
        console.log("passengerItem", passengerItem, bookingData, this.state)
        return <>
            <div className="traveller-details-items">
                <div className="adultDetailsHeading mb-3">
                    <div className="fontSize14">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="18" width="18" fill="#34404b"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" /></svg>
                        <strong className="ms-1">1 ADULT (18 yrs+)</strong>
                    </div>
                </div>
                <div className="alert alert-warning p-2 fontSize12" role="alert">
                    Enter name as mentioned on your passport or Government approved IDs.
                </div>
                <div className="adultDetailsForm">
                    <div className="adultDetailsInnner">
                        <form>
                            <div className="row">
                                <div className="col-md-2 col-sm-3 col-5">
                                    <div className="mb-3">
                                        <label>Title*</label>
                                        <select className="form-control" onChange={this.onTitle}>
                                            <option value="mr">Mr.</option>
                                            <option value="ms">Ms.</option>
                                            <option value="mrs">Mrs.</option>
                                            <option value="miss">Miss.</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-9 col-12">
                                    <div className="mb-3">
                                        <label>First Name*</label>
                                        <input type="text" className="form-control" placeholder="First Name" value={this.state.name} onChange={this.onName} />
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-9 col-12">
                                    <div className="mb-3">
                                        <label>Last Name*</label>
                                        <input type="text" className="form-control" placeholder="Last Name" value={this.state.lastName} onChange={this.onLastName} />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12">
                                    <div className="mb-3">
                                        <label>Date of birth*</label>
                                        {/* <input type="date" className="form-control" format="DD-MM-YYYY" placeholder="DD-MM-YYYY" onChange={this.onDoB} /> */}
                                        <DateRange onDateChange={this.onDoB} start_date={true} key={"Dob"}>
                                            <input type="text" className="form-control" placeholder="dd/mm/yyyy" />
                                        </DateRange>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12">
                                    <div className="mb-3">
                                        <label>Gender*</label>
                                        <select className="form-control" onChange={this.onGender}>
                                            <option value="m">Male</option>
                                            <option value="f">Female</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {bookingData.available_services && bookingData.available_services.length > 0 ? bookingData.available_services.map((bItem, bIdex) => <>{
                                (bookingData && bookingData.slices && bookingData.slices.length > 0) ? bookingData.slices.map((bItemService,bItemServiceIndx) => <div className="addBaggage-box" key={bItemServiceIndx}>
                                    <p className="addBaggage-title fontSize14 mb-2"><strong>Baggage selection</strong></p>
                                    <div className="row">
                                        <div className="col-md-4 col-12">
                                            <div className="baggage-selection-card d-flex flex-shrink-1 align-items-center mb-md-0 mb-3">
                                                <img src={bookingData.owner.logo_symbol_url} alt="flight-logo" className="img-fluid me-3" style={{width:40,height:40}}/>
                                                <span>
                                                    <strong className="text-dark">{bItemService.origin.iata_code}</strong>
                                                    <span className="mx-1 d-inline-block">to</span>
                                                    <strong className="text-dark">{bItemService.destination.iata_code}</strong>
                                                    <br />
                                                    <span className="fontSize12">{(bItemService.segments && bItemService.segments[0]) ? moment(bItemService.segments[0].departing_at).format("LL") : ""}</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 col-7">
                                            <div className="baggage-selection-amt text-md-center text-left ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="22" width="22" fill="#0f294b"><path d="M541.2 448C542.1 453 544.1 458.4 544.1 464C544.1 490.5 522.6 512 496 512C469.5 512 448.1 490.5 448.1 464C448.1 458.4 449.2 453 450.1 448H253.1C254.9 453 256 458.4 256 464C256 490.5 234.5 512 208 512C181.5 512 160 490.5 160 464C160 458.4 161.1 453 162.9 448L96 448C78.4 448 64 433.6 64 416V80C64 71.16 56.84 64 48 64H32C14.4 64 0 49.6 0 32C0 14.4 14.4 0 32 0H64C99.2 0 128 28.8 128 64V384H608C625.6 384 640 398.4 640 416C640 433.6 625.6 448 608 448L541.2 448zM432 0C458.5 0 480 21.5 480 48V320H288V48C288 21.5 309.5 0 336 0H432zM336 96H432V48H336V96zM256 320H224C206.4 320 192 305.6 192 288V128C192 110.4 206.4 96 224 96H256V320zM576 128V288C576 305.6 561.6 320 544 320H512V96H544C561.6 96 576 110.4 576 128z" /></svg>
                                                Checked bag (Up to {bItem.metadata.maximum_weight_kg}kg)<br />
                                                <strong>US${bItem.total_amount}</strong>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 col-5">
                                            <div className="baggage-selection-qty">
                                                <div className="counter d-flex align-items-center justify-content-end">
                                                    <button type="button" className="btn btn-secondary btn-minus border-0 rounded-0" onClick={this.clickToRemoveBaggege(bItem.id,bIdex, bItemServiceIndx)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="#fff"><path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" /></svg>
                                                    </button>
                                                    <div className="counter-lable">{this.state.baggage[bItemServiceIndx] ? this.state.baggage[bItemServiceIndx].count : 0}</div>
                                                    <button type="button" className="btn btn-primary btn-plus rounded-0" onClick={this.clickToaddBaggege(bItem, bItemServiceIndx)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="#fff"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" /></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>) : null}

                            </>
                            ) : null}
                        </form>
                    </div>
                </div>
            </div>
        </>
    }
}

export default TravellersDetails;