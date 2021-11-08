import React, { Fragment } from "react";
import "../App.css";

const Footer = () => (
  <div className="footer-container">
    <footer className="page-footer font-small mdb-color">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left  pb-0.5">
          <div className="col-md-10 col-lg-1 col-xl-3 mx-auto mt-5">
            <h4 className="text-uppercase mb-4 font-weight-bold">OCADO</h4>
            <p>
              Enter Sri Lanka's freshest online grocery store for all your
              grocery needs. Now you can order all your daily necessities from
              the comfort of your home or anywhere you wants!
            </p>
          </div>
          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-2  col-xl-2 mx-auto mt-5">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a href="#!">Trending</a>
            </p>
            <p>
              <a href="#!">My Account</a>
            </p>
            <p>
              <a href="#!">Vendors</a>
            </p>
            <p>
              <a href="#!">Brands</a>
            </p>
          </div>
          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-5">
            <h6 className="text-uppercase mb-4 font-weight-bold">Legals</h6>
            <p>
              <a href="#!">Licences</a>
            </p>
            <p>
              <a href="#!">Refund Policy</a>
            </p>
            <p>
              <a href="#!">About us</a>
            </p>
            <p>
              <a href="#!">Contct Us</a>
            </p>
          </div>
          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-5">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contacts</h6>
            <p>
              <i className="fas fa-home mr-3"></i> Ward Place, Colombo 07
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> ocado@gmail.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> + 94 112685569
            </p>
            <p>
              <i className="fas fa-print mr-3"></i> + 94 112685570
            </p>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-center text-md-left">
              © 2021 Copyright:
              <a href="https://mdbootstrap.com/">
                <strong> Ocado.com</strong>
              </a>
            </p>
          </div>
          <div className="col-md-5 col-lg-4 ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;