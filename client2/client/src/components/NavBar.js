import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div >
                <nav class="navbar navbar-expand-lg navbar-light" style={{ "background-color": "#5d3e69" }}>
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/" style={{ color: "white", "font-weight": "bold" }}>OCADO</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">


                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something ele here</a></li>
                                </ul>
                            </ul>

                            <li class="nav-item" style={{ "list-style-type": "none" }} >
                                <a class="nav-link active" aria-current="page" href="/" style={{ color: "white" }}>Warehouse Dashboard</a>
                            </li>

                            <li class="nav-item" style={{ "list-style-type": "none" }}>
                                <a class="nav-link active" aria-current="page" href="/arrivals" style={{ color: "white" }}>Arrivals</a>
                            </li>

                            <li class="nav-item" style={{ "list-style-type": "none" }}>
                                <a class="nav-link active" aria-current="page" href="/departures" style={{ color: "white" }}>Departures</a>
                            </li>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
