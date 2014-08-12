$(function(){

  var model = {},
  parsedTemplate = "",
  demoTemplate = {};
  
	var dataCallback = function(json, status,xhr){
		model.data = json;	
		parsedTemplate =  demoTemplate(model.data);
		$("#templatedSection").html(parsedTemplate).hide().show("slow");	
	}
	
	var templateCallback = function(html,status,xhr){
		console.log(html);
		demoTemplate = _.template(html);
	}

  var errorLog = function(e){
		console.log(e)
	};
	
  //load template 
	$.ajax({url: "view/home.html.erb", 
					async: false,
					cache: true,
					dataType:"html",
					success : templateCallback,
					error: errorLog
				 });
	
	//get data
  $.ajax({url: "home.data.json",
					async: true,
					dataType: "json",
					success: dataCallback,
					error: errorLog
				 });
	
});
