import React from "react";
import { Link } from "react-router-dom";

import potrait1 from "/illustration/stilllife.png";
import potrait255 from "/illustration/magnilemon.png";
import potrait27 from "/illustration/onlytulip.png";
import potrait30 from "/illustration/simleflorapattn.png";
import potrait40 from "/illustration/pattern1.png";
import potrait41 from "/illustration/pattern2.png";
import potrait42 from "/illustration/pattern3.png";
import potrait43 from "/illustration/pattern4.png";
import potrait44 from "/illustration/pattern5.png";
import potrait45 from "/illustration/pattern6.png";
import potrait46 from "/illustration/pattern7.png";
import potrait47 from "/illustration/pattern8.png";

import Footer from "./Footer";
import { BackButton } from "./Imageone";
import ProtectedImage from "./ProtectedImage";

const FourImg = () => {
    return (
      <>
        <div
          className={`navlogo px-4 py-5 text-center`}
          style={{ backgroundColor: "#FFDE59" }}
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
              /></Link></li><li ><Link to="/image3"  className="my-auto"><ProtectedImage
              src={potrait30}
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
                src={potrait40}
                style={{ width: "100%", borderRadius: "20px", maxWidth: "500px" }}
                className={`loaddes m-0`}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 m-0 p-2 justify-content-center d-flex">
              <ProtectedImage
                src={potrait41}
                style={{ width: "100%", borderRadius: "20px", maxWidth: "500px" }}
                className={`loaddes m-0`}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 m-0 p-2 justify-content-center d-flex">
              <ProtectedImage
                src={potrait42}
                style={{ width: "100%", borderRadius: "20px", maxWidth: "500px" }}
                className={`loaddes m-0`}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 m-0 p-2 justify-content-center d-flex">
              <ProtectedImage
                src={potrait43}
                style={{ width: "100%", borderRadius: "20px", maxWidth: "500px" }}
                className={`loaddes m-0`}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 m-0 p-2 justify-content-center d-flex">
              <ProtectedImage
                src={potrait44}
                style={{ width: "100%", borderRadius: "20px", maxWidth: "500px" }}
                className={`loaddes m-0`}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 m-0 p-2 justify-content-center d-flex">
              <ProtectedImage
                src={potrait45}
                style={{ width: "100%", borderRadius: "20px", maxWidth: "500px" }}
                className={`loaddes m-0`}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 m-0 p-2 justify-content-center d-flex">
              <ProtectedImage
                src={potrait46}
                style={{ width: "100%", borderRadius: "20px", maxWidth: "500px" }}
                className={`loaddes m-0`}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 m-0 p-2 justify-content-center d-flex">
              <ProtectedImage
                src={potrait47}
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
        <div style={{ backgroundColor: "#FFDE59" }}>
          <Footer></Footer>
        </div>
      </>
    );
  };

export default FourImg