'use strict';

const chalk = require('chalk');

function error(err, message) {
    if (err !== undefined) {
        console.error(err, chalk.red(message));
    } else {
        console.error(chalk.red(message));
    }
}

function info(message) {
    console.info(chalk.cyan(message));
}

function success(message) {
    console.info(chalk.green(message));
}

module.exports = {
    error,
    info,
    success,
}