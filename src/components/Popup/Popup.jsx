import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";

const Popup = (props) => {
  const [info, setInfo] = useState([]);
  const [data, setData] = useState({});

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
      {info.map((ele) => {
        if (ele.code === props.id) {
          return (
            <div className="container-fluid popup">
              <div className="row my-5 p-0 m-0">
                <div className="col-12">
                  <h1 className="text-center title">{ele.name.en}</h1>
                </div>
              </div>

              <div className="row my-3">
                <div className="col-lg-6 col-sm-8 col-12 m-auto">
                  <p className="text-center gamedetail">{ele.description.en}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <a href={ele.url} className="ml-auto">
                    <button
                       className="m-auto startbtn"
                      style={{ backgroundColor: ele.colorVibrant }}
                    >
                      <h3>Start</h3>
                    </button>
                  </a>
                </div>
              </div>

              <div className="row">
                <div className="col-7 py-5 m-0 p-0 m-auto screenimg">
          <img src={ele.assets.wall} alt="game" style={{width:"80%"}} />
                </div>
              </div>
            </div>
          );
        }
      })}
    </Fragment>
  );
};

export default Popup;
