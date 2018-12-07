import React, { Component } from 'react';
import { connect } from 'react-redux';

// Services and redux action
import { UserAction } from 'actions';
import { ApiService } from 'services';

import ScatterJS from 'scatterjs-core';

import logo from './images/logo.png'
import fb_icon from './images/FB.svg'
import mail_icon from './images/MAIL.svg'
import medium_icon from './images/MEDIUM.svg'
import twitter_icon from './images/TWITTER.svg'
import telegram_icon from './images/TELEGRAM.svg'

const { Blockchains } = ScatterJS

export const MAIN_NETWORK = {
	blockchain: Blockchains.EOS,
	protocol: 'https',
	host: 'nodes.get-scatter.com',
	port: 443,
	chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
}

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			LoginStatus: false,
		}
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleClick = this.handleClick.bind(this);
		console.log('tam_', ApiService.hasIdentity());

	}
	//before render
	componentWillMount() {
		ScatterJS.scatter.connect(ScatterJS.Blockchains.EOS).then(connected => {
			if (connected) {
				window.ScatterJS = null;
			}
			if (ScatterJS.scatter.identity) {
				this.setState({
					LoginStatus: true,
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
		if (this.state.LoginStatus) {
			// ApiService.LogOutScatter();
			// this.setState({
			// 	LoginStatus: false,
			// });
			ScatterJS.scatter.connect(ScatterJS.Blockchains.EOS).then(connected => {
				if (connected) {
					window.ScatterJS = null;
				}
				ScatterJS.scatter.forgetIdentity();
				this.setState({
					LoginStatus: false,
				});
			});

		} else {
			// ApiService.LoginScatter();
			// this.setState({
			// 	LoginStatus: true,
			// });
			const connected = ScatterJS.scatter.connect(ScatterJS.Blockchains.EOS)

			if (!connected) {
				console.log('tam_ SCATTER NOT Connect')
				alert("Scatter NOT find")
				return
			}
			const win = window
			win.ScatterJS = win.ScatterEOS = win.scatter = undefined

			//If it connected to scatter, forget its Identify
			// if(Scatter.scatter.identity){
			//     Scatter.scatter.forgetIdentity()
			// }

			//connect to scatter
			const res = ScatterJS.scatter.getIdentity({ accounts: [MAIN_NETWORK] }).then(res => {
				console.log('tam_ res', res)
				if(res){
					this.setState({
						LoginStatus: true,
					});

				}
			});
		}

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
						<li><button className="Login_button" onClick={this.handleLoginClick}>{this.state.LoginStatus ? 'LogOut' : 'LogIn'}</button></li>
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
