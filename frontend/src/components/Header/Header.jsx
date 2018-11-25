import React, { Component } from 'react';

import logo from './images/logo.png'
import fb_icon from './images/FB.svg'
import mail_icon from './images/MAIL.svg'
import medium_icon from './images/MEDIUM.svg'
import twitter_icon from './images/TWITTER.svg'
import telegram_icon from './images/TELEGRAM.svg'

class Header extends Component {
	render() {
		return (
			<div className="navbar">

				<div className="logo_div">
					<img src={logo} alt=" " href="#" className="logo" />
				</div>

				<nav className="navbar_links">
					<ul className="menu">
						<img src={fb_icon} alt=" " href="#" className="icon" />
						<img src={mail_icon} alt=" " href="#" className="icon" />
						<img src={medium_icon} alt=" " href="#" className="icon" />
						<img src={twitter_icon} alt=" " href="#" className="icon" />
						<img src={telegram_icon} alt=" " href="#" className="icon" />

						<li><a href="#">Referral</a></li>
						<li><a href="#">Rule</a></li>
						<li><a href="#">How To Play</a></li>
						<li><a href="#">Login</a></li>
					</ul>
				</nav>

			</div>
		);



	}
}

export default Header;

