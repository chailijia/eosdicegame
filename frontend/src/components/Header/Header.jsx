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
					<a href="https://www.google.com/"><img src={logo} alt=" " className="logo" /></a>
				</div>

				<nav className="navbar_links">
					<ul className="menu">
						<a href="https://www.facebook.com/"><img src={fb_icon} alt=" " className="icon" /></a>
						<a href="https://mail.google.com/"><img src={mail_icon} alt=" " className="icon" /></a>
						<a href="https://medium.com/"><img src={medium_icon} alt=" " className="icon" /></a>
						<a href="https://twitter.com/?lang=en"><img src={twitter_icon} alt=" " className="icon" /></a>
						<a href="https://telegram.org/"><img src={telegram_icon} alt=" " className="icon" /></a>

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

