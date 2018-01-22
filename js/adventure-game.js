
//start
 var title = document.getElementById('title');
 var body = document.getElementById('body');
 var button1 = document.getElementById("button1");
 var button2 = document.getElementById('button2');
 var safe = document.getElementById('safe');
 var prank = document.getElementById('prank');
 var tryAgain = document.getElementById('tryAgain');
 var button3 = document.getElementById('button3');
 var img = document.getElementById('img');
 var head1 = document.getElementById('head1');
 var paragraph = document.getElementById('paragraph');
 var uitleg = document.getElementById('uitleg');
 var pointer = document.getElementById('pointer');
 var img_album = document.getElementById('img-album');
 var full_heart = document.getElementById('heart-full');
 var heart123 = document.getElementById('heart123');
 var tmauto = document.getElementById('tmauto');
 var heart = document.getElementById('heart');
 var heart1234 = document.getElementById('heart1234');
 var bar = document.getElementById('bar');
 var gif = document.getElementById('gif');
 var head12 = document.getElementById('head12')
 var inventory = [];



 function startlevel(){
   console.log("startlevel geladen");
    button4.onclick = tekstGAATweg;
    button1.innerHTML = "start";
    button1.onclick = level1;
    button1.style.left = "440px";
    button2.style.display = 'none';
    button1.style.backgroundColor = 'brown';
    head1.innerHTML = "Welkom beste reiziger, je gaat de wereld redden. Maar dat gaat niet zonder risico's. je krijgt namelijk de keuzen om van een tijdmachine gebruik te maken. om een chip terug te halen Maar daar krijg je maar 1 kans voor. dus kies verstandig en gebruik goed je hersenen. En laat je niet afleiden door allerlei dingen om je heen. En vergeet niet je bent de 49ste persoon die dit probeerd. Dus dat wil zeggen dat we geen vertrouwen in je hebben dat je het gaat halen. Maar als je het toch haalt krijg je eeuwige roem, alle respect, ben je een wereld-redder, heb je ons beschaving gered. kortom doe je best en laat ons niet in de steek!! OWHJAA vergeet onderweg geen parts mee te nemen zonder dat kom je niet verder. Dus blijf scherp!";
    head1.style.padding = "20px";
    // head1.style.marginTop = " 70px";
    // head1.style.display = 'block';
    // head1.style.marginBottom = " 70px";
    head1.style.display ='block';
    head1.style.border = "thick solid blue";
    paragraph.style.display = 'none';
    uitleg.style.display = 'none';
    pointer.style.display = 'none';
    safe.style.display = 'none';
    prank.style.display = "none";
    tryAgain.style.display = "none";
    button1.style.display = 'inline';
    img.style.display = "inline";
    full_heart.style.display = "inline";
    img_album.style.left = "0px";
    img_album.style.top = "599px";
    heart123.style.display = "none";
    doeii.style.display ='none';
    giff.style.display ='none';
    yfp2.style.display ='none';
    yfp3.style.display ='none';
    yfp4.style.display ='none';
    yfp1.style.display ='none';
    head12.style.display = 'none';
    img1.style.display= "none";
    img2.style.display= "none";
    noway.style.display ='none';
    rugboek1.style.display= "none";
    img_album.style.display = "inline";

}


//
startlevel();
// //  LEVEL0 SWAA
//
// // level1
function level1(){
  rugboek1.style.display= "none";
  button1.style.left = "15px";
  button1.innerHTML = 'Het verleden terug in gaan';
  button2.innerHTML = 'De toekomst in gaan'
  head12.innerHTML = "Welke knop moet je kiezen om naar de tijdmachine te kunnen gaan die in een andere dimensie is. ";
  head12.style.padding = "15px"
  head12.style.marginLeft = '200px';
  head12.style.width = "1081px";
  head12.style.height = "101px";
  uitleg.style.display = "none";
  button1.onclick = keuze_tijd;
  button2.onclick = futurehome;
  button2.style.display = "none";
  head12.style.display = "inline-block";
  img.style.display = "none";
  button1.style.display = "none";
  safe.style.display = 'inline';
  prank.style.display = "inline";
  safe.onclick = safe123;
  prank.onclick = Prank;
  safe.style.position = "absolute";
  safe.style.left = "550px";
  safe.style.top = "400px";
  prank.style.position = "absolute";
  prank.style.left = "800px";
  prank.style.top = "400px";
  doeii.style.display ='none';
  giff.style.display ='none';
  head1.style.display = 'none';
  noway.style.image = "url('image/noway.gif')";
  console.log("level1 geladen");
}






