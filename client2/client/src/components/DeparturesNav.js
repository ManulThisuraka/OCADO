import React, { Component } from 'react'

export default class DeparturesNav extends Component {
    render() {
        return (
            <div>
                <div className="container">
                <center>
                    <br/>
                    <br/>
                    <h1 style={{ color:"white" }}><b>WAREHOUSE Departures</b></h1>
                    <br/>
                    <center><img src="Logo.png" alt="" height="350px"/></center>
                    <br/>
                    <br/>
                    <button type="button" class="btn btn-outline-light btn-lg"><a href="/dadd" style={{textDecoration:'none',color:'white'}}>Add New Departure</a></button>&nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-outline-light btn-lg"><a href="/dview" style={{textDecoration:'none',color:'white'}}>All Departures</a></button>&nbsp;&nbsp;&nbsp;
                    </center>
                </div>
            </div>
        )
    }
}
