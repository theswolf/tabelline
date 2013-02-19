define([
  'jquery',
  'underscore',
  'backbone'
  //'views/sidebar/SidebarView',
  //'text!templates/game/progressBarTpl.html'
], function($, _, Backbone){

  var Board = Backbone.View.extend({
    //el: $("#progressbar"),

//    events: {
//      "click #start":"startGame"
//    },
	started: false,
	start: function() {
		Approuter.board.started = true;
	},
	stop: function() {
		Approuter.board.started = false;
	},
	
    initialize: function() {
      this.render();
    },

    render: function() {
     // $( document ).on( "mobileinit",function() {
      this.createGrid();

    },
    
    createGrid: function() {
    	var numCellInRow = Approuter.numCellInRow;
    	var dim = Math.floor(this.$el.width() ); // - (this.$el.width()/(numCellInRow) )); 
        var cellDim =  Math.floor((dim)/(numCellInRow+1))-2;
       // this.$el.css('margin-left','auto');
       // this.$el.css('margin-right','auto');
        var cellContainer = $('<div>');
        cellContainer.css('margin-left','auto');
        cellContainer.css('margin-right','auto');
        cellContainer.css('width',dim );
        cellContainer.css('text-align','center');
    	  for (var i = 0; i <= numCellInRow; i++) {
              for (var p = 0; p <= numCellInRow; p++) {
                //var cell = document.createElement('div');
            	  var id = i+'x'+p;
            	  var cell = $('<div id='+id+'>');
            	  
            	  cell.css('height',cellDim - (cellDim/4) );
            	  cell.css('width',cellDim );
            	  cell.css('position','relative');
            	  cell.css('zIndez',2); 
            	  cell.css('border', '1px solid #F5FAFA');
            	  cell.css('font-size',cellDim/2);
            	  cell.css('padding-top',cellDim/4);
            	  if(i%2 == 0){
            		  cell.css('background-color','#C1DAD6');
            	  } 
            	  else {
            		  cell.css('background-color','#ACD1E9');
            	  }
            	  
            	  if(p%2 == 0) {
            		 cell.css('opacity','0.8');
            	  }
            	 
            	  if(i == 0) {
            		  cell.append(p);
            	  }
            	  else if(p == 0) {
            		  if(i!= 0) {
            			  cell.append(i);
            		  } 
            	  }
            	  else {
            		  cell.css('font-size',cellDim/3);
            		  cell.append(id);
            	  }
            	  cell.css('float','left'); 
            	  var self = this;
            	  if(i!=0 && p!=0) {
            		  cell.mousedown(function() {
                		  self.clickedCell(this.id);
                	  });
            	  }
            	  
            	  cellContainer.append(cell);
              }
          }
    	  //cellContainer.css('padding-left',cellDim/2);
    	  this.$el.append(cellContainer);
    },
    
    clickedCell: function(value) {
    	if (!this.started) return;
    	var p= value.split('x')[0];
    	var i= value.split('x')[1];
    	var red = '#FF0000';
    	var green = '#00FF00';
    	var color = Approuter.lastQuestion == (p*i) ? green : red;
    	Approuter.lastResponse = value;
    	for (var ii = 0; ii<=i; ii++) {
    		 this.colorize('#'+p+'x'+ii,color);
            
          }
    	for (var pp = 0; pp<p; pp++) { 
        	this.colorize('#'+pp+'x'+i,color);
        }
    	this.trigger('responseGiven');
    },
    
    colorize: function(div,color) {
    	var nativecolor = $(div).css('background-color');
    	 $(div).css('background-color',color);
    	 setTimeout(function() { $(div).css('background-color',nativecolor); },200);
    }

    

  });
  
  return Board;
  
});
