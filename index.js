
var rahat = 50;
var panos1 = 1;
var panos2 = 2;
var panos3 = 3;
var Arvot = [];

var vOmenat = 2;
var vPaarynat = 4;
var vMelonit = 6;
var vMansikka = 8;
var vSeiska = 10;


function Pelaa(){
    Randomnumero();
    console.log(Arvot);
    const empty = arr => arr.length = 0;
    
    Kuvanvaihto();
    empty(Arvot)
}





function Panos(){
    
}

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

function Kuvanvaihto(){
    var yks = 'kuvat/apple.png'
    var kaks = 'kuvat/pear.png'
    var kolme = 'kuvat/melon.png'
    var nelja = 'kuvat/berry.png'
    var viis = 'kuvat/seven.png'

    const indexyks = Arvot.indexOf(1);
    const indexkaks = Arvot.indexOf(2);
    const indexkolme = Arvot.indexOf(3);
    const indexnelja = Arvot.indexOf(4);
    const indexviisi = Arvot.indexOf(5);
    console.log(indexyks, indexkaks, indexkolme)

    for(i = 0; i<4; i++){
        var rulla = "rulla" + (i+1);
        console.log(indexkaks)
        if(indexkaks == -1){
            console.log("testi")
            for(i = 0; i<4; i++){
                console.log("testi2")
                var valittu = Arvot[0];
                if(indexyks == valittu){
                    document.getElementById(rulla).src = yks;
                }
                else if(indexkaks == valittu){
                    document.getElementById(rulla).src = kaks;
                }
                else if(indexkolme == valittu){
                    document.getElementById(rulla).src = kolme;
                }
                else if(indexnelja == valittu){
                    document.getElementById(rulla).src = nelja;
                }
                else{
                    document.getElementById(rulla).src = viis;
                }
            }
        }
        
        else if(indexyks == i){
            document.getElementById(rulla).src = yks;
        }
        else if(indexkaks == i){
            document.getElementById(rulla).src = kaks;
        }
        else if(indexkolme == i){
            document.getElementById(rulla).src = kolme;
        }
        else if(indexnelja == i){
            document.getElementById(rulla).src = nelja;
        }
        else{
            document.getElementById(rulla).src = viis;
        }
    }
        
    

    
    
    

    document.getElementById('rulla2');
    document.getElementById('rulla3');  
    document.getElementById('rulla4');
}
    
    