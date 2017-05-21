import React from 'react';
import Modal from 'react-modal';
const customStyles = {
	content: {
		left: '50%',
		top: '20%',
		right: 'auto',
		bottom: 'auto',
		width: '60%',
		minWidth: "320px",
		marginRight: '-50%',
		border: 'none',
		background: 'none',
		overflow: 'visible'
	},
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		zIndex: 1031,
		overflowY: 'auto'
	}
};

var ReactModal = React.createClass({
	afterOpenModal: function() {

	},
	closeModal: function() {
		this.props.closeHandler();
	},
	render: function() {
		var content = this.props.children
		return (
			<Modal
			isOpen={this.props.isOpen}
			onAfterOpen={this.afterOpenModal}
			onRequestClose={this.closeModal}
			shouldCloseOnOverlayClick
			style={customStyles}
			ariaHideApp={false}
			contentLabel="modal"
			>
          		{content}
			</Modal>
		);
	}
});

module.exports = ReactModal;