import React, { Fragment, useState } from "react";
import "./Header.css";
import { Button } from "@material-ui/core";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";

const Header = () => {
  const [togvalue, setTogvalue] = useState(true);


  return (
    <Fragment>
      <div className="container-fluid m-auto p-0 top overflow-hidden">
        <div className="container-fluid overflow-hidden">
          <div className="row heading">
            <div className="col-12 m-auto head">
              <div className="container">
                <div className="row p-1">
                  <div className="col-3">
                    <NavLink to="/" style={{ textDecoration: "none" }}>
                      <img
                        src="./images/mainlogo.png"
                        alt="logo"
                        style={{ width: 200 }}
                        className="my-2 mr-5"
                      />
                    </NavLink>
                  </div>
                  <div className="col-9 btnnav position-relative">
                    {togvalue ? (
                      <i
                        className="fas fa-bars togglebtn bar"
                        onClick={() => {
                          setTogvalue(false);
                        }}
                      ></i>
                    ) : (
                      <i
                        className="fas fa-times togglebtn cross"
                        onClick={() => {
                          setTogvalue(true);
                        }}
                      ></i>
                    )}

                    <NavLink
                      to="/"
                      style={{ textDecoration: "none" }}
                      className="navs"  
                  
                                  
                    >
                      <p className="text-light m-0 p-0">
                        <i className="fas fa-gamepad m-1"></i>All
                      </p>
                    </NavLink>
                    <NavLink
                      to="/action"
                      style={{ textDecoration: "none" }}
                      className="navs"
                    
               
                    >
                      <p className="text-light m-0 p-0">
                        <i className="fas fa-fighter-jet"></i>Action
                      </p>
                    </NavLink>
                    <NavLink
                      to="/puzzle"
                      style={{ textDecoration: "none" }}
                      className="navs"
                    >
                      <p className="text-light m-0 p-0">
                        <i className="fas fa-puzzle-piece"></i>Puzzle
                      </p>
                    </NavLink>
                    <NavLink
                      to="/sport"
                      style={{ textDecoration: "none" }}
                      className="navs"
                    >
                      <p className="text-light m-0 p-0">
                        <i className="fas fa-running"></i>Racing
                      </p>
                    </NavLink>
                    <NavLink
                      to="/arcade"
                      style={{ textDecoration: "none" }}
                      className="navs"
                    >
                      <p className="text-light m-0 p-0">
                        <i className="fas fa-dice"></i>Arcade
                      </p>
                    </NavLink>
                    <NavLink
                      to="/adventure"
                      style={{ textDecoration: "none" }}
                      className="navs"
                    >
                      <p className="text-light m-0 p-0">
                        <i className="fas fa-bullseye"></i>Adventure
                      </p>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!togvalue && (
          <div className="togmenu p-4">
            <div className="menubox">
              <NavLink
                to="/"
            
                className="navs"
            
              >
                <p className="text-light my-2 m-0 p-0">
                  <i className="fas fa-gamepad"></i>All
                </p>
              </NavLink>
              <NavLink
                to="/action"
           
                className="navs"
              >
                <p className="text-light my-2 m-0 p-0">
                  <i className="fas fa-fighter-jet"></i>Action
                </p>
              </NavLink>
              <NavLink
                to="/puzzle"
              
                className="navs"
              >
                <p className="text-light my-2 m-0 p-0">
                  <i className="fas fa-puzzle-piece"></i>Puzzle
                </p>
              </NavLink>
              <NavLink
                to="/sport"
               
                className="navs"
         
              >
                <p className="text-light my-2 m-0 p-0">
                  <i className="fas fa-running"></i>Racing
                </p>
              </NavLink>
              <NavLink
                to="/arcade"
            
                className="navs"
              >
                <p className="text-light my-2 m-0 p-0">
                  <i className="fas fa-dice"></i>Arcade
                </p>
              </NavLink>
              <NavLink
                to="/adventure"
            
                className="navs"
              >
                <p className="text-light my-2 m-0 p-0">
                  <i className="fas fa-bullseye"></i>Adventure
                </p>
              </NavLink>
            </div>
          </div>
        )}
      </div>
      <div className="dummy"></div>
    </Fragment>
  );
};

export default Header;
