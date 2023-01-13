import React from 'react'
import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { SeatSelection } from "@duffel/components";
import '@duffel/components/dist/SeatSelection.min.css'
import moment from 'moment'


class SeatMaps extends Component {
    state = {
        isOpen: false
    }
    onClickOpen = event => {
        this.setState({ isOpen: true })
    }
    onClickClose = event => {
        this.setState({ isOpen: false })
    }
    onSubmitFn = event => {
        alert(JSON.stringify(event));
        console.log(event);
    }
    render() {
        const { passengerItem, onUpdateSeatMap,seatMapData,bookingData } = this.props;
        console.log("passengerItem, onUpdateSeatMap,seatMapData,bookingData ",passengerItem,{data:seatMapData},bookingData )
        const { isOpen } = this.state
        return <>
{
    (bookingData && bookingData.slices && bookingData.slices.length > 0) ? bookingData.slices.map((bItemService,bItemServiceIndx) =><div className="addBaggage-box mb-3" key={bItemServiceIndx}>
    <div className="row align-items-center">
        <div className="col-md-4 col-12">
            <div className="baggage-selection-card d-flex flex-shrink-1 align-items-center mb-md-0 mb-3">
                <img src={bookingData.owner.logo_symbol_url} alt="flight-logo" className="img-fluid me-3" style={{width:40,height:40}}/>
                <span>
                    <strong className="text-dark">{bItemService.origin.iata_code}</strong>
                    <span className='d-inline-block mx-1'>to</span>
                    <strong className="text-dark">{bItemService.destination.iata_code}</strong>
                    <br />
                    <span className="fontSize12">{(bItemService.segments && bItemService.segments[0]) ? moment(bItemService.segments[0].departing_at).format("LL") : ""}</span>
                </span>
            </div>
        </div>
        <div className="col-md-4 col-6">
            <div className="baggage-selection-amt text-md-center text-left">
                <span>
                    <span className="badge bg-secondary fontSize12">29B</span>
                </span>
            </div>
        </div>
        <div className="col-md-4 col-6">
            <div className="text-end">
                <button type="text" className="btn-primary fontSize14 btn-sm rounded-0" onClick={this.onClickOpen} >Select seats</button>
            </div>
        </div>
    </div>
</div>):null
}
            

            <Modal className="flightSeats_modal" show={isOpen} onHide={this.onClickClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Seat Map</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SeatSelection
                        offer={bookingData}
                        seatMaps={seatMapData}
                        passengers={[
                            {
                              id: passengerItem.id,
                              name: passengerItem.family_name
                            }
                          ]}
                        onSubmit={this.onSubmitFn}
                    />

                </Modal.Body>
            </Modal>
        </>
    }
}


export default SeatMaps;