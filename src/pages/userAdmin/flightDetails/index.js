import React from "react";
import Header from '../../home/header'
import AppFooter from "../../footer";
import '../userAdmin.css';
import { Badge, Dropdown, Table } from "react-bootstrap";

function FlightDetails(){
    return(
        <>
            <Header/>
            <div className="userAdmin py-sm-5 py-3 h-auto">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="mb-md-0 mb-3 bg-white p-3">
                                <div className="flight-details-content">
                                    <div className="d-flex flight-details-inner mb-3">
                                        <ul className="breadcrumbs list-unstyled d-flex align-items-center">
                                            <li><a href="" className="text-decoration-none">Orders</a></li>
                                            <li className="mx-1"><svg width="18" height="18" viewBox="0 0 24 24" aria-label="keyboard_arrow_right" className="jsx-1699385641 ff-icon breadcrumb-spacer"><path d="M9.4 18L8 16.6L12.6 12L8 7.4L9.4 6L15.4 12L9.4 18Z"></path></svg>
                                            </li>
                                            <li><span>VMNOOL</span></li>
                                        </ul>
                                        <div className="flight-details-title d-flex align-items-center justify-content-between flex-wrap">
                                            <h3>VMNOOL</h3>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="primary" id="manage-order" className=" rounded-0 py-2">
                                                    Manage this order
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Change flight</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Cancellation quote</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Add seats</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Add bags</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Name correction</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="journy-details">
                                        <h5 className="mb-3">Journey details</h5>
                                        <div className="journy-summary">
                                            <div className="journy-direction d-flex flex-wrap mb-4">
                                                <div className="d-flex align-items-center flex-grow-1 mb-sm-0 mb-3 me-sm-0 me-3">
                                                    <div className="d-flex me-2">
                                                        <img src="https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/ZZ.svg" alt="flight-image" height="37" widht="37"/>
                                                    </div>
                                                    <div className="journy-summary-info">
                                                        <div className="">
                                                            <strong>23:00</strong> - <strong>23:57</strong>
                                                        </div>
                                                        <div className="">
                                                            <span>Economy · Duffel Airways</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="me-sm-5 me-3">
                                                    <div>
                                                        <strong>57m</strong>
                                                    </div>
                                                    <div>
                                                        <span>JAI - DEL</span>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div>
                                                        <strong>Non-stop</strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slice-details-travel-item">
                                                <div className="details-travel-item">
                                                    <div className="mb-3 travel-item-itinerary d-flex flex-direction-row position-relative">
                                                        <div className="travel-item-circle"></div>
                                                        <div className="">
                                                            <strong className="me-3">
                                                                <span>Mon, 21 Nov 2022</span>, 
                                                                <span>23:00</span>
                                                            </strong>
                                                            <span>Depart from Jaipur International Airport&nbsp;(JAI)</span>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 travel-item-itinerary-duration">Flight duration: <span>57m</span></div>
                                                    <div className="mb-3 d-flex flex-direction-row">
                                                        <div className="travel-item-circle"></div>
                                                        <div className="">
                                                            <strong className="me-3">
                                                                <span>Mon, 21 Nov 2022</span>, 
                                                                <span>23:57</span>
                                                            </strong>
                                                            <span>Arrive at Indira Gandhi International Airport&nbsp;(DEL)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="travel-item-detail d-flex align-items-center flex-wrap">
                                                    <div className="me-2">Economy</div>
                                                    <div className="me-2">Duffel Airways</div>
                                                    <div className="me-2">Boeing 777-300</div>
                                                    <div className="me-2">ZZ5854</div>
                                                    <div className="d-flex align-items-center">
                                                        <svg width="14" height="14" fill="#34404b" viewBox="0 0 24 24" aria-label="checked_bag" className="jsx-1699385641 ff-icon"><path d="M7 21C6.45 21 5.97933 20.8043 5.588 20.413C5.196 20.021 5 19.55 5 19V8C5 7.45 5.196 6.97933 5.588 6.588C5.97933 6.196 6.45 6 7 6H9V3C9 2.71667 9.096 2.479 9.288 2.287C9.47933 2.09567 9.71667 2 10 2H14C14.2833 2 14.521 2.09567 14.713 2.287C14.9043 2.479 15 2.71667 15 3V6H17C17.55 6 18.021 6.196 18.413 6.588C18.8043 6.97933 19 7.45 19 8V19C19 19.55 18.8043 20.021 18.413 20.413C18.021 20.8043 17.55 21 17 21C17 21.2833 16.904 21.5207 16.712 21.712C16.5207 21.904 16.2833 22 16 22C15.7167 22 15.4793 21.904 15.288 21.712C15.096 21.5207 15 21.2833 15 21H9C9 21.2833 8.90433 21.5207 8.713 21.712C8.521 21.904 8.28333 22 8 22C7.71667 22 7.479 21.904 7.287 21.712C7.09567 21.5207 7 21.2833 7 21ZM10.5 6H13.5V3.5H10.5V6ZM8 18H9.5V9H8V18ZM11.25 18H12.75V9H11.25V18ZM14.5 18H16V9H14.5V18Z"></path>
                                                        </svg>
                                                        <div>1 checked bag</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flight-summary-conditions">
                                            <div className="row">
                                                <div className="col-sm-6 mb-sm-0 mb-3">
                                                    <div className="flight-summary-conditions-item d-flex p-3 h-100">
                                                        <div className="me-2">
                                                            <svg width="16" height="16" fill="#34404b" viewBox="0 0 24 24" aria-label="travel_plane_ticket" className="jsx-1699385641 ff-icon condition__icon"><path d="M8.85 15.65L17.75 13.3C18 13.2333 18.1873 13.079 18.312 12.837C18.4373 12.5957 18.4667 12.35 18.4 12.1C18.3333 11.85 18.1873 11.6623 17.962 11.537C17.7373 11.4123 17.5 11.3833 17.25 11.45L14.8 12.1L10.8 8.35L9.4 8.7L11.8 12.9L9.4 13.5L8.15 12.55L7.2 12.8L8.85 15.65ZM4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.196 19.021 2 18.55 2 18V14C2.55 14 3.021 13.804 3.413 13.412C3.80433 13.0207 4 12.55 4 12C4 11.45 3.80433 10.979 3.413 10.587C3.021 10.1957 2.55 10 2 10V6C2 5.45 2.196 4.97933 2.588 4.588C2.97933 4.196 3.45 4 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.8043 4.97933 22 5.45 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.021 19.8043 20.55 20 20 20H4Z"></path></svg>
                                                        </div>
                                                        <div className="">
                                                            <h6 className="mb-1">Order change policy</h6>
                                                            <p className="mb-0">This order is not changeable</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="flight-summary-conditions-item d-flex p-3 h-100">
                                                        <div className="me-2">
                                                            <svg width="16" height="16" fill="#34404b" viewBox="0 0 24 24" aria-label="travel_plane_ticket" className="jsx-1699385641 ff-icon condition__icon"><path d="M8.85 15.65L17.75 13.3C18 13.2333 18.1873 13.079 18.312 12.837C18.4373 12.5957 18.4667 12.35 18.4 12.1C18.3333 11.85 18.1873 11.6623 17.962 11.537C17.7373 11.4123 17.5 11.3833 17.25 11.45L14.8 12.1L10.8 8.35L9.4 8.7L11.8 12.9L9.4 13.5L8.15 12.55L7.2 12.8L8.85 15.65ZM4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.196 19.021 2 18.55 2 18V14C2.55 14 3.021 13.804 3.413 13.412C3.80433 13.0207 4 12.55 4 12C4 11.45 3.80433 10.979 3.413 10.587C3.021 10.1957 2.55 10 2 10V6C2 5.45 2.196 4.97933 2.588 4.588C2.97933 4.196 3.45 4 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.8043 4.97933 22 5.45 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.021 19.8043 20.55 20 20 20H4Z"></path></svg>
                                                        </div>
                                                        <div className="">
                                                            <h6 className="mb-1">Order refund policy</h6>
                                                            <p className="mb-0">This order is refundable up until the initial departure date</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="passanger-section">
                                            <div className="passanger-title mt-5 mb-4 border-top pt-4">
                                                <h5>Passengers</h5>
                                            </div>
                                            <div className="passanger-card mb-3">
                                                <div className="passenger-tag mb-3">
                                                    <span className="d-inline-flex align-items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="me-2" height="14" width="14" fill="#000"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                                                    Adult 1
                                                    </span>
                                                </div>
                                                <div className="d-flex flex-wrap mb-4">
                                                    <div className="flex-grow-1">
                                                        <p className="mb-1">Name</p>
                                                        <h6>Jhone Smith</h6>
                                                    </div>
                                                    <div className="me-sm-5 me-3">
                                                        <p className="mb-1">Date of birth</p>
                                                        <h6>07/05/1991</h6>
                                                    </div>
                                                    <div className="me-sm-5 me-0">
                                                        <p className="mb-1">Gender</p>
                                                        <h6>Male</h6>
                                                    </div>
                                                </div>

                                                <div className="flight-information-box">
                                                    <div className="">
                                                        <h6 className="mb-2">Flight information</h6>
                                                        <div className="flight-information-order border p-3">
                                                            <div className="d-flex mb-2">
                                                                <span className="me-3 mb-2">
                                                                <img src="https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/ZZ.svg" alt="flight-image" height="30" widht="30"/>
                                                                </span>
                                                                <p className="mb-0">
                                                                    <strong className="me-1">JAI</strong>
                                                                    to
                                                                    <strong className="mx-1">GOI</strong>
                                                                    on
                                                                    <strong className="mx-1">Fri, 28 Oct 2022</strong>
                                                                    at
                                                                    <strong className="ms-1">23:00</strong>
                                                                </p>
                                                            </div>
                                                            <div className="d-flex">
                                                                <div className="me-3 d-flex align-items-center">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" aria-label="seat" className="service-icon me-2" fill="#000"><path d="M8.5 6C7.95 6 7.47933 5.804 7.088 5.412C6.696 5.02067 6.5 4.55 6.5 4C6.5 3.45 6.696 2.979 7.088 2.587C7.47933 2.19567 7.95 2 8.5 2C9.05 2 9.521 2.19567 9.913 2.587C10.3043 2.979 10.5 3.45 10.5 4C10.5 4.55 10.3043 5.02067 9.913 5.412C9.521 5.804 9.05 6 8.5 6ZM14 20H7.55C7 20 6.496 19.8043 6.038 19.413C5.57933 19.021 5.29167 18.55 5.175 18L3 7H5.05L7.25 18H14V20ZM19.5 22L16.6 17H9.65C9.16667 17 8.746 16.854 8.388 16.562C8.02933 16.2707 7.8 15.8833 7.7 15.4L6.6 10.05C6.41667 9.25 6.604 8.54167 7.162 7.925C7.72067 7.30833 8.4 7 9.2 7C9.78333 7 10.3127 7.175 10.788 7.525C11.2627 7.875 11.5667 8.35 11.7 8.95L12.8 14H16.05C16.4 14 16.725 14.0917 17.025 14.275C17.325 14.4583 17.5667 14.7 17.75 15L21.25 21L19.5 22Z"></path></svg>
                                                                    Seat 41E
                                                                </div>
                                                                <div className="me-3 d-flex align-items-center">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" aria-label="checked_bag" className="service-icon me-2"><path d="M7 21C6.45 21 5.97933 20.8043 5.588 20.413C5.196 20.021 5 19.55 5 19V8C5 7.45 5.196 6.97933 5.588 6.588C5.97933 6.196 6.45 6 7 6H9V3C9 2.71667 9.096 2.479 9.288 2.287C9.47933 2.09567 9.71667 2 10 2H14C14.2833 2 14.521 2.09567 14.713 2.287C14.9043 2.479 15 2.71667 15 3V6H17C17.55 6 18.021 6.196 18.413 6.588C18.8043 6.97933 19 7.45 19 8V19C19 19.55 18.8043 20.021 18.413 20.413C18.021 20.8043 17.55 21 17 21C17 21.2833 16.904 21.5207 16.712 21.712C16.5207 21.904 16.2833 22 16 22C15.7167 22 15.4793 21.904 15.288 21.712C15.096 21.5207 15 21.2833 15 21H9C9 21.2833 8.90433 21.5207 8.713 21.712C8.521 21.904 8.28333 22 8 22C7.71667 22 7.479 21.904 7.287 21.712C7.09567 21.5207 7 21.2833 7 21ZM10.5 6H13.5V3.5H10.5V6ZM8 18H9.5V9H8V18ZM11.25 18H12.75V9H11.25V18ZM14.5 18H16V9H14.5V18Z"></path></svg>
                                                                    2 checked bags
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="passanger-card mb-3">
                                                <div className="passenger-tag mb-3">
                                                    <span className="d-inline-flex align-items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="me-2" height="14" width="14" fill="#000"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                                                    Adult 2
                                                    </span>
                                                </div>
                                                <div className="d-flex flex-wrap mb-4">
                                                    <div className="flex-grow-1">
                                                        <p className="mb-1">Name</p>
                                                        <h6>Sudarshan</h6>
                                                    </div>
                                                    <div className="me-sm-5 me-3">
                                                        <p className="mb-1">Date of birth</p>
                                                        <h6>07/05/1991</h6>
                                                    </div>
                                                    <div className="me-sm-5 me-3">
                                                        <p className="mb-1">Gender</p>
                                                        <h6>Male</h6>
                                                    </div>
                                                </div>

                                                <div className="flight-information-box">
                                                    <div className="">
                                                        <h6 className="mb-2">Flight information</h6>
                                                        <div className="flight-information-order border p-3">
                                                            <div className="d-flex mb-2">
                                                                <span className="me-3 mb-2">
                                                                <img src="https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/ZZ.svg" alt="flight-image" height="30" widht="30"/>
                                                                </span>
                                                                <p className="mb-0">
                                                                    <strong className="me-1">JAI</strong>
                                                                    to
                                                                    <strong className="mx-1">GOI</strong>
                                                                    on
                                                                    <strong className="mx-1">Fri, 28 Oct 2022</strong>
                                                                    at
                                                                    <strong className="ms-1">23:00</strong>
                                                                </p>
                                                            </div>
                                                            <div className="d-flex">
                                                                <div className="me-3 d-flex align-items-center">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" aria-label="seat" className="service-icon me-2" fill="#000"><path d="M8.5 6C7.95 6 7.47933 5.804 7.088 5.412C6.696 5.02067 6.5 4.55 6.5 4C6.5 3.45 6.696 2.979 7.088 2.587C7.47933 2.19567 7.95 2 8.5 2C9.05 2 9.521 2.19567 9.913 2.587C10.3043 2.979 10.5 3.45 10.5 4C10.5 4.55 10.3043 5.02067 9.913 5.412C9.521 5.804 9.05 6 8.5 6ZM14 20H7.55C7 20 6.496 19.8043 6.038 19.413C5.57933 19.021 5.29167 18.55 5.175 18L3 7H5.05L7.25 18H14V20ZM19.5 22L16.6 17H9.65C9.16667 17 8.746 16.854 8.388 16.562C8.02933 16.2707 7.8 15.8833 7.7 15.4L6.6 10.05C6.41667 9.25 6.604 8.54167 7.162 7.925C7.72067 7.30833 8.4 7 9.2 7C9.78333 7 10.3127 7.175 10.788 7.525C11.2627 7.875 11.5667 8.35 11.7 8.95L12.8 14H16.05C16.4 14 16.725 14.0917 17.025 14.275C17.325 14.4583 17.5667 14.7 17.75 15L21.25 21L19.5 22Z"></path></svg>
                                                                    Seat 41E
                                                                </div>
                                                                <div className="me-3 d-flex align-items-center">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" aria-label="checked_bag" className="service-icon me-2"><path d="M7 21C6.45 21 5.97933 20.8043 5.588 20.413C5.196 20.021 5 19.55 5 19V8C5 7.45 5.196 6.97933 5.588 6.588C5.97933 6.196 6.45 6 7 6H9V3C9 2.71667 9.096 2.479 9.288 2.287C9.47933 2.09567 9.71667 2 10 2H14C14.2833 2 14.521 2.09567 14.713 2.287C14.9043 2.479 15 2.71667 15 3V6H17C17.55 6 18.021 6.196 18.413 6.588C18.8043 6.97933 19 7.45 19 8V19C19 19.55 18.8043 20.021 18.413 20.413C18.021 20.8043 17.55 21 17 21C17 21.2833 16.904 21.5207 16.712 21.712C16.5207 21.904 16.2833 22 16 22C15.7167 22 15.4793 21.904 15.288 21.712C15.096 21.5207 15 21.2833 15 21H9C9 21.2833 8.90433 21.5207 8.713 21.712C8.521 21.904 8.28333 22 8 22C7.71667 22 7.479 21.904 7.287 21.712C7.09567 21.5207 7 21.2833 7 21ZM10.5 6H13.5V3.5H10.5V6ZM8 18H9.5V9H8V18ZM11.25 18H12.75V9H11.25V18ZM14.5 18H16V9H14.5V18Z"></path></svg>
                                                                    2 checked bags
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="billing-section">
                                            <div className="billing-title mt-5 mb-4 border-top pt-4">
                                                <h5>Billing summary</h5>
                                            </div>
                                            <div className="table-responsive biling-table">
                                                <Table>
                                                    <thead>
                                                        <tr>
                                                            <th>DESCRIPTION</th>
                                                            <th className="text-end">PRICE (USD)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Fare</td>
                                                            <td className="text-end">205.95</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Fare taxes</td>
                                                            <td className="text-end">37.07</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Seat selection</td>
                                                            <td className="text-end">23.20</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Additional checked baggage</td>
                                                            <td className="text-end">23.20</td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <td>
                                                                <strong>TOTAL (USD)</strong>
                                                            </td>
                                                            <td className="text-end">
                                                                <strong>335.82</strong>
                                                            </td>
                                                        </tr>
                                                    </tfoot>
                                                </Table>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="booking-summary-section bg-white position-sticky top-0">
                                <div className="booking-summary p-3">
                                    <div className="booking-summary-title mb-4">
                                        <h5 className="mb-0">Summary</h5>
                                        <p className="mb-0"><small>Last synced: 11/09/2022, 15:57</small></p>
                                    </div>
                                    <div className="order-summery">
                                        <div className="summery-status mb-4">
                                            <h6 className="mb-2">Status</h6>
                                            <p className="d-block mb-0">
                                                <span className="alert alert-danger d-inline-block">Cancelled</span>
                                                <span className="alert alert-success d-inline-block">Confirmed</span>
                                                <span className="alert alert-secondary d-inline-block">Past</span>
                                            </p>
                                        </div>
                                        <div className="d-flex flex-wrap mb-4">
                                            <div className="me-5">
                                                <h6>Airline</h6>
                                                <div className="d-flex">
                                                    <span className="me-2">
                                                        <img src="https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/ZZ.svg" alt="flight-image" height="24" widht="24"/>
                                                    </span>
                                                    <p className="mb-0">
                                                        Duffel Airways
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="">
                                                <h6>Issuing date</h6>
                                                <div className="d-flex">
                                                    <p className="mb-0">
                                                        02/09/2022
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h6 className="mb-2">Order ID</h6>
                                            <div className="d-flex mb-2">
                                                <p className="mb-0">
                                                    ord_0000ANA11WbWnYYL75YZv6
                                                </p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <h6 className="mb-2">Ticket numbers</h6>
                                            <div className="">
                                                <p className="d-flex justify-content-between mb-2">
                                                    <span>Amelia Earhart</span>
                                                    <strong>1</strong>
                                                </p>
                                                <p className="d-flex justify-content-between mb-2">
                                                    <span>Nikhil</span>
                                                    <strong>1</strong>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AppFooter/>
        </>
    )
}

export default FlightDetails;