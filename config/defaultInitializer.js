var Context = require('../Context');
var enableLifecycle = require('./enableLifecycle');
var enableFacetSupport = require('./enableFacetSupport');
var enableProxySupport = require('./enableProxySupport');
var normalizeMetadata = require('./normalizeMetadata');
var enableAutostart = require('./enableAutostart');

var merge = require('./merge');

var baseConfig = merge([normalizeMetadata, enableLifecycle, enableProxySupport, enableFacetSupport, enableAutostart]);

module.exports = function(parent) {
	return new Context(parent).configure(baseConfig);
};