function safe123() {
  tmauto.style.display = 'inline';
  tmauto.innerHTML = 'De toekomst in gaan';
  button2.style.display = "inline";
  button1.style.display = "inline";
  safe.style.display = "none";
  prank.style.display = "none";
  head1.innerHTML = "Kijk is aan het  is je gelukt, maar vergeet niet dit is pas het begin !!! Nu krijg je de mogelijkheid om zelf te kiezen of je de toekomst in wilt gaan of het verleden terug wilt gaan. en OWHJA je zult je zeker vast afvragen wat dat plaatje precies inhoudt. nou dat is jou Tijd-Machine auto daarmee kun je door de tijd reizen. En vergeet niet YOU CAN DO IT!!";
  uitleg.style.display = "none";
  button1.onclick = keuze_tijd;
  head12.style.display = 'none';
  head1.style.display = 'inline-block';
  // noway.style.display ='none';
  console.log("safelevel geladen");

}



function Prank(){
  head1.innerHTML = "You fucked up bruh ";
  yfp1.innerHTML = "You fucked up bruh ";
  yfp2.innerHTML = "You fucked up bruh ";
  yfp3.innerHTML = "You fucked up bruh ";
  yfp4.innerHTML = "You fucked up bruh ";
  head1.style.display ='none';
  yfp1.style.display ='inline';
  yfp2.style.display ='inline';
  yfp3.style.display ='inline';
  yfp4.style.display ='inline';
  doeii.style.display ='inline';
  giff.style.display ='inline';
  alert("Weetje zeker dat dit het is?");
  alert("Weetje het ECHT ZEKER???");
  alert("Ben je zo zelfverzekerd?!?!?!");
  alert("Wie niet luistert moet voelen....");
  safe.style.display = "none";
  full_heart.style.display = "none";
  heart123.style.display = "inline";
  tryAgain.style.display = "inline";
  prank.style.display = "none";
  tryAgain.onclick =  goOn;
  img_album.style.position = "absolute";
  img_album.style.left = "487px";
  img_album.style.top = "280px";
  head12.style.display = 'none';
  button1.style.display = 'none';
  button2.style.display = 'none';
  body.style.backgroundImage = "url('image/space1.jpg')";
  paragraph.style.display = 'none';
  trex.style.display = 'none';
  frozenMan.style.display = 'none';
  img_album.style.display = "inline";
  plant.style.display = "none";
  plant1.style.display = "none";
  flyingCar.style.display = "none";
  console.log("faillevel geladen");

}




function keuze_tijd() {
  button1.innerHTML = 'Prehstorie';
  button2.innerHTML = 'ijstijd';
  button2.style.backgroundColor = 'pink';
  button2.style.display = 'inline';
  button1.onclick = prehstorie;
  button2.onclick = ijstijd;
  button2.style.display = "inline";
  head1.innerHTML = "Je gaat dus het verleden  in interessant";
  paragraph.innerHTML = "Nu krijg je de mogelijkehid om te kiezen naar welke tijdperk je wilt heen reizen. Maar vergeet niet elke verandering kan je dood zijn. En invloed hebben in het heden.  ";
  head1.style.display = "inline-block";
  paragraph.style.display = "inline-block";
  paragraph.style.fontSize = "40px";
  tmauto.style.display = 'none';
  head1.style.marginTop = '42px';
  head1.style.marginLeft = '433px';
  img_album.style.display= "none";
  bar.style.display= "none";
  img1.style.display= "inline";
  img2.style.display= "inline";
  head1.style.color = "black";
  console.log("keuzentijdlevel geladen");
  trex.style.display = "inline";
 }




