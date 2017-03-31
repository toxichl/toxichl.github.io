import React from 'react';

class Header extends React.Component {

	render() {
		return (
			<header id="fh5co-header">

				<div className="container-fluid">

					<div className="row">
						<a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
						<ul className="fh5co-social">
							<li><a href="https://github.com/toxichl"><i className="icon-github"></i></a></li>
							<li><a href="http://weibo.com/1631967413/profile"><i className="icon-sina-weibo"></i></a></li>
							<li><a href="#"><i className="icon-twitter"></i></a></li>
						</ul>
						<div className="col-lg-12 col-md-12 text-center">
							<h1 id="fh5co-logo"><a href="index.html">Toxichl <sup>TM</sup></a></h1>
						</div>

					</div>

				</div>

			</header>
		);
	}

}

export {Header as default};