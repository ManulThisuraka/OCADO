import React , {Component} from "react";
import axios from "axios";

import jsPDF from "jspdf";
import "jspdf-autotable";

import img from '../components/Logo.png';

export default class ViewArrivals extends Component{
  constructor(props){
    super(props);

    this.state={
      arrivalsListR:[]
    };
}

  componentDidMount(){
    this.retrieveArrivals();
  }

  retrieveArrivals(){
    axios.get("http://localhost:5000/arrivals").then(res=>{
      if(res.data.success){
        this.setState({
          arrivalsListR:res.data.existingArrivals
        })
        console.log(this.state.arrivalsListR);
      }
    })
  }

  onDelete = (id)=>{
    axios.delete(`http://localhost:5000/arrivals/delete/${id}`).then((res)=>{
      alert("Arrival Deleted Successfully");
      this.retrieveArrivals();
    })
  }

  filterData(arrivalsListR,searchKey){
    const result = arrivalsListR.filter((arrival) =>
    arrival.cartId.toLowerCase().includes(searchKey)||
    arrival.productCode.toLowerCase().includes(searchKey)
    )

    this.setState({arrivalsListR:result})
  }

  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:5000/arrivals").then(res=>{
      if(res.data.success){
       this.filterData(res.data.existingArrivals,searchKey)
      }
    })
  }


  render(){

    const generatePDF = tickets => {

      const doc = new jsPDF();
      const tableColumn = ["Record ID", "Arrival Date", "Manufacture" ,"Product Code","Cart ID","Quantity"];
      const tableRows = [];
      const date = Date().split(" ");
      const dateStr = date[1] + "-" + date[2] + "-" + date[3];
    
      tickets.map(ticket => {
          const ticketData = [
              ticket._id,
              ticket.aDate,
              ticket.manufacture,
              ticket.productCode,
              ticket.cartId,
              ticket.quantity,
          ];
          tableRows.push(ticketData);
      })
      doc.text("", 14, 0).setFontSize(25);
      doc.text("OCADO Warehouse", 66, 10).setFontSize(13);
      doc.text("Warehouse Department", 14, 20).setFontSize(13);
      doc.text("Item Arrivals Detail Report", 14, 30).setFontSize(13);
      doc.text(`Report Genarated Date - ${dateStr}`, 14, 40);
      //right down width height
      doc.addImage(img, 'JPEG', 170, 12, 25, 25);
      doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:45});
      doc.save("Item Arrivals.pdf");
    };

    return(
      <div className="container">

        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
          <h2 style={{ color:"white" }}>All Arrivals</h2>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.handleSearchArea}>
            </input>
          </div>
        </div>
        
        <table class="table" id="table" style={{ color:"white" }}>
        <thead>
          <tr>
            <th scope="col">Count</th>
            <th scope="col">Arrival Date</th>
            <th scope="col">Manufacture</th>
            <th scope="col">Product Code</th>
            <th scope="col">Cart ID</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {this.state.arrivalsListR.map((arrivalsListR,index)=>(
          <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{arrivalsListR.aDate}</td>
            <td>{arrivalsListR.manufacture}</td>
            <td>{arrivalsListR.productCode}</td>
            <td>{arrivalsListR.cartId}</td>
            <td>{arrivalsListR.quantity}</td>
            <td>
              <a className="btn btn-warning" href={`/aedit/${arrivalsListR._id}`}>Edit Details</a>
              &nbsp;
              <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(arrivalsListR._id)}>Delete Arrival</a>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      <div>
      <button className="btn btn-danger" onClick={()=>generatePDF(this.state.arrivalsListR)} style={{marginTop:'10px'}}>Generate PDF Here</button>
      </div>
      </div>
    )
  }
}