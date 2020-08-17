/* Fetch house information
--------------------------*/

fetch("https://raw.githubusercontent.com/joakimskoog/AnApiOfIceAndFire/master/data/houses.json")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    houses(json);
    
  })
    .catch(function(error) {
    console.log("Error");
})


function houses(house) {
    baelishHouse = house[9].Name;
    baratheonHouse = house[14].Name;
    lannisterHouse = house[228].Name;
    starkHouse = house[361].Name;
    targaryenHouse = house[377].Name;
    dothrakiHouse = "Dothraki"
}

var starkHouse = "";
var lannisterHouse = ""
var targaryenHouse = ""
var baratheonHouse = ""
var dothrakiHouse = ""
var baelishHouse = ""
/* Fetch links to images
--------------------------*/
fetch("https://raw.githubusercontent.com/jeffreylancaster/game-of-thrones/master/data/characters.json")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    images(json);
    
  })
    .catch(function(error) {
    console.log("Error");
})
/* Store the images from function images()
--------------------------*/
var storeImages = [];

/* Generate images for cards and modals
--------------------------*/
function images(details) {
/* Image 1 - John Snow
--------------------------*/
    let image1 = document.getElementById("image1");
    image1.innerHTML = "<img class='image' src='" + details.characters[123].characterImageFull + "'>";
    let modalimage1 = document.getElementById("modalimage1");
    modalimage1.innerHTML = "<img class='modalimage' src='" + details.characters[123].characterImageFull + "'>";
    storeImages.push(details.characters[123].characterImageFull);
/* Image 2 - Khal Drogo
--------------------------*/
    let image2 = document.getElementById("image2");
    image2.innerHTML = "<img class='image' src='" + details.characters[133].characterImageFull + "'>"
    let modalimage2 = document.getElementById("modalimage2");
    modalimage2.innerHTML = "<img class='modalimage' src='" + details.characters[133].characterImageFull + "'>";
/* Image 3 - Sansa Stark
--------------------------*/
    storeImages.push(details.characters[133].characterImageFull);
    let image3 = document.getElementById("image3");
    image3.innerHTML += "<img class='image' src='" + details.characters[300].characterImageFull + "'>" 
    let modalimage3 = document.getElementById("modalimage3");
    modalimage3.innerHTML = "<img class='modalimage' src='" + details.characters[300].characterImageFull + "'>";
    storeImages.push(details.characters[300].characterImageFull);
/* Image 4 - Tyrion Lannister
--------------------------*/
    let image4 = document.getElementById("image4");
    image4.innerHTML += "<img class='image' src='" + details.characters[349].characterImageFull + "'>" 
    let modalimage4 = document.getElementById("modalimage4");
    modalimage4.innerHTML = "<img class='modalimage' src='" + details.characters[349].characterImageFull + "'>";
    storeImages.push(details.characters[349].characterImageFull);
/* Image 5 - King Joffrey
--------------------------*/
    let image5 = document.getElementById("image5");
    image5.innerHTML += "<img class='image' src='" + details.characters[120].characterImageFull + "'>" 
    let modalimage5 = document.getElementById("modalimage5");
    modalimage5.innerHTML = "<img class='modalimage' src='" + details.characters[120].characterImageFull + "'>";
    storeImages.push(details.characters[120].characterImageFull);
/* Image 6 - Petyr Baelish
--------------------------*/
    let image6 = document.getElementById("image6");
    image6.innerHTML += "<img class='image' src='" + details.characters[257].characterImageFull + "'>"
    let modalimage6 = document.getElementById("modalimage6");
    modalimage6.innerHTML = "<img class='modalimage' src='" + details.characters[257].characterImageFull + "'>";
    storeImages.push(details.characters[257].characterImageFull);
/* Image 7 - Robert Baratheon
--------------------------*/
    let image7 = document.getElementById("image7");
    image7.innerHTML += "<img class='image' src='" + details.characters[287].characterImageFull + "'>" 
    let modalimage7 = document.getElementById("modalimage7");
    modalimage7.innerHTML = "<img class='modalimage' src='" + details.characters[287].characterImageFull + "'>";
    storeImages.push(details.characters[287].characterImageFull);
/* Image 8 - Daenerys Targarien
--------------------------*/
    let image8 = document.getElementById("image8");
    image8.innerHTML += "<img class='image' src='" + details.characters[44].characterImageFull + "'>" 
    let modalimage8 = document.getElementById("modalimage8");
    modalimage8.innerHTML = "<img class='modalimage' src='" + details.characters[44].characterImageFull + "'>";
    storeImages.push(details.characters[44].characterImageFull);
/* Image 9 - Jamie Lannister
--------------------------*/
    let image9 = document.getElementById("image9");
    image9.innerHTML += "<img class='image' src='" + details.characters[113].characterImageFull + "'>"
    let modalimage9 = document.getElementById("modalimage9");
    modalimage9.innerHTML = "<img class='modalimage' src='" + details.characters[113].characterImageFull + "'>";
    storeImages.push(details.characters[113].characterImageFull);
/* Image 10 - Cersei Lannister
--------------------------*/
    let image10 = document.getElementById("image10");
    image10.innerHTML += "<img class='image' src='" + details.characters[38].characterImageFull + "'>" 
    let modalimage10 = document.getElementById("modalimage10");
    modalimage10.innerHTML = "<img class='modalimage' src='" + details.characters[38].characterImageFull + "'>";
    storeImages.push(details.characters[38].characterImageFull);
    console.log("images1: " + storeImages[1])
}


