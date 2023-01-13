import React from "react";
import { Button, Form } from "react-bootstrap";

function Profile(){

    const svgIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={64} width={64}><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>

    return(
        <div className="account-box">
            <h3 className="mb-3">My Account</h3>
            <div className="row">
                <div className="col-md-4">
                    <div className="card p-4 border-0">
                        <div className="card-profile text-center">
                            <span className="d-block mb-3">
                                {svgIcon}
                            </span>
                            <h5>Katarina Smith</h5>
                            <p className="mb-1">Los Angeles USA</p>
                            <p className="mb-0">Reference Id: 123456AD</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card py-5 p-md-5 p-4 border-0">
                        <div className="user-profile-form">
                            <Form className="row">
                                <Form.Group className="mb-3 col-sm-6" controlId="formBasicName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="First Name" value="Katarina" className="form-control"></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-6" controlId="formBasicLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" value="Smith" className="form-control"></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-6" controlId="formBasicName">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email" value="test@gmail.com" className="form-control"></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-6" controlId="formBasicLastName">
                                    <Form.Label>Phone No.</Form.Label>
                                    <Form.Control type="text" placeholder="Phone Name" value="+123456789" className="form-control"></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-6" controlId="formBasicName">
                                    <Form.Label>Current Password</Form.Label>
                                    <Form.Control type="password" placeholder="Current Password" value="" className="form-control"></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-6" controlId="formBasicLastName">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control type="password" placeholder="New Password" value="" className="form-control"></Form.Control>
                                </Form.Group>
                                <Form.Group className="col-sm-12 mt-2">
                                    <Button className="w-100 rounded-0 py-2" variant="dark" type="submit">Submit</Button>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;