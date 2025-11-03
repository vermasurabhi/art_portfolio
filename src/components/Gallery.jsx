import React from 'react'
import { Link } from 'react-router-dom';
import potrait from "../illustration/face1.jpg";
import potrait2 from "../illustration/pat1.png";
import potrait22 from "../illustration/pat2.png";
import potrait3 from "../illustration/pat11.png";
import potrait33 from "../illustration/pat22.png";
import potrait4 from "../illustration/pat111.png";
import potrait44 from "../illustration/pat222.png";
import potrait55 from "../illustration/tulip6.png";
import potrait5 from "../illustration/tulip7.png";
import potrait66 from "../illustration/tulipcover2.png";
import potrait6 from "../illustration/tulipcover3.png";
import potrait7 from "../illustration/tulip4.png";
import potrait77 from "../illustration/tulipbucket.png";
import potrait8 from "../illustration/tulip10.png";
import potrait88 from "../illustration/tulip9.png";
import potrait9 from "../illustration/strawberrybuccket.png";
import potrait99 from "../illustration/tablelife2.png";
import potrait10 from "../illustration/stilllife.png";
import potrait100 from "../illustration/stilllife2.png";
import potraiteleven from "../illustration/pecock1.png";
import potraiteleveneleven from "../illustration/pecock2.png";
import potrait1 from "../illustration/simleflorapattn.png";
import potrait11 from "../illustration/patt.png";

import styles from './Gallery.module.css';
import Footer from './Footer';
import './Navigation.module.css';
import ProtectedImage from './ProtectedImage';
import Navbar from './Navbar';


