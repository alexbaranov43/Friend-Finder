

var friends = require("../data/friends.js");


module.exports = function (app) {
    app.get("/friends/newFriends", function (req, res) {
        res.json(friends);
    });
  
    app.post("/friends/newFriends", function (req, res) {
        var newFriend = req.body;
 
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        var userData    = req.body;
        var userName    = userData.name;
        var userPhoto   = userData.photo;
        var userScores  = userData.scores;
        var totalDifference = 0;
        for(var i = 0; i < friends.length-1; i++){
            console.log(friends[i].name);
            totalDifference = 0;
            for(var j = 0; j < 10; j++){
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                if (totalDifference <= bestMatch.friendDifference){
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }
        console.log(bestMatch)
        console.log(newFriend);
      
      
        friends.push(newFriend);
        
        res.json(bestMatch);
    }); 
}