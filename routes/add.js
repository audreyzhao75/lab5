var data = require("../data.json");

exports.addFriend = function(request, response) {  
	var name = request.query.name;
	var description = request.query.description;
	
	var newFriend = 
		{
			"name": name,
			"description": description,
			"imageURL": "http://picsum.photos/400/400"
		};
	data.friends.push(newFriend);
	console.log(data);
}