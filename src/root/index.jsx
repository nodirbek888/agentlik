import React from "react";
import BizHaqimizdaPage from "../pages/BizhaqimizdaPage";
import JamomizPage from "../pages/JamomizPage";
import MijozlarPage from "../pages/MijozlarPage";
import NarxlarPage from "../pages/NarxlarPage";
import XizmatlarPage from "../pages/XizmatlarPage";
const Root = () => {
	return (
		<div>
            <BizHaqimizdaPage/>
            <NarxlarPage/>  
            <XizmatlarPage/>
            <JamomizPage/>
            <MijozlarPage/>  
		</div>
	);
};
export default Root;