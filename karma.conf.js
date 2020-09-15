module.exports = function(config) {
	"use strict";

	config.set({

		frameworks: ["ui5"],
		singleRun: true,
		browsers: ["ChromeHeadless"],

		browserConsoleLogOptions: {
			level: "error"
		}

	});
};
