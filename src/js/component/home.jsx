
import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Footer from "./footer";
import Navbar from "./navbar";
import Card from "./card";
import Jumbotrom from "./jumbotrom";
import Test from "./test";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Test/>
			<Jumbotrom/>
			<div className="d-flex">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
		    <Footer/>
			<h1>
				
			</h1>
		</div>
	);
};

export default Home;
                      