import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="Header">
			<header id="header">
                
					<div id="logo">
						<h1><a href="#">Cool<span>Logo</span></a></h1>
					</div>

					<div>
						<ul>
						<li><a href="#">About</a></li>
						<li><a href="#">Contact</a></li>
						<li><a href="#">FAQ</a></li>
						<li><a href="#">Help</a></li>
						</ul>
					</div>

			</header>

            </div>
        );



    }
}

export default Header;