/* Base-Url for character information
------------------------------------*/
const baseUrl = "https://anapioficeandfire.com/api/characters/";
/* id for the 10 different characters
------------------------------------*/
let id = [583,1346,957,1052,565,823,901,1303,529,238]

/* Url + ID for finding the rigth character url
------------------------------------------------*/
var characterUrl1 = `${baseUrl}${id[0]}`;
var characterUrl2 = `${baseUrl}${id[1]}`;
var characterUrl3 = `${baseUrl}${id[2]}`;
var characterUrl4 = `${baseUrl}${id[3]}`;
var characterUrl5 = `${baseUrl}${id[4]}`;
var characterUrl6 = `${baseUrl}${id[5]}`;
var characterUrl7 = `${baseUrl}${id[6]}`;
var characterUrl8 = `${baseUrl}${id[7]}`;
var characterUrl9 = `${baseUrl}${id[8]}`;
var characterUrl10 = `${baseUrl}${id[9]}`;   

/* Fetching the 10 different Urls for characters
------------------------------------------------*/

fetch(characterUrl1)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    createChar1(json);
  })
    .catch(function(error) {
    console.log("Error");
})
fetch(characterUrl2)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    createChar2(json);
  })
    .catch(function(error) {
    console.log("Error");
})
fetch(characterUrl3)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    createChar3(json);
  })
    .catch(function(error) {
    console.log("Error");
})
fetch(characterUrl4)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    createChar4(json);
  })
    .catch(function(error) {
    console.log("Error");
})
fetch(characterUrl5)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    createChar5(json);
  })
    .catch(function(error) {
    console.log("Error");
})
fetch(characterUrl6)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    createChar6(json);
  })
    .catch(function(error) {
    console.log("Error");
})
fetch(characterUrl7)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    createChar7(json);
  })
    .catch(function(error) {
    console.log("Error");
})
fetch(characterUrl8)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    createChar8(json);
  })
    .catch(function(error) {
    console.log("Error");
})
fetch(characterUrl9)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    createChar9(json);
  })
    .catch(function(error) {
    console.log("Error");
})
fetch(characterUrl10)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    createChar10(json);
  })
    .catch(function(error) {
    console.log("Error");
})


/* Create characters and modals
------------------------------------------------*/
function createChar1(details) {  
/* Find id's in html, cards and modal
------------------------------------------------*/
    let char1 = document.getElementById("char1");
    let modalchar1 = document.getElementById("modalchar1");
    let titles1 = document.getElementById("titles1");
    let modaltitles1 = document.getElementById("modaltitles1");
    let aliases1 = document.getElementById("aliases1");
      let modalaliases1 = document.getElementById("modalaliases1");
/* Adding information in the id's
------------------------------------------------*/      
    char1.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p class='name'>House: " + starkHouse + "</p>";
    modalchar1.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p >Culture: " + details.culture + "</p>";
/* Generate and add all titles and alisases for card and modal
------------------------------------------------*/ 
    for (var i = 0; i< details.titles.length; i++) {
        var titles = "<li>" + details.titles[i] + "</li>"
        titles1.innerHTML += titles;
        var modaltitles = "<li>" + details.titles[i] + "</li>"
        modaltitles1.innerHTML += titles;
    }
    for (var i = 0; i< details.aliases.length; i++) {
      var aliases = "<li>" + details.aliases[i] + "</li>"
        aliases1.innerHTML += aliases; 
        var modalaliases = "<li>" + details.aliases[i] + "</li>"
        modalaliases1.innerHTML += aliases;
    } 
 }
