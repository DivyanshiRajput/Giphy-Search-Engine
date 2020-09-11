
document.querySelector(".js-go").addEventListener('click', function(){
	var input = document.querySelector("input").value;
	var url = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + input; 
	sendURL(url);
});


document.querySelector(".js-userinput").addEventListener('keyup', function(e){
	var input = document.querySelector("input").value;
	var url = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + input; 
	if (e.which == 13)
	{
		sendURL(url);		
	}

});


function sendURL (url)
{
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open("GET", url);
	GiphyAJAXCall.send();

	GiphyAJAXCall.addEventListener("load", function(e){
		var data = e.target.response ;
		pushToDOM(data);
	})
}


function pushToDOM(input)
{
	var response = JSON.parse(input);
	var container = document.querySelector(".js-container");
	var imageurls = response.data;
	container.innerHTML = "";
	imageurls.forEach(function(image){

		var src = image.images.fixed_height.url;
		
		container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
	});
}
