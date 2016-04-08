<script>
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
</script>
