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

   // Check if folder exists
  console.log("Checking if folder exists.");
  fs.readdir("avatars", (err, files) => {
    if (err) {
      console.log("Avatars folder does not exist! Creating folder to put files in. \n")
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
      console.log("The pictures were stored in avatars folder.")
    });

  })
}

getRepoContributorsImages(args[0], args[1],  (err, result) => {
  console.log("Errors:", err);
  console.log("Result:", result);
});