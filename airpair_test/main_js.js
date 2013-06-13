// files, classes 
// 3 types of objects: router (similar as controller like routes.rb), view, models
// another type of objects: collection - an array of the model instances, like rails
	// findall
var Answers = Backbone.Collection.extend({
  //class



  // promptColor: function() {
  //   var cssColor = prompt("Please enter a CSS color:");
  //   this.set({color: cssColor});
  // }
  // url: 'http://culture.herokuapp.com/answers.json',


});

// data fetch to get data into collection
var answers = new Answers(answersData);