'use strict';

import axios from "axios";
import moment from "moment";
let apiPrefix = '/api/';
var Api = {
	getUserList: function(){
		return axios({
				method: 'get',
				url: '/api/users'
			});
	},
	getCurrentUser: function(){
		return axios({
				method: 'get',
				url: '/api/users/current'
			});
	},
	getComicList: function(page, limit){
		return axios({
				method: 'get',
				url: apiPrefix+'comics?page='+page+"&limit="+limit
			});
	},
	getComicInfo: (comicId)=>{
		return axios.get(apiPrefix+'comics/'+comicId);
	},
	getComicUnschedule: (comicId, options={})=>{
		let params = [],
			urlSuffix="";
		for (let key in options){
			params.push(key+"="+options[key]);
		};
		if (params.length) urlSuffix = "?"+params.join("&");
		return axios.get(apiPrefix+'comics/'+comicId+"/unscheduled"+urlSuffix);
	},
	getComicSchedule: (comicId, options={})=>{
		let params = [],
			urlSuffix="";
		for (let key in options){
			params.push(key+"="+options[key]);
		};
		if (params.length) urlSuffix = "?"+params.join("&");
		return axios.get(apiPrefix+'comics/'+comicId+"/scheduled"+urlSuffix);
	},
	createComic: function(data){
		return axios({
				method: 'post',
				url: apiPrefix+'comics',
				data: data
			});
	},
	createStrip: (comicId) => {
		return axios({
			method: 'post',
			url: apiPrefix+'strips',
			data: {
				comicID: comicId
			}
		});
	},
	createUser: function(data){
		return axios({
			method: 'post',
			url: apiPrefix+'users',
			data: data
		});
	},
	updateUser: function(data){
		return axios({
			method: 'put',
			url: apiPrefix+'users/'+data.userId,
			data: data
		});
	},
	updateComic: function(data){
		return axios({
				method: 'put',
				url: apiPrefix+'comics/' + data.id,
				data: data
			});
	},
	updateStrip: (data) => {
		return axios({
			method: 'put',
			url: apiPrefix+'strips/' + data.id,
			data: data
		});
	},
	deleteComicStrip: (stripId)=>{
		return axios({
				method: 'delete',
				url: apiPrefix+"strips/"+stripId
			});
	},

	/**
	 * Sets the strip schedule date.
	 *
	 * @param      {Object}  options  The options. example {comicId: 233, stripId: 22, date: 20016-11-23}
	 * @return     {Object}  { XMLHttpRequest Object }
	 */
	setStripScheduleDate: (options) => {
		return axios({
			method: 'post',
			url: apiPrefix+'comics/'+options.comicId+'/schedule/'+options.stripId+'/'+options.date+'?force=true'
		});
	},
	moveStripToUnschedule: (options) => {
		return axios({
			method: 'post',
			url: apiPrefix+'comics/'+options.comicId+'/unschedule/'+options.stripId
		});
	},
	moveStripImage: (fromStripId, toStripId, imageType)=>{
		return axios({
			method: 'post',
			data: {
				"strip1": fromStripId,
				"strip2": toStripId,
				"imageType": imageType
			},
			url: apiPrefix+'images/swap'
		});
	},
	bulkStripsUploading: function(files, options){
		try {
			let formData = new FormData();
			files.imagesWeb.map((file)=>{
				formData.append('imagesWeb[]', file, file.name);
			});
			files.imagesPrint.map((file)=>{
				formData.append('imagesPrint[]', file, file.name);
			});


			return axios({
				method: 'post',
				url: apiPrefix+'comics/'+options.comicId+'/upload',
				data: formData
			});
		} catch(err) {
			throw("Your browser doesn't support window.FormData");
		}
	},
	stripSyncFtp: function(id){
		return axios({
			method: 'put',
			url: apiPrefix+'strips/sync/' + id
		});
	}
};

module.exports = Api;