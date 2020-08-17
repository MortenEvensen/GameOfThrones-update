/*
Game page
------------*/
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/*
Default positioning for player 1, x and y coordinate
----------------------------------------------------*/
var circleX1 = 1125;
var circleY1 = 830;

/*
Default positioning for player 2, x and y coordinate
----------------------------------------------------*/
var circleX2 = 1125;
var circleY2 = 830;

/* Retrieve player info from first page
--------------------------------------*/
var firstPlayer1 = sessionStorage.getItem("playerUno");
var secondPlayer2 = sessionStorage.getItem("playerDos");

/* Trapo is an array that stores a value each time a player moves one step
--------------------------------------*/
var trapo = [];
/* Dicolini is the value of the dice
--------------------------------------*/
var dicolini = "";
//var dico = dicolini;

/* Player1game increases by one value every time player one moves
--------------------------------------*/
var player1game = [1, 1];
/* Player2game increases by one value every time player one moves
--------------------------------------*/
var player2game = [1, 1];
/* diceNumber is the value of the dice
--------------------------------------*/
var diceNumber = "";

/* Draw() launches initial game page/canvas
---------------------------------------------*/
draw();


/* The game
-----------------*/
function draw() {
/* Clear the canvas every time a player moves
----------------------------------------------*/
    ctx.clearRect(0, 0, canvas.width, canvas.height)

/* The canvas board
--------------------*/
    
/* Bottom line
---------------*/
    ctx.beginPath();
    ctx.rect(1050, 750, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("1", 1055, 775);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(900, 750, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("2", 1055 - 150, 775);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(750, 750, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("3", 1055 - 150 - 150, 775);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(600, 750, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("4", 1055 - 150 - 150 - 150, 775);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(450, 750, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("5", 1055 - 150 - 150 - 150 - 150, 775);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(300, 750, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("6", 1055 - 150 - 150 - 150 - 150 - 150, 775);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(150, 750, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("7", 1055 - 150 - 150 - 150 - 150 - 150 - 150, 775);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(0, 750, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("8", 1055 - 150 - 150 - 150 - 150 - 150 - 150 - 150, 775);
    ctx.stroke();

/* Second line
-------------*/
    ctx.beginPath();
    ctx.rect(1050, 600, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("9", 1055, 775 - 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(900, 600, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("10", 1055 - 150, 775 - 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(750, 600, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("11", 1055 - 150 - 150, 775 - 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(600, 600, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("12", 1055 - 150 - 150 - 150, 775 - 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(450, 600, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("13", 1055 - 150 - 150 - 150 - 150, 775 - 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(300, 600, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("14", 1055 - 150 - 150 - 150 - 150 - 150, 775 - 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(150, 600, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("15", 1055 - 150 - 150 - 150 - 150 - 150 - 150, 775 - 150);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(0, 600, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("16", 1055 - 150 - 150 - 150 - 150 - 150 - 150 - 150, 775 - 150);
    ctx.stroke();

/* Third line
-------------*/
    ctx.beginPath();
    ctx.rect(1050, 750 - 300, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("17", 1055, 775 - 300);
    ctx.stroke();


    ctx.beginPath();
    ctx.rect(900, 750 - 300, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("18", 1055 - 150, 775 - 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(750, 750 - 300, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("19", 1055 - 150 - 150, 775 - 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(600, 750 - 300, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("20", 1055 - 150 - 150 - 150, 775 - 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(450, 750 - 300, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("21", 1055 - 150 - 150 - 150 - 150, 775 - 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(300, 750 - 300, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("22", 1055 - 150 - 150 - 150 - 150 - 150, 775 - 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(150, 750 - 300, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("23", 1055 - 150 - 150 - 150 - 150 - 150 - 150, 775 - 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(0, 750 - 300, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("24", 1055 - 150 - 150 - 150 - 150 - 150 - 150 - 150, 775 - 300);
    ctx.stroke();

/* Fourth line
-------------*/
    ctx.beginPath();
    ctx.rect(1050, 600 - 300, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("25", 1055, 775 - 450);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(900, 600 - 300, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("26", 1055 - 150, 775 - 450);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(750, 600 - 300, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("27", 1055 - 150 - 150, 775 - 450);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(600, 600 - 300, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("28", 1055 - 150 - 150 - 150, 775 - 450);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(450, 600 - 300, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("29", 1055 - 150 - 150 - 150 - 150, 775 - 450);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(300, 600 - 300, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("30", 1055 - 150 - 150 - 150 - 150 - 150, 775 - 450);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(150, 600 - 300, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("31", 1055 - 150 - 150 - 150 - 150 - 150 - 150, 775 - 450);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(0, 600 - 300, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("32", 1055 - 150 - 150 - 150 - 150 - 150 - 150 - 150, 775 - 450);
    ctx.stroke();

 /* Fifth line
-------------*/
    ctx.beginPath();
    ctx.rect(1050, 750 - 600, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("33", 1055, 775 - 600);
    ctx.stroke();


    ctx.beginPath();
    ctx.rect(900, 750 - 600, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("34", 1055 - 150, 775 - 600);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(750, 750 - 600, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("35", 1055 - 150 - 150, 775 - 600);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(600, 750 - 600, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("36", 1055 - 150 - 150 - 150, 775 - 600);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(450, 750 - 600, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("37", 1055 - 150 - 150 - 150 - 150, 775 - 600);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(300, 750 - 600, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("38", 1055 - 150 - 150 - 150 - 150 - 150, 775 - 600);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(150, 750 - 600, 150, 150);
    ctx.fillStyle = "grey"
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("39", 1055 - 150 - 150 - 150 - 150 - 150 - 150, 775 - 600);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(0, 750 - 600, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("40", 1055 - 150 - 150 - 150 - 150 - 150 - 150 - 150, 775 - 600);
    ctx.stroke();

    /* initial starting point
    --------------*/

    var x1 = "";
    var y1 = "";

    var x2 = "";
    var y2 = "";


/* Goal graphics
--------------*/

/* Green square
--------------*/
    ctx.beginPath();
    ctx.rect(0, 0, 1200, 150);
    ctx.fillStyle = "#0b6623";
    ctx.fill();
/* Sword and shield graphics
----------------------------*/
    var imageSword = document.getElementById("swordSource");
    ctx.drawImage(imageSword, 15, 15, 110, 110);
    var imageShield = document.getElementById("shieldSource");
    ctx.drawImage(imageShield, 1065, 10, 110, 130);
/* Text and number
----------------------------*/
    ctx.beginPath();
    ctx.font = "100px Verdana";
    ctx.fillStyle = "#aaaaaa";
    ctx.fillText("Goal", 475, 110);
    ctx.fill();

    ctx.beginPath();
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#aaaaaa";
    ctx.strokeText("41", 575, 25);
    ctx.stroke();

/* Graphics/traps, images retrieved from html
---------------------------------------------*/

    var imageStark = document.getElementById("starkSource");
    ctx.drawImage(imageStark, 155, 780, 130, 90)
    var imageLannister = document.getElementById("lannisterSource");
    ctx.drawImage(imageLannister, 470, 620, 100, 120)
    var imageVale = document.getElementById("valeSource");
    ctx.drawImage(imageVale, 620, 470, 110, 110)
    var imageBaratheon = document.getElementById("baratheonSource");
    ctx.drawImage(imageBaratheon, 925, 305, 100, 130)
    var imageTargaryan = document.getElementById("targaryanSource");
    ctx.drawImage(imageTargaryan, 760, 165, 120, 120)

/* Player graphics, images retrieved from html
-----------------------------------------------*/
    var imageJohn = document.getElementById("johnSnow");
    var imageCersei = document.getElementById("cersei");
    var imageDaenerys = document.getElementById("daenerys");
    var imageDrogo = document.getElementById("drogo");
    var imageGeofrey = document.getElementById("geofrey");
    var imageJamie = document.getElementById("jamie");
    var imageBaelish = document.getElementById("baelish");
    var imageRobert = document.getElementById("robert");
    var imageSansa = document.getElementById("sansa");
    var imageTyrion = document.getElementById("tyrion");


/* Player 2 game graphics
-----------------------------------------------*/

    ctx.beginPath();
    ctx.fillStyle = "#aaaaaa";
    ctx.strokeStyle = "#000000";
    ctx.font = "10px Arial";
    ctx.arc(circleX2, circleY2, 65, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.strokeText(secondPlayer2, circleX2 - 35, circleY2 + 45);
    ctx.stroke();

 /* Checking which player is chosen, adding the right graphics
-----------------------------------------------*/   
    if (secondPlayer2 === "John Snow") {
        ctx.drawImage(imageJohn, circleX2 - 45, circleY2 - 60, 90, 100)
    } else if (secondPlayer2 === "Khal Drogo") {
        ctx.drawImage(imageDrogo, circleX2 - 35, circleY2 - 50, 70, 100)
    } else if (secondPlayer2 === "Sansa Stark") {
        ctx.drawImage(imageSansa, circleX2 - 40, circleY2 - 60, 75, 100)
    } else if (secondPlayer2 === "Tyrion Lannister") {
        ctx.drawImage(imageTyrion, circleX2 - 30, circleY2 - 60, 60, 100)
    } else if (secondPlayer2 === "King Joffrey") {
        ctx.drawImage(imageGeofrey, circleX2 - 45, circleY2 - 60, 90, 100)
    } else if (secondPlayer2 === "Petyr Baelish") {
        ctx.drawImage(imageBaelish, circleX2 - 30, circleY2 - 60, 70, 100)
    } else if (secondPlayer2 === "Robert Baratheon") {
        ctx.drawImage(imageRobert, circleX2 - 40, circleY2 - 60, 80, 100)
    } else if (secondPlayer2 === "Daenerys Targaryan") {
        ctx.drawImage(imageDaenerys, circleX2 - 40, circleY2 - 60, 80, 100)
    } else if (secondPlayer2 === "Jamie Lannister") {
        ctx.drawImage(imageJamie, circleX2 - 45, circleY2 - 60, 85, 100)
    } else if (secondPlayer2 === "Cersei Lannister") {
        ctx.drawImage(imageCersei, circleX2 - 35, circleY2 - 60, 70, 100)
    }

/* Player 1 game graphics
-----------------------------------------------*/

    ctx.beginPath();
    ctx.fillStyle = "#cccccc";
    ctx.strokeStyle = " #000000";
    ctx.font = "10px Arial";
    ctx.arc(circleX1, circleY1, 65, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.strokeText(firstPlayer1, circleX1 - 35, circleY1 + 45);
    ctx.stroke();
    
 /* Checking which player is chosen, adding the right graphics
-----------------------------------------------*/   
    if (firstPlayer1 === "John Snow") {
        ctx.drawImage(imageJohn, circleX1 - 45, circleY1 - 60, 90, 100)
    } else if (firstPlayer1 === "Khal Drogo") {
        ctx.drawImage(imageDrogo, circleX1 - 30, circleY1 - 60, 60, 100)
    } else if (firstPlayer1 === "Sansa Stark") {
        ctx.drawImage(imageSansa, circleX1 - 40, circleY1 - 60, 75, 100)
    } else if (firstPlayer1 === "Tyrion Lannister") {
        ctx.drawImage(imageTyrion, circleX1 - 30, circleY1 - 60, 60, 100)
    } else if (firstPlayer1 === "King Joffrey") {
        ctx.drawImage(imageGeofrey, circleX1 - 45, circleY1 - 60, 90, 100)
    } else if (firstPlayer1 === "Petyr Baelish") {
        ctx.drawImage(imageBaelish, circleX1 - 30, circleY1 - 60, 70, 100)
    } else if (firstPlayer1 === "Robert Baratheon") {
        ctx.drawImage(imageRobert, circleX1 - 35, circleY1 - 60, 70, 100)
    } else if (firstPlayer1 === "Daenerys Targaryan") {
        ctx.drawImage(imageDaenerys, circleX1 - 35, circleY1 - 60, 70, 100)
    } else if (firstPlayer1 === "Jamie Lannister") {
        ctx.drawImage(imageJamie, circleX1 - 45, circleY1 - 60, 85, 100)
    } else if (firstPlayer1 === "Cersei Lannister") {
        ctx.drawImage(imageCersei, circleX1 - 35, circleY1 - 60, 70, 100)
    }

/* Checking for traps 
----------------------*/

    /* Trap 1 - Stark trap
    ----------------------*/
    if ((circleX1 === 225) && (circleY1 === 830) && (trapo.length === dicolini)) {
        trap1();
    } else if ((circleX2 === 225) && (circleY2 === 830) && (trapo.length === dicolini)) {
        trap1();
    }
    /* Trap 2 - Lannister trap
    ----------------------*/
    if ((circleX1 === 525) && (circleY1 === 680) && trapo.length === dicolini) {
        trap2();
    } else if ((circleX2 === 525) && (circleY2 === 680) && trapo.length === dicolini) {
        trap2();
    };
    /* Trap 3 - The Vale trap
    ----------------------*/
    if ((circleX1 === 675) && (circleY1 === 530) && trapo.length === dicolini) {
        trap3();
    } else if ((circleX2 === 675) && (circleY2 === 530) && trapo.length === dicolini) {
        trap3();
    };
    /* Trap 4 - Baratheon trap
    ----------------------*/
    if ((circleX1 === 975) && (circleY1 === 380) && trapo.length === dicolini) {
        trap4();
    } else if ((circleX2 === 975) && (circleY2 === 380) && trapo.length === dicolini) {
        trap4();
    };
    /* Trap 5 - Targaryan trap
    ----------------------*/
    if ((circleX1 === 825) && (circleY1 === 230) && trapo.length === dicolini) {
        trap5();
    } else if ((circleX2 === 825) && (circleY2 === 230) && trapo.length === dicolini) {
        trap5();
    };

    /* Checking for winner
    ----------------------*/
    if ((circleX1 <= 1125) && (circleY1 === 80)) {
        victory();
    } else if ((circleX2 <= 1125) && (circleY2 === 80)) {
        victory();
    };
    if (player1game.length > player2game.length && (trapo.length == dicolini)) {
        document.getElementById("turn").innerHTML = "<p class='playerMessage'>Player two/" + secondPlayer2 + ", it's your turn!</p>"
    } else if (player1game.length == player2game.length && (trapo.length == dicolini)) {
        document.getElementById("turn").innerHTML = "<p class='playerMessage'>Player one/" + firstPlayer1 + ", it's your turn!</p>"
    };
};

/* Dice and game
-----------------*/

function dice() {
/* Find dice element in html
---------------------------*/
    var diceAni = document.getElementById("diceAnimation");


    /* Player 1
    -----------------*/
    if (player1game.length === player2game.length) {
         /* Push a value to player1game
         -------------------------*/
        player1game.push(1);
         /* Clear trapo (move count)
         -------------------------*/
        trapo = [];
         /* Dice
         --------*/
        var dico = Math.floor(Math.random() * 6) + 1;
        /* Display dice number
         ---------------------*/
        document.getElementById("dice").innerHTML = "<p>You got: " + dico + "</p>";
         /* Display dice graphics
         -------------------------*/
        diceAni.innerHTML = "<img src='graphics/dice/dice" + dico + ".png'>"

        for (var i = 0; i < dico; i++) {
        /* Generating dice number into var diceNumber
        --------*/
            diceNumber = i + 1;
            dicolini = dico;
         /* If the game piece is not all the way to the left
        --------------------------------------------------------*/   
            if ((circleX1 >= 76) && (dico + 1 !== diceNumber)) {
                setTimeout(() => {
                    movePlayer();
                }, i * 500)
        /* If game piece is all the way to the left
        --------------------------------------------------------*/ 
            } else if (circleX1 === 75 && dico + 1 !== diceNumber) {
                setTimeout(() => {
                    movePlayer();
                    //trapo = [];   
                }, i * 500)
            }
/* Move player to the left
--------------------------------------------------------*/ 
            function movePlayer() {
                if (circleX1 >= 76) {
                    trapo.push(i);
                    circleX1 = circleX1 - 150;
                    draw();
                    var audio = document.getElementById("myAudio");
                    //audio.play();
                    six();
                    disableButton();
                } 
/* Move player up if player is all the way to the left
--------------------------------------------------------*/
                else if (circleX1 === 75) {
                    trapo.push(i);
                    circleY1 = circleY1 - 150;
                    circleX1 = 1125;
                    draw();
                    var audio = document.getElementById("myAudio");
                    //audio.play()
                    six();
                    disableButton();
                }
            }
        }

    }
    /* Player 2
    -----------------*/
    else if (player1game.length > player2game.length) {

        player2game.push(1);
         /* Clear trapo (move count)
         -------------------------*/
        trapo = [];
        var dico = Math.floor(Math.random() * 6) + 1;
        document.getElementById("dice").innerHTML = "<p>You got: " + dico + "</p>";
        diceAni.innerHTML = "<img src='graphics/dice/dice" + dico + ".png'>"
        for (var i = 0; i < dico; i++) {
/* Generating dice number into var diceNumber
----------------------------------------------*/
            diceNumber = i + 1;
            dicolini = dico;
 /* If the game piece is not all the way to the left
--------------------------------------------------------*/ 
            if ((circleX1 >= 76) && (dico + 1 !== diceNumber)) {
                setTimeout(() => {
                    movePlayer()
                }, i * 500)
            } 
/* If game piece is all the way to the left
--------------------------------------------------------*/ 
            else if (circleX1 === 75 && dico + 1 !== diceNumber) {
                setTimeout(() => {
                    movePlayer();
                    //trapo = []; 
                }, i * 500)
            }
/* Move player to the left
--------------------------------------------------------*/ 
            function movePlayer() {
                if (circleX2 >= 76) {
                    trapo.push(i);
                    circleX2 = circleX2 - 150;
                    draw();
                    var audio = document.getElementById("myAudio");
                    //audio.play();
                    six();
                    disableButton();
                } 
/* Move player up if player is all the way to the left
--------------------------------------------------------*/               
                else if (circleX2 === 75) {
                    trapo.push(i);
                    circleY2 = circleY2 - 150;
                    circleX2 = 1125;
                    draw();
                    var audio = document.getElementById("myAudio");
                    //audio.play()
                    six();
                    disableButton();
                }
            }
        }
    }
    /* If player gets 6
    --------------------*/
    function six() {
        document.getElementById("six").innerHTML = "";
        if (dicolini === 6 && dicolini === trapo.length) {
            if (player1game.length > player2game.length) {
                document.getElementById("turn").innerHTML = "<p class='playerMessage'>Player one/" + firstPlayer1 + ", it's still your turn!</p>";
                document.getElementById("six").innerHTML = "<p class='six'>Player One got a six, therefore you get to throw the dice one more time!</p>";
                player1game.shift();
            } else if (player1game.length === player2game.length) {
                console.log("six else")
                document.getElementById("turn").innerHTML = "<p class='playerMessage'>Player two/" + secondPlayer2 + ", it's still your turn!</p>";
                document.getElementById("six").innerHTML = "<p class='six'>Player Two got a six, therefore you get to throw the dice one more time!</p>";

                player2game.shift();
            }
        }
    }
/* Disable dice button if a player moves
----------------------------------------*/
    function disableButton() {
        if (dicolini != trapo.length) {
            document.getElementById("diceButton").disabled = true;
        } else {
            document.getElementById("diceButton").disabled = false;
        }
    }

}


/* Traps!
----------*/

function trap1() {
    /* Player 1 Stark trap as Stark player
    ----------------------*/
    if ((player1game.length > player2game.length) && ((firstPlayer1 === "John Snow") || (firstPlayer1 === "Sansa Stark")) && ((circleX1 === 225) && (circleY1 === 830))) {
        setTimeout(() => {
            console.log("trap opt1")
            document.getElementById("trap1modal-wrap").style.display = "block";
            document.getElementById("diceButton").disabled = true;
            document.getElementById("trap1").innerHTML = "<p>You encounter a camp filled with Stark soliders! Since you are " + firstPlayer1 + " you are most welcome! The soliders lends you a horse, and you move forward 4 spaces!</p><button  id='modalButton' class='modalButton' onclick='closeModal()'>Great!</button>";
            circleX1 = 1125 - 300;
            circleY1 = 830 - 150
            //trapo = [];
            draw();
        }, 100);
        /* Player 1 Stark trap as non-Stark player
    ----------------------*/
    } else if ((player1game.length > player2game.length) && ((firstPlayer1 != "John Snow") || (firstPlayer1 != "Sansa Stark")) && ((circleX1 === 225) && (circleY1 === 830))) {
        setTimeout(() => {
            console.log("trap opt2")
            document.getElementById("trap1modal-wrap").style.display = "block";
            document.getElementById("diceButton").disabled = true;
            document.getElementById("trap1").innerHTML = "<p>You encounter a camp filled with Stark soliders! Since you are " + firstPlayer1 + " you are not welcome here! The soliders chase you, and you move back 4 spaces!</p><button id='modalButton' class='modalButton' onclick='closeModal()'>I better run!</button>";

            circleX1 = circleX1 + 600;
            //trapo = [];
            draw();
        }, 100);
    }
    /* Player 2 Stark trap as Stark player
    ----------------------*/
    else if ((player1game.length === player2game.length) && ((secondPlayer2 === "John Snow") || (secondPlayer2 === "Sansa Stark")) && ((circleX2 === 225) && (circleY2 === 830))) {
        setTimeout(() => {
            console.log("trap opt3")
            document.getElementById("trap1modal-wrap").style.display = "block";
            document.getElementById("diceButton").disabled = true;
            document.getElementById("trap1").innerHTML = "<p>You encounter a camp filled with Stark soliders! Since you are " + secondPlayer2 + " you are most welcome! The soliders lends you a horse, and you move forward 4 spaces!</p><button  id='modalButton' class='modalButton' onclick='closeModal()'>Great!</button>";
            circleX2 = 1125 - 300;
            circleY2 = 830 - 150
            //trapo = [];
            draw();
        }, 100);
        /* Player 2 trap as non-Stark player 
        ----------------------*/
    } else if ((player1game.length === player2game.length) && ((secondPlayer2 != "John Snow") || (secondPlayer2 != "Sansa Stark")) && ((circleX2 === 225) && (circleY2 === 830))) {
        setTimeout(() => {
            console.log("trap opt4")
            document.getElementById("trap1modal-wrap").style.display = "block";
            document.getElementById("diceButton").disabled = true;
            document.getElementById("trap1").innerHTML = "<p>You encounter a camp filled with Stark soliders! Since you are " + secondPlayer2 + " you are not welcome here! The soliders chase you, and you move back 4 spaces!</p><button id='modalButton' class='modalButton' onclick='closeModal()'>I better run!</button>";

            circleX2 = circleX2 + 600;
            //trapo = [];
            draw();
        }, 100);
    }
}

function trap2() {
    /* Player 1 Lannister trap as Lannister player
    ----------------------*/
    if ((player1game.length > player2game.length) && ((firstPlayer1 === "Jamie Lannister") || (firstPlayer1 === "Cersei Lannister") || (firstPlayer1 === "King Joffrey") || (firstPlayer1 === "Tyrion Lannister")) && ((circleX1 === 525) && (circleY1 === 680))) {
        setTimeout(() => {
            document.getElementById("trap1modal-wrap").style.display = "block";
            document.getElementById("diceButton").disabled = true;
            document.getElementById("trap1").innerHTML = "<p>You encounter a small Lannister Army! Since you are " + firstPlayer1 + " the army welcomes you! They give you food and water, and you feel your energy is comming back! Therefore you mange to travel 3 more spaces</p><button id='modalButton' class='modalButton' onclick='closeModal()'>Go Lannisters!</button>";
            circleX1 = circleX1 - 450;

            //trapo = [];
            draw();
        }, 100);
        /* Player 1 Lannister trap as non-Lannister player
    ----------------------*/
    } else if ((player1game.length > player2game.length) && ((firstPlayer1 != "Jamie Lannister") || (firstPlayer1 != "Cersei Lannister") || (firstPlayer1 != "King Joffrey") || (firstPlayer1 != "Tyrion Lannister")) && ((circleX1 === 525) && (circleY1 === 680))) {
        setTimeout(() => {
            document.getElementById("trap1modal-wrap").style.display = "block";
            document.getElementById("diceButton").disabled = true;
            document.getElementById("trap1").innerHTML = "<p>You encounter a small Lannister Army! Since you are " + firstPlayer1 + " you are not welcome here! The soliders prepare to attack you, and therefore you run back as fast as you can. Move back 3 spaces!</p><button id='modalButton' class='modalButton' onclick='closeModal()'>I hate the Lannisters...</button>";

            circleX1 = circleX1 + 450;
            //trapo = [];
            draw();
        }, 100);
    }
    /* Player 2 Lannister trap as Lannister player
    ----------------------*/
    else if ((player1game.length === player2game.length) && ((secondPlayer2 === "Jamie Lannister") || (secondPlayer2 === "Cersei Lannister") || (secondPlayer2 === "King Joffrey") || (secondPlayer2 === "Tyrion Lannister")) && ((circleX2 === 525) && (circleY2 === 680))) {
        setTimeout(() => {
            document.getElementById("trap1modal-wrap").style.display = "block";
            document.getElementById("diceButton").disabled = true;
            document.getElementById("trap1").innerHTML = "<p>You encounter a small Lannister Army! Since you are " + secondPlayer2 + " the army welcomes you! They give you food and water, and you feel your energy is comming back! Therefore you mange to travel 3 more spaces</p><button id='modalButton' class='modalButton' onclick='closeModal()'>Go Lannisters!</button>";
            circleX2 = circleX2 - 450;
            //trapo = [];
            draw();
        }, 100);
        /* Player 2 trap as non-Lannister player 
        ----------------------*/
    } else if ((player1game.length === player2game.length) && ((secondPlayer2 != "Jamie Lannister") || (secondPlayer2 != "Cersei Lannister") || (secondPlayer2 != "King Joffrey") || (secondPlayer2 != "Tyrion Lannister")) && ((circleX2 === 525) && (circleY2 === 680))) {
        setTimeout(() => {
            document.getElementById("trap1modal-wrap").style.display = "block";
            document.getElementById("diceButton").disabled = true;
            document.getElementById("trap1").innerHTML = "<p>You encounter a small Lannister Army! Since you are " + secondPlayer2 + " you are not welcome here! The soliders prepare to attack you, and therefore you run back as fast as you can. Move back 3 spaces!</p><button id='modalButton' class='modalButton' onclick='closeModal()'>I hate the Lannisters...</button>";

            circleX2 = circleX2 + 450;
            //trapo = [];
            draw();
        }, 100);
    }
}

function trap3() {
    /* Player 1 The Vale trap as The Vale player
    ----------------------*/
    if ((player1game.length > player2game.length) && (firstPlayer1 === "Petyr Baelish") && ((circleX1 === 675) && (circleY1 === 530))) {
        setTimeout(() => {
            document.getElementById("trap1modal-wrap").style.display = "block";
            document.getElementById("diceButton").disabled = true;
            document.getElementById("trap1").innerHTML = "<p>A wild group og Vale Knigths appears! Since you are " + firstPlayer1 + " the Knights offers you a horse! You manage to move 3 more spaces forwards!</p><button id='modalButton' class='modalButton' onclick='closeModal()'>Chaos is a ladder!</button>";
            circleX1 = circleX1 - 450;

            //trapo = [];
            draw();
        }, 100);
        /* Player 1 The Vale trap as non-The Vale
    ----------------------*/
    } else if ((player1game.length > player2game.length) && (firstPlayer1 != "Petyr Baelish") && ((circleX1 === 675) && (circleY1 === 530))) {
        setTimeout(() => {
            document.getElementById("trap1modal-wrap").style.display = "block";
            document.getElementById("diceButton").disabled = true;
            document.getElementById("trap1").innerHTML = "<p>A wild group og Vale Knigths appears! Since you are " + firstPlayer1 + " the Knights tells you in an unpolite way to leave the area! You move 3 spaces backwards!</p><button id='modalButton' class='modalButton' onclick='closeModal()'>I don't like The Vale...</button>";

            circleX1 = circleX1 + 450;
            //trapo = [];
            draw();
        }, 100);
    }
    /* Player 2 The Vale trap as The Vale player
    ----------------------*/
    else if ((player1game.length === player2game.length) && (secondPlayer2 === "Petyr Baelish") && (circleX2 === 675) && (circleY2 === 530)) {
        setTimeout(() => {
            document.getElementById("trap1modal-wrap").style.display = "block";
            document.getElementById("diceButton").disabled = true;
            document.getElementById("trap1").innerHTML = "<p>A wild group og Vale Knigths appears! Since you are " + secondPlayer2 + " the Knights offers you a horse! You manage to move 3 more spaces forwards!</p><button id='modalButton' class='modalButton' onclick='closeModal()'>Chaos is a ladder!</button>";
            circleX2 = circleX2 - 450;
            //trapo = [];
            draw();
        }, 100);
        /* Player 2 trap as non-The Vale player 
        ----------------------*/
    } else if ((player1game.length === player2game.length) && (secondPlayer2 != "Petyr Baelish") && (circleX2 === 675) && (circleY2 === 530)) {
        setTimeout(() => {
            document.getElementById("trap1modal-wrap").style.display = "block";
            document.getElementById("diceButton").disabled = true;
            document.getElementById("trap1").innerHTML = "<p>A wild group og Vale Knigths appears! Since you are " + secondPlayer2 + " the Knights tells you in an unpolite way to leave the area! You move 3 spaces backwards!</p><button id='modalButton' class='modalButton' onclick='closeModal()'>I don't like The Vale...</button>";

            circleX2 = circleX2 + 450;
            //trapo = [];
            draw();
        }, 100);
    }
}

function trap4() {
    /* Player 1 Baratheon trap as Baratheon player
    ----------------------*/
    if ((player1game.length > player2game.length) && (firstPlayer1 === "Robert Baratheon") && ((circleX1 === 975) && (circleY1 === 380))) {
        setTimeout(() => {
            document.getElementById("trap1modal-wrap").style.display = "block";
            document.getElementById("diceButton").disabled = true;
            document.getElementById("trap1").innerHTML = "<p>A Baratheon Army appears! Since you are " + firstPlayer1 + " the army welcomes their king! You join the army for a while and move 4 spaces forward!</p><button id='modalButton' class='modalButton' onclick='closeModal()'>Baratheon rules</button>";
            circleX1 = circleX1 - 600;

            //trapo = [];
            draw();
        }, 100);
        /* Player 1 Baratheon trap as non-Baratheon player
    ----------------------*/
    } else if ((player1game.length > player2game.length) && (firstPlayer1 != "Robert Baratheon") && ((circleX1 === 975) && (circleY1 === 380))) {
        setTimeout(() => {
            document.getElementById("trap1modal-wrap").style.display = "block";
            document.getElementById("diceButton").disabled = true;
            document.getElementById("trap1").innerHTML = "<p>A Baratheon Army appears! Since you are " + firstPlayer1 + " the Baratheon army attacs you! You run away and move 3 spaces backwards!</p><button id='modalButton' class='modalButton' onclick='closeModal()'>Bloody Baratheons..!</button>";

            circleX1 = 225;
            circleY1 = 530;
            //trapo = [];
            draw();
        }, 100);
    }
    /* Player 2 Baratheon trap as The Vale player
    ----------------------*/
    else if ((player1game.length === player2game.length) && (secondPlayer2 === "Robert Baratheon") && (circleX2 === 975) && (circleY2 === 380)) {
        setTimeout(() => {
            document.getElementById("trap1modal-wrap").style.display = "block";
            document.getElementById("diceButton").disabled = true;
            document.getElementById("trap1").innerHTML = "<p>A Baratheon Army appears! Since you are " + secondPlayer2 + " the army welcomes their king! You join the army for a while and move 4 spaces forward!</p><button id='modalButton' class='modalButton' onclick='closeModal()'>Baratheon rules</button>";
            circleX2 = circleX2 - 600;
            //trapo = [];
            draw();
        }, 100);
        /* Player 2 trap as non-Baratheon player 
        ----------------------*/
    } else if ((player1game.length === player2game.length) && (secondPlayer2 != "Robert Baratheon") && (circleX2 === 975) && (circleY2 === 380)) {
        console.log("tr")
        setTimeout(() => {
            document.getElementById("trap1modal-wrap").style.display = "block";
            document.getElementById("diceButton").disabled = true;
            document.getElementById("trap1").innerHTML = "<p>A Baratheon Army appears! Since you are " + secondPlayer2 + " the Baratheon army attacs you! You run away and move 3 spaces backwards!</p><button id='modalButton' class='modalButton' onclick='closeModal()'>Bloody Baratheons..!</button>";

            circleX2 = 225;
            circleY2 = 530;
            //trapo = [];
            draw();
        }, 100);
    }
}

function trap5() {
    /* Player 1 Targaryan trap as Targaryan player
    ----------------------*/
    if ((player1game.length > player2game.length) && (firstPlayer1 === "Daenerys Targaryan") && ((circleX1 === 825) && (circleY1 === 230))) {
        setTimeout(() => {
            document.getElementById("trap1modal-wrap").style.display = "block";
            document.getElementById("diceButton").disabled = true;
            document.getElementById("trap1").innerHTML = "<p>A dragon appears! Since you are " + firstPlayer1 + " the dragon alows you to fly on it's back! He flyes you just one step away from the throne!</p><button id='modalButton' class='modalButton' onclick='closeModal()'>Fire!</button>";
            circleX1 = circleX1 - 750;

            //trapo = [];
            draw();
        }, 100);
        /* Player 1 Targaryan trap as non-Targaryan player
    ----------------------*/
    } else if ((player1game.length > player2game.length) && (firstPlayer1 != "Daenerys Targaryan") && ((circleX1 === 825) && (circleY1 === 230))) {
        setTimeout(() => {
            document.getElementById("trap1modal-wrap").style.display = "block";
            document.getElementById("diceButton").disabled = true;
            document.getElementById("trap1").innerHTML = "<p>A dragon appears! Since you are " + firstPlayer1 + " the dragon shoots fire towards you! You run far away and move 6 spaces backwards!</p><button id='modalButton' class='modalButton' onclick='closeModal()'>I don't like fire... at all!</button>";

            circleX1 = 525;
            circleY1 = 380;
            //trapo = [];
            draw();
        }, 100);
    }
    /* Player 2 Targaryan trap as Targaryan player
    ----------------------*/
    else if ((player1game.length === player2game.length) && (secondPlayer2 === "Daenerys Targaryan") && (circleX2 === 825) && (circleY2 === 230)) {
        setTimeout(() => {
            document.getElementById("trap1modal-wrap").style.display = "block";
            document.getElementById("diceButton").disabled = true;
            document.getElementById("trap1").innerHTML = "<p>A dragon appears! Since you are " + secondPlayer2 + " the dragon alows you to fly on it's back! He flyes you just one step away from the throne!</p><button id='modalButton' class='modalButton' onclick='closeModal()'>Fire!</button>";
            circleX2 = circleX2 - 750;
            //trapo = [];
            draw();
        }, 100);
        /* Player 2 trap as non-Targaryan player 
        ----------------------*/
    } else if ((player1game.length === player2game.length) && (secondPlayer2 != "Daenerys Targaryan") && (circleX2 === 825) && (circleY2 === 230)) {
        setTimeout(() => {
            document.getElementById("trap1modal-wrap").style.display = "block";
            document.getElementById("diceButton").disabled = true;
            document.getElementById("trap1").innerHTML = "<p>A dragon appears! Since you are " + secondPlayer2 + " the dragon shoots fire towards you! You run far away and move 6 spaces backwards!</p><button id='modalButton' class='modalButton' onclick='closeModal()'>I don't like fire... at all!</button>";

            circleX2 = 525;
            circleY2 = 380;
            //trapo = [];
            draw();
        }, 100);
    }
}
/* If a player wins/get to top green square
-------------------------------------------*/
function victory() {
    if ((circleX1 <= 1125) && (circleY1 === 80)) {
        sessionStorage.setItem("winner", firstPlayer1);
        window.open("victory.html", "_self");
    } else if ((circleX2 <= 1125) && (circleY2 === 80)) {
        sessionStorage.setItem("winner", secondPlayer2);
        window.open("victory.html", "_self");

    }
}

/* If a trap modal is closed, remove the modal and make the dice button able
-------------------------------------------*/

function closeModal() {
    document.getElementById("diceButton").disabled = false;
    document.getElementById("trap1modal-wrap").style.display = "none";
}

/* Close modal with "Enter"/"Return" key
-------------------------------------------*/
document.addEventListener("keyup", function(event) {
    if ((document.getElementById("trap1modal-wrap").style.display === "block")) {
    closeModal();
        } 
/* Throw dice with "Enter"/"Return" key (not if modal is open or a player is moving)
-------------------------------------------*/
    else if ((event.keyCode === 13) && (document.getElementById("diceButton").disabled === false) && (document.getElementById("trap1modal-wrap").style.display = "none")) {
            console.log("Hei")
        dice();
        }
})


/* Throw dice with "Enter"/"Return" key, only if the dice button is not disabled
-------------------------------------------
document.addEventListener("keyup", function(event) {
    if ((event.keyCode === 13) && ( document.getElementById("diceButton").disabled === false) && (document.getElementById("trap1modal-wrap").style.display === "none")) {
        console.log("Hei")
        dice();
        
    };
})*/



