define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/game/QuestionModel',
  'localstorage'
], function(_, Backbone, QuestionModel,LocalStorage){
  var QuestionCollection = Backbone.Collection.extend({
    model: QuestionModel,
  	localStorage: new Backbone.LocalStorage("QuestionCollection"),
  	nextval: function() {
  		var model = new QuestionModel();
  		return this.create(model);
  	}
  });
  
  return QuestionCollection;
});