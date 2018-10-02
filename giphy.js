var topics = ["cars", "football", "dogs", "video games", "weather",];
var i;

for (i = 0; i < topics.length; i++) {
    $(".buttons").append("<button id='[i]'>" + topics[i] + "</button>")
    // $(".buttons").value = topics[i]
    // currently not working
};
//for loop creating the buttons and then appending them
$(".buttons").on("click", function (event) {
    // what do i want this to do on click
    //i want this to take the name of the button and search for gifs under that classification
    //i could do that by running a function on click
    event.preventDefault();
    var search = $("#[i]").attr("")
    console.log(search);
    var apiKey = "Qvzqwwk91gJElU5Q9sZtNZPYNhecTPDg";
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + search + "&limit=10&offset=0&rating=G&lang=en";


    $.ajax({
        url: queryURL,
        // set query URL to the giphy api url
        method: "GET",
        // telling the website what to do
    }).then(function (response) {
        console.log(response);
        //console logging the response from giphy api
        $(".gifs").append("<img src='" + response.data[i].images.static.url + "'/>");
        $(".rating").append("Rating: " + (response.rating));
        //appending the static image from giphy api as well as the rating
        //need to get them to stop/start on click
    })
});
$(".gif").on("click", function () {
    var state = $(this).attr("data-state");
    if (state == "still") {
        $(this).attr("data-state", "animate");
    }
    if (state == "animate") {
        $(this).attr("data-state", "still");
    }
    var newState = $(this).attr("data-state");
    var src = $(this).attr("data-" + newState);
    $(this).attr("src", src);
})
//this whole block would stop/start my gifs if i could get them to append