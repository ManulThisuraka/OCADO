import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <center>
            <div>
                <div className="container">
                    <br/>
                    <br/>
                    <br/>
                    <h1 style={{ color:"white" }}><b>WAREHOUSE DASHBOARD</b></h1>
                    <br/>
                    <br/>
                    <center><img src="Logo.png" alt="" height="320px"/></center>
                    <br/>
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-outline-light btn-lg"><a href="/arrivals" style={{textDecoration:'none',color:'white'}}>Arrivals</a></button>&nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-outline-light btn-lg"><a href="/departures" style={{textDecoration:'none',color:'white'}}>Departures</a></button>&nbsp;&nbsp;&nbsp;
                </div>
            </div>
            </center>
        )
    }
}
