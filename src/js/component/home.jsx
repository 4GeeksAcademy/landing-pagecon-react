import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Footer from "./footer";
import Navbar from "./navbar";
import Card from "./card";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<h1 className="text-center mt-5">This is my Landing page</h1>
			<div className="carta">
			<Card/>
			<Card/><Card/><Card/>
			</div>
			
			    
				<Footer/>
				
		</div>
	);
};

export default Home;
                                