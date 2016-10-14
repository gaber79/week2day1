const args = process.argv.slice(2);

const request = require("request");
const fs = require("fs");

function getRepoContributorsImages(repoOwner, repoName, cb) {

	var options = {
		url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
		headers: {
			"User-Agent": "request",
			"Authorization": "token 752bae939266535ac520f00ccd2724988ed8ebc2"
		}
	}

	request(options, function(err, response, userData) {
		if (err) {
			console.log("It's BROKEN!!! : ", err);
			return false;
		}

		var object = JSON.parse(userData);

		object.forEach(function(avatar) {
			var avatarPath = avatar["avatar_url"];
			var user = avatar["login"];
			request(avatarPath).pipe(fs.createWriteStream("avatars/" + user + ".png"));
		})

		console.log("The pictures were stored in avatarImages folder.")
	})
}

getRepoContributorsImages(args[0], args[1]);