function prehstorie() {
  button1.innerHTML = 'Deze kant dino';
  button2.innerHTML = 'Deze kant is terodoktes';
  button1.style.position = "relative"
  button1.style.left = "578px"
  button2.style.position = "relative"
  button2.style.left = "650px"
  button2.style.backgroundColor = 'pink';
  button1.style.backgroundColor = 'pink';
  button1.style.display ="inline";
  button2.style.display ="inline-block";
  img.style.display= "none";
  head1.style.display = "block";
  button1.onclick = function()
  {
    if (inventory.includes("stone")){
        prehstoriedzkDino();
    } else {
      alert("je hebt geen part");
      // prehstoriedzkDino();

    }
  }
  console.log("prehestorielevel geladen");

  button2.onclick = Prank;
  tryAgain.onclick = goOn;
  // button2.onclick = keuze_tijd;
  img1.style.display= "none";
  img2.style.display= "none";
  // body.style.backgroundImage = "url('image/dino13.jpg')";
  body.style.backgroundSize = "cover";
  body.style.backgroundRepeat = "no-repeat";
  head1.style.display= "none";
  paragraph.innerHTML = " Oh jeetje je bent nu in de prehstorie gekomen maar kijk is aan je kan elk moment aangevallen worden dus let op waar je heen gaat!!.";
  img_album.style.display = "inline";
  bar.style.display = "inline";
  body.style.backgroundImage = "url('image/dinoBekOpen.jpg')";
  paragraph.style.marginTop ="14px";
  paragraph.style.marginLeft ="469px";
  stone.style.display = "block";
  stone.onclick = function(){
    this.setAttribute("class", "takenStone");
    inventory.push("stone");
  }
  trex.style.display = "none";
}





function tekstGAATweg(){
  paragraph.style.display = "none";
  uitleg.style.display = "none";
  pointer.style.display = "none";
  head1.style.display = "none";
}



function prehstoriedzkDino() {
  button1.innerHTML = 'Blijf stil staan zodat hij je niet ruikt en ziet.';
  button2.innerHTML = 'Ren weg!';
  button2.style.backgroundColor = 'yellow';
  button1.style.backgroundColor = 'yellow';
  button1.style.display ="inline";
  button2.style.display ="inline-block";
  img.style.display= "none";
  head1.style.display = "block";
  body.style.backgroundImage = "url('image/t-rexDood.jpg')";
  body.style.backgroundSize = "cover";
  button1.onclick = standStill;
  button2.onclick = dinoBijt;
  bar.style.display = "none"
  button1.style.position = "relative"
  button1.style.left = "0px"
  button2.style.position = "relative"
  button2.style.left = "299px"
  button2.style.top = "640px"
  head1.style.display = "none";
  tryAgain.style.display = "none";
  var x = document.createElement("img");
  x.setAttribute("src", "image/run.gif");
  x.setAttribute("width", "450");
  x.setAttribute("height", "428");
  x.setAttribute("alt", "The Pulpit Rock");
  x.setAttribute("id", "runGif");
  document.body.appendChild(x);
  x.style.position = "absolute";
  x.style.left = "1100px";
  x.style.top = "340px";
  // runGif.style.display = "none";
  console.log("prehstoriedzkDinolevel geladen");
  trex.style.display = "none";
  var x = document.createElement("img");
  x.setAttribute("src", "image/dontMove.gif");
  x.setAttribute("width", "280");
  x.setAttribute("height", "248");
  x.setAttribute("alt", "The Pulpit Rock");
  x.setAttribute("id", "dontMove");
  document.body.appendChild(x);
  x.style.position = "absolute";
  x.style.left = "18px";
  x.style.top = "223px";
  // dontMove.style.display = "none";
  paragraph.style.display = "none";
  stone.style.display= "none";
}





