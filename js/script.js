
function setwidth() {
    var x = document.getElementById("score-number").textContent;
    console.log(x);
    if (x.length > 3) {
        console.log(x);
        document.getElementById("score").style.width = "auto"
    }
}
// for rules selection 
function displayRules(){
    document.getElementById("rules").style.display="block";
}
function removeRules(){
    document.getElementById("rules").style.display="none";
}

// save user selection to send it to second page
function choose(id){
    localStorage.setItem("id",JSON.stringify(id));
   
}



// function for computer selection 
const ides = ["paper", "rock", "spock","lizard","scissors"];
function randomize(){
    var choosed_id=Math.floor(Math.random() * 5);
    return ides[choosed_id];
}