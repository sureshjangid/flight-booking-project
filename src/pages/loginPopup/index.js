
import React, { Component, Suspense } from "react";
import { validateEmail } from '../../utils'
class LoginPopUp extends Component {
    state = {
        emailId: "",
        referenceID: ""

    }
    onTextEmailID = event => {

        this.setState({ emailId: event.target.value })


    }
    onTextReferenceID = event => {
        this.setState({ referenceID: event.target.value })
    }
    onSubmit = event => {
        const { emailId, referenceID } = this.state;
        if (emailId && emailId.length > 0 && validateEmail(emailId)) {
        }
        else if (referenceID && referenceID.length > 0) {
            alert("successfully logged in ")
        }
        else {
            console.error("Please check email ID ")
        }
    }
    render() {
        const { emailId, referenceID } = this.state;
        return <div className="modal fade" id="loginPopup" tabIndex="-1" aria-labelledby="loginPopupLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content border-0">
                    <div className="modal-body p-4 pb-5">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <h4 className="modal-title text-center mb-4">Manage Booking</h4>
                        <div className="login-content">

                            <div className="mb-4">
                                <input type="text" className="form-control" placeholder="Email Address" onChange={this.onTextEmailID} value={emailId} />
                                <div className="saprator text-center position-relative my-3"><span>or</span></div>
                                <input type="text" className="form-control" placeholder="Reference Id" onChange={this.onTextReferenceID} value={referenceID} />
                            </div>
                            <button type="submit" className="btn btn-dark w-100 rounded-0" onClick={this.onSubmit}>Log In</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default LoginPopUp