
var rahat = 50;
var panos = 1;
var Arvot = [];

var vOmenat = 2;
var vPaarynat = 4;
var vMelonit = 6;
var vMansikka = 8;
var vSeiska = 10;


var cancel = setInterval(Päivitettävät, 10);

function Pelaa(){
    if((rahat - panos) > -1){
        Randomnumero();
        const empty = arr => arr.length = 0;
        KuvanVaihto();
        empty(Arvot)
        Rahanvähennys();
    }
}

function Päivitettävät(){
    document.getElementById('rahat').innerHTML = 'RAHAA ' + rahat + '€';
    document.getElementById('panos').innerHTML = 'PANOS ' + panos + '€';
}

function Rahanvähennys(){
    rahat = rahat - panos;
}

//Panoksen valinta
function Panos1(){
    if(panos == 2){
        panos = panos - 1;
    }
    else if(panos == 3){
        panos = panos - 2;
    }
    
}

function Panos2(){
    if(panos == 1){
        panos = panos + 1;
    }
    else if(panos == 3){
        panos = panos - 1;
    }
}

function Panos3(){
    if(panos == 2){
        panos = panos + 1;
    }
    else if(panos == 1){
        panos = panos + 2;
    }
}

//Kuvakkeiden arvonta, vaihto ja lukitus
function Randomnumero(){
    var random = Math.random() * 100;
    
    for(i = 0; i < 4; i++){
        if(random < 13){
            Arvot.push(1);
            console.log(random)
        }
        else if(random < 23){
            Arvot.push(2);
        }
        else if(random < 30){
            Arvot.push(3);
        }
        else if(random < 35){
            Arvot.push(4);
        }
        else if(random < 37){
            Arvot.push(5);
        } 
        else{
            Arvot.push(Math.floor(Math.random() * 5) + 1);
        }
        
    }
}

function Lukittu(){

}

function KuvanVaihto(){
    var k1 = 'kuvat/apple.png'
    var k2 = 'kuvat/pear.png'
    var k3 = 'kuvat/melon.png'
    var k4 = 'kuvat/berry.png'
    var k5 = 'kuvat/seven.png'

    var random = Math.random() * 100;

    o = -1;

    for(i=0; i<4; i++){

        o = o + 1;
        const arvo = Arvot[o];

        if(o == 1){
            document.getElementById("rulla1").src = "kuvat/k" + arvo + ".png";
        }
        else if(o == 2){
            document.getElementById("rulla2").src = "kuvat/k" + arvo + ".png";
        }
        else if(o == 3){
            document.getElementById("rulla3").src = "kuvat/k" + arvo + ".png";
        }
        else{
            document.getElementById("rulla4").src = "kuvat/k" + arvo + ".png";
        }
    }
}