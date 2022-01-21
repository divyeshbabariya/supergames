import React, { Fragment, useState, useEffect } from "react";

import axios from "axios";
import Popup from "../Popup/Popup";
import { NavLink, Routes, Route } from "react-router-dom";

const Action = () => {
  const [info, setInfo] = useState([]);
  const [pop, setPop] = useState(true);
  const [code, setCode] = useState("");

  const cardcover = () => {
    setPop(true);
    setCode(code);
  };

  const getdata = async () => {
    const respons = await axios
      .get("https://pub.gamezop.com/v3/games?id=3523")
      .catch((err) => {
        console.log(err);
      });

    setInfo(respons.data.games);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <Fragment>
      {code.length>0 && <Popup data="Ashish" id={code} />}
      {code.length>0 && <i className="far fa-window-close windowhandle" style={{color:"#3f51b5"}} onClick={()=>{setCode("")}}></i>}

      <div className="container">
        <div className="row mt-3">
          <div className="col-12">
            <div className="row">
              {info.map((ele, i) => {
                  if(ele.categories.en[0]=="Arcade"){
                return (
                  <>
                    <div className="col-lg-3 col-md-4 col-sm-5 col-10 p-2 m-auto cards overflow-hidden" data-aos="flip-left">
                      <div className="image  position-relative">
                        <img src={ele.assets.cover} alt="gamepic" />
                        <div
                          className="cardcover"
                          onClick={cardcover}
                          onClick={()=>{setCode(ele.code)}}
                        >
                          <h1 className="text-light">Play</h1>
                        </div>
                      </div>
                      <div
                        className="detail p-1 m-0"
                        style={{ background: ele.colorMuted }}
                      >
                        <p>{ele.name.en}</p>
                        <p>{ele.gamePlays} Plays</p>
                      </div>
                    </div>
                  </>
                );
              }})}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Action;
