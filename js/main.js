
require.config({
	paths: {
		//bootstrap: "js/lib/bootstrap-2012.min",
		bootstrap: "js/lib/bootstrap-2.3.1.min",
		"bootstrap-switch": "js/lib/bootstrapSwitch-1.2",
		"bootstrap-clickover": "js/lib/bootstrapx-clickover-1.0",
		handlebars: "js/lib/handlebars-1.0.10",
		jquery: "js/lib/jquery-1.9.1.min",
		jqueryui: "js/lib/jquery-ui-1.10.3.custom.min",
		monster: "js/lib/monster",
		"monster-ui": "js/lib/monster.ui",
		plugins: "js/plugins",
		postal: "js/lib/postal-0.8.2",
		reqwest: "js/lib/reqwest-0.7.3.min",
		underscore: "js/lib/underscore-1.4.4.min"
	},
  shim: {
  	bootstrap: ["jqueryui"],
  	"bootstrap-switch": ["bootstrap"],
  	"bootstrap-clickover": ["bootstrap"],
  	jqueryui: ["jquery"],
		handlebars: {
			exports: "Handlebars"
		},
  	plugins: ["jquery"],
  	underscore: {
  		exports: "_"
		}
  },
  //urlArgs: "bust=" + (new Date()).getTime()
});

require(["jquery", "monster", "plugins", "bootstrap", "bootstrap-switch", "bootstrap-clickover"], function($, monster){

	$.support.cors = true;

	require(["monster-ui"], function(ui){

		monster.ui = ui;

		$(function(){
			monster._loadApp("core", function(app){
				console.log("core loaded");
				app.render($("#main section"));
			});
		});

	});

});
