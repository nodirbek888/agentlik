// import React from "react";
// import BizHaqimizdaPage from "../pages/BizhaqimizdaPage";
// import JamomizPage from "../pages/JamomizPage";
// import MijozlarPage from "../pages/MijozlarPage";
// import NarxlarPage from "../pages/NarxlarPage";
// import XizmatlarPage from "../pages/XizmatlarPage";
// import Footer from '../components/Footer/index'
// const Root = () => {
// 	return (
// 		<div>
//             <BizHaqimizdaPage/>
//             <NarxlarPage/>  
//             <XizmatlarPage/>
//             <JamomizPage/>
//             <MijozlarPage/>  
//             <Footer/>
// 		</div>
// 	);
// };
// export default Root;








import React from "react";
import Navbar from '../components/Navbar/index'
import BizHaqimizdaPage from "../pages/BizhaqimizdaPage";
import JamomizPage from "../pages/JamomizPage";
import MijozlarPage from "../pages/MijozlarPage";
import NarxlarPage from "../pages/NarxlarPage";
import XizmatlarPage from "../pages/XizmatlarPage";
import Footer from '../components/Footer/index'
const Root = () => {
	return (
		<div style={{ marginTop: 100 }}>
		<Navbar/>
            <BizHaqimizdaPage/>
            <NarxlarPage/>  
            <XizmatlarPage/>
            <JamomizPage/>
            <MijozlarPage/>  
            <Footer/>
		</div>
	);
};
export default Root;