function standStill(){
// button1.style.display = "inline";
button2.style.display = "inline";
button1.innerHTML = "Loop rustig weg";
button2.innerHTML = "Gooi een steen naar de andere kant om hem afteleiden.";
button1.style.backgroundColor = "blue";
button2.style.backgroundColor = "green";
button1.style.position = "relative";
button1.style.top = "300px";
button1.style.left = "0px";
button2.style.top = "400px";
button2.style.left = "-410px";
img_album.style.display = "inline";
bar.style.display = "inline";
// button2.onclick= dinoWegLokken;
button2.onclick = function(){
  alert("Handig dat je die steen mee nam aan het begin van je spel!")
  dinoWegLokken();
}
trex.style.display = "none";
dontMove.style.display = "none";
runGif.style.display = "none";
stone.style.display = "block";
button1.onclick = Prank;
tryAgain.onclick = goOn;
img_album.style.display = "none";
console.log("standstilllevel geladen");

}


function dinoWegLokken(){
  body.style.backgroundImage = "url('image/safeDinoCliff.jpg')";
  body.style.backgroundSize = "cover";
  body.style.height = "750px";
  button1.style.display = "none";
  head1.style.display = "block";
  head1.innerHTML = "Yess het is je gelukt. Je hebt de dino afgeschudt, dus nu ben je veilig en kan je verder met je avontuur gaan.";
  head1.style.position = "relative";
  head1.style.width = "200px";
  head1.style.left ="900px";
  head1.style.top ="120px";
  button9.style.display = "inline";
  button9.style.top = "2px";
  button9.style.left = "500px";
  button9.innerHTML = "verder gaan met je avontuur ;)";
  button9.onclick = finalLevel;
  stone.style.display= "block";
  trex.style.display = "none";
  console.log("dinoWegLokken level geladen");

}

function finalLevel(){
  body.style.background = "url('image/boekenKast.jpg')";
  body.style.backgroundSize = "cover";
  head1.style.display = "none";
  rugboek.style.display = "inline";
  rugboek1.style.display = "inline";
  ruggenboek.style.display = "inline";
  img_album.style.display = "none";
  rugboek.onclick = boekopensFail;
  rugboek1.onclick = boekopensFail;
  ruggenboek.onclick = boekopensFail;
  buttonWin.onclick = boekWin;
  uitleg.style.display = "inline-block"
  uitleg.innerHTML = " Je bent nu bij je laatste opdracht. Je moet nu in de boekenkast een chip gaan vinden. Hoe dat precies moet weten wij ook niet. Wij denken dat die chip ergens in een boek zit verstopt dus check alles goed na A.U.B. En owhjaa verpest het niet, want je bent al zover gekomen. Een handige tip is dat je voor je begint met zoeken de tekst laten verwijderen. Hoe je dat doet is heel simpel: Links boven in zit een knop, als je er op drukt verdwijnt je tekst, en kun je vele malen beter gaan zoeken  KEEP ON MOVING!!!"
  openklapboek.style.display = "none";
  button2.style.display = "none";
  paragraph.style.display = "none";
  bar.style.display = "none";
  console.log("finalLevel level geladen");

  buttonWin.style.display = "inline-block";
  trex.style.display = "none";
  plant.style.display = "none";
  plant1.style.display = "none";
  button1.style.display = "none";
  stone.style.display = "none";
  cmpb.style.display = "none";
  dell.style.display = "none";

}

