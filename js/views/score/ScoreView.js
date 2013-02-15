define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/game/QuestionCollection'
], function($, _, Backbone, QuestionCollection){
  var ScoreView = Backbone.View.extend({
    initialize: function(){
      this.collection = Approuter.question.collection;
      // Compile the template using Underscores micro-templating
      //var compiledTemplate = _.template( projectsListTemplate, { projects: this.collection.models } );
      //this.$el.html(compiledTemplate);
      this.render();
    },
    render: function() {
    	var compiledTemplate = _.template($("#score_template").html(), {responses: this.collection.toJSON()});
    	this.$el.html(compiledTemplate);
    	//this.$el.trigger('create');
    }
    
  });
  // Returning instantiated views can be quite useful for having "state"
  return ScoreView;
});