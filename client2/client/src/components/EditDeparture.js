import axios from 'axios';
import React, { Component } from 'react'


export default class EditDeparture extends Component {

    constructor(props){
        super(props);
    
        this.state={
            cartId: "",
            productCode: "",
            dDate: "",
            quantity: "",
            driverId:""
        };
    }

    handleInputChange = (e) =>{
        const{name,value} = e.target;
        this.setState({
            ...this.state,
        [name]:value
        })
    }

    onSubmit = (e) =>{
        
        e.preventDefault();
        const id = this.props.match.params.id;

        const {cartId,productCode,dDate,quantity,driverId} = this.state;
        const data = {
            cartId:cartId ,
            productCode: productCode,
            dDate: dDate,
            quantity:quantity ,
            driverId:driverId 
        }
        console.log(data);

        axios.put(`http://localhost:5000/departures/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Departure Updated Successfully");
                this.props.history.push('/dview')
            }
        })
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:5000/departures/get/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    cartId:res.data.departure.cartId ,
                    productCode:res.data.departure.productCode ,
                    dDate:res.data.departure.dDate ,
                    quantity: res.data.departure.quantity,
                    driverId: res.data.departure.driverId
                })
                console.log(this.state.departure);
            }
        })
    }

    render() {
        return (
            <div className="container">
                <h2 style={{ color:"white" }}>Edit Departure</h2>
            <form>

                <div className="form-group">
                    <label>Cart ID</label>
                    <input type="text" className="form-control" id="cartid" placeholder="Enter Cart ID" 
                    name="cartId"
                    value={this.state.cartId}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Product Code</label>
                    <input type="text" className="form-control" id="productcode" placeholder="Enter Product Code" 
                    name="productCode"
                    value={this.state.productCode}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Departure Date</label>
                    <input type="date" className="form-control" id="ddate" placeholder="Enter Date" 
                    name="dDate"
                    value={this.state.dDate}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Quantity</label>
                    <input type="number" className="form-control" id="quantity" placeholder="Enter Quantity" 
                    name="quantity"
                    value={this.state.quantity}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Driver ID</label>
                    <input type="text" className="form-control" id="driverId" placeholder="Enter Driver ID" 
                    name="driverId"
                    value={this.state.driverId}
                    onChange={this.handleInputChange}/>
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={this.onSubmit} style={{marginTop:'10px'}}>Update</button>
            </form>
        </div>
        )
    }
}