function boekopensFail(){
 head1.style.display = "inline-block";
 head1.style.top = "27px";
 head1.style.left = "36px";
 head1.style.width = "270px";
 head1.innerHTML ="Verkeerde boek!!";
 openklapboek.style.display = "inline";
 paragraph.style.display = "block";
 paragraph.innerHTML = "ik denk dat je het verkeerde boek heb geopent oepsie.... probeer het eens opnieuw.";
 openklapboek.style.marginLeft = "225px";
 openklapboek.style.top = "30px"
 openklapboek.style.position = "absolute";
 openklapboek.style.width ="803px";
 paragraph.style.marginTop = "40px";
 paragraph.style.marginLeft = " 692px";
 paragraph.style.width = "263px";
 paragraph.style.fontSize = "25px";
 ruggenboek.style.display = "none";
 // openklapboek.style.zIndex = "-1";
 // button1.style.top = "500px";
 // button1.style.left = "1100px";
 button2.style.display = "inline";
 button2.innerHTML = "Boek sluiten";
 button2.onclick = finalLevel;
 button2.style.borderRadius = "0%";
 button2.style.backgroundColor = "lightgrey";
 button2.style.height = "61px";
 button2.style.width = "201px";
 button2.style.left = "790px";
 button2.style.top = "485px";
 button1.style.display = "none";
 rugboek1.style.display = "none";
 bar.style.display = "inline";
 button9.style.display = "none";
 buttonWin.style.display = "none";
 stone.style.display= "block";
 console.log("boekopensFail level geladen");
}

function boekWin(){
  head1.style.display = "inline-block";
  head1.style.top = "36px";
  head1.style.left = "94px";
  head1.style.width = "270px";
  head1.style.padding = "8px";
  head1.innerHTML ="Juiste boek";
  head1.style.marginTop =  "46px";
  head1.style.marginLeft = "433px";
  head1.style.position = "relative";
  openklapboek.style.display = "inline";
  paragraph.style.display = "inline-block";
  paragraph.innerHTML = "Hallo beste bezoeker, ik ben het boek des wijsheid. Ik leef al eeuwen lang. Mijn lotsbestemming is deze belangrijke chip te bewaren en dan vervolgens te overhandigen aan de uitvorken. Hierbij overhandig ik je de chip en ik hoop dat je hem goed zal bewaren en veilig terug brengt naar het heden.";
  openklapboek.style.right = "378px";
  openklapboek.style.top = "30px"
  openklapboek.style.position = "absolute";
  openklapboek.style.width ="803px";
  paragraph.style.marginTop = "40px";
  paragraph.style.marginLeft = " 893px";
  paragraph.style.width = "267px";
  paragraph.style.fontSize = "25px";
  ruggenboek.style.display = "inline";
  openklapboek.style.zIndex = "-1";
  button1.style.top = "500px";
  button1.style.left = "1100px";
  button2.style.display = "inline";
  button2.style.display = "absolute";
  ruggenboek.style.zIndex = "-1";
  // stone.style.display= "block";
  button2.innerHTML = "Ga terug naar het startpagina..";
  button2.onclick = BackAtHome;
  button2.style.borderRadius = "0%";
  button2.style.backgroundColor = "lightgrey";
  button2.style.height = "61px";
  button2.style.width = "353px";
  button2.style.left = "844px";
  button2.style.top = "538px";
  button1.style.display = "none";
  rugboek1.style.display = "none";
  bar.style.display = "inline";
  buttonWin.style.display = "none";
  button9.style.display = "none";
  chip.style.display = "block";
  button2.onclick = function()
  {
    if (inventory.includes("chip")){
        BackAtHome();
    } else {
      alert("je hebt geen part");
    }
  }


  chip.onclick = function(){
      this.setAttribute("class", "chipClass");
       inventory.push("chip");
    }

}


function BackAtHome(){
  body.style.backgroundImage = "url('image/applaus.jpg')";
  openklapboek.style.display = "none";
  ruggenboek.style.display = "none";
  rugboek1.style.display = "none";
  rugboek.style.display = "none";
  // button2.onclick = startlevel;
  button2.onclick = goOn;
  head1.innerHTML ="Het is je gelukt!";
  paragraph.innerHTML = "KIjk is aan het is je in een keer gelukt. Je hebt onze beschaving geredt, al deze mensen die hier staan hier niet zomaar. Ze staan er speciaal voor jou. je hebt het goed gedaan en probeer het nog eens een keertje, maar dan via een andere weg. Je weet wat ze zeggen 'er leiden meer wegen naar rome.'";
  head1.style.position = "relative";
  head1.style.right = "220px";
}





 function dinoBijt(){
   runGif.style.display = "none";
   button1.style.display = "none"
   button2.style.display = "none";
   paragraph.style.display = "none"
   prank.onclick = Prank;
   prank.style.display = "inline"
   prank.innerHTML = "klik hier voor een veilige plek";
   dontMove.style.display = "none";
   paragraph.style.display = "none";
 }






