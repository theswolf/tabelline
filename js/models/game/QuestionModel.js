define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var QuestionModel = Backbone.Model.extend({
    defaults: {
      moltiplicando: 0,
      moltiplicatore: 0,
      risposta: 0,
    },
    initialize: function() {
    	var p = Math.floor(Math.random() * 10)+1;
    	var i = Math.floor(Math.random() * 10)+1;
    	if($.inArray((p*i), Approuter.history) == -1) {
    		this.set({moltiplicando:p , moltiplicatore:i});
    	}
    	else this.initialize();
    	
    }
  });
  // Return the model for the module
  return QuestionModel;
});