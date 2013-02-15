define([
  'jquery',
  'jqueryui',
  'underscore',
  'backbone'
  //'views/sidebar/SidebarView',
  //'text!templates/game/progressBarTpl.html'
], function($, jqueryui, _, Backbone){

  var ProgressBar = Backbone.View.extend({
    initialize: function() {
      this.pbar = this.$el;
      this.startValue = 100;
      this.render();
    },

    render: function(value){


      this.pbar.progressbar({
        value: value == null ? this.startValue : value
      });

      if(value > 25) {
        this.colorize('green');
      }
      else if(value > 5) {
        this.colorize('yellow');
      }
      else  {
        this.colorize('red');
      }

      

    },

    colorize: function(color) {
      this.pbar.find( ".ui-progressbar-value" ).css({
        "background": color
      });
    },

    timeoutinit: function() {
      var self = Approuter.pbar;
      self.startValue = 101;
      //self.decrease()
      if(self.startValue > 0) {
          setTimeout(function() { self.countdown_trigger() ; },Approuter.timeoutPbar);
        }
    },

    countdown_trigger: function() {
      if(this.startValue > 0) {
          //document.getElementById('countdown_text').innerHTML = countdown_number;
          this.decrease();
           var self = this;
          if(this.startValue > 0 && (Approuter.count <= Approuter.numQuestion)) {
             countdown = setTimeout(function() {self.countdown_trigger();}, Approuter.timeoutPbar);
          }
          else {
            self.trigger('gameEnded');
            //Approuter.router.navigate('score', true);
          }
        }
    },

    decrease: function() {
      this.startValue --;
      //if(this.startValue > 0) {
        this.render(this.startValue);
      //}
      
    }

  });

  return ProgressBar;
  
});
