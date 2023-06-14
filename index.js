// alert("working");
var randomVariable1 =  Math.floor(Math.random()*6)+1;

var randomVariable2 =  Math.floor(Math.random()*6)+1;

var source1 = "./images/dice"+randomVariable1+".png";
var source2 = "./images/dice"+randomVariable2+".png";

document.querySelectorAll("img")[0].setAttribute("src",source1);
document.querySelectorAll("img")[1].setAttribute("src",source2);

if(randomVariable1===randomVariable2){
    document.querySelector("h1").innerHTML="Draw";
}
else if(randomVariable1<randomVariable2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins"
}