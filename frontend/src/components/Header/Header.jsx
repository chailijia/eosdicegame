import React, { Component } from 'react';
import logo from './images/logo.png'

class Header extends Component {
	render() {
		return (
			<div className="navbar">

				<div className="container">
					<div className="logo_div">
						<img src={logo} alt=" " className="logo"/>
					</div>
				</div>

				<div className="navbar_links">
					<ul className="menu">
						<li><a href="#">Referral</a></li>
						<li><a href="#">Rule</a></li>
						<li><a href="#">How To Play</a></li>
						<li><a href="#">Login</a></li>
					
					</ul>
				</div>

			</div>
		);



	}
}

export default Header;

