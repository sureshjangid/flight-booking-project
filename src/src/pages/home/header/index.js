import React, { Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const Headers = (props) => {    

    const [isActive, setActive] = useState(false);

    let handleClick = () =>{
        setActive(true);
    }

    const removeOverlay = ()=>{
        document.body.classList.remove('aside-open');
        setActive(false);
    }

    useEffect(()=>{
        document.body.classList.toggle('aside-open', isActive);
    }, [isActive])
   
    return (
        <>
        <div className={isActive === true ? 'aside-overlay active' : 'aside-overlay'} onClick={removeOverlay} ></div>   
        <header>
            
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="site-logo py-3">
                        <a href="/"><img src="assets/images/logo-black.png" className="img-fluid" width="150" height="auto" alt="logo"/></a>
                    </div>
                </div>
                <div className="col-6">
                    <nav className="navbar navbar-expand-lg h-100">
                        <div className="container-fluid p-md-0 justify-content-end p-0">
                            <div className="language-type dropdown">
                                <a className="nav-link dropdown-toggle" href="#">
                                    <img src="assets/images/flag-gb.webp" className="img-fluid" height="13" width="24"/> 
                                    <span>EUR</span>
                                </a>
                                <ul className="country-list list-unstyled border-0 m-0">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <img src="assets/images/flag-ct.jpg" className="img-fluid" height="13" width="24"/>
                                            <span>Català</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <img src="assets/images/flag-cz.webp" className="img-fluid" height="13" width="24"/>
                                            <span>Čeština</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <img src="assets/images/flag-dk.webp" className="img-fluid" height="13" width="24"/>
                                            <span>Dansk</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <img src="assets/images/flag-id.webp" className="img-fluid" height="13" width="24"/>
                                            <span>Deutsch</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <img src="assets/images/flag-ct.jpg" className="img-fluid" height="13" width="24"/>
                                            <span>Català</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <img src="assets/images/flag-cz.webp" className="img-fluid" height="13" width="24"/>
                                            <span>Čeština</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <img src="assets/images/flag-dk.webp" className="img-fluid" height="13" width="24"/>
                                            <span>Dansk</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <img src="assets/images/flag-id.webp" className="img-fluid" height="13" width="24"/>
                                            <span>Deutsch</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <img src="assets/images/flag-ct.jpg" className="img-fluid" height="13" width="24"/>
                                            <span>Català</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <img src="assets/images/flag-cz.webp" className="img-fluid" height="13" width="24"/>
                                            <span>Čeština</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <img src="assets/images/flag-dk.webp" className="img-fluid" height="13" width="24"/>
                                            <span>Dansk</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <img src="assets/images/flag-id.webp" className="img-fluid" height="13" width="24"/>
                                            <span>Deutsch</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                          <button className="navbar-toggler" onClick={handleClick} type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="22" width="22" fill="#34404b"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
                          </button>
                          <div className="collapse navbar-collapse justify-content-end flex-grow-0" id="siteMenu">
                            <ul className="navbar-nav">
                              <li className="nav-item">
                                <Link className="nav-link" to="/customer-service">Customer Service</Link>
                              </li>
                              <li className="nav-item">
                                <a href="javascipt:void(0);" className="nav-link d-flex align-items-center white-space-nowrap" data-bs-toggle="modal" data-bs-target="#loginPopup">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="16" width="16" fill="#34404b"><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/></svg>
                                    <span className="ms-2">Log in</span></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </nav>
                </div>
            </div>
        </div>
    </header>
        </>
    );
}
export default Headers