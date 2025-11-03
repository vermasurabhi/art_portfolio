// import React from 'react'
// import { Link } from 'react-router-dom';
// import potrait from "../illustration/face1.jpg";
// import potrait1 from "../illustration/pink_lady_earing.jpeg";
// import potrait2 from "../illustration/Flowerface.jpeg";
// import potrait3 from "../illustration/toughcactus.jpeg";
// import potrait4 from "../illustration/AttitudeStare.jpeg";
// import potrait5 from "../illustration/biblical.jpeg";
// import potrait6 from "../illustration/hungry.jpeg";
// import potrait7 from "../illustration/couplekissing.jpeg";
// import potrait8 from "../illustration/insectface.jpeg";
// import potrait9 from "../illustration/women.jpeg";



// import styles from './Gallery.module.css';
// import Footer from './Footer';
// import './Navigation.module.css';


// const Adobe = () => {
//     const collection=[potrait1,potrait2,potrait3,potrait4,potrait5,potrait6,potrait7,potrait8,potrait9]
//   return (
//     <div className="container-fluid">
//       {/* Home Button at Top Center */}
//       <div className="w-100 d-flex justify-content-center pt-3 pb-2">
//         <Link to="/" className="text-decoration-underline" style={{ background: 'none', border: 'none', color: '#343a40', fontWeight: 600, fontSize: '1.2rem', boxShadow: 'none', outline: 'none' }}>Home</Link>
//       </div>
//       <div className="container">
//         {/* Header Section with Profile */}
//         <div className="row mt-4">
//           <div className="col-md-5 col-lg-5 col-sm-5 col-xs-12 col-xl-5 p-0 m-0 mt-5 text-center">
//             <img 
//               src={potrait} 
//               className="img-fluid" 
//               alt="Profile" 
//               style={{ borderRadius: '50%', maxWidth: '18rem', width: '100%' }}
//             />
//           </div>
//           <div className="col-md-7 col-lg-7 col-sm-7 col-xs-12 col-xl-7 p-0 m-0 mt-5 d-flex justify-content-center align-items-center">
//             <div className="text-center">
//               <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center w-100">
//                 <span className="me-2" style={{ fontSize: '1rem', fontWeight: 400 }}>By</span>
//                 <span style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1 }}>Surabhi</span>
//               </div>
//               <p><i>I like beautiful things</i></p>
//             </div>
//           </div>
//         </div>
  
//         {/* Patterns Section Title */}
//         <div className="text-center">
//           <h1>Patterns</h1>
//         </div>

        

//         <div className="row mt-5">
//             {collection.map((item)=>(
//           <div className="col-xs-12 col-xl-3 col-md-3 col-lg-3 col-md-6 m-0 p-0 d-flex justify-content-center">
//             <div className={` mx-auto`}>
//               <img src={item} alt="Pattern 1" className={`${styles.image} my-auto`} />
//               <img src={item} alt="Pattern 1 Overlay" className={styles.overlayImage} />
//             </div>
//           </div>
//             ))}

//           </div>
        
//       </div>
//       <br/><br/>
//       <div style={{ backgroundColor:"",}} className={`foot`}><Footer></Footer></div>
//     </div>
//   )
// }

// export default Adobe


import React from 'react'
import { Link } from 'react-router-dom';
import potrait from "../illustration/face1.jpg";
import potrait1 from "../illustration/pink_lady_earing.jpeg";
import potrait2 from "../illustration/Flowerface.jpeg";
import potrait3 from "../illustration/toughcactus.jpeg";
import potrait4 from "../illustration/AttitudeStare.jpeg";
import potrait5 from "../illustration/biblical.jpeg";
import potrait6 from "../illustration/hungry.jpeg";
import potrait7 from "../illustration/couplekissing.jpeg";
import potrait8 from "../illustration/insectface.jpeg";
import potrait9 from "../illustration/women.jpeg";

import styles from './Adobe.module.css';
import Footer from './Footer';
import './Navigation.module.css';
import Navbar from './Navbar';

const Adobe = () => {
    const collection = [potrait1, potrait2, potrait3, potrait4, potrait5, potrait6, potrait7, potrait8, potrait9];
    
    return (
        <div className="container-fluid">
            <Navbar />
            
            <div className="container">
                {/* Header Section with Profile */}
                <div className="row mt-4">
                    <div className="col-md-5 col-lg-5 col-sm-5 col-xs-12 col-xl-5 p-0 m-0 mt-5 text-center">
                        <img 
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

                {/* Pinterest-style Masonry Gallery */}
                <div className={styles.pinterestGallery}>
                    {collection.map((item, index) => (
                        <div key={index} className={styles.pinterestItem}>
                            <div className={styles.imageContainer}>
                                <img 
                                    src={item} 
                                    alt={`Artwork ${index + 1}`} 
                                    className={styles.galleryImage}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <br/><br/>
            <div style={{ backgroundColor: "" }} className="foot">
                <Footer />
            </div>
        </div>
    )
}

export default Adobe