function ijstijd(){
  button1.innerHTML = ' Ga deze kant hier is het veilig';
  button2.innerHTML = 'Nee, ga deze kant hier is het veilig';
  button1.onclick = deadFrozen;
  button2.onclick = deadCave;
  button2.style.backgroundColor = 'green';
  button2.style.display = 'inline';
  img.style.display= "none";
  img1.style.display= "none";
  img2.style.display= "none";
  ijstijdBG.style.display = "block";
  grot.style.display = "block";
  button2.style.position = "relative";
  button2.style.left = "610px";
  head1.innerHTML = "Welke kant moet ik op?!?!";
  paragraph.style.display = "none";
  trex.style.display = 'none';

}


function deadFrozen(){
  body.style.backgroundColor ="green";
  img.style.display= "none";
  ijstijdBG.style.display = "none";
  grot.style.display = "none";
  frozenMan.style.display = "inline";
  button2.style.display = "none";
  head1.innerHTML = "Je bent dood!";
  paragraph.style.display = "inline-block";
  paragraph.innerHTML = "Jammer, je hebt de verkeerde kant gekozen. Het is zo koud daar buiten dat je levend bevrozen bent.";
  paragraph.style.bottom = "280px";
  paragraph.style.position = "relative";
  body.style.backgroundImage = "url('image/northPole.jpg')";
  button1.onclick = Prank;
  tryAgain.onclick = goOn;
  trex.style.display = 'none';
  button1.innerHTML = "terug naar startpagina";
}

function deadCave(){
  body.style.backgroundColor ="yellow";
  body.style.backgroundImage = "url('image/insidecave1.jpg')";
  trex.style.display = 'inline-block';
  button1.onclick = Prank;
  tryAgain.onclick = goOn;
  ijstijdBG.style.display = "none";
  grot.style.display = "none";
  head1.innerHTML = "Geen goeie keuze gemaakt!";
  button1.innerHTML = "Klik hier om te vluchten!";
  button2.style.display = "none";
  paragraph.innerHTML = "Het is tijd om tol te betalen aan de natuur";
  paragraph.style.display = 'inline-block';
  paragraph.style.marginTop = "100px";
  paragraph.style.padding = "15px";
}


function goOn(){
  location.reload()
}

function futurehome(){
  body.style.backgroundImage = "url('image/futurebg2.jpg')";
  tmauto.style.display = "none";
  head1.innerHTML = "Welkom in de toekomst";
  head1.style.display = "inline-block";
  head1.style.position = "absolute";
  head1.style.top = "130px";
  head1.style.left = "560px";
  paragraph.style.display = "inline";
  paragraph.innerHTML = "Welke kant ga je op om je beschaving te redden, en hoe wil je gaan?!";
  paragraph.style.position = "absolute";
  paragraph.style.bottom = "400px";
  paragraph.style.left = "360px";
  paragraph.style.fontSize = "40px";
  button1.innerHTML =  "Ga met de trein";
  button2.innerHTML = "Ga met de vliegende auto";
  button1.onclick = function train() {
    alert("Je moet dan wel op de trein klikke ;)");
  }
  button2.onclick = function train() {
    alert("Je moet dan wel op een van je vliegende auto's klikke ;)");
  }
  flyingCar.style.display = "inline";
  flyingCar.onclick = labaratorium;
  buttonTrain.style.display = "inline-block";
  buttonTrain.onclick = station;
  img_album.style.display = "none";
  bar.style.display = "none";
}



