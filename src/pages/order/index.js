import React, { Component } from "react";
import moment from 'moment'
import queryString from 'query-string'
import { OrderSuccess } from '../../action/flightActions'
import {HOST_URL} from '../../action/api'
import './style.css'

class Booking extends Component {
    state={
        data:null
    }
    componentDidMount() {
        var self=this;
        const parsed = queryString.parse(window.location.search);
        OrderSuccess(parsed.order_id).then((dataReponse) => {
            const{data}=dataReponse.data;
            self.setState({data})
            console.log("dataReponse", dataReponse)
        })
    }

    render() {
        //
    const{data}=this.state;
    console.log("booking redirect",data)
        return <>
        

            {data?<table width="100%" border="0" cellspacing="0" cellpadding="0" style={{backgroundColor:'#f6f8fa'}}>
                <tr>
                    <td colspan="2"><img src="http://www.uprightholiday.com/assets/images/logo.png" width="150" alt="fligt logo" /></td>
                </tr>
                <tr>
                    <td colspan="2"> </td>
                </tr>
                <tr>
                    <td width="49%"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td className="styleTag1">Payment Receipt</td>
                                </tr>
                                <tr>
                                    <td className="styleTag">Order ID Number: {data.id}</td>
                                </tr>
                                <tr>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td className="styleTag1">Flight Detail </td>
                                </tr>
                                <tr>
                                <td className="styleTag">{data.owner.name} ({data.owner.iata_code})</td>
                                </tr>
                                <tr>
                                    <td className="styleTag"><img src={data.owner.logo_symbol_url} style={{width:40,height:40}} alt="Logo Symbol"/></td>
                                </tr>
                               
                                
                               
                               
                                
                            </table></td>
                        </tr>
                    </table></td>
                    <td width="51%" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td align="right"><img src="logo.png" alt="logo" width="150" /></td>
                        </tr>
                        <tr>
                            <td className="styleTag" align="right"></td>
                        </tr>
                        <tr>
                            <td className="styleTag" align="right"> </td>
                        </tr>
                        <tr>
                            <td className="styleTag" align="right">Receipt Date : {moment(data.created_at).format("DD-MM-YYYY")}</td>
                        </tr>
                        <tr>
                            <td className="styleTag1" align="right">Payer</td>
                        </tr>
                        <tr>
                            <td className="styleTag" align="right">Rahul Sah</td>
                        </tr>
                        <tr>
                            <td className="styleTag" align="right">7405379159</td>
                        </tr>
                        <tr>
                            <td className="styleTag" align="right">demo@gmail.com</td>
                        </tr>
                    </table></td>
                </tr>
                <tr>
                    <td colspan="2"> </td>
                </tr>
                <tr>
                    <td colspan="2"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td className="styleTag2" width="34%" height="32" align="center">origin</td>
                            <td className="styleTag2" width="26%" align="center">destination</td>
                            <td className="styleTag2" width="25%" align="center">currency</td>
                            <td className="styleTag2 styleTag4" width="15%" align="center">Total Amount</td>
                        </tr>
                        {
                            data.slices && data.slices.length>0?data.slices.map((item)=><tr>
                            <td className="styleTag styleTag5 styleTag6 styleTag4" height="32" align="center">{item.origin.name} ({item.origin.iata_city_code})</td>
                            <td className="styleTag styleTag5 styleTag4" align="center">{item.destination
.name} ({item.destination
.iata_city_code})</td>
                            <td className="styleTag styleTag5 styleTag4" align="center">{data.tax_currency}</td>
                            <td className="styleTag styleTag5 styleTag4 styleTag4" align="center">{data.total_amount}</td>
                        </tr>):null
                        }
                        
                    </table></td>
                </tr>
                <tr>
                    <td colspan="2"> </td>
                </tr>
                <tr>
                    <td className="styleTag" colspan="2">Total Amount : {data.total_amount} {data.tax_currency}</td>
                </tr>
                <tr>
                    <td colspan="2"> </td>
                </tr>
               
                <tr>
                    <td colspan="2"> </td>
                </tr>
               
               
                <tr>
                    <td colspan="2"> </td>
                </tr>
                <tr>
                    <td colspan="2"> </td>
                </tr>
              
                <tr>
                    <td colspan="2"> </td>
                </tr>
                <tr>
                    <td colspan="2"> </td>
                </tr>
                <tr>
                    <td colspan="2"> Click here<a href={HOST_URL}>Redirect To Home</a></td>
                </tr>
            </table>:`Loading ..........`}
        </>
    }
}
export default Booking