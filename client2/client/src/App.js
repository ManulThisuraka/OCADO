import React, { Component } from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import AddArrival from './components/AddArrival';
import AddDeparture from './components/AddDeparture';
import ArrivalsNav from './components/ArrivalsNav';
import Dashboard from './components/Dashboard';
import DeparturesNav from './components/DeparturesNav';
import EditArrival from './components/EditArrival';
import EditDeparture from './components/EditDeparture';
import Footer from './components/Footer';
import Login from './components/Login';
import NavBar from './components/NavBar';
import ViewArrivals from './components/ViewArrivals';
import ViewDepartures from './components/ViewDepartures';
//<Route path="/" exact component={ViewArrivals}></Route>
//<Route path="/add" exact component={AddArrival}></Route>
//<Route path="/edit/:id" exact component={EditArrival}></Route>

//<Route path="/add" exact component={AddDeparture}></Route>
//<Route path="/edit/:id" exact component={EditDeparture}></Route>

export default class App extends Component {
  render() {
    return (

      <div style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/Background.png"})`, 
        backgroundRepeat: "no-repeat",
        height: "900px" 
      }} >

      <BrowserRouter>
        <NavBar/>
        <div className="container">
            <Route path="/arrivals" exact component={ArrivalsNav}></Route>
            <Route path="/aview" exact component={ViewArrivals}></Route>
            <Route path="/aadd" exact component={AddArrival}></Route>
            <Route path="/aedit/:id" exact component={EditArrival}></Route>

            <Route path="/departures" exact component={DeparturesNav}></Route>
            <Route path="/dview" exact component={ViewDepartures}></Route>
            <Route path="/dadd" exact component={AddDeparture}></Route>
            <Route path="/dedit/:id" exact component={EditDeparture}></Route>

            <Route path="/" exact component={Dashboard}></Route>
        </div>
        <br/>
        <Footer/>
      </BrowserRouter>
      </div>
    )
  }
}