function createChar2(details) {
    /* Find id's in html, cards and modal
------------------------------------------------*/
    let char2 = document.getElementById("char2");
    let modalchar2 = document.getElementById("modalchar2");
    let titles1 = document.getElementById("titles2");
    let modaltitles1 = document.getElementById("modaltitles2");
    let aliases1 = document.getElementById("aliases2");
/* Adding information in the id's
------------------------------------------------*/
    let modalaliases1 = document.getElementById("modalaliases2");
    char2.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p class='name'>House: " + dothrakiHouse + "</p>";
    modalchar2.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p>Culture: " + details.culture + "</p>";
    /* Generate and add all titles and alisases for card and modal
------------------------------------------------*/ 
    for (var i = 0; i< details.titles.length; i++) {
    var titles = "<li>" + details.titles[i] + "</li>"
    titles1.innerHTML = titles;
        var modaltitles = "<li>" + details.titles[i] + "</li>"
        modaltitles2.innerHTML += titles;
    }
    for (var i = 0; i< details.aliases.length; i++) {
      var aliases = "<li>" + details.aliases[i] + "</li>"
      aliases1.innerHTML = aliases;
        var modalaliases = "<li>" + details.aliases[i] + "</li>"
        modalaliases2.innerHTML += aliases;
    }   
}
function createChar3(details) {
    /* Find id's in html, cards and modal
------------------------------------------------*/
    let char3 = document.getElementById("char3");
    let modalchar3 = document.getElementById("modalchar3");
    let titles1 = document.getElementById("titles3");
    let modaltitles1 = document.getElementById("modaltitles3");
    let aliases1 = document.getElementById("aliases3");
/* Adding information in the id's
------------------------------------------------*/
    let modalaliases1 = document.getElementById("modalaliases3");
    modalchar3.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p>Culture: " + details.culture + "</p>";
    char3.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p class='name'>House: " + starkHouse + "</p>";
        /* Generate and add all titles and alisases for card and modal
------------------------------------------------*/ 
    for (var i = 0; i< details.titles.length; i++) {
       var titles = "<li>" + details.titles[i] + "</li>"
    titles1.innerHTML += titles;
        var modaltitles = "<li>" + details.titles[i] + "</li>"
        modaltitles3.innerHTML += titles;
    }
    for (var i = 0; i< details.aliases.length; i++) {
     var aliases = "<li>" + details.aliases[i] + "</li>"
       aliases1.innerHTML += aliases;
         var modalaliases = "<li>" + details.aliases[i] + "</li>"
        modalaliases3.innerHTML += aliases;
    }   
}
function createChar4(details) {
    /* Find id's in html, cards and modal
------------------------------------------------*/
    let modalchar4 = document.getElementById("modalchar4");
    modalchar4.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p>Culture: " + details.culture + "</p>";
     let modaltitles1 = document.getElementById("modaltitles4");
    let modalaliases1 = document.getElementById("modalaliases4");
    
    let char4 = document.getElementById("char4");
    let titles1 = document.getElementById("titles4");
    let aliases1 = document.getElementById("aliases4");
    /* Adding information in the id's
------------------------------------------------*/
    char4.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p class='name'>House: " + lannisterHouse + "</p>";
            /* Generate and add all titles and alisases for card and modal
------------------------------------------------*/ 
    for (var i = 0; i< details.titles.length; i++) {
    var titles = "<li>" + details.titles[i] + "</li>"
      titles4.innerHTML += titles;
        var modaltitles = "<li>" + details.titles[i] + "</li>"
        modaltitles4.innerHTML += titles;
    }
    
    for (var i = 0; i< details.aliases.length; i++) {
       var aliases = "<li>" + details.aliases[i] + "</li>"
      aliases1.innerHTML += aliases;
        var modalaliases = "<li>" + details.aliases[i] + "</li>"
        modalaliases4.innerHTML += aliases;
    } 
}
function createChar5(details) {
    /* Find id's in html, cards and modal
------------------------------------------------*/
     let modalchar5 = document.getElementById("modalchar5");
    modalchar5.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p>Culture: " + details.culture + "</p>";
     let modaltitles1 = document.getElementById("modaltitles5");
    let modalaliases1 = document.getElementById("modalaliases5");
    
     let char5 = document.getElementById("char5");
    let titles1 = document.getElementById("titles5");
    let aliases1 = document.getElementById("aliases5");
    /* Adding information in the id's
------------------------------------------------*/
    char5.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p class='name'>House: " + lannisterHouse + "</p>";
    /* Generate and add all titles and alisases for card and modal
------------------------------------------------*/ 
    for (var i = 0; i< details.titles.length; i++) {
     var titles = "<li>" + details.titles[i] + "</li>"
      titles1.innerHTML += titles;
        var modaltitles = "<li>" + details.titles[i] + "</li>"
        modaltitles5.innerHTML += titles;
    }
    for (var i = 0; i< details.aliases.length; i++) {
       var aliases = "<li>" + details.aliases[i] + "</li>"
      aliases1.innerHTML += aliases;
        var modalaliases = "<li>" + details.aliases[i] + "</li>"
        modalaliases5.innerHTML += aliases;
    }
}
function createChar6(details) {
    /* Find id's in html, cards and modal
------------------------------------------------*/
    let modalchar6 = document.getElementById("modalchar6");
    modalchar6.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p>Culture: " + details.culture + "</p>";
     let modaltitles1 = document.getElementById("modaltitles6");
    let modalaliases1 = document.getElementById("modalaliases6");
     let char6 = document.getElementById("char6");
    let titles1 = document.getElementById("titles6");
    let aliases1 = document.getElementById("aliases6");
    /* Adding information in the id's
------------------------------------------------*/
    char6.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p class='name'>House: " + baelishHouse + "</p>";
    /* Generate and add all titles and alisases for card and modal
------------------------------------------------*/ 
    for (var i = 0; i< details.titles.length; i++) {
        var titles = "<li>" + details.titles[i] + "</li>"
       titles1.innerHTML += titles;
        var modaltitles = "<li>" + details.titles[i] + "</li>"
        modaltitles6.innerHTML += titles;
    }
    for (var i = 0; i< details.aliases.length; i++) {
       var aliases = "<li>" + details.aliases[i] + "</li>"
        aliases1.innerHTML += aliases;
        var modalaliases = "<li>" + details.aliases[i] + "</li>"
        modalaliases6.innerHTML += aliases;
    }
}
function createChar7(details) {
    /* Find id's in html, cards and modal
------------------------------------------------*/
    let modalchar7 = document.getElementById("modalchar7");
    modalchar7.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p>Culture: " + details.culture + "</p>";
    let modaltitles1 = document.getElementById("modaltitles7");
    let modalaliases1 = document.getElementById("modalaliases7");
    let char7 = document.getElementById("char7");
    let titles1 = document.getElementById("titles7");
    let aliases1 = document.getElementById("aliases7");
    /* Adding information in the id's
------------------------------------------------*/
    char7.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p class='name'>House: " + baratheonHouse + "</p>";
    /* Generate and add all titles and alisases for card and modal
------------------------------------------------*/ 
    for (var i = 0; i< details.titles.length; i++) {
        var titles = "<li>" + details.titles[i] + "</li>"
        titles1.innerHTML += titles;
        var modaltitles = "<li>" + details.titles[i] + "</li>"
        modaltitles7.innerHTML += titles;
    }
    for (var i = 0; i< details.aliases.length; i++) {
        var aliases = "<li>" + details.aliases[i] + "</li>"
        aliases1.innerHTML += aliases;
        var modalaliases = "<li>" + details.aliases[i] + "</li>"
        modalaliases7.innerHTML += aliases;
    }
}
function createChar8(details) {
    /* Find id's in html, cards and modal
------------------------------------------------*/
    let modalchar8 = document.getElementById("modalchar8");
    modalchar8.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p>Culture: " + details.culture + "</p>";
    let modaltitles1 = document.getElementById("modaltitles8");
    let modalaliases1 = document.getElementById("modalaliases8");
    let char8 = document.getElementById("char8");
    let titles1 = document.getElementById("titles8");
    let aliases1 = document.getElementById("aliases8");
    /* Adding information in the id's
------------------------------------------------*/
    char8.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p class='name'>House: " + targaryenHouse + "</p>";
    /* Generate and add all titles and alisases for card and modal
------------------------------------------------*/ 
    for (var i = 0; i< details.titles.length; i++) {
        var titles = "<li>" + details.titles[i] + "</li>"
        titles1.innerHTML += titles;
        var modaltitles = "<li>" + details.titles[i] + "</li>"
        modaltitles8.innerHTML += titles;
    }
    for (var i = 0; i< details.aliases.length; i++) {
       var aliases = "<li>" + details.aliases[i] + "</li>"
        aliases1.innerHTML += aliases;
        var modalaliases = "<li>" + details.aliases[i] + "</li>"
        modalaliases8.innerHTML += aliases;
    }
}
function createChar9(details) {
    /* Find id's in html, cards and modal
------------------------------------------------*/
     let modalchar9 = document.getElementById("modalchar9");
    modalchar9.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p>Culture: " + details.culture + "</p>";
    let modaltitles1 = document.getElementById("modaltitles9");
    let modalaliases1 = document.getElementById("modalaliases9");
    let char9 = document.getElementById("char9");
    let titles1 = document.getElementById("titles9");
    let aliases1 = document.getElementById("aliases9");
    /* Adding information in the id's
------------------------------------------------*/
    char9.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p class='name'>House: " + lannisterHouse + "</p>";
    /* Generate and add all titles and alisases for card and modal
------------------------------------------------*/ 
    for (var i = 0; i< details.titles.length; i++) {
        var titles = "<li>" + details.titles[i] + "</li>"
        titles1.innerHTML += titles;
         var modaltitles = "<li>" + details.titles[i] + "</li>"
        modaltitles9.innerHTML += titles;
    }
    for (var i = 0; i< details.aliases.length; i++) {
        var aliases = "<li>" + details.aliases[i] + "</li>"
        aliases1.innerHTML += aliases;
        var modalaliases = "<li>" + details.aliases[i] + "</li>"
        modalaliases9.innerHTML += aliases;
    }
}
function createChar10(details) {
    /* Find id's in html, cards and modal
------------------------------------------------*/
    let modalchar10 = document.getElementById("modalchar10");
    modalchar10.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p>Culture: " + details.culture + "</p>";
     let modaltitles1 = document.getElementById("modaltitles10");
    let modalaliases1 = document.getElementById("modalaliases10");
     let char10 = document.getElementById("char10");
    let titles1 = document.getElementById("titles10");
    let aliases1 = document.getElementById("aliases10");
    /* Adding information in the id's
------------------------------------------------*/
    char10.innerHTML = "<h3>Name: " + details.name + "</h3><p>Gender: " + details.gender + "</p>" + "<p class='name'>House: " + lannisterHouse + "</p>";
    /* Generate and add all titles and alisases for card and modal
------------------------------------------------*/ 
    for (var i = 0; i< details.titles.length; i++) {
        var titles = "<li>" + details.titles[i] + "</li>"
        titles1.innerHTML += titles;
         var modaltitles = "<li>" + details.titles[i] + "</li>"
        modaltitles10.innerHTML += titles;
    }
    for (var i = 0; i< details.aliases.length; i++) {
       var aliases = "<li>" + details.aliases[i] + "</li>"
        aliases1.innerHTML += aliases;
         var modalaliases = "<li>" + details.aliases[i] + "</li>"
        modalaliases10.innerHTML += aliases;
    }
}
/* Create click function for the cards
------------------------------------------------*/ 
document.getElementById("charOption1").addEventListener("click", option1);
document.getElementById("charOption2").addEventListener("click", option2);
document.getElementById("charOption3").addEventListener("click", option3);
document.getElementById("charOption4").addEventListener("click", option4);
document.getElementById("charOption5").addEventListener("click", option5);
document.getElementById("charOption6").addEventListener("click", option6);
document.getElementById("charOption7").addEventListener("click", option7);
document.getElementById("charOption8").addEventListener("click", option8);
document.getElementById("charOption9").addEventListener("click", option9);
document.getElementById("charOption10").addEventListener("click", option10);
   
