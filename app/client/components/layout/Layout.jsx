import React from 'react'
import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon';
import Navbar from "./partials/Navbar.jsx"
import Sidebar from "./partials/Sidebar.jsx"
import Footer from "./partials/Footer.jsx"

class Layout extends React.Component{
	render(){
		return(
			<div>
				<Navbar/>
				<div className="pmd-sidebar-overlay"></div>

				<Sidebar/>
				<div className="pmd-content content-area dashboard">
					<div className="container-fluid">
						<div className="row component-section">
								{this.props.children}
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		)
	};
}

module.exports = Layout;