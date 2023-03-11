const { failWithError } = require('./utils');

function resolvePreset(preset) {
    if (preset === 'node') {
        return {
            platform: 'node',
        };
    }
    failWithError(`Unknown preset: ${preset}`);
}

module.exports = {
    resolvePreset,
};