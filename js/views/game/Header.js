define([
  'jquery',
  'underscore',
  'backbone'
  //'views/sidebar/SidebarView',
  //'text!templates/game/progressBarTpl.html'
], function($, _, Backbone){

  var Header = Backbone.View.extend({
    //el: $("#progressbar"),

    events: {
      "click #start":"startGame"
    },
    
    evn: '',
    label: '',

    initialize: function() {
      this.evn = arguments[0].evn;
      this.label = arguments[0].label;
      this.render();

    },

    render: function() {
     // $( document ).on( "mobileinit",function() {
      var template = _.template( $("#header_template").html(),{value: this.label, appname: Label.appname} );
      this.$el.html( template );
      this.$el.trigger('create');

    },

    startGame: function() {
      $('#start').button('disable');
      if(this.evn == 'gameStarted') {
        this.trigger(this.evn);
      }
      else {
        window.location.reload();
      }
      
    },

    enableGaming: function(){
      $('#start').button('enable'); 
    }

  });
  
  return Header;
  
});
