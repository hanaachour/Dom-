var totalprice=document.getElementById("totalpr");
var sum = 0;
function plusclick(id){
    var quantity = document.getElementById("q" +id[1]);
    quantity.innerHTML = parseInt(quantity.innerHTML) + 1;
 console.log(quantity);
    var total = document.getElementById("t" +id[1]);
total.innerHTML= parseInt(total.innerHTML)+parseInt(document.getElementById("s"+id[1]).innerHTML);
console.log(total);
sum=sum + parseInt(document.getElementById("s"+id[1]).innerHTML);
totalprice.innerHTML=sum;
}
function minusclick(id){
    var quantity = document.getElementById("q" +id[1]);
    if ( parseInt(quantity.innerHTML) >0) {
       
        quantity.innerHTML=parseInt(quantity.innerHTML) - 1;
    
        var total=document.getElementById("t" +id[1]);
    
        total.innerHTML= parseInt(total.innerHTML)- parseInt(document.getElementById("s"+id[1]).innerHTML);
    
        sum=sum - parseInt(document.getElementById("s"+id[1]).innerHTML);
        totalprice.innerHTML=sum;
    }
}

var deletebtn =document.getElementsByClassName("delete-btn");
for (let i=0 ; i<deletebtn.length;i++) {
    deletebtn[i].addEventListener("click",function (){
     deletebtn[i].parentElement.remove();
    });
}

let heartBtn = document.getElementsByClassName("fas fa-heart");

for (let i = 0; i < heartBtn.length; i++) {
  heartBtn[i].addEventListener("click", function () {
    heartBtn[i].classList.toggle("red");
  });
}
/*
for (let i = 0; i < heartBtn.length; i++) {
    heartBtn[i].onclick = function () {
      heartBtn[i].classList.toggle("red");
    };
  }
  */