const Gallery = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container">
        {/* Header Section with Profile */}
        <div className="row mt-4">
          <div className="col-md-5 col-lg-5 col-sm-5 col-xs-12 col-xl-5 p-0 m-0 mt-5 text-center">
            <ProtectedImage 
              src={potrait} 
              className="img-fluid" 
              alt="Profile" 
              style={{ borderRadius: '50%', maxWidth: '18rem', width: '100%' }}
            />
          </div>
          <div className="col-md-7 col-lg-7 col-sm-7 col-xs-12 col-xl-7 p-0 m-0 mt-5 d-flex justify-content-center align-items-center">
            <div className="text-center">
              <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center w-100">
                <span className="me-2" style={{ fontSize: '1rem', fontWeight: 400 }}>By</span>
                <span style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1 }}>Surabhi</span>
              </div>
              <p><i>I like beautiful things</i></p>
            </div>
          </div>
        </div>
  
        {/* Patterns Section Title */}
        <div className="text-center">
          <h1>Patterns</h1>
        </div>
  
        {/* First Row of Patterns */}
        <div className="row mt-5">
          <div className="col-xs-12 col-xl-3 col-md-3 col-lg-3 col-md-6 m-0 p-0 d-flex justify-content-center">
            <div className={`${styles.cont} mx-auto`}>
              <ProtectedImage src={potrait1} alt="Pattern 1" className={styles.image} wrapper={false} />
              <ProtectedImage src={potrait11} alt="Pattern 1 Overlay" className={styles.overlayImage} wrapper={false} />
            </div>
          </div>
          <div className="col-xs-12 col-xl-3 col-md-3 col-lg-3 col-md-6 m-0 p-0 d-flex justify-content-center">
            <div className={`${styles.cont} mx-auto`}>
              <ProtectedImage src={potrait2} alt="Pattern 2" className={styles.image} wrapper={false} />
              <ProtectedImage src={potrait22} alt="Pattern 2 Overlay" className={styles.overlayImage} wrapper={false} />
            </div>
          </div>
          <div className="col-xs-12 col-xl-3 col-md-3 col-lg-3 col-md-6 m-0 p-0 d-flex justify-content-center">
            <div className={`${styles.cont} mx-auto`}>
              <ProtectedImage src={potrait3} alt="Pattern 3" className={styles.image} wrapper={false} />
              <ProtectedImage src={potrait33} alt="Pattern 3 Overlay" className={styles.overlayImage} wrapper={false} />
            </div>
          </div>
          <div className="col-xs-12 col-xl-3 col-md-3 col-lg-3 col-md-6 m-0 p-0 d-flex justify-content-center">
            <div className={`${styles.cont} mx-auto`}>
              <ProtectedImage src={potrait4} alt="Pattern 4" className={styles.image} wrapper={false} />
              <ProtectedImage src={potrait44} alt="Pattern 4 Overlay" className={styles.overlayImage} wrapper={false} />
            </div>
          </div>
        </div>
  
        {/* Second Row of Patterns (Tulips) */}
        <div className="row justify-content-center mt-5">
          <div className="col-xs-12 col-xl-3 col-md-3 col-lg-3 col-md-6 m-0 p-0 d-flex justify-content-center">
            <div className={styles.cont}>
              <ProtectedImage src={potrait5} alt="Tulip 1" className={styles.image} wrapper={false} />
              <ProtectedImage src={potrait55} alt="Tulip 1 Overlay" className={styles.overlayImage} wrapper={false} />
            </div>
          </div>
          <div className="col-xs-12 col-xl-3 col-md-3 col-lg-3 col-md-6 m-0 p-0 d-flex justify-content-center">
            <div className={`${styles.cont} mx-auto`}>
              <ProtectedImage src={potrait6} alt="Tulip 2" className={styles.image} wrapper={false} />
              <ProtectedImage src={potrait66} alt="Tulip 2 Overlay" className={styles.overlayImage} wrapper={false} />
            </div>
          </div>
          <div className="col-xs-12 col-xl-3 col-md-3 col-lg-3 col-md-6 m-0 p-0 d-flex justify-content-center">
            <div className={`${styles.cont} mx-auto`}>
              <ProtectedImage src={potrait7} alt="Tulip 3" className={styles.image} wrapper={false} />
              <ProtectedImage src={potrait77} alt="Tulip 3 Overlay" className={styles.overlayImage} wrapper={false} />
            </div>
          </div>
          <div className="col-xs-12 col-xl-3 col-md-3 col-lg-3 col-md-6 m-0 p-0 d-flex justify-content-center">
            <div className={`${styles.cont} mx-auto`}>
              <ProtectedImage src={potrait8} alt="Tulip 4" className={styles.image} wrapper={false} />
              <ProtectedImage src={potrait88} alt="Tulip 4 Overlay" className={styles.overlayImage} wrapper={false} />
            </div>
          </div>
        </div>
  
        {/* Still Life Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 m-0 p-0 d-flex justify-content-center align-items-center">
            <div className={`${styles.cont} mx-auto`} style={{ maxWidth: '30rem', width: '100%' }}>
              <ProtectedImage 
                src={potrait9} 
                className={`img-fluid m-3 ${styles.image}`} 
                alt="Table Life" 
                style={{ borderRadius: '50%', maxWidth: '30rem', width: '100%' }}
                wrapper={false}
              />
              <ProtectedImage 
                src={potrait99} 
                className={`img-fluid m-3 ${styles.overlayImage}`} 
                alt="Table Life Overlay" 
                style={{ maxWidth: '30rem', width: '100%' }}
                wrapper={false}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 m-0 p-0 d-flex justify-content-center align-items-center">
            <div className={`${styles.cont} mx-auto`} style={{ maxWidth: '30rem', width: '100%' }}>
              <ProtectedImage 
                src={potrait10} 
                className={`img-fluid m-3 ${styles.image}`} 
                alt="Still Life" 
                style={{ borderRadius: '50%', maxWidth: '30rem', width: '100%' }}
                wrapper={false}
              />
              <ProtectedImage 
                src={potrait100} 
                className={`img-fluid m-3 ${styles.overlayImage}`} 
                alt="Still Life Overlay" 
                style={{ maxWidth: '30rem', width: '100%' }}
                wrapper={false}
              />
            </div>
          </div>
        </div>
      </div>
      <br/><br/>
      <div style={{ backgroundColor:"",}} className={`foot`}><Footer></Footer></div>
    </div>
  )
}

export default Gallery