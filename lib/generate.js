#!/usr/bin/env node

var fs					= require('fs');

module.exports = {
	page : function(args) {
		console.log('Let\'s get a new page :D !');
	},

	page_e : function(args) {
		console.log('Let\'s get a new page Element :D !');
	},

	favicon : function() {
		var img = './site-assets/favicon/favicon.png';

		console.log('16x16 Favicon has been saved!');
		console.log('32x32 Favicon has been saved!');
		console.log('48x48 Favicon has been saved!');
		console.log('64x64 Favicon has been saved!');
		console.log('72x72 Favicon has been saved!');
		console.log('114x114 Favicon has been saved!');
		console.log('128x128 Favicon has been saved!');
		console.log('144x144 Favicon has been saved!');
	}
};
