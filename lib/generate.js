#!/usr/bin/env node

var fs					= require('fs');
var mkdirp				= require('mkdirp');
var getInstalledPath	= require('get-installed-path');

String.prototype.replaceAll = function(search, replacement) {
	var target = this;
	return target.split(search).join(replacement);
};

function readFile (target) {
	return fs.readFileSync(target ,'utf8');
}

function cp (readFrom, saveTo, searchTXT = false, replaceTXT = false) {
	getInstalledPath('bo3-cli').then((path) => {
		path += '/templates/' + readFrom;

		if (searchTXT !== false && replaceTXT !== false) {
			fs.writeFile(saveTo, readFile(path).replaceAll(searchTXT, replaceTXT), function (err,data) { if (err) {return console.log(err);} });
		} else {
			fs.writeFile(saveTo, readFile(path), function (err,data) { if (err) {return console.log(err);} });
		}
	});
}

module.exports = {
	page : function(args) {
		cp('page.php', './pages/' + args[1] + '.php', '{c2r-page-name}', args[1]);
		cp('page.tpl', './templates/' + args[1] + '.tpl', '{c2r-page-name}', args[1]);
		cp('page.css', './site-assets/css/' + args[1] + '.css', '{c2r-page-name}', args[1]);
		cp('page.js', './site-assets/js/' + args[1] + '.js', '{c2r-page-name}', args[1]);

		mkdirp('./templates-e/' + args[1], function (err) { // CREATE PAGE-E FOLDER
			if (err) {
				console.error(err)
			} else {
				cp('index.html', './templates-e/' + args[1] + '/index.html');
			}
		});
	},

	page_e : function(args) {
		cp('page-e.php', './pages-e/' + args[1] + '.php', '{c2r-module-name}', args[1] + '/' + args[1]);

		mkdirp('./templates-e/' + args[1], function (err) { // CREATE PAGE-E FOLDER
			if (err) {
				console.error(err)
			} else {
				cp('index.html', './templates-e/' + args[1] + '/index.html');
				cp('page-e.tpl', './templates-e/' + args[1] + '/' + args[1] + '.tpl', '{c2r-module-name}', args[1]);
				cp('page-e.css', './site-assets/css/mod-' + args[1] + '.css', '{c2r-module-name}', args[1]);
			}
		});

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
