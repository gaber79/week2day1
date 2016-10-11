var args = process.argv.slice(2);

var request = require("request");

var options = {
	host: "api.github.com"
	path: "/users"
};