const request = require("request");
const fs = require("fs")

function getRepoContributorsImages(repoOwner, repoName, cb) {

	var options = {
		url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
		headers: {
			"User-Agent": "request",
			"Authorization": "token 752bae939266535ac520f00ccd2724988ed8ebc2"

		}
	}

  // Check if folder exists
  console.log("Checking if folder exists.");
  fs.readdir("avatars", (err, files) => {
    if (err) {
      console.log("Avatars folder does not exist! Creating folder to put files in. \n", err)
      fs.mkdir("avatars", (err) => {
        if (err) {
          console.log(err)
        }
        console.log("Folder created for avatars. ")
      })
    } else {
      console.log("Folder exists!")
    }
  });

	request(options, function(err, response, data) {
		if (err) {
			console.log("It's BROKEN!!! : ", err);
			return false;
		}

    // console.log(data);
    var getAvatar = JSON.parse(data)
    getAvatar.forEach(function(avatar) {
      avatarPath = avatar["avatar_url"]
      console.log(avatarPath);
    })

		// var object = JSON.parse(data);

    // object.forEach(function(data) {

    // })

    // object.forEach(function(avatar) {
    //   var avatarPath = avatar["avatar_url"];
    //   var user = avatar["login"];
    //   request(avatarPath).pipe(fs.createWriteStream("avatarImages/" + user + ".png"));
    //   console.log("The pictures were stored in avatarImages folder.")
    // })


	// return data;
  cb(getAvatar);
  })
}

<<<<<<< HEAD
function downloadImageByURL(repoOwner, repoName) {
//     var options = {
//     url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
//     headers: {
//       "User-Agent": "request",
//       "Authorization": "token 752bae939266535ac520f00ccd2724988ed8ebc2"

//     }
//   }

//   request(options, function(err, response, data) {
//     if (err) {
//       console.log("It's BROKEN!!! : ", err);
//       return false;
//     }
//   }

//   var getAvatar = JSON.parse(data)
//   getAvatar.forEach(function(avatar) {
//       var avatarPath = avatar["avatar_url"];
//       var user = avatar["login"];
//       request(avatarPath).pipe(fs.createWriteStream("avatars/" + user + ".png"));
//       console.log("The pictures were stored in avatars folder.")
//     });
// });
}


getRepoContributors("lighthouse-labs", "laser_shark", (err, result) => {
  console.log("Errors:");
  console.log("Result:", result);
});

// downloadImageByURL();
=======
getRepoContributorsImages("lighthouse-labs", "laser_shark", function(userData) {
	 
});
>>>>>>> 01794e9847762fd50f3fd132d4ee7bb5b19de567
