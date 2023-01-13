import React from "react";

function Invoice(){
    return(
        <div style={{backgroundColor: '#f0f3f6', padding:30,}}>
            <div style={{marginBottom:0, padding:30, background:'#fff'}}>
                <table cellSpacing={0} cellPadding={0} style={{width:'100%', border:0, borderCollapse: 'collapse', lineHeight:'100%'}}>
                    <tr>
                        <td style={{width:'50%'}}>
                            <img src="assets/images/logo-black.png" width="163" height="40" className="img-fluid"/>
                        </td>
                        <td style={{width:'50%', textAlign:'right'}}> 
                            <div style={{fontWeight:'bold', marginBottom:10, fontSize:18}}>INVOICE</div>
                            <div style={{fontSize:14,marginBottom:10, color:'#545454', fontWeight:'bold'}}>E76FBC67-0001</div>
                            <div style={{fontSize:14, color:'#545454', fontWeight:'bold'}}>GSTIN : 08ADIFS6458B1ZW</div></td>
                        </tr> 
                    </table>
                    <hr style={{margin:'20px 0 20px 0', border:0, borderTop: '1px solid #dedede'}}/>

                    <table cellSpacing={0} cellPadding={0} style={{width:'100%', border:0, borderCollapse: 'collapse', lineHeight:'100%'}}>
                        <tr style={{verticalAlign:'top'}}>
                            <td width="50%">
                                <div className="invStatsTitle">
                                    <h5 style={{color:'#323232', fontSize:14, fontWeight: 'bold', margin:0, marginBottom:10}}>
                                        Nikhil Agarwal
                                    </h5>
                                    <p style={{margin:0, color:'#6e7073', lineHeight:'100%'}}>Email: nikhilagarwal702@gmail.com</p>
                                </div>
                            </td>
                            <td width="50%">
                                <div style={{borderLeft: '1px solid #ebedf3', paddingLeft: 30}}>
                                    <div style={{marginBottom: 15}}>
                                        <h5 style={{color:'#323232', fontSize:14, fontWeight:'bold', margin:0, marginBottom:10}}>
                                            Booking Id
                                        </h5>
                                        <p style={{margin:0, color:'#6e7073', lineHeight:'100%'}}> NF2513581282 </p>
                                    </div>
                                    <div>
                                        <h5 style={{color:'#323232', fontSize:14, fontWeight:'bold', margin:0, marginBottom:10}}>Booking Date</h5>
                                        <p style={{margin:0, color:'#6e7073', lineHeight:'100%'}}>Tus, 12 september 2022</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div style={{height:20, clear:'both'}}></div>
                    <table className="borderTd" style={{width:'100%', border:0, borderCollapse: 'collapse', lineHeight:'100%'}}>
                        <thead>
                            <tr style={{height:50,borderTop: '1px solid #ebedf3',borderBottom: '1px solid #ebedf3'}}>
                                <th style={{textAlign:'left', color:'#aaa'}}>Flight Details</th>
                                <th style={{textAlign:'right', color:'#aaa'}}>Base Fare</th>
                                <th style={{textAlign:'right', color:'#aaa'}}>Service Fee & Taxes</th>
                                <th style={{textAlign:'right', color:'#aaa'}}>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{height: 15}}></td>
                            </tr>   
                            <tr>
                                <td style={{verticalAlign: "bottom", textAlign: "left", lineHeight:'20px'}}>
                                    <strong>Kingfisher Red IT 3358</strong> - London(LXI) to Dubai(DBI) Traval Date - Thu, 23 September 10, 15:05 hrs <br/>
                                    Nikhil Agarwal
                                </td>
                                <td style={{verticalAlign: "bottom", textAlign: "right"}}>
                                    $240
                                </td>
                                <td style={{verticalAlign: "bottom", textAlign: "right"}}>$239</td>
                                <td style={{verticalAlign: "bottom", textAlign: "right"}}>$500</td>
                            </tr>
                            <tr>
                                <td style={{height:15}}></td>
                            </tr>
                            <tr>
                                <td style={{verticalAlign: "bottom", textAlign: "left", lineHeight:'20px'}}>
                                    <strong>Kingfisher Red IT 3358</strong> - London(LXI) to Dubai(DBI) Traval Date - Thu, 23 September 10, 15:05 hrs <br/>
                                    Nikhil Agarwal
                                </td>
                                <td style={{verticalAlign: "bottom", textAlign: "right"}}>
                                    $240
                                </td>
                                <td style={{verticalAlign: 'bottom', textAlign: 'right'}}>$239</td>
                                <td style={{verticalAlign: 'bottom', textAlign: 'right'}}>$500</td>
                            </tr>
                            <tr>
                                <td style={{height: 15}}></td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="borderTd" style={{width:'100%', border:0, borderCollapse: 'collapse', lineHeight:'100%', borderTop: '1px solid #ebedf3', borderBottom: '1px solid #ebedf3',}}>
                        <tbody>
                            <tr>
                                <td style={{fontWeight: 'bold'}}></td>
                                <td width="30%" style={{borderLeft: '1px solid #ebedf3'}}>
                                    <table className="table m-0" style={{width:'100%', textAlign:'right'}}>
                                        <tbody>
                                            <tr className="font-weight-boldest">
                                                <td style={{borderBottom: '1px solid #ebedf3', height: 40, fontWeight: 'bold'}}> ₹37280.88</td>
                                            </tr>
                                            <tr className="font-weight-boldest">
                                                <td style={{borderBottom: '1px solid #ebedf3', height: 40, fontWeight: 'bold'}}>GST(18%) : ₹6710.58</td>
                                            </tr>
                                            <tr className="font-weight-boldest">
                                                <td style={{height:40, fontWeight: 'bold'}}>Total : ₹43991.46</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{width:'100%', textAlign:'center', paddingTop:20, fontSize:12}}>Address Here:-</div>
            </div>
        </div>
    )
}

export default Invoice;