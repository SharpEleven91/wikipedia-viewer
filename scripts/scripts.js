var apiQuery = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&origin=*&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
$("#search-get").click(function () {
    $("#content").empty();
    var userInput = document.getElementById("userInput").value;
	$.getJSON(apiQuery + userInput, function(data) {
        var results = data.query.pages;
        
        //iterate with JSON data and append values to HTML document
        Object.keys(results).forEach(function(key) {
            $("#content").append("<div class='results'> <a href='https://en.wikipedia.org/?curid=" + results[key].pageid +"'> <h3 class='title'>" 
                                                                             + results[key].title + "</h3> <br> <p class='extract'>" 
																             + results[key].extract + "</p> </div> </a>");
        });
	});
});
