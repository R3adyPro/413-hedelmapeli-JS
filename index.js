
var rahat = 50;
var panos = 1;
var Arvot = [];

let lukko1 = 0;
let lukko2 = 0;
let lukko3 = 0;
let lukko4 = 0;

var yks = 0;
var kaks = 0;
var kolme = 0;
var nelja = 0;

var Lukittu = 0;

var cancel = setInterval(Päivitettävät, 10);

const empty = arr => arr.length = 0;

function Pelaa(){
    if(Lukittu == 1){
        Arvojenvaihtaminen();
        KuvanVaihtoLukitus();
        Voitot();
        empty(Arvot);
        Pois2();
        setTimeout(function(){ Pois(); }, 5000);
    }
    else if((rahat - panos) > -1){
        Randomnumero();
        KuvanVaihtoLukitus();
        Voitot();
        empty(Arvot);
        Rahanvähennys();
        setTimeout(function(){ Pois(); }, 5000);
    }
}

function Päivitettävät(){
    document.getElementById('rahat').innerHTML = 'RAHAA ' + rahat + '€';
    document.getElementById('panos').innerHTML = 'PANOS ' + panos + '€';
}
function Pois(){
    document.getElementById('voitto').innerHTML = '';
}

function Pois2(){
    document.getElementById('valittu').innerHTML = '';
    document.getElementById('valittu1').innerHTML = '';
    document.getElementById('valittu2').innerHTML = '';
    document.getElementById('valittu3').innerHTML = '';
}

function Rahanvähennys(){
    rahat = rahat - panos;
}


//Panoksen valinta ja voitto
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

function Voitot(){
    var Montako = 0;
    const arvo = Arvot[0];

    o = 0;

    if(arvo == 1){
        for(i=0; i<4; i++){
            const arvot2 = Arvot[i];
            if(arvot2 == 1){
                Montako = Montako + 1;
                if(Montako == 4){
                    if(panos = 1){
                        rahat = rahat + 3;
                        document.getElementById('voitto').innerHTML = 'Voitit ' + 3 + '€';
                        empty(Montako);
                    }
                    else if(panos = 2){
                        rahat = rahat + 6;
                        document.getElementById('voitto').innerHTML = 'Voitit ' + 6 + '€';
                        empty(Montako);
                    }
                    else if(panos = 3){
                        rahat = rahat + 9;
                        document.getElementById('voitto').innerHTML = 'Voitit ' + 9 + '€';
                        empty(Montako);
                    }   
                } 
            }
        }
    }
    else if(arvo == 2){
        for(i=0; i<4; i++){
            const arvot2 = Arvot[i];
            if(arvot2 == 2){
                Montako = Montako + 1;
                if(Montako == 4){
                    if(panos = 1){
                        rahat = rahat + 4;
                        document.getElementById('voitto').innerHTML = 'Voitit ' + 4 + '€';
                        empty(Montako);
                    }
                    else if(panos = 2){
                        rahat = rahat + 8;
                        document.getElementById('voitto').innerHTML = 'Voitit ' + 8 + '€';
                        empty(Montako);
                    }
                    else if(panos = 3){
                        rahat = rahat + 12;
                        document.getElementById('voitto').innerHTML = 'Voitit ' + 12 + '€';
                        empty(Montako);
                    }   
                }    
            }
        }
    }
    else if(arvo == 3){
        for(i=0; i<4; i++){
            const arvot2 = Arvot[i];
            if(arvot2 == 3){
                Montako = Montako + 1;
                if(Montako == 4){
                    if(panos = 1){
                        rahat = rahat + 5;
                        document.getElementById('voitto').innerHTML = 'Voitit ' + 5 + '€';
                        empty(Montako);
                    }
                    else if(panos = 2){
                        rahat = rahat + 10;
                        document.getElementById('voitto').innerHTML = 'Voitit ' + 10 + '€';
                        empty(Montako);
                    }
                    else if(panos = 3){
                        rahat = rahat + 15;
                        document.getElementById('voitto').innerHTML = 'Voitit ' + 15 + '€';
                        empty(Montako);
                    }   
                }    
            }
        }
    }    
    else if(arvo == 4){
        for(i=0; i<4; i++){
            const arvot2 = Arvot[i];
            if(arvot2 == 4){
                Montako = Montako + 1;
                if(Montako == 4){
                    if(panos = 1){
                        rahat = rahat + 6;
                        document.getElementById('voitto').innerHTML = 'Voitit ' + 6 + '€';
                        empty(Montako);
                    }
                    else if(panos = 2){
                        rahat = rahat + 12;
                        document.getElementById('voitto').innerHTML = 'Voitit ' + 12 + '€';
                        empty(Montako);
                    }
                    else if(panos = 3){
                        rahat = rahat + 18;
                        document.getElementById('voitto').innerHTML = 'Voitit ' + 18 + '€';
                        empty(Montako);
                    }   
                }    
            }
        }
    }
    else if(arvo == 5){
        for(i=0; i<4; i++){
            const arvot2 = Arvot[i];
            if(arvot2 == 5){
                Montako = Montako + 1;
                if(Montako == 4){
                    if(panos = 1){
                        rahat = rahat + 10;
                        document.getElementById('voitto').innerHTML = 'Voitit ' + 10 + '€';
                        empty(Montako);
                    }
                    else if(panos = 2){
                        rahat = rahat + 20;
                        document.getElementById('voitto').innerHTML = 'Voitit ' + 20 + '€';
                        empty(Montako);
                    }
                    else if(panos = 3){
                        rahat = rahat + 30;
                        document.getElementById('voitto').innerHTML = 'Voitit ' + 30 + '€';
                        empty(Montako);
                    }   
                }
                else if(Montako == 3){
                    if(panos = 1){
                        rahat = rahat + 5;
                        document.getElementById('voitto').innerHTML = 'Voitit ' + 5 + '€';
                        empty(Montako);
                    }
                    else if(panos = 2){
                        rahat = rahat + 10;
                        document.getElementById('voitto').innerHTML = 'Voitit ' + 10 + '€';
                        empty(Montako);
                    }
                    else if(panos = 3){
                        rahat = rahat + 15;
                        document.getElementById('voitto').innerHTML = 'Voitit ' + 15 + '€';
                        empty(Montako);
                    }
                }
            }
        }
    }
}  





