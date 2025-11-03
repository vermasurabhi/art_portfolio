import React from "react";
import {Link} from "react-router-dom";

import potrait2 from "/illustration/strawberrybuccket.png";
import potrait255 from "/illustration/magnilemon.png";
import potrait27 from "/illustration/onlytulip.png";
import potrait1 from "/illustration/stilllife.png";
import potrait30 from "/illustration/simleflorapattn.png";
import potrait43 from "/illustration/pattern4.png";


import Footer from "./Footer";
import { BackButton } from "./Imageone";
import ProtectedImage from "./ProtectedImage";
import styles from "./OneImg.module.css";

const OneImg = () => {
    return (
      <>
        <div
          className={`navlogo px-4 py-5 text-center`}
          style={{ backgroundColor: "#97A2AE" }}
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
        <li ><Link to="/image2"  className="my-auto">
          <ProtectedImage
                src={potrait255}
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
         <div className="row m-0 p-0" style={{ width: '100%', margin: '0', padding: '0' }}>
          {/* First image - Odd (1st) - Left aligned on desktop, centered on mobile */}
          <div className={`col-lg-12 col-md-12 col-sm-12 col-xs-12 m-0 p-0 ${styles.imageItemLeft}`}>
            <div className={styles.imageWrapper}>
              <ProtectedImage
                src={potrait1}
                style={{ width: "100%", borderRadius: "20px", maxHeight: "600px", display: "block"}}
                className={`loaddes m-0`}
              />
            </div>
          </div>
          {/* Second image - Even (2nd) - Right aligned on desktop, centered on mobile */}
          <div className={`col-lg-12 col-md-12 col-sm-12 col-xs-12 m-0 p-0 ${styles.imageItemRight}`} style={{ paddingRight: '0', marginRight: '0' }}>
            <div className={styles.imageWrapper} style={{ marginRight: '0', paddingRight: '0' }}>
              <ProtectedImage
                src={potrait2}
                style={{ width: "100%", borderRadius: "20px", maxHeight: "600px", display: "block", marginRight: '0', paddingRight: '0'}}
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
        <div style={{ backgroundColor: "#97A2AE" }}>
          <Footer></Footer>
        </div>
      </>
    );
  };

  export default OneImg