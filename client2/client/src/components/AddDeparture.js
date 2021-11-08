import React, { Component } from 'react'
import axios from "axios";

export default class AddDeparture extends Component {

    constructor(props){
        super(props);
    
        this.state={
            cartId: "",
            productCode: "",
            dDate: "",
            quantity: "",
            driverId:"",
            ecartId: "",
            eproductCode: "",
            edDate: "",
            equantity: "",
            edriverId:""
        };
    }

    handleInputChange = (e) =>{
        const{name,value} = e.target;
        this.setState({
            ...this.state,
        [name]:value
        })
    }

    validate = () => {
        let ecartId = "";
        let eproductCode = "";
        let edDate = "";
        let equantity = "";
        let edriverId = "";
        
        if (!this.state.cartId.match(/CRT/g)) {
            ecartId = "Cart ID Prefix should be (CRT)"
        }
        if (!this.state.cartId) {
            ecartId = "Cart ID is required !!!"
        }
        if (!this.state.productCode.match(/PRD/g)) {
            eproductCode = "Product ID Prefix should be (PRD)"
        }
        if (!this.state.productCode) {
            eproductCode = "Product Code is required !!!"
        }
        if (!this.state.dDate) {
            edDate = "Departure Date is required !!!"
        }
        if (!this.state.quantity) {
            equantity = "Quantity is required !!!"
        }
        if (!this.state.driverId.match(/DRI/g)) {
            edriverId = "Cart ID Prefix should be (DRI)"
        }
        if (!this.state.driverId) {
            edriverId = "Cart ID is required !!!"
        }
        if (ecartId || eproductCode || edDate || equantity || edriverId) {
            this.setState({ ecartId, eproductCode, edDate, equantity, edriverId });
            return false;
        }
        return true;
    };

    onSubmit = (e) =>{
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            const {cartId,productCode,dDate,quantity,driverId} = this.state;
            const data = {
                cartId:cartId ,
                productCode: productCode,
                dDate: dDate,
                quantity:quantity ,
                driverId:driverId
            }
            console.log(data);

            axios.post("http://localhost:5000/departures/add",data).then((res)=>{
                if(res.data.success){
                    alert("Data added Successfully");
                    this.empty();
                }
            })
        }
    }

    onDemo = (e) =>{
        this.setState({
            cartId:"CRT466",
            productCode:"PRD022",
            dDate:"2021-09-15",
            quantity:300,
            driverId:"DRI777"
        })
    }

    empty = (e) => {
        this.setState({
            cartId: "",
            productCode: "",
            dDate: "",
            quantity: "",
            driverId:"",
            ecartId: "",
            eproductCode: "",
            edDate: "",
            equantity: "",
            edriverId:""
        })
    }

    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <br/>
                <br/>
                <h2 style={{ color:"white" }}>New Departure</h2>
            <form>
            

                <div className="form-group">
                    <label >Cart ID</label>
                    <input type="text" className="form-control" id="cartid" placeholder="Enter Cart ID" 
                    name="cartId"
                    value={this.state.cartId}
                    onChange={this.handleInputChange} required/>
                    <small className="text-danger">{this.state.ecartId}</small>
                </div>

                <div className="form-group">
                    <label>Product Code</label>
                    <input type="text" className="form-control" id="productcode" placeholder="Enter Product Code" 
                    name="productCode"
                    value={this.state.productCode}
                    onChange={this.handleInputChange} required/>
                    <small className="text-danger">{this.state.eproductCode}</small>
                </div>

                <div className="form-group">
                    <label>Departure Date</label>
                    <input type="date" className="form-control" id="ddate" placeholder="Enter Date" 
                    name="dDate"
                    value={this.state.dDate}
                    onChange={this.handleInputChange} required/>
                    <small className="text-danger">{this.state.edDate}</small>
                </div>

                <div className="form-group">
                    <label>Quantity</label>
                    <input type="number" className="form-control" id="quantity" placeholder="Enter Quantity" 
                    name="quantity"
                    value={this.state.quantity}
                    onChange={this.handleInputChange} required/>
                    <small className="text-danger">{this.state.equantity}</small>
                </div>

                <div className="form-group">
                    <label>Driver ID</label>
                    <input type="text" className="form-control" id="driverId" placeholder="Enter Driver ID" 
                    name="driverId"
                    value={this.state.driverId}
                    onChange={this.handleInputChange} required/>
                    <small className="text-danger">{this.state.edriverId}</small>
                </div>  
            </form>
            <button type="submit" className="btn btn-primary" onClick={this.onSubmit} style={{marginTop:'10px'}}>Submit</button>&nbsp;
            <button className="btn btn-success" onClick={this.onDemo} style={{marginTop:'10px'}}>Demo</button>
        </div>
        )
    }
}
//
