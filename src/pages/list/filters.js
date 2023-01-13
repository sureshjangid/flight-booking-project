import React, { Suspense } from "react";
const ListBanner = (props) => {
    return (   <section className="search-filter-main">
    <div className="container">
        <div className="search-filter">
           
                <div className="form-row d-flex mb-3">
                    <div className="select-box select-trip">
                        <div className="dropdown">
                            <button className="dropdown-toggle" type="button" id="selectTrip" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="20" width="20" fill="#34404b">
                                    <path d="M482.3 192C516.5 192 576 221 576 256C576 292 516.5 320 482.3 320H365.7L265.2 495.9C259.5 505.8 248.9 512 237.4 512H181.2C170.6 512 162.9 501.8 165.8 491.6L214.9 320H112L68.8 377.6C65.78 381.6 61.04 384 56 384H14.03C6.284 384 0 377.7 0 369.1C0 368.7 .1818 367.4 .5398 366.1L32 256L.5398 145.9C.1818 144.6 0 143.3 0 142C0 134.3 6.284 128 14.03 128H56C61.04 128 65.78 130.4 68.8 134.4L112 192H214.9L165.8 20.4C162.9 10.17 170.6 0 181.2 0H237.4C248.9 0 259.5 6.153 265.2 16.12L365.7 192H482.3z" />
                                </svg>
                                <span>Rount Trip</span>

                            </button>
                            <ul className="dropdown-menu" aria-labelledby="selectTrip">
                                <li><a className="dropdown-item d-flex align-items-center justify-content-between active" href="#">
                                    <span>Rount Trip</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="18" width="18" fill="#34404b"> <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" /></svg>
                                </a></li>
                                <li><a className="dropdown-item" href="#">One-way</a></li>
                                <li><a className="dropdown-item" href="#">Multi-city</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="select-box select-person">
                        <div className="dropdown">
                            <button className="dropdown-toggle" type="button" id="selectTrip" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="20" width="20" fill="#34404b"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" /></svg>
                                1 <span>person</span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="selectTrip">
                                <li>
                                    <label className="d-flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" fill="#5A5A5A" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" /></svg>
                                        <span>Adult <br />
                                            <span>18+ years</span>
                                        </span>
                                    </label>
                                    <div className="count-box">
                                        <button className="count minus">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" fill="#5A5A5A" viewBox="0 0 448 512"><path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" /></svg>
                                        </button>
                                        <span className="amount">1</span>
                                        <button className="count plus">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" fill="#5A5A5A" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" /></svg>
                                        </button>
                                    </div>
                                </li>
                                <li>
                                    <label className="d-flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="18" width="18" fill="#5A5A5A"><path d="M224 64C224 99.35 195.3 128 160 128C124.7 128 96 99.35 96 64C96 28.65 124.7 0 160 0C195.3 0 224 28.65 224 64zM144 384V480C144 497.7 129.7 512 112 512C94.33 512 80.01 497.7 80.01 480V287.8L59.09 321C49.67 336 29.92 340.5 14.96 331.1C.0016 321.7-4.491 301.9 4.924 286.1L44.79 223.6C69.72 184 113.2 160 160 160C206.8 160 250.3 184 275.2 223.6L315.1 286.1C324.5 301.9 320 321.7 305.1 331.1C290.1 340.5 270.3 336 260.9 321L240 287.8V480C240 497.7 225.7 512 208 512C190.3 512 176 497.7 176 480V384L144 384z" /></svg>
                                        <span>Children <br />
                                            <span>2+ years</span>
                                        </span>
                                    </label>
                                    <div className="count-box">
                                        <button className="count minus">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" fill="#5A5A5A" viewBox="0 0 448 512"><path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" /></svg>
                                        </button>
                                        <span className="amount">1</span>
                                        <button className="count plus">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" fill="#5A5A5A" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" /></svg>
                                        </button>
                                    </div>
                                </li>
                                <li>
                                    <label className="d-flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="18" width="18" fill="#5A5A5A"><path d="M156.8 411.8l31.22-31.22l-60.04-53.09l-52.29 52.28C61.63 393.8 60.07 416.1 72 432l48 64C127.9 506.5 139.9 512 152 512c8.345 0 16.78-2.609 23.97-8c17.69-13.25 21.25-38.33 8-56L156.8 411.8zM224 159.1c44.25 0 79.99-35.75 79.99-79.1S268.3 0 224 0S144 35.75 144 79.1S179.8 159.1 224 159.1zM408.7 145c-12.75-18.12-37.63-22.38-55.76-9.75l-40.63 28.5c-52.63 37-124.1 37-176.8 0l-40.63-28.5C76.84 122.6 51.97 127 39.22 145C26.59 163.1 30.97 188 48.97 200.8l40.63 28.5C101.7 237.7 114.7 244.3 128 250.2L128 288h192l.0002-37.71c13.25-5.867 26.22-12.48 38.34-21.04l40.63-28.5C417.1 188 421.4 163.1 408.7 145zM320 327.4l-60.04 53.09l31.22 31.22L264 448c-13.25 17.67-9.689 42.75 8 56C279.2 509.4 287.6 512 295.1 512c12.16 0 24.19-5.516 32.03-16l48-64c11.94-15.92 10.38-38.2-3.719-52.28L320 327.4z" /></svg>
                                        <span>Infants <br />
                                            <span>2 years</span>
                                        </span>
                                    </label>
                                    <div className="count-box">
                                        <button className="count minus">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" fill="#5A5A5A" viewBox="0 0 448 512"><path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" /></svg>
                                        </button>
                                        <span className="amount">1</span>
                                        <button className="count plus">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" fill="#5A5A5A" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" /></svg>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="select-box select-flight">
                        <div className="dropdown">
                            <button className="dropdown-toggle" type="button" id="selectTrip" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="20" width="20" fill="#34404b"><path d="M472.8 168.4C525.1 221.4 525.1 306.6 472.8 359.6L360.8 472.9C351.5 482.3 336.3 482.4 326.9 473.1C317.4 463.8 317.4 448.6 326.7 439.1L438.6 325.9C472.5 291.6 472.5 236.4 438.6 202.1L310.9 72.87C301.5 63.44 301.6 48.25 311.1 38.93C320.5 29.61 335.7 29.7 344.1 39.13L472.8 168.4zM.0003 229.5V80C.0003 53.49 21.49 32 48 32H197.5C214.5 32 230.7 38.74 242.7 50.75L410.7 218.7C435.7 243.7 435.7 284.3 410.7 309.3L277.3 442.7C252.3 467.7 211.7 467.7 186.7 442.7L18.75 274.7C6.743 262.7 0 246.5 0 229.5L.0003 229.5zM112 112C94.33 112 80 126.3 80 144C80 161.7 94.33 176 112 176C129.7 176 144 161.7 144 144C144 126.3 129.7 112 112 112z" /></svg>
                                <span>Economy</span>

                            </button>
                            <ul className="dropdown-menu" aria-labelledby="selectTrip">
                                <li><a className="dropdown-item d-flex align-items-center justify-content-between active" href="#">
                                    <span>Economy</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="18" width="18" fill="#34404b"> <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" /></svg>
                                </a></li>
                                <li><a className="dropdown-item" href="#">Premium economy</a></li>
                                <li><a className="dropdown-item" href="#">Business</a></li>
                                <li><a className="dropdown-item" href="#">First</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="serach-box  align-items-center">
                        <div className="serach-box-item d-flex w-100 align-items-center">
                            <div className="form-group type-input">
                                <input type="text" className="form-control" placeholder="From?" value="Jaipur (JAI)" />
                            </div>
                            <div className="revert-box">
                                <button type="button" className="revert-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="16" width="16" fill="#0f294c"><path d="M32 176h370.8l-57.38 57.38c-12.5 12.5-12.5 32.75 0 45.25C351.6 284.9 359.8 288 368 288s16.38-3.125 22.62-9.375l112-112c12.5-12.5 12.5-32.75 0-45.25l-112-112c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L402.8 112H32c-17.69 0-32 14.31-32 32S14.31 176 32 176zM480 336H109.3l57.38-57.38c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-112 112c-12.5 12.5-12.5 32.75 0 45.25l112 112C127.6 508.9 135.8 512 144 512s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L109.3 400H480c17.69 0 32-14.31 32-32S497.7 336 480 336z" /></svg>
                                </button>
                            </div>
                            <div className="form-group type-input">
                                <input type="text" className="form-control" placeholder="To?" />
                            </div>
                        </div>
                        <div className="saprator-horizantal"></div>
                        <div className="serach-box-item d-flex w-100 align-items-center">
                            <div className="form-group type-input">
                                <input type="text" className="form-control" placeholder="dd/mm/yyyy" />
                            </div>
                            <div className="saprator-vertical"></div>
                            <div className="form-group type-input">
                                <input type="text" className="form-control" placeholder="dd/mm/yyyy" />
                            </div>
                        </div>
                        <div className="search-btn">
                            <button type="submit" className="btn btn-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="22" width="22" fill="#fff"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" /></svg> <span>Search</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="airport-type form-row">
                    <div className="select-type me-md-5 me-2 position-relative">
                        <input />
                        <span className="checkbox"></span>
                        <label>Add nearby airports with baggage</label>
                    </div>
                    <div className="select-type position-relative">
                        <input type="checkbox" />
                        <span className="checkbox"></span>
                        <label>Direct Flight only</label>
                    </div>
                </div>
          
        </div>
    </div>
</section>
       );
}
export default ListBanner