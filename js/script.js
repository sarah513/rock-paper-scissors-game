const players = [
    { 'id': "scissors", 'outer': "outer-border", 'middle': "border-yellow", 'inner': "inner-border", 'src': "images/icon-scissors.svg" },
    { 'id': "lizard", 'outer': "outer-lizard", 'middle': "border-lizard", 'inner': "inner-lizard", 'src': "images/icon-lizard.svg" },
    { 'id': "rock", 'outer': "outer-rock", 'middle': "border-rock", 'inner': "inner-rock", 'src': "images/icon-rock.svg" },
    { 'id': "paper", 'outer': "outer-paper", 'middle': "border-paper", 'inner': "inner-paper", 'src': "images/icon-paper.svg" },
    { 'id': "spock", 'outer': "outer-spock", 'middle': "border-spock", 'inner': "inner-spock", 'src': "images/icon-spock.svg" }
]


function setwidth() {
    var x = document.getElementById("score-number").textContent;
    console.log(x);
    if (x.length > 3) {
        console.log(x);
        document.getElementById("score").style.width = "auto"
    }
}
// for rules selection 
function displayRules() {
    document.getElementById("rules").style.display = "block";
}
function removeRules() {
    document.getElementById("rules").style.display = "none";
}

// save user selection to send it to second page
function choose(id, src) {
    localStorage.setItem("user-id", id);
    localStorage.setItem("user-src", src);
    location.replace("game.html");

}


// set the selection of user 
function setUserSelection() {
    var id = localStorage.getItem("user-id");
    var src = localStorage.getItem("user-src")
    console.log(id + " " + src);
    console.log(id == players[0].id);
    console.log(id + " " + players[0].id.toString());
    for (var i = 0; i < players.length; i++) {
        if (players[i].id == id) {
            document.getElementById("user-choice").style.display = 'flex';
            document.getElementById("user-choice").style.flexWrap = "wrap-reverse";
            document.getElementById("user-choice").style.justifyContent = "center"

            console.log(document.getElementById("user-outer"));
            document.getElementById("user-outer").classList.add(players[i].outer);
            console.log(players[i].outer);
            document.getElementById("user-middle").classList.add(players[i].middle);
            document.getElementById("user-inner").classList.add(players[i].inner);
            document.getElementById("user-img").src = src;

            break;
        }
    }
}

// function for computer selection 
const ides = ["paper", "rock", "spock", "lizard", "scissors"];
function randomize() {
    setTimeout(
        function () {
            var choosed_id = Math.floor(Math.random() * 5);
            localStorage.setItem("computer-id", players[choosed_id].id)
            document.getElementById("computer-choice").style.display = 'flex';
            document.getElementById("computer-choice").style.flexWrap = "wrap-reverse";

            document.getElementById("computer-choice").style.justifyContent = "center"
            document.getElementById("computer-outer").classList.add(players[choosed_id].outer);

            document.getElementById("computer-middle").classList.add(players[choosed_id].middle);
            document.getElementById("computer-inner").classList.add(players[choosed_id].inner);
            document.getElementById("computer-img").src = players[choosed_id].src;
        }, 400)

}


// function of game 

function game() {

    localStorage.setItem("restart-flag", "0")
    setTimeout(
        function () {
            var user = localStorage.getItem("user-id");
            var computer = localStorage.getItem("computer-id");
            if ((user == "scissors" && (computer == "paper" || computer == "lizard")) ||
                (user == "paper" && (computer == "rock" || computer == "spock")) ||
                (user == "rock" && (computer == "lizard" || computer == "scissors")) ||
                (user == "lizard" && (computer == "spock" || computer == "paper")) ||
                (user == "spock" && (computer == "rock" || computer == "scissors"))
            ) {


                document.getElementById("result").innerHTML = "YOU WIN";
                document.getElementById("result").classList.add("text-success");
                document.getElementById("user-outer").classList.add("bg-success");
                document.getElementById("user-outer").classList.add("border-success");
                document.getElementById("user-middle").classList.add("border-success");
                document.getElementById("winner-img-user").style.display = "block"
                document.getElementById("result").style.display = "block";
                var score = localStorage.getItem("score");
                if (score == null) {
                    score = 1;
                    localStorage.setItem("score", score);
                } else {
                    score++;
                    localStorage.setItem("score", score);
                }

                document.getElementById("score-number").innerHTML = localStorage.getItem("score");


            } else if ((user == "scissors" && computer == "scissors") ||
                (user == "paper" && computer == "paper") ||
                (user == "rock" && computer == "rock") ||
                (user == "lizard" && computer == "lizard") ||
                (user == "spock" && computer == "spock")
            ) {


                document.getElementById("result").innerHTML = "DRAW";
                document.getElementById("result").classList.add("text-warning");
                document.getElementById("result").style.display = "block";
                document.getElementById("score-number").innerHTML = localStorage.getItem("score");


            }
            else {

                document.getElementById("result").innerHTML = "YOU LOSE";
                document.getElementById("result").classList.add("text-danger");
                document.getElementById("result").style.display = "block";

                document.getElementById("computer-outer").classList.add("bg-success");
                document.getElementById("computer-outer").classList.add("border-success");
                document.getElementById("computer-middle").classList.add("border-success");
                // document.getElementById("computer-middle").classList.add("bg-success");
                // document.getElementById("computer-inner").classList.add("border-success");
                document.getElementById("winner-img-computer").style.display = "block"
                document.getElementById("result").style.display = "block";
                document.getElementById("score-number").innerHTML = localStorage.getItem("score");
            }
        }, 500);

}

function restart() {
    localStorage.setItem("restart-flag", "1")
    localStorage.setItem("score",0);
    document.getElementById("score-number").innerHTML = "0";
    location.replace("index.html");

}
function indexRestart() {
    var val = localStorage.getItem("restart-flag");
    if (val == 1) {
        localStorage.setItem("score",0);
        document.getElementById("score-number").innerHTML = "0"
    }else{
        document.getElementById("score-number").innerHTML=localStorage.getItem("score");
    }
}

