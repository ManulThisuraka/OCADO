import axios from 'axios';
import React, { Component } from 'react'


export default class EditArrival extends Component {

    constructor(props){
        super(props);
    
        this.state={
            cartId: "",
            productCode: "",
            manufacture: "",
            aDate: "",
            quantity: ""
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

        const {cartId,productCode,manufacture,aDate,quantity} = this.state;
        const data = {
            cartId:cartId ,
            productCode: productCode,
            manufacture:manufacture ,
            aDate: aDate,
            quantity:quantity 
        }
        console.log(data);

        axios.put(`http://localhost:5000/arrivals/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Arrival Updated Successfully");
                this.props.history.push('/aview')
            }
        })
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:5000/arrivals/get/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    cartId:res.data.arrival.cartId ,
                    productCode:res.data.arrival.productCode ,
                    manufacture:res.data.arrival.manufacture ,
                    aDate:res.data.arrival.aDate ,
                    quantity: res.data.arrival.quantity
                })
                console.log(this.state.arrival);
            }
        })
    }

    render() {
        return (
            <div className="container">
                <h2 style={{ color:"white" }}>Edit Arrival</h2>
            <form>

                <div className="form-group">
                    <label>Cart ID</label>
                    <input type="text" className="form-control" id="cartid" placeholder="Enter Cart ID" 
                    name="cartId"
                    value={this.state.cartId}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>manufacture</label>
                    <input type="text" className="form-control" id="manufacture" placeholder="Enter Manufacture" 
                    name="manufacture"
                    value={this.state.manufacture}
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
                    <label>Arrival Date</label>
                    <input type="date" className="form-control" id="adate" placeholder="Enter Date" 
                    name="aDate"
                    value={this.state.aDate}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Quantity</label>
                    <input type="number" className="form-control" id="quantity" placeholder="Enter Quantity" 
                    name="quantity"
                    value={this.state.quantity}
                    onChange={this.handleInputChange}/>
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={this.onSubmit} style={{marginTop:'10px'}}>Update</button>
            </form>
        </div>
        )
    }
}
