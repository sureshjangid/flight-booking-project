import React from "react";
import Header from '../home/header'
import AppFooter from "../footer";
import {Nav, Tab} from 'react-bootstrap';
import './userAdmin.css';
import Profile from "./Profile/Index";
import UserData from "./userData";

function UserAdmin(){
    return(
        <>
            <Header/>
            <div className="userAdmin py-5">
                <Tab.Container defaultActiveKey="userdata">
                    <div className="userTabs">
                        <Nav className="container tab-bar">
                            <Nav.Item>
                                <Nav.Link eventKey="userdata">User Data</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="profile">Profile</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <div className="container py-5">
                        <Tab.Content>
                            <Tab.Pane eventKey="userdata">
                                <UserData/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="profile">
                                <Profile/>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Tab.Container>
            </div>
            <AppFooter/>
        </>
    )
}

export default UserAdmin;