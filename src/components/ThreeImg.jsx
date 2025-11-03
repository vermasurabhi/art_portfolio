import React from "react";
import { Link } from "react-router-dom";



import potrait30 from "/illustration/simleflorapattn.png";
import potrait31 from "/illustration/shineflorapattn.png";
import potrait32 from "/illustration/zaguarprintpattn.png";
import potrait33 from "/illustration/zigzagpattn.png";
import potrait34 from "/illustration/blueyellpattn.png";
import potrait35 from "/illustration/flowerheart1.png";
import potrait36 from "/illustration/hexaflorapattn.png";
import potrait37 from "/illustration/flowerhub.png";
import potrait1 from "/illustration/stilllife.png";
import potrait255 from "/illustration/magnilemon.png";
import potrait27 from "/illustration/onlytulip.png";
import potrait43 from "/illustration/pattern4.png";


import Footer from "./Footer";
import { BackButton } from "./Imageone";
import ProtectedImage from "./ProtectedImage";

const ThreeImg = () => {
    return (
      <>
        <div
          className={`navlogo px-4 py-5 text-center`}
          style={{ backgroundColor: "#DC747D" }}
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
              <li ><Link to="/image2"  className="my-auto"><ProtectedImage
                src={potrait255}
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
            <div className="col-lg-6 col-md-6 col-sm-12 m-0 p-2 justify-content-center d-flex">
              <ProtectedImage
                src={potrait30}
                style={{ width: "100%", borderRadius: "20px", maxWidth: "500px" }}
                className={`loaddes m-0`}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 m-0 p-2 justify-content-center d-flex">
              <ProtectedImage
                src={potrait31}
                style={{ width: "100%", borderRadius: "20px", maxWidth: "500px" }}
                className={`loaddes m-0`}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 m-0 p-2 justify-content-center d-flex">
              <ProtectedImage
                src={potrait32}
                style={{ width: "100%", borderRadius: "20px", maxWidth: "500px" }}
                className={`loaddes m-0`}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 m-0 p-2 justify-content-center d-flex">
              <ProtectedImage
                src={potrait33}
                style={{ width: "100%", borderRadius: "20px", maxWidth: "500px" }}
                className={`loaddes m-0`}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 m-0 p-2 justify-content-center d-flex">
              <ProtectedImage
                src={potrait34}
                style={{ width: "100%", borderRadius: "20px", maxWidth: "500px" }}
                className={`loaddes m-0`}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 m-0 p-2 justify-content-center d-flex">
              <ProtectedImage
                src={potrait35}
                style={{ width: "100%", borderRadius: "20px", maxWidth: "500px" }}
                className={`loaddes m-0`}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 m-0 p-2 justify-content-center d-flex">
              <ProtectedImage
                src={potrait36}
                style={{ width: "100%", borderRadius: "20px", maxWidth: "500px" }}
                className={`loaddes m-0`}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 m-0 p-2 justify-content-center d-flex">
              <ProtectedImage
                src={potrait37}
                style={{ width: "100%", borderRadius: "20px", maxWidth: "500px" }}
                className={`loaddes m-0`}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <BackButton></BackButton>
        <br />
        <br />
        <div style={{ backgroundColor: " #919E89" }}>
          <Footer></Footer>
        </div>
      </>
    );
  };

export default ThreeImg