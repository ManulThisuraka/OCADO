import React, { Component } from 'react'

export default class ArrivalsNav extends Component {
    render() {
        return (
            <div>
                <div className="container">
                <center>
                    <br/>
                    <br/>
                    <h1 style={{ color:"white" }}><b>WAREHOUSE Arrivals</b></h1>
                    <br/>
                    <center><img src="Logo.png" alt="" height="350px"/></center>
                    <br/>
                    <br/>
                    <button type="button" class="btn btn-outline-light btn-lg"><a href="/aadd" style={{textDecoration:'none',color:'white'}}>Add New Arrival</a></button>&nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-outline-light btn-lg"><a href="/aview" style={{textDecoration:'none',color:'white'}}>All Arrivals</a></button>&nbsp;&nbsp;&nbsp;
                    </center>
                </div>
            </div>
        )
    }
}