/* Adding the chosen characters to player arrays
------------------------------------------------*/ 
var player1 = [];
var player2 = [];


/* Generate "Yes" and "No" buttons to choose or unchose character
------------------------------------------------*/
function option1() {
    if (player1.length === 0 && player2.length === 0) {
        openModal();
     document.getElementById("modalcontent").innerHTML = 
            "<div id='card1'><p>Player 1 has chosen John Snow</p><p>Do you want to play as John Snow?</p><button onclick='option1Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>"; 
    } else if (player1.length === 1 && player2.length === 0) {
        openModal();
        document.getElementById("modalcontent").innerHTML = "<div id='card2'><p>Player 2 has chosen John Snow</p><p>Do you want to play as John Snow?</p><button onclick='option1Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>";
    }
} 
function option2() {
    
    if (player1.length === 0 && player2.length === 0) {
        openModal2();
        document.getElementById("modalcontent2").innerHTML = "<div id='card1'><p>Player 1 has chosen Khal Drogo</p><p>Do you want to play as Khal Drogo?</p><button onclick='option2Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>"; 
    } else if (player1.length === 1 && player2.length === 0) {
        openModal2();
        document.getElementById("modalcontent2").innerHTML = "<div id='card2'><p>Player 2 has chosen Khal Drogo</p><p>Do you want to play as Khal Drogo?</p><button onclick='option2Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>";
    }
}
function option3() {
    
    if (player1.length === 0 && player2.length === 0) {
        openModal3();
        document.getElementById("modalcontent3").innerHTML = "<div id='card1'><p>Player 1 has chosen Sansa Stark</p><p>Do you want to play as Sansa Stark?</p><button onclick='option3Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>"; 
    } else if (player1.length === 1 && player2.length === 0) {
        openModal3();
     document.getElementById("modalcontent3").innerHTML = "<div id='card2'><p>Player 2 has chosen Sansa Stark</p><p>Do you want to play as Sansa Stark?</p><button onclick='option3Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>";
    }
}
function option4() {
    
    if (player1.length === 0 && player2.length === 0) {
       openModal4(); document.getElementById("modalcontent4").innerHTML = "<div id='card1'><p>Player 1 has chosen Tyrion Lanister</p><p>Do you want to play as Tyrion Lanister?</p><button onclick='option4Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>"; 
    } else if (player1.length === 1 && player2.length === 0) {
       openModal4(); document.getElementById("modalcontent4").innerHTML = "<div id='card2'><p>Player 2 has chosen Tyrion Lanister</p><p>Do you want to play as Tyrion Lanister?</p><button onclick='option4Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>";
    }
}
function option5() {
    if (player1.length === 0 && player2.length === 0) {
       openModal5(); document.getElementById("modalcontent5").innerHTML = "<div id='card1'><p>Player 1 has chosen King Joffrey</p><p>Do you want to play as King Joffrey?</p><button onclick='option5Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>"; 
    } else if (player1.length === 1 && player2.length === 0) {
       openModal5(); document.getElementById("modalcontent5").innerHTML = "<div id='card2'><p>Player 2 has chosen King Joffrey</p><p>Do you want to play as King Joffrey?</p><button onclick='option5Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>";
    }
}
function option6() {
    if (player1.length === 0 && player2.length === 0) {
       openModal6(); document.getElementById("modalcontent6").innerHTML = "<div id='card1'><p>Player 1 has chosen Petyr Baelish</p><p>Do you want to play as Petyr Baelish?</p><button onclick='option6Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>"; 
    } else if (player1.length === 1 && player2.length === 0) {
       openModal6(); document.getElementById("modalcontent6").innerHTML = "<div id='card2'><p>Player 2 has chosen Petyr Baelish</p><p>Do you want to play as Petyr Baelish?</p><button onclick='option6Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>";
    }
}
function option7() {
    if (player1.length === 0 && player2.length === 0) {
       openModal7(); document.getElementById("modalcontent7").innerHTML = "<div id='card1'><p>Player 1 has chosen Robert Baratheon</p><p>Do you want to play as Robert Baratheon?</p><button onclick='option7Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>"; 
    } else if (player1.length === 1 && player2.length === 0) {
       openModal7(); document.getElementById("modalcontent7").innerHTML = "<div id='card2'><p>Player 2 has chosen Robert I Baratheon</p><p>Do you want to play as Robert I Baratheon?</p><button onclick='option7Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>";
    }
}
function option8() {
    if (player1.length === 0 && player2.length === 0) {
       openModal8(); document.getElementById("modalcontent8").innerHTML = "<div id='card1'><p>Player 1 has chosen Daenerys Targaryan</p><p>Do you want to play as Daenerys Targaryan?</p><button onclick='option8Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>"; 
    } else if (player1.length === 1 && player2.length === 0) {
       openModal8(); document.getElementById("modalcontent8").innerHTML = "<div id='card2'><p>Player 2 has chosen Daenerys Targaryan</p><p>Do you want to play as Daenerys Targaryan?</p><button onclick='option8Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>";
    }
}
function option9() {
    if (player1.length === 0 && player2.length === 0) {
       openModal9(); document.getElementById("modalcontent9").innerHTML = "<div id='card1'><p>Player 1 has chosen Jaime Lannister</p><p>Do you want to play as Jaime Lannister?</p><button onclick='option9Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>"; 
    } else if (player1.length === 1 && player2.length === 0) {
       openModal9(); document.getElementById("modalcontent9").innerHTML = "<div id='card2'><p>Player 2 has chosen Jaime Lannister</p><p>Do you want to play as Jaime Lannister?</p><button onclick='option9Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>";
    }
}

