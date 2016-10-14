var http = require("http");
function readHTML(urlcode, callback) {

	// var requestOptions = {
	// 	host: urlcode,
	// 	path: "/"
	// };
	http.get(urlcode, (response) => {
		// if (err) {
		// 	console.log("Something is broke: ", err);
		// 	return false;
		// }
		var fullData = '';

		response.setEncoding("utf8");

		console.log("Status: " + response.statusCode);

		response.on("data", function(data) {
			//console.log("Chunk Received. Length: ", data.length);
			fullData = fullData.concat(data);
		})

		response.on("end", function() {
			console.log("Response stream complete.")
			callback(fullData);
		})

	});

}

var handleHTML = function(data) {
	console.log(data);
}

readHTML("http://example.com", handleHTML);

function printHTML (HTMLdata) {
	
}


// var request = require('request');

// function readHTML(urlcode, callback) {
// 	request({
// 		url: urlcode,
// 		method: 'get'
// 	}, 
// 	function(err, response, data) {
// 		if (err) {
// 			console.log("You broke it: ", err);
// 			return false;
// 		} 
// 		// response.on("data", function(data) {
// 		// 	console.log("Chunk receieved. Length: ", data.length);
// 		// 	callback(data);
// 		// });

// 		// response.on("end", function() {
// 		// 	console.log("Response stream complete.");
// 		// });
// 		// console.log("server sent data: " + data);
// 		callback(data);
// 	});
// 	// return ;
// }

readHTML("http://example.com", function(data){
	console.log("I'm the callback!" + data);
});