//Kuvakkeiden arvonta, vaihto ja lukitus
function Randomnumero(){
    var random = Math.random() * 100;
    
    
    for(i = 0; i < 4; i++){
        if(random < 7){
            Arvot.push(1);
        }
        else if(random < 12){
            Arvot.push(2);
        }
        else if(random < 17){
            Arvot.push(3);
        }
        else if(random < 18){
            Arvot.push(4);
        }
        else if(random < 18.5){
            Arvot.push(5);
        } 
        else{
            Arvot.push(Math.floor(Math.random() * 5) + 1);
        }
        
    }
    yks = Arvot[0];
    kaks = Arvot[1];
    kolme = Arvot[2];
    nelja = Arvot[3];
}

function Arvojenvaihtaminen(){
    for(i=1; i<5; i++){
        if(lukko1 == i){
            Arvot[0] = yks;
        }
        else if(lukko2 == i){
            Arvot[1] = kaks;
        }
        else if(lukko3 == i){
            Arvot[2] = kolme;
        }
        else if(lukko4 == i){
            Arvot[3] = nelja;
        }
        else{
            Arvot[i-1] = Math.floor(Math.random() * 5) + 1
        }
    }
}

function Lukko1(){
    lukko1 = 1;
    Lukittu = 1;
    document.getElementById('valittu').innerHTML = '•';
 }

 function Lukko2(){
    lukko2 = 2;
    Lukittu = 1;
    document.getElementById('valittu1').innerHTML = '•';
 }

 function Lukko3(){
    lukko3 = 3;
    Lukittu = 1;
    document.getElementById('valittu2').innerHTML = '•';
 }

 function Lukko4(){
    lukko4 = 4;
    Lukittu = 1;
    document.getElementById('valittu3').innerHTML = '•';
 }

function KuvanVaihtoLukitus(){
    var k1 = 'kuvat/apple.png'
    var k2 = 'kuvat/pear.png'
    var k3 = 'kuvat/melon.png'
    var k4 = 'kuvat/berry.png'
    var k5 = 'kuvat/seven.png'

    var random = Math.random() * 100;

    o = 0;
    t = 0;

    for(i=0; i<5; i++){
        o = o + 1;
        const arvo = Arvot[i];
        
        if(Lukittu == 0){
            if(o == 1){
                document.getElementById("rulla1").src = "kuvat/k" + arvo + ".png";
            }
            else if(o == 2){
                document.getElementById("rulla2").src = "kuvat/k" + arvo + ".png";
            }
            else if(o == 3){
                document.getElementById("rulla3").src = "kuvat/k" + arvo + ".png";
            }
            else if(o == 4){
                document.getElementById("rulla4").src = "kuvat/k" + arvo + ".png";
            }
        }
        else if(Lukittu == 1){
            t = t + 1;
            if(t == 1){
                if(lukko1 == 0){
                    document.getElementById("rulla1").src = "kuvat/k" + arvo + ".png";
                }
            }
            else if(t == 2){
                if(lukko2 == 0){
                    document.getElementById("rulla2").src = "kuvat/k" + arvo + ".png";
                }
            }
            else if(t == 3){
                if(lukko3 == 0){
                    document.getElementById("rulla3").src = "kuvat/k" + arvo + ".png";
                }
            }
            else if(t == 4){
                if(lukko4 == 0){
                    document.getElementById("rulla4").src = "kuvat/k" + arvo + ".png";
                }
            }
            else if(t == 5){
                lukko1 = 0;
                lukko2 = 0;
                lukko3 = 0;
                lukko4 = 0;
                Lukittu = 0;
            }
        }
    }
}