function option10() {
    if (player1.length === 0 && player2.length === 0) {
       openModal10(); document.getElementById("modalcontent10").innerHTML = "<div id='card1'><p>Player 1 has chosen Cersei Lannister</p><p>Do you want to play as Cersei Lannister?</p><button onclick='option10Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>"; 
    } else if (player1.length === 1 && player2.length === 0) {
       openModal10(); document.getElementById("modalcontent10").innerHTML = "<div id='card2'><p>Player 2 has chosen Cersei Lannister</p><p>Do you want to play as Cersei Lannister?</p><button onclick='option10Yes()'>Yes!</button><button onclick='option1No()'>No...</button></div>";
    }
}
/* If player chooses yes for a character, checking for player 1 or 2
------------------------------------------------*/
function option1Yes() {
    if (player1.length === 0 && player2.length === 0) {
        modal.style.display = "none";
        player1.push("John Snow");
        document.getElementById("charOption1").remove();
        document.getElementById("player1").innerHTML = "<p>Player 1 has chosen " + player1[0] + "!</p>" + "<img class='imagePlayer' src='" + storeImages[0] + "'>"
        document.getElementById("whichPlayer").innerHTML = "Player 2 must choose:"
    } else if (player1.length === 1 && player2.length === 0) {
        modal.style.display = "none";
        player2.push("John Snow");
        document.getElementById("charOption1").remove();
        document.getElementById("player2").innerHTML = "<p>Player 2 has chosen " + player2[0] + "!</p>" + "<img class='imagePlayer' src='" + storeImages[0] + "'>"
        document.getElementById("whichPlayer").innerHTML = "";
        document.getElementById("rules").innerHTML = "";
        document.getElementById("content-wrap").innerHTML = "<div class='vs'><h2>Player one: " + player1[0] + "</h2> <h1>VS</h1> <h2>Player two: " + player2[0] + "</h2></div><a href='game.html'><div id='divplay' class='divplay'><h1 class='play'>Lets Play!</h1></div></a>";
        save();
    }
}
function option2Yes() {
    if (player1.length === 0 && player2.length === 0) {
        modal2.style.display = "none";
        player1.push("Khal Drogo")
        document.getElementById("charOption2").remove();
        document.getElementById("player1").innerHTML = "<p>Player 1 has chosen " + player1[0] + "!</p>" + "<img class='imagePlayer' src='" + storeImages[1] + "'>"
        document.getElementById("whichPlayer").innerHTML = "Player 2 must choose:"
    } else if (player1.length === 1 && player2.length === 0) {
        modal2.style.display = "none";
        player2.push("Khal Drogo");
       
        document.getElementById("charOption2").remove();
        document.getElementById("player2").innerHTML = "<p>Player 2 has chosen " + player2[0] + "!</p>" + "<img class='imagePlayer' src='" + storeImages[1] + "'>"
        document.getElementById("whichPlayer").innerHTML = "";
        document.getElementById("rules").innerHTML = "";
        document.getElementById("content-wrap").innerHTML = "<div class='vs'>Player one: " + player1[0] + " VS Player two: " + player2[0] + "</div><a href='game.html'><div id='divplay' class='divplay'><h1 class='play'>Lets Play!</h1></div></a>";
        save();
    }
}
function option3Yes() {
    if (player1.length === 0 && player2.length === 0) {
        modal3.style.display = "none";
        player1.push("Sansa Stark")
        document.getElementById("charOption3").remove();
        document.getElementById("player1").innerHTML = "<p>Player 1 has chosen " + player1[0] + "!</p>" + "<img class='imagePlayer' src='" + storeImages[2] + "'>"
        document.getElementById("whichPlayer").innerHTML = "Player 2 must choose:"
    } else if (player1.length === 1 && player2.length === 0) {
        modal3.style.display = "none";
        player2.push("Sansa Stark");
       
        document.getElementById("charOption3").remove();
        document.getElementById("player2").innerHTML = "<p>Player 2 has chosen " + player2[0] + "!</p>" + "<img class='imagePlayer' src='" + storeImages[2] + "'>"
        document.getElementById("whichPlayer").innerHTML = "";
        document.getElementById("rules").innerHTML = "";
        document.getElementById("content-wrap").innerHTML = "<div class='vs'>Player one: " + player1[0] + " VS Player two: " + player2[0] + "</div><a href='game.html'><div id='divplay' class='divplay'><h1 class='play'>Lets Play!</h1></div></a>";
        save();
    }
}
function option4Yes() {
    if (player1.length === 0 && player2.length === 0) {
        modal4.style.display = "none";
        player1.push("Tyrion Lannister")
       
        document.getElementById("charOption4").remove();
        document.getElementById("player1").innerHTML = "<p>Player 1 has chosen " + player1[0] + "!</p>" + "<img class='imagePlayer' src='" + storeImages[3] + "'>"
        document.getElementById("whichPlayer").innerHTML = "Player 2 must choose:"
    } else if (player1.length === 1 && player2.length === 0) {
        modal4.style.display = "none";
        player2.push("Tyrion Lannister");
      
        document.getElementById("charOption4").remove();
        document.getElementById("player2").innerHTML = "<p>Player 2 has chosen " + player2[0] + "!</p>" + "<img class='imagePlayer' src='" + storeImages[3] + "'>"
        document.getElementById("whichPlayer").innerHTML = "";
        document.getElementById("rules").innerHTML = "";
        document.getElementById("content-wrap").innerHTML = "<div class='vs'>Player one: " + player1[0] + " VS Player two: " + player2[0] + "</div><a href='game.html'><div id='divplay' class='divplay'><h1 class='play'>Lets Play!</h1></div></a>";
        save();
    }
}
function option5Yes() {
    if (player1.length === 0 && player2.length === 0) {
        modal5.style.display = "none";
        player1.push("King Joffrey")
       
        document.getElementById("charOption5").remove();
        document.getElementById("player1").innerHTML = "<p>Player 1 has chosen " + player1[0] + "!</p>" + "<img class='imagePlayer' src='" + storeImages[4] + "'>"
        document.getElementById("whichPlayer").innerHTML = "Player 2 must choose:"
    } else if (player1.length === 1 && player2.length === 0) {
        modal5.style.display = "none";
        player2.push("King Joffrey");
        document.getElementById("charOption5").remove();
        document.getElementById("player2").innerHTML = "<p>Player 2 has chosen " + player2[0] + "!</p>" + "<img class='imagePlayer' src='" + storeImages[4] + "'>"
        document.getElementById("whichPlayer").innerHTML = "";
        document.getElementById("rules").innerHTML = "";
        document.getElementById("content-wrap").innerHTML = "<div class='vs'>Player one: " + player1[0] + " VS Player two: " + player2[0] + "</div><a href='game.html'><div id='divplay' class='divplay'><h1 class='play'>Lets Play!</h1></div></a>";
        save();
    }
}
function option6Yes() {
    if (player1.length === 0 && player2.length === 0) {
        modal6.style.display = "none";
        player1.push("Petyr Baelish")
       
        document.getElementById("charOption6").remove();
        document.getElementById("player1").innerHTML = "<p>Player 1 has chosen " + player1[0] + "!</p>" + "<img class='imagePlayer' src='" + storeImages[5] + "'>"
        document.getElementById("whichPlayer").innerHTML = "Player 2 must choose:"
    } else if (player1.length === 1 && player2.length === 0) {
        modal6.style.display = "none";
        player2.push("Petyr Baelish");
       
        document.getElementById("charOption2").remove();
        document.getElementById("player2").innerHTML = "<p>Player 2 has chosen " + player2[0] + "!</p>" + "<img class='imagePlayer' src='" + storeImages[5] + "'>"
        document.getElementById("whichPlayer").innerHTML = "";
        document.getElementById("rules").innerHTML = "";
        document.getElementById("content-wrap").innerHTML = "<div class='vs'>Player one: " + player1[0] + " VS Player two: " + player2[0] + "</div><a href='game.html'><div id='divplay' class='divplay'><h1 class='play'>Lets Play!</h1></div></a>";
        save();
    }
}
function option7Yes() {
    if (player1.length === 0 && player2.length === 0) {
        modal7.style.display = "none";
        player1.push("Robert Baratheon")
        
        document.getElementById("charOption7").remove();
        document.getElementById("player1").innerHTML = "<p>Player 1 has chosen " + player1[0] + "!</p>" + "<img class='imagePlayer' src='" + storeImages[6] + "'>"
        document.getElementById("whichPlayer").innerHTML = "Player 2 must choose:"
    } else if (player1.length === 1 && player2.length === 0) {
        modal7.style.display = "none";
        player2.push("Robert Baratheon");
        
        document.getElementById("charOption7").remove();
        document.getElementById("player2").innerHTML = "<p>Player 2 has chosen " + player2[0] + "!</p>" + "<img class='imagePlayer' src='" + storeImages[6] + "'>"
        document.getElementById("whichPlayer").innerHTML = "";
        document.getElementById("rules").innerHTML = "";
        document.getElementById("content-wrap").innerHTML = "<div class='vs'>Player one: " + player1[0] + " VS Player two: " + player2[0] + "</div><a href='game.html'><div id='divplay' class='divplay'><h1 class='play'>Lets Play!</h1></div></a>";
        save();
    }
}
function option8Yes() {
    if (player1.length === 0 && player2.length === 0) {
        modal8.style.display = "none";
        player1.push("Daenerys Targaryan")
        document.getElementById("charOption8").remove();
        document.getElementById("player1").innerHTML = "<p>Player 1 has chosen " + player1[0] + "!</p>" + "<img class='imagePlayer' src='" + storeImages[7] + "'>"
        document.getElementById("whichPlayer").innerHTML = "Player 2 must choose:"
    } else if (player1.length === 1 && player2.length === 0) {
        modal8.style.display = "none";
        player2.push("Daenerys Targaryan");
       
        document.getElementById("charOption8").remove();
        document.getElementById("player2").innerHTML = "<p>Player 2 has chosen " + player2[0] + "!</p>" + "<img class='imagePlayer' src='" + storeImages[7] + "'>"
        document.getElementById("whichPlayer").innerHTML = "";
        document.getElementById("rules").innerHTML = "";
        document.getElementById("content-wrap").innerHTML = "<div class='vs'>Player one: " + player1[0] + " VS Player two: " + player2[0] + "</div><a href='game.html'><div id='divplay' class='divplay'><h1 class='play'>Lets Play!</h1></div></a>";
        save();
    }
}
function option9Yes() {
    if (player1.length === 0 && player2.length === 0) {
        modal9.style.display = "none";
        player1.push("Jamie Lannister")
        document.getElementById("charOption9").remove();
        document.getElementById("player1").innerHTML = "<p>Player 1 has chosen " + player1[0] + "!</p>" + "<img class='imagePlayer' src='" + storeImages[8] + "'>"
        document.getElementById("whichPlayer").innerHTML = "Player 2 must choose:"
    } else if (player1.length === 1 && player2.length === 0) {
        modal9.style.display = "none";
        player2.push("Jamie Lannister");
       
        document.getElementById("charOption9").remove();
        document.getElementById("player2").innerHTML = "<p>Player 2 has chosen " + player2[0] + "!</p>" + "<img class='imagePlayer' src='" + storeImages[8] + "'>"
        document.getElementById("whichPlayer").innerHTML = "";
        document.getElementById("rules").innerHTML = "";
        document.getElementById("content-wrap").innerHTML = "<div class='vs'>Player one: " + player1[0] + " VS Player two: " + player2[0] + "</div><a href='game.html'><div id='divplay' class='divplay'><h1 class='play'>Lets Play!</h1></div></a>";
        save();
    }
}
function option10Yes() {
    if (player1.length === 0 && player2.length === 0) {
        modal10.style.display = "none";
        player1.push("Cersei Lannister")
       
        document.getElementById("charOption10").remove();
        document.getElementById("player1").innerHTML = "<p>Player 1 has chosen " + player1[0] + "!</p>" + "<img class='imagePlayer' src='" + storeImages[9] + "'>"
        document.getElementById("whichPlayer").innerHTML = "Player 2 must choose:"
    } else if (player1.length === 1 && player2.length === 0) {
        modal10.style.display = "none";
        player2.push("Cersei Lannister");
       
        document.getElementById("charOption8").remove();
        document.getElementById("player2").innerHTML = "<p>Player 2 has chosen " + player2[0] + "!</p>" + "<img class='imagePlayer' src='" + storeImages[9] + "'>"
        document.getElementById("whichPlayer").innerHTML = "";
        document.getElementById("rules").innerHTML = "";
        document.getElementById("content-wrap").innerHTML = "<div class='vs'>Player one: " + player1[0] + " VS Player two: " + player2[0] + "</div><a href='game.html'><div id='divplay' class='divplay'><h1 class='play'>Lets Play!</h1></div></a>";
        save();
    }
}
/* If player chooses "No", close all modals
------------------------------------------------*/
function option1No() {
    if (player1.length === 0 && player2.length === 0) {
        document.getElementById("player1").innerHTML = "";
        modal.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal4.style.display = "none";
        modal5.style.display = "none";
        modal6.style.display = "none";
        modal7.style.display = "none";
        modal8.style.display = "none";
        modal9.style.display = "none";
        modal10.style.display = "none";
        
    } else if (player1.length === 1 && player2.length === 0) {
        document.getElementById("player2").innerHTML = "";  
        modal.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal4.style.display = "none";
        modal5.style.display = "none";
        modal6.style.display = "none";
        modal7.style.display = "none";
        modal8.style.display = "none";
        modal9.style.display = "none";
        modal10.style.display = "none";
    }
}


