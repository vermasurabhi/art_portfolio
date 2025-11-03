import React from "react";
import { Link } from "react-router-dom";
import potrait21 from "/illustration/magnilemonv2.png";
import potrait22 from "/illustration/tulipbucket.png";
import potrait23 from "/illustration/vaseeye.png";
import potrait24 from "/illustration/hangingbuccket.png";
import potrait26 from "/illustration/peachplantv2.png";
import potrait27 from "/illustration/onlytulip.png";

import potrait1 from "/illustration/stilllife.png";
import potrait30 from "/illustration/simleflorapattn.png";
import potrait43 from "/illustration/pattern4.png";
import Footer from "./Footer";
import { BackButton } from "./Imageone";
import ProtectedImage from "./ProtectedImage";


 const TwoImg = () => {
    return (
      <>
        <div
          className={`navlogo px-4 py-5 text-center`}
          style={{ backgroundColor: "#919E89" }}
        >
          <ProtectedImage
            src={potrait27}
            style={{ width: "7rem", maxWidth: "7rem", height: "7rem" }}
            className={`loaddes m-0 mx-auto`}
          />
        </div>
        <div
          className="mt-5"
          style={{ width: "100%", fontStyle: "italic", textAlign: "center" }}
        >
          <h2>~ Creating my own world ~</h2>
        </div>
        <BackButton>
        <li ><Link to="/image1"  className="my-auto">
          <ProtectedImage
                src={potrait1}
                style={{ width: "100%", borderRadius: "50%", maxWidth: "70px",maxHeight: "70px"}}
                className={`loaddes m-0 p-2`}
              /></Link></li>
              <li ><Link to="/image3"  className="my-auto"><ProtectedImage
                src={potrait30}
                style={{ width: "100%", borderRadius: "50%", maxWidth: "70px",maxHeight: "70px"}}
                className={`loaddes m-0 p-2`}
              /></Link></li><li ><Link to="/image4"  className="my-auto"><ProtectedImage
              src={potrait43}
              style={{ width: "100%", borderRadius: "50%", maxWidth: "70px",maxHeight: "70px"}}
              className={`loaddes m-0 p-2`}
            /></Link></li>
        </BackButton>
        <div
          className="justify-content-center d-flex mt-5"
          style={{ width: "100%" }}
        >
          <div className="row" style={{ maxWidth: "1000px", width: "100%" }}>
            <div className="col-lg-4 col-md-4 col-sm-12 m-0 p-0">
              <div style={{ width: "100%" }}>
                <ProtectedImage
                  src={potrait22}
                  style={{ width: "100%" }}
                  className={`loaddes m-0`}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 m-0 p-0">
              <ProtectedImage
                src={potrait23}
                style={{ width: "100%" }}
                className={`loaddes m-0`}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 m-0 p-0">
              <ProtectedImage
                src={potrait24}
                style={{ width: "100%" }}
                className={`loaddes m-0`}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row" style={{ width: "100%" }}>
          <div className="col-lg-6 col-md-6 col-sm-12 m-0 p-0 my-5">
            <div
              style={{ width: "100%" }}
              className="justify-content-center d-flex"
            >
              <ProtectedImage
                src={potrait21}
                style={{ width: "100%", borderRadius: "20px", maxWidth: "500px" }}
                className={`loaddes m-0`}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 m-0 p-0 my-5">
            <div
              style={{ width: "100%" }}
              className="justify-content-center d-flex"
            >
              <ProtectedImage
                src={potrait26}
                style={{ width: "100%", borderRadius: "20px", maxWidth: "500px" }}
                className={`loaddes m-0`}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <BackButton></BackButton>
        <br/>
        <br/>
        <div style={{ backgroundColor: " #919E89" }}>
          <Footer></Footer>
        </div>
      </>
    );
  };

export default TwoImg