import React from 'react'

class Footer extends React.Component{
	render(){
		return(
			<footer className="admin-footer">
				<div className="container-fluid">
					<ul className="list-unstyled list-inline">
						<li>
							<span className="pmd-card-subtitle-text">Propeller &copy; 2016. All Rights Reserved.</span>
							<h3 className="pmd-card-subtitle-text">Licensed under <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license.</a></h3>
						</li>
						<li className="pull-right download-now">
							<a href="">
								<div>
									<svg x="0px" y="0px" width="38px" height="32px" viewBox="0 0 38 32" enableBackground="new 0 0 38 32" >
										<g>
											<path fill="#A5A4A4" d="M13.906,26.652l4.045,4.043c0.001,0,0.002,0.002,0.003,0.004l1.047,1.047l1.047-1.049
											c0.001,0,0.001,0,0.001,0l4.044-4.045c0.579-0.58,0.579-1.518,0-2.098c-0.579-0.578-1.519-0.578-2.096,0l-1.514,1.514V16.22
											c0-0.818-0.664-1.482-1.483-1.482c-0.818,0-1.482,0.664-1.482,1.482v9.85l-1.515-1.516c-0.29-0.289-0.669-0.434-1.048-0.434
											c-0.38,0-0.759,0.145-1.049,0.434C13.327,25.133,13.327,26.072,13.906,26.652z">
											</path>
											<g>
												<g>
													<path fill="#A5A4A4" d="M8.453,26.363c-0.032,0-0.065,0-0.099-0.002C3.67,26.053,0,22.137,0,17.443
													c0-4.434,3.242-8.124,7.48-8.825c0.3-4.663,4.188-8.364,8.926-8.364c2.249,0,4.393,0.844,6.032,2.346
													c4.602-1.86,9.527-0.766,12.266,2.831c1.808,2.375,2.399,5.513,1.671,8.719C37.416,15.412,38,17.008,38,18.65
													c0,3.902-3.176,7.076-7.077,7.076c-1.221,0-2.428-0.32-3.492-0.926c-0.712-0.404-0.961-1.311-0.556-2.021
													c0.404-0.713,1.312-0.963,2.021-0.557c0.619,0.352,1.319,0.539,2.027,0.539c2.267,0,4.111-1.844,4.111-4.111
													c0-1.146-0.467-2.212-1.312-3.001l-0.673-0.627l0.264-0.881c0.769-2.574,0.416-5.094-0.969-6.913
													c-2.061-2.706-5.997-3.332-9.577-1.522l-1.045,0.528L20.966,5.34c-1.139-1.347-2.802-2.12-4.56-2.12
													c-3.297,0-5.979,2.683-5.979,5.979c0,0.21,0.01,0.416,0.033,0.619l0.186,1.648l-1.784-0.004
													c-3.215,0.003-5.896,2.685-5.896,5.983c0,3.135,2.453,5.752,5.584,5.957c0.817,0.055,1.436,0.76,1.382,1.576
													C9.88,25.762,9.228,26.363,8.453,26.363z">
													</path>
												</g>
											</g>
										</g>
									</svg>
								</div>
								<div>
									<span className="pmd-card-subtitle-text">Version- 1.0.0</span>
									<h3 className="pmd-card-title-text">Download Now</h3>
								</div>
							</a>
						</li>
						<li className="pull-right for-support">
							<a href="mailto:support@propeller.in">
								<div>
									<svg x="0px" y="0px" width="38px" height="38px" viewBox="0 0 38 38" enableBackground="new 0 0 38 38">
										<g>
											<path fill="#A5A4A4" d="M25.621,21.085c-0.642-0.682-1.483-0.682-2.165,0c-0.521,0.521-1.003,1.002-1.524,1.523
											c-0.16,0.16-0.24,0.16-0.44,0.08c-0.321-0.2-0.683-0.32-1.003-0.521c-1.483-0.922-2.726-2.125-3.809-3.488
											c-0.521-0.681-1.002-1.402-1.363-2.205c-0.04-0.16-0.04-0.24,0.08-0.4c0.521-0.481,1.002-1.003,1.524-1.483
											c0.721-0.722,0.721-1.524,0-2.246c-0.441-0.44-0.842-0.842-1.203-1.202c-0.441-0.441-0.842-0.842-1.243-1.243
											c-0.642-0.642-1.483-0.642-2.165,0c-0.521,0.521-1.002,1.002-1.524,1.523c-0.481,0.481-0.722,1.043-0.802,1.685
											c-0.08,1.042,0.16,2.085,0.521,3.047c0.762,2.085,1.925,3.849,3.328,5.532c1.884,2.286,4.17,4.05,6.815,5.333
											c1.203,0.562,2.406,1.002,3.729,1.123c0.922,0.04,1.724-0.201,2.365-0.923c0.441-0.521,0.923-0.922,1.403-1.403
											c0.682-0.722,0.682-1.563,0-2.245C27.265,22.729,26.423,21.927,25.621,21.085z">
											</path>
											<path fill="#A5A4A4" d="M32.437,5.568C28.869,2,24.098-0.005,19.005-0.005S9.182,2,5.573,5.568C2.005,9.177,0,13.908,0,19
											s1.965,9.823,5.573,13.432c3.568,3.568,8.34,5.573,13.432,5.573s9.823-1.965,13.431-5.573
											C39.854,25.014,39.854,12.985,32.437,5.568z M30.299,30.294c-3.003,3.045-7.021,4.695-11.293,4.695
											c-4.272,0-8.291-1.65-11.294-4.695C4.666,27.29,3.016,23.271,3.016,19c0-4.272,1.649-8.291,4.695-11.294
											c3.003-3.003,7.022-4.695,11.294-4.695c4.272,0,8.291,1.649,11.293,4.695C36.56,13.924,36.56,24.075,30.299,30.294z">
											</path>
										</g>
									</svg>
								</div>
								<div>
									<span className="pmd-card-subtitle-text">For Support</span>
									<h3 className="pmd-card-title-text">support@propeller.in</h3>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</footer>

		)
	};
}

module.exports = Footer;