/* Save the chosen characters in sessionStorage
------------------------------------------------*/
function save() {
    if (player1.length === 1 && player2.length === 1)
    sessionStorage.setItem("playerUno", player1);
    
    sessionStorage.setItem("playerDos", player2)
    sessionStorage.setItem("images", storeImages);
}

/* Find the modal id's
------------------------------------------------*/
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");
var modal9 = document.getElementById("myModal9");
var modal10 = document.getElementById("myModal10");

/* Display modals when clicks on card
------------------------------------------------*/ 
function openModal() {
  modal.style.display = "block"; 
}
function openModal2() {
  modal2.style.display = "block";  
}
function openModal3() {
  modal3.style.display = "block";  
}
function openModal4() {
  modal4.style.display = "block";  
}
function openModal5() {
  modal5.style.display = "block";  
}
function openModal6() {
  modal6.style.display = "block";  
}
function openModal7() {
  modal7.style.display = "block";  
}
function openModal8() {
  modal8.style.display = "block";  
}
function openModal9() {
  modal9.style.display = "block";  
}
function openModal10() {
  modal10.style.display = "block";  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";  
  } else if (event.target == modal2) {
      modal2.style.display = "none";
  } else if (event.target == modal3) {
      modal3.style.display = "none";
  } else if (event.target == modal4) {
      modal4.style.display = "none";
  } else if (event.target == modal5) {
      modal5.style.display = "none";
  } else if (event.target == modal6) {
      modal6.style.display = "none";
  } else if (event.target == modal7) {
      modal7.style.display = "none";
  } else if (event.target == modal8) {
      modal8.style.display = "none";
  } else if (event.target == modal9) {
      modal9.style.display = "none";
  } else if (event.target == modal10) {
      modal10.style.display = "none";
  }
}

