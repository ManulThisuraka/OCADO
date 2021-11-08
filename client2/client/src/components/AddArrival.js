import React, { Component } from 'react'
import axios from "axios";

export default class AddArrival extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cartId: "",
            productCode: "",
            manufacture: "",
            aDate: "",
            quantity: "",
            ecartId: "",
            eproductCode: "",
            emanufacture: "",
            eaDate: "",
            equantity: ""
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    validate = () => {
        let ecartId = "";
        let eproductCode = "";
        let emanufacture = "";
        let eaDate = "";
        let equantity = "";

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
        if (!this.state.manufacture) {
            emanufacture = "Manufacture is required !!!"
        }
        if (!this.state.aDate) {
            eaDate = "Arrival Date is required !!!"
        }
        if (!this.state.quantity) {
            equantity = "Quantity is required !!!"
        }
        if (ecartId || eproductCode || emanufacture || eaDate || equantity) {
            this.setState({ ecartId, eproductCode, emanufacture, eaDate, equantity });
            return false;
        }
        return true;
    };

    onSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            const { cartId, productCode, manufacture, aDate, quantity } = this.state;
            const data = {
                cartId: cartId,
                productCode: productCode,
                manufacture: manufacture,
                aDate: aDate,
                quantity: quantity
            }
            console.log(data);

            axios.post("http://localhost:5000/arrivals/add", data).then((res) => {
                if (res.data.success) {
                    alert("Data added Successfully");
                    this.empty();
                }
            })
        }
    }

    onDemo = (e) => {
        this.setState({
            cartId: "CRT466",
            productCode: "PRD022",
            manufacture: "Sunlight",
            aDate: "2021-09-16",
            quantity: 750
        })
    }

    empty = (e) => {
        this.setState({
            cartId: "",
            productCode: "",
            manufacture: "",
            aDate: "",
            quantity: "",
            ecartId: "",
            eproductCode: "",
            emanufacture: "",
            eaDate: "",
            equantity: ""
        })
    }

    render() {

        return (
            <div className="container">
                <br />
                <br />
                <br />
                <br />
                <h2 style={{ color: "white" }}>New Arrival</h2>
                <form>

                    <div className="form-group">
                        <label>Cart ID</label>
                        <input type="text" className="form-control" id="cartid" placeholder="Enter Cart ID"
                            name="cartId"
                            value={this.state.cartId}
                            onChange={this.handleInputChange} />

                        <small className="text-danger">{this.state.ecartId}</small>
                    </div>

                    <div className="form-group">
                        <label>Manufacture</label>
                        <input type="text" className="form-control" id="manufacture" placeholder="Enter Manufacture"
                            name="manufacture"
                            value={this.state.manufacture}
                            onChange={this.handleInputChange} />
                        <small className="text-danger">{this.state.emanufacture}</small>
                    </div>

                    <div className="form-group">
                        <label>Product Code</label>
                        <input type="text" className="form-control" id="productcode" placeholder="Enter Product Code"
                            name="productCode"
                            value={this.state.productCode}
                            onChange={this.handleInputChange} />
                        <small className="text-danger">{this.state.eproductCode}</small>
                    </div>

                    <div className="form-group">
                        <label>Arrival Date</label>
                        <input type="date" className="form-control" id="adate" placeholder="Enter Date"
                            name="aDate"
                            value={this.state.aDate}
                            onChange={this.handleInputChange} />
                        <small className="text-danger">{this.state.eaDate}</small>
                    </div>

                    <div className="form-group">
                        <label>Quantity</label>
                        <input type="number" className="form-control" id="quantity" placeholder="Enter Quantity"
                            name="quantity"
                            value={this.state.quantity}
                            onChange={this.handleInputChange} />
                        <small className="text-danger">{this.state.equantity}</small>
                    </div>
                </form>
                <button type="submit" className="btn btn-primary" onClick={this.onSubmit} style={{ marginTop: '10px' }}>Submit</button>&nbsp;
                <button className="btn btn-success" onClick={this.onDemo} style={{ marginTop: '10px' }}>Demo</button>
            </div>
        )
    }
}




