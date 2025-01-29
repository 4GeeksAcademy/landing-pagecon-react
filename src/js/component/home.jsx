
import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Footer from "./footer";
import Navbar from "./navbar";
import Card from "./card";
import Jumbotrom from "./jumbotrom";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotrom/>
			<div className="d-flex justify-content-center"> 
				<Card className="mx-5"/>
				<Card className="mx-5"/>
				<Card className="mx-5"/>
				<Card className="mx-5"/>
			</div>
		    <Footer/>
			<h1>
				
			</h1>
		</div>
	);
};

export default Home;
                      