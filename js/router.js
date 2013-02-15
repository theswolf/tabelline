// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/game/Header',
  'views/game/ProgressBar',
  'views/game/Board',
  'views/game/QuestionView',
  'views/score/ScoreView'
 // 'views/game/QuestionBox'
  //'views/projects/ProjectsView',
  //'views/contributors/ContributorsView',
  //'views/footer/FooterView'
], function($, _ , Backbone,Header,ProgressBar,Board,QuestionView,ScoreView
  //, ProgressBar
  ) {
	Approuter = {};
	 Approuter.numCellInRow = 10;
     Approuter.timeoutPbar = 1800;
     Approuter.history = [];
     Approuter.numQuestion = 40;
     Approuter.count = 0;
     
	var Router = Backbone.Router.extend( { 
    initialize: function() {
      Backbone.history.start();
      //this.home();
      
    },

    routes: {

            // When there is no hash bang on the url, the home method is called
            "": "home",
            "score":"score"

        },

    home: function() {

           var header = new Header({el:"#header_container",evn:"gameStarted",label:"Start"});
           var question = new QuestionView({el:"#question"});
           var pbar = new ProgressBar({el:"#progressbar"});
           var board = new Board({el:"#board"});
           
           pbar.colorize('green');
          
//           var sbar = new ProgressBar({el:"#successbar"});
//           sbar.render(0);
           Approuter.router = this;
           Approuter.header = header;
           Approuter.question = question;
           Approuter.pbar = pbar;
           Approuter.board = board;
           
           
           header.on('gameStarted',pbar.timeoutinit);
           header.on('gameStarted',board.start);
           header.on('gameStarted',question.reset);
           header.on('gameStarted',question.nextquestion);
        
           
           header.on('gameStarted',function(){ $('#header').show(); });
           pbar.on('gameEnded', header.enableGaming);
           pbar.on('gameEnded', board.stop);
           pbar.on('gameEnded', Approuter.router.score);
    
           
          // window.app_router.navigate('new', true)
           board.on('responseGiven',question.setresponse);
           board.on('responseGiven',question.nextquestion);
          
           

           //pbar.setSelf();
           //this.binder(this,'gameEnded',header.enableGaming);
           //this.binder(header,'gameStarted', this.countdown_init);
           
        },
    
    score: function() {
    	 	var header = new Header({el:"#header_score_container",evn:"gameBack",label:"New Game"});
    		var score = new ScoreView({el:"#scoreboard"});
    		
        	$.mobile.changePage( "#score" ,{ reverse: false, changeHash: false } );
    		//header.on('gameBack',location.reload );
        	
        }


  });

  return Router;

});
