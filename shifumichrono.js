
var chrono = {
   secondsLeft: 0,
   timer: undefined,

   Start: function(secondsLeft) {
       //Initialisation du nombre de secondes selon la valeur passée en paramètre
       this.secondsLeft = secondsLeft;
       //Démarrage du chrono
       this.timer = setInterval(this.Tick.bind(this), 1000);
   },

   Tick: function() {
       //On actualise la valeur affichée du nombre de secondes
       document.getElementById("time").innerHTML = --this.secondsLeft;
       if(this.secondsLeft ===3 ){
         document.getElementById("time").innerHTML = "Shi!";

       }
       if(this.secondsLeft ===2 ){
         document.getElementById("time").innerHTML = "Fu!";

       }
       if(this.secondsLeft ===1 ){
         document.getElementById("time").innerHTML = "Mi!";

       }
       if(this.secondsLeft === 0){
         document.getElementById("time").innerHTML = "Jouez !";
         window.location = "pierre.html.htm";
       //Tps écoulé -> arrêt du timer
           this.Stop();

         }
   },

   Stop: function() {

       //quand le temps est écoulé, on arrête le timer
       clearInterval(this.timer);
       //Et on appelle la fonction qui gère la fin du temps imparti et poursuit le traitement
       //Ici, pour le test, simplement une fonction alert
       Votrechoix();
       clearInterval(this.timer);
   }
};



var vous;
var ordi;
function Votrechoix(v){
vous=v;document.votrechoix.src='choix'+v+'.png';
Choixordi();
}
//fonction TIRAGE ORDI HASARD
function Choixordi(){
ordi=Math.round(Math.random()*2)+1;
document.choixordi.src='choix'+ordi+'.png';
Pipaci();
}
//fonction
function Pipaci(){
if((vous==1) && (ordi==3) || (vous==2) && (ordi==1) || (vous==3) && (ordi==2))
{alert('BRAVO!!!!');document.votrechoix.src="choix.gif";document.choixordi.src="choix.gif";}
else{Ordipipaci();}
}

function Ordipipaci(){
if((ordi==1) && (vous==3) || (ordi==2) && (vous==1) || (ordi==3) && (vous==2))
{alert('PERDU!!!!');document.votrechoix.src="choix.gif";document.choixordi.src="choix.gif";}
else{alert('égalité\nA REFAIRE!');document.votrechoix.src="choix.gif";document.choixordi.src="choix.gif";}
}
