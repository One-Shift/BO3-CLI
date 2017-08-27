#!/usr/bin/env node

var chalk       = require('chalk');
var clear       = require('clear');
var figlet      = require('figlet');

var git         = require("nodegit");
var Confirm     = require('prompt-confirm');

var del         = require('delete');

var files       = require('./lib/files');

switch(process.argv[2]) {
	case 'init':
		init();
		break;
	case 'g':
		var args = [];

		process.argv.forEach(function(e, i) {
			if (i > 2) {
				args.push(e);
			}
		});

		generate(args);
		break;
	default:
		start();
}

function init () {
	if (
		!(
			files.directoryExists('backoffice') ||
			files.directoryExists('install') ||
			files.directoryExists('languages') ||
			files.directoryExists('pages') ||
			files.directoryExists('pages-e') ||
			files.directoryExists('share') ||
			files.directoryExists('site-assets') ||
			files.directoryExists('templates') ||
			files.directoryExists('templates-e') ||
			files.directoryExists('u-files')
		)
	) {
		var confirm = new Confirm('Let\'s start a blizzard?').ask(function(answer) {
			if (answer) {
				git.Clone("https://github.com/One-Shift/BO3-BOzon", ".", {}).then(function(repository) {
					del.promise('./.git/', {force: true}).then(function(files) {
						console.log('BO3 Project initialized with success!');
					})
				});
			} else {
				console.log('Ok, I just stop.');
			}
		});
	} else {
		console.log('Is not possible initialize a BO3 Project here!');
	}
}

function generate (args) {
	console.log(args);
}

function start () {
	clear();
	console.log(chalk.green(figlet.textSync('BO3-CLI', { horizontalLayout: 'full' })));

	if (files.directoryExists('.git')) {
		console.log(chalk.green('This folder uses git, nice!'));
	} else {
		console.log(chalk.red('Recomendation: Use git for your project!'));
	}

	console.log('Hi! I\'m BO3-CLI! How can I help?');
}
