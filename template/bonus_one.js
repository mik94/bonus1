// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function (){
	// Magic!
	$(".flexsearch-input").on("input", function(){
		$.getJSON("http://www.mattbowytz.com/simple_api.json", {data: "all"}, function(data){
			var allData = $.merge(data.data.interests, data.data.programming);
			$(".results").empty();
			for (i = 0; i < allData.length; i++)
			{
				if (allData[i].toLowerCase().includes($(".flexsearch-input").val()))
				{
					var keyword = allData[i].split(" ");
					if (keyword.length > 1) //keyword contains multiple words
						keyword[0] += "+" + keyword[1];
					$('.results').append("<li><a target='_blank' href='https://www.google.com/search?q=" + keyword[0] + "'>" + allData[i] + "</a></li>");
				}
			}
		});
	});
	console.log('Keepin\'n it clean with an external script!');
})();