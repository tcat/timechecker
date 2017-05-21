'use strict';

import Joi from 'joi-browser';

var Validation = {
	validate: function(validationItem, data){
		let self = this,
			schema,
			errorText = "Validation error";
		if (typeof validationItem == "string") {
			schema = self[validationItem].schema;
			errorText = self[validationItem].message;
		} else if (typeof validationItem == "object" && validationItem.schema && validationItem.schema.isJoi){
			schema = validationItem.schema;
			errorText = validationItem.message;
		}
		if (!schema) throw "Validation schema is not valid";
		return Joi.validate(data, schema, function(error, value){
			let response = {
				isError: false,
				message: errorText
			};
			if (error === null){
				return response;
			}
			response.isError = true;
			return response;
		});
	},
	comicName: {
		schema: Joi.string().regex(/^[a-zA-Z0-9-_\s\u00C6\u00D8\u00C5\u00E6\u00F8\u00E5]{1,50}$/),
		message: 'Comic name should contain only alphanumeric characters, dash, underscore!'
	},
	timeToLive: {
		schema: Joi.number().integer().min(0),
		message: 'Days to live should be a number!'
	},
	//Users
	userName: {
		schema: Joi.string().regex(/^[a-zA-Z0-9-_\s\u00C6\u00D8\u00C5\u00E6\u00F8\u00E5]{1,50}$/),
		message: 'User name should contain only alphanumeric characters, dash, underscore!'
	},
	userType: {
		schema: Joi.number().integer().min(1).max(3),
		message: 'Choose proper user role!'
	},
	userMail: {
		schema: Joi.string().email(),
		message: 'User mail should be valid email address!'
	},
	userPhone: {
		schema: Joi.string().regex(/^\+?[\d\s]{1,20}$/),
		message: 'Enter valid telephone number!'
	},
	userAgency: {
		schema: Joi.any(),
		message: 'Wrong agency'
	},
	comicOwner: {
		schema: Joi.array().min(1),
		message: 'Choose comic owner!'
	},
	publishDate: {
		schema: Joi.date(),
		message: 'Choose start date!'
	},
	relatedURL: {
		schema: Joi.string().allow(''),
		message: 'Related URL should contain only alphanumeric characters, dash, underscore!',
		required: false
	},
	relatedTitle: {
		schema: Joi.string().regex(/^[a-zA-Z0-9-_\s\u00C6\u00D8\u00C5\u00E6\u00F8\u00E5]{1,50}$/),
		message: 'Related title should contain only alphanumeric characters, dash, underscore!',
		required: false
	},
	contactDetails: {
		schema: Joi.string().allow(''),
		message: 'Add contact details!'
	},
	author: {
		schema: Joi.string().regex(/^[a-zA-Z0-9-_\s\u00C6\u00D8\u00C5\u00E6\u00F8\u00E5]{1,50}$/).allow(''),
		message: 'Not valid author!'
	},
	permalink: {
		schema: Joi.string().allow(''),
		message: 'Not valid permalink!'
	},
	ftpSuffix: {
		schema: Joi.string().regex(/^[a-zA-Z0-9-_]{1,50}$/),
		message: 'FTP suffix should contain only alphanumeric characters, dash, underscore!'
	}
};

module.exports = Validation;