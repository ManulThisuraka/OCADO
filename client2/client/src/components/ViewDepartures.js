import React , {Component} from "react";
import axios from "axios";

import jsPDF from "jspdf";
import "jspdf-autotable";

import img from '../components/Logo.png';

export default class ViewDepartures extends Component{
  constructor(props){
    super(props);

    this.state={
      departuresListR:[]
    };
}

  componentDidMount(){
    this.retrieveDepartures();
  }

  retrieveDepartures(){
    axios.get("http://localhost:5000/departures").then(res=>{
      if(res.data.success){
        this.setState({
          departuresListR:res.data.existingDepartures
        })
        console.log(this.state.departuresListR);
      }
    })
  }

  onDelete = (id)=>{
    axios.delete(`http://localhost:5000/departures/delete/${id}`).then((res)=>{
      alert("Departure Deleted Successfully");
      this.retrieveDepartures();
    })
  }

  filterData(departuresListR,searchKey){
    const result = departuresListR.filter((departure) =>
    departure.cartId.toLowerCase().includes(searchKey)||
    departure.productCode.toLowerCase().includes(searchKey)
    )

    this.setState({departuresListR:result})
  }

  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:5000/departures").then(res=>{
      if(res.data.success){
       this.filterData(res.data.existingDepartures,searchKey)
      }
    })
  }

  render(){
    const generatePDF = tickets => {

      const doc = new jsPDF();
      const tableColumn = ["Record ID", "Departure Date","Product Code","Cart ID","Quantity","Driver ID"];
      const tableRows = [];
      const date = Date().split(" ");
      const dateStr = date[1] + "-" + date[2] + "-" + date[3];
    
      tickets.map(ticket => {
          const ticketData = [
              ticket._id,
              ticket.dDate,
              ticket.productCode,
              ticket.cartId,
              ticket.quantity,
              ticket.driverId,
          ];
          tableRows.push(ticketData);
      })
      doc.text("", 14, 0).setFontSize(25);
      doc.text("OCADO Warehouse", 66, 10).setFontSize(13);
      doc.text("Warehouse Department", 14, 20).setFontSize(13);
      doc.text("Item Departures Detail Report", 14, 30).setFontSize(13);
      doc.text(`Report Genarated Date - ${dateStr}`, 14, 40);
      //right down width height
      doc.addImage(img, 'JPEG', 170, 12, 25, 25);
      doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:45});
      doc.save("Item Departures.pdf");
    };
    return(
      <div className="container">

        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
          <h2 style={{ color:"white" }}>All Departures</h2>
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
        
        <table class="table" style={{ color:"white" }}>
        <thead>
          <tr>
            <th scope="col">Count</th>
            <th scope="col">Departure Date</th>
            <th scope="col">Product Code</th>
            <th scope="col">Cart ID</th>
            <th scope="col">Quantity</th>
            <th scope="col">Driver ID</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

        {this.state.departuresListR.map((departuresListR,index) =>(
          <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{departuresListR.dDate}</td>
            <td>{departuresListR.productCode}</td>
            <td>{departuresListR.cartId}</td>
            <td>{departuresListR.quantity}</td>
            <td>{departuresListR.driverId}</td>
            <td>
              <a className="btn btn-warning" href={`/dedit/${departuresListR._id}`}>Edit Details</a>
              &nbsp;
              <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(departuresListR._id)}>Delete Departure</a>
            </td>
          </tr>
            ))}

        </tbody>
      </table>
      <div>
      <button className="btn btn-danger" onClick={()=>generatePDF(this.state.departuresListR)} style={{marginTop:'10px'}}>Generate PDF Here</button>
      </div>
      </div>
    )
  }
}