function labaratorium(){
  body.style.backgroundImage = "url('image/landingsbaan.jpg')"
  button1.innerHTML = "Links gaan landen?";
  button2.innerHTML = "Rechts gaan landen?";
  buttonTrain.style.display = "none";
  paragraph.style.display = "none";
  head1.style.top = "0px";
  head1.innerHTML = "Waar wil je landen 1 landingsbaan is defect.";
  button2.style.left = "740px";
  button2.style.top = "210px";
  button1.style.top = "440px";
  flyingCar.style.top = "217px";
  flyingCar.style.left = "500px";
  flyingCar.style.width = "420px";
  button1.onclick = labaratoriumlinks1;
  button2.onclick = labaratoriumrechts;
}

function labaratoriumlinks1() {
 flyingCar.style.top = "81px";
 flyingCar.style.left = "119px";
 button1.innerHTML = "Klik om te landen";
 button1.onclick = labaratoriumlinks;
}

function labaratoriumlinks(){
  button2.style.display = "none";
  button1.onclick = function landingKapot(){
    flyingCar.style.display = "none";
    body.style.backgroundImage = "url('image/destroy.jpg')"
    body.style.backgroundSize = "cover";
    button1.onclick = Prank;
    tryAgain.onclick = goOn;
    button1.innerHTML = "Klik voor een veilig plek ";
    flyingCar.style.display = "none";
    head1.innerHTML = "Oh nee, je hebt de verkeerde landingsbaan gekozen. Je hebt de ene gekozen met allemaal springstof vaten er onder. Die zijn heel gevoelig voor warmte. En daar door is het allemaal de lucht in gevlogen.";
    head1.style.left = "200px";
    head1.style.right = "200px";

    }
}

function labaratoriumrechts(){
  flyingCar.style.left = "1000px";
  flyingCar.style.top = "397px";
  button2.innerHTML = "Klik om te landen";
  button2.onclick = labaratoriumrechts1;
  head1.style.left = "200px";
  head1.style.right = "200px";
  vaas.onclick = labaratoriumrechtsWin;
}


function labaratoriumrechts1(){
  body.style.backgroundImage = "url('image/ziekenhuis.jpg')"
  flyingCar.style.display = "none";
  button1.style.display = "none";
  button2.style.display = "none";
  vaas.style.display = "inline-block";
  head1.innerHTML = "Een van de voorwerpen activeert een speciale kamer naar waar jij op zoek bent.";
}

function labaratoriumrechtsWin(){
  body.style.backgroundImage = "url('image/labrats.jpg')"
  dell.style.display = "inline-block";
  vaas.style.display = "none";
  head1.innerHTML = "Zoek het juiste voorwerp die jou de gelegenheid geeft, om de chip te vinden.";
  dell.onclick =  biebliotheek;
}

function biebliotheek(){
  cmpb.onclick = finalLevel;
  cmpb.style.display = "inline-block";
  paragraph.style.left = "10px";
  paragraph.style.bottom = "170px";
  head1.innerHTML = "klik nu nogmaals op het beeldscherm. En word je met een speciale straal naar een biebliotheek getsuurd.";
}

function station(){
body.style.backgroundImage = "url('image/station.jpg')"
flyingCar.style.display = "none";
buttonTrain.style.display = "none";
img_album.style.display = "none";
bar.style.display = "none";
button1.style.display = "none";
button2.style.display = "none";
head1.style.top = "6px";
paragraph.style.bottom = "540px";
head1.innerHTML = "Zoek nu de uitgang";
plant.style.display = "inline-block";
plant1.style.display = "inline-block";
paragraph.style.display = "none";
plant.onclick = plantstation;
plant1.onclick = plantstation1;
img_album.style.display = "none";
bar.style.display = "none";
}

function plantstation(){
button1.style.display = "inline-block";
button1.innerHTML = "Klik om verder te gaan";
button1.onclick = finalLevel;
button1.style.top = "200px";
button1.style.left = "520px";
paragraph.style.bottom = "167px";
paragraph.style.left = "12px";

}


function plantstation1(){
button1.style.display = "inline-block";
button1.innerHTML = "Klik om verder te gaan";
button1.onclick = Prank;
button1.style.top = "200px";
button1.style.left = "520px";
}
