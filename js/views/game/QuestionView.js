define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/game/QuestionCollection'
], function($, _, Backbone, QuestionCollection){
  var QuestionView = Backbone.View.extend({
    initialize: function(){
      this.collection = new QuestionCollection();
      // Compile the template using Underscores micro-templating
      //var compiledTemplate = _.template( projectsListTemplate, { projects: this.collection.models } );
      //this.$el.html(compiledTemplate);
      this.render();
    },
    
    numQuestion: '',
    
    render: function() {
    	var compiledTemplate = _.template($("#question_template").html(), {domanda: Label.time});
    	this.$el.html(compiledTemplate);
    	this.$el.trigger('create');
    	this.numQuestion = Approuter.numQuestion;
    },
    
    reset: function() {
    	Approuter.question.collection = new QuestionCollection();
    },
    
    nextquestion: function() {
    	//var self = Approuter.question;
    	if(Approuter.question.collection.length < Approuter.numQuestion) {
    		var question = Approuter.question.collection.nextval();
        	var questiontext = question.toJSON().moltiplicando * question.toJSON().moltiplicatore;
        	Approuter.lastQuestion = questiontext;
        	Approuter.history.push(questiontext);
        	
        	
    	}
    	else {
    		questiontext = Label.finished;
    	}
    	Approuter.count++;
    	var compiledTemplate = _.template($("#question_template").html(), {domanda: questiontext});
    	Approuter.question.$el.html(compiledTemplate);
    	Approuter.question.$el.trigger('create');
    },
    
    setresponse: function() {
    	var collection = Approuter.question.collection;
    	var model = collection.at(collection.length-1);
    	model.set({ risposta: Approuter.lastResponse});
    }
    
  });
  // Returning instantiated views can be quite useful for having "state"
  return QuestionView;
});
