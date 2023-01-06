import React from "react";
import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<div className="mx-5">
				<Jumbotron/>
				<div className="container-fluid row g-4 my-2">
					<div className="col-3"><Card/></div>
					<div className="col-3"><Card/></div>
					<div className="col-3"><Card/></div>
					<div className="col-3"><Card/></div>
				</div>
			</div>
			<Footer/>
		</div>
	
	);
};

export default Home;
