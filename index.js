#!/usr/bin/env node

var chalk			= require('chalk');
var clear			= require('clear');
var figlet			= require('figlet');

var git				= require("nodegit");
var Confirm			= require('prompt-confirm');

var del				= require('delete');

var lib_files		= require('./lib/files');
var lib_generate	= require('./lib/generate');

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
			lib_files.directoryExists('backoffice') ||
			lib_files.directoryExists('install') ||
			lib_files.directoryExists('languages') ||
			lib_files.directoryExists('pages') ||
			lib_files.directoryExists('pages-e') ||
			lib_files.directoryExists('share') ||
			lib_files.directoryExists('site-assets') ||
			lib_files.directoryExists('templates') ||
			lib_files.directoryExists('templates-e') ||
			lib_files.directoryExists('u-files')
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
	switch (args[0]) {
		case 'page':
			lib_generate.page([]);
			break;
		case 'page-e':
			lib_generate.page_e([]);
			break;
		case 'favicon':
			lib_generate.favicon();
			break;
		default:
		console.log('Oh! You don\'t how I work, right?');
	}
}

function start () {
	clear();
	console.log(chalk.green(figlet.textSync('BO3-CLI', { horizontalLayout: 'full' })));

	if (lib_files.directoryExists('.git')) {
		console.log(chalk.green('This folder uses git, nice!'));
	} else {
		console.log(chalk.red('Recomendation: Use git for your project!'));
	}

	console.log('Hi! I\'m BO3-CLI! How can I help?');
}
