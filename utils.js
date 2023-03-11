const { error } = require('./logger');

function failWithError(message, err) {
    error(err, message);
    process.exit(1);
}

module.exports = {
    failWithError,
};