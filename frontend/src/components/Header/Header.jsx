import React, { Component } from 'react';
import { connect } from 'react-redux';

// Services and redux action
import { UserAction } from 'actions';

import { ApiService } from 'services';

import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';

import logo from './images/logo.png'
import fb_icon from './images/FB.svg'
import mail_icon from './images/MAIL.svg'
import medium_icon from './images/MEDIUM.svg'
import twitter_icon from './images/TWITTER.svg'
import telegram_icon from './images/TELEGRAM.svg'

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			LoginStatus: 'LogIn',
		}
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleClick = this.handleClick.bind(this);
		console.log('tam_', ApiService.hasIdentity());

	}
	//before render
	componentWillMount() {
		ScatterJS.plugins( new ScatterEOS() );
		ScatterJS.scatter.connect(ScatterJS.Blockchains.EOS).then(connected => {
		  if(connected){
			  window.ScatterJS = null;
		  }
		  if(ScatterJS.scatter.identity){
			  this.setState({
				LoginStatus: 'LogOut',
			});
		  }
		});

	}
	//after render
	componentDidMount() {
	}

	handleLoginClick(e) {
		console.log("tam_");
		const { Login } = this.props;
		Login();

		ApiService.LoginScatter();

	}

	handleClick(e) {
		console.log("tam_ result click");
		const { user: { win_count, name } } = this.props;
		console.log('tam_ 22', win_count, name);
		console.log('tam_ 22', ApiService.hasIdentity());
	}

	render() {

		return (
			<div className="navbar">

				<div className="logo_div">
					<a href="https://www.google.com/"><img src={logo} alt=" " className="logo" /></a>
				</div>

				<nav className="navbar_links">
					<ul className="menu">
						<a href="https://mail.google.com/"><img src={mail_icon} alt=" " className="icon" /></a>
						<a href="https://medium.com/"><img src={medium_icon} alt=" " className="icon" /></a>
						<a href="https://telegram.org/"><img src={telegram_icon} alt=" " className="icon" /></a>

						<li className="menu_link"><a href="#" >Referral</a></li>
						<li className="menu_link"><a href="#" >Rule</a></li>
						<li className="menu_link"><a href="#" onClick={this.handleClick}>How To Play</a></li>
						<li><button className="Login_button" onClick={this.handleLoginClick}>{this.state.LoginStatus}</button></li>
					</ul>
				</nav>

			</div>
		);



	}
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Map the following action to props
const mapDispatchToProps = {
	Login: UserAction.Login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
