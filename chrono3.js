
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
       //Tps écoulé -> arrêt du timer
           this.Stop()
         }
   },

   Stop: function() {
       //quand le temps est écoulé, on arrête le timer
       clearInterval(this.timer);
       //Et on appelle la fonction qui gère la fin du temps imparti et poursuit le traitement
       //Ici, pour le test, simplement une fonction alert
       alert('Vous avez perdu');
       clearInterval(this.timer);
   }
};
