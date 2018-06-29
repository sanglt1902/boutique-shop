import React, { Component } from 'react';
import TopMenu from './TopMenu';
import Logo from './Logo';
class Header extends Component {
  render() {
    return (
        <nav className="fh5co-nav" role="navigation">
			<div className="container-fluid">
				<div className="row">
					<TopMenu/>
				</div>
				<Logo/>
			</div>
		</nav>
    );
  }
}

export default Header;
