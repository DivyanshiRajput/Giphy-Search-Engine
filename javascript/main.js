


document.querySelector(".js-go").addEventListener('click', function(){
	var input = document.querySelector("input").value;
	pushToDOM(input);
});

document.querySelector(".js-userinput").addEventListener('keyup', function(e){
	var input = document.querySelector("input").value;
	if (e.which == 13){
	pushToDOM(input);		
	}

});

var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";

var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open("GET", url);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener("load", function(e){
	var data = e.target.response ;
	pushToDOM(data);
})

function pushToDOM(input){

	var response = JSON.parse(input);
	var container = document.querySelector(".js-container");
	var imageurls = response.data;
	imageurls.forEach(function(image){

		var src = image.images.fixed_height.url;
		
		container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";


	});

	
}