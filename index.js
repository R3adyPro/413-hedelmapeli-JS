
var rahat = 50;
var panos1 = 1;
var panos2 = 2;
var panos3 = 3;
const Arvot = []


function Pelaa(){
    Randomnumero();
    console.log(Arvot);
    const empty = arr => arr.length = 0;
    empty(Arvot)
}

function Panos(){
    
}

function Randomnumero(){
    for(i = 0; i < 4; i++){
        Arvot.push(Math.floor(Math.random() * 5) + 1)
    }
}

function Lukittu(){

}