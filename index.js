var x = document.getElementById("navbar")

function Drop(){
    console.log(x.className)
    if (x.className === "navbar"){
        x.className = "mnavbar"
    } else {
        x.className = "navbar"
    }
}

var nopes = [] //pick random nope from array, will do later cuz lazy
function Nope(){
    var audio = new Audio('audio/no/1.mp3');
    audio.playbackRate = 1.5*Math.random()
    audio.play();
}

var enemy = {
    health: null,
    atk: null,
    def: null,
    spd: null,
    name: null,
    encounter: function() {
        console.log(this.name + " has appeared and dealt " + this.atk + " damage!")
    }
}

function encounterGremlin() {
    gremlin = enemy
    gremlin.name = "gremlin"
    gremlin.atk = 420
    gremlin.def = 420
    gremlin.spd = 420
    gremlin.encounter()
}

encounterGremlin()