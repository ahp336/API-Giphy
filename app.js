

var animals = ["Monkey", "Eagle" , "Lion"];

function animalsDisplayInfo () {
    var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=gTinIy9p5s6ihXYdVmmHTHobf3BACXga&q=" + animal 
    + "&limit=25&offset=0&rating=G&lang=en";

    $.ajax({
        url : queryURL,
        method : "GET"
    }).then(function(response){
        var results = response.data;
        console.log(results);
        for (var i=0 ; i < result.length; i++){
            var animalDiv = $("<div class = 'animal'>");
            var rating = results[i].rating
            var p = $("<p>").text("Rating: " + rating);
            var animalImage = $("<img>")

            animalImage.attr("src", results[i].images.fixed_width.url);

            animalDiv.append(p);
            animalDiv.append(animalImage);

            $("#aniaml-gifs").prepend(animalDiv);
            
        }
    });
}

function animalButtons(){
    $("#buttons-view").empty();

    for(var i=0; i< animals.lengths; i++){
        var XZ = $("<button>");
        XZ.addClass("animal-btn");
        XZ.attr("data-name", animals[i]);
        XZ.text(aniamls[i]);

        $("#buttons-view").append(XZ);

    }
}

$("#add-animals").on("click" , function(){
    var animal = $("animal-input").val().trim();
    animals.push(animal);
    animalButtons();

});
