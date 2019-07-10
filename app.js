

var animals = ["Monkey","Eagle","Lion"];

function animalsDisplayInfo () {
    var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=gTinIy9p5s6ihXYdVmmHTHobf3BACXga&q=" + animal 
    + "&limit=10&offset=0&rating=R&lang=en";

    $.ajax({
        url : queryURL,
        method : "GET"
    }).then(function(salty){
        var results = salty.data;
        
        for(var i=0; i< results.length; i++){
            console.log(results[i].url);
            var animalDiv = $("<div class='animal'>");
            var rating = results[i].rating
            var p = $("<p>").text("Rating: " + rating);
            var animalImage = $("<img>")
            
            animalImage.attr("src", results[i].images.fixed_height.url);

            animalDiv.append(p);
            animalDiv.append(animalImage);

            $("#animal-gifs").prepend(animalDiv);
        }
    });
}

function animalButtons(){
    $("#buttons-view").empty();

    for(var i=0; i< animals.length; i++){
        var XZ = $("<button>");
        XZ.addClass("animal-btn");
        XZ.attr("data-name", animals[i]);
        XZ.text(animals[i]);

        $("#buttons-view").append(XZ);

    }
}

$("#add-animals").on("click" , function(){
    event.preventDefault();

    var animal1 = $("#animal-input").val();
    animals.push(animal1);
    animalButtons();

});

$(document).on("click", ".animal-btn", animalsDisplayInfo);
animalButtons();
