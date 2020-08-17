/* Retrieve information of the winner
-------------------------------------*/
var winner = sessionStorage.getItem("winner");
/* Fetch images of players
-------------------------------------*/
fetch("https://raw.githubusercontent.com/jeffreylancaster/game-of-thrones/master/data/characters.json")
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        images2(json);

    })
    .catch(function(error) {
        console.log("Error");
    })

/* Empty array that gets the winner image
-------------------------------------*/
var image = [];

/* Empty array that stores all the images
-------------------------------------*/
var storeImages2 = [];

function images2(details) {
    var image1 = storeImages2.push(details.characters[123].characterImageFull);
    var image2 = storeImages2.push(details.characters[133].characterImageFull);
    var image3 = storeImages2.push(details.characters[300].characterImageFull);
    var image4 = storeImages2.push(details.characters[349].characterImageFull);
    var image5 = storeImages2.push(details.characters[120].characterImageFull);
    var image6 = storeImages2.push(details.characters[257].characterImageFull);
    var image7 = storeImages2.push(details.characters[287].characterImageFull);
    var image8 = storeImages2.push(details.characters[44].characterImageFull);
    var image9 = storeImages2.push(details.characters[113].characterImageFull);
    var image10 = storeImages2.push(details.characters[38].characterImageFull);
    if (winner === "John Snow") {
        image.push(storeImages2[0])
    } else if (winner === "Khal Drogo") {
        image.push(storeImages2[1])
    } else if (winner === "Sansa Stark") {
        image.push(storeImages2[2])
    } else if (winner === "Tyrion Lannister") {
        image.push(storeImages2[3])
    } else if (winner === "King Joffrey") {
        image.push(storeImages2[4])
    } else if (winner === "Petyr Baelish") {
        image.push(storeImages2[5])
    } else if (winner === "Robert Baratheon") {
        image.push(storeImages2[6])
    } else if (winner === "Daenerys Targaryan") {
        image.push(storeImages2[7])
    } else if (winner === "Jamie Lannister") {
        image.push(storeImages2[8])
    } else if (winner === "Cersei Lannister") {
        image.push(storeImages2[9])
    }
    document.getElementById("winner").innerHTML = "<p class='winner'>" + winner + "</p><div class='winner-image-wrap'><img src='" + image[0] + "'></div>";
}