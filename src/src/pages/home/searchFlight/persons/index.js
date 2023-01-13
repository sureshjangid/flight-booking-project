import React, { Component } from "react";
class Persons extends Component {
    

    render() {
        const { isOpen,persons, onDecreasePersons, onIncresePersons,onClickToClose,onClickToOpen } = this.props
        console.log(isOpen)
        return <>
            <ul className={`dropdown-menu ${isOpen?`show`:``}`} aria-labelledby="selectTrip">
                <li>
                    <label className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" fill="#5A5A5A" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" /></svg>
                        <span>Adult <br />
                            <span>18+ years</span>
                        </span>
                    </label>
                    <div className="count-box">
                        <button className="count minus" onClick={onDecreasePersons("adults")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" fill="#5A5A5A" viewBox="0 0 448 512"><path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" /></svg>
                        </button>
                        <span className="amount">{persons.adults}</span>
                        <button className="count plus" onClick={onIncresePersons("adults")}>
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
                        <button className="count minus" onClick={onDecreasePersons("children")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" fill="#5A5A5A" viewBox="0 0 448 512"><path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" /></svg>
                        </button>
                        <span className="amount">{persons.children}</span>
                        <button className="count plus" onClick={onIncresePersons("children")}>
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
                        <button className="count minus" onClick={onDecreasePersons("infants")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" fill="#5A5A5A" viewBox="0 0 448 512"><path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" /></svg>
                        </button>
                        <span className="amount">{persons.infants}</span>
                        <button className="count plus" onClick={onIncresePersons("infants")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" fill="#5A5A5A" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" /></svg>
                        </button>
                    </div>
                </li>
                <li className="select-btns justify-content-end">
                    <button className="btn-dark d-none" onClick={onClickToClose}>Cancel</button>
                    <button className="btn-dark w-100 form-group type-input w-100" onClick={onClickToClose}>Done</button>
                </li>
            </ul>

        </>
    }
}


export default Persons