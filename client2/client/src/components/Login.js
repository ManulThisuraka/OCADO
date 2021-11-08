import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="container">
                <center>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1 style={{ color:"white" }}><b>WAREHOUSE</b></h1>
                    <h1 style={{ color:"white" }}><b>LOGIN</b></h1>
                    <br/>
                    <br/>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name" style={{"font-weight": "bold"}}>Employee ID</label><br/>
                            <input type="text" className="form-control" id="name" placeholder="Enter Employee ID" style={{width: "350px"}} />
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="age" style={{"font-weight": "bold"}}>Password</label><br/>
                            <input type="password" className="form-control" id="text" placeholder="Enter Password" style={{width: "350px"}}/>
                        </div>
                    </form>
                    <button type="button" class="btn btn-outline-light" style={{marginTop:'10px'}}><a href="/dashboard" style={{textDecoration:'none',color:'white'}}>Demo</a></button>
                    </center>
                </div>
            </div>
        )
    }
}
