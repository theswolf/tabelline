// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    //serialize: 'libs/jquery/jquery-serialize',
    jqueryui:'libs/jquery/jquery-ui-min',
    jquerymobile:'libs/jquery/jquery-mobile-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    localstorage: 'libs/backbone/backbone-localStorage-min'
  },

  shim: {
    "backbone": {
    "deps": [ "underscore", "jquery" ],
    "exports": "Backbone"  //attaches "Backbone" to the window object
      }
   }

});

require(["jquery","backbone","router"], function($, Backbone, Router) {
  $( document ).on( "mobileinit",
    // Set up the "mobileinit" handler before requiring jQuery Mobile's module
    function() {
      // Prevents all anchor click handling including the addition of active button state and alternate link bluring.
      $.mobile.linkBindingEnabled = false;

      // Disabling this will prevent jQuery Mobile from handling hash changes
      $.mobile.hashListeningEnabled = false;
    }
  );

  require( [ "jqueryui", "jquerymobile" ], function() {
    // Instantiates a new Backbone.js Mobile Router
    this.router = new Router();
  });

});
