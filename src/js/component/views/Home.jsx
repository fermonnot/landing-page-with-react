import React from "react";

const Home = ()=>{
    return(
        <>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid d-flex">
					<a className="navbar-brand" href="#">Start Bootstrap</a>
					<button className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" aria-current="page" href="#">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Services</a>
							</li>
							<li className="nav-item">
								<a className="nav-link">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="container flex-row w-75 ">
				<div className="container-fluid py-5 justify-content-center mt-2" id="jumbotron">
					<h1 className="display-5 fw-bold">A WARM WELCOME!</h1>
					<p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi natus, obcaecati voluptatum quidem mollitia ullam. Commodi expedita, magnam dignissimos fugit amet facilis reprehenderit perferendis earum optio ipsa numquam omnis..</p>
					<button className="btn btn-primary btn-lg" type="button">Click to Fun</button>
				</div>
			</div>
			<div className="container-c d-flex justify-content-sm-around mt-4 ">
			<div className="card " >
				<img src="https://picsum.photos/200/200" className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
			<div className="card " >
				<img src="https://picsum.photos/200/200" className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
			
			<div className="card " >
				<img src="https://picsum.photos/200/200" className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
			<div className="card " >
				<img src="https://picsum.photos/200/200" className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>
		</>
    )

}
export default Home;