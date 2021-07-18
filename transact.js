
var dd =  document.getElementById('res-currentb');
let x = document.getElementById("myselect");
let amount = document.getElementById("amount");
window.addEventListener('load', () => {
    const id = sessionStorage.getItem('ID');
    var name = sessionStorage.getItem('NAME');
    const email = sessionStorage.getItem('EMAIL');
    var currentB = sessionStorage.getItem('CURRENTB');
    var sv = sessionStorage.getItem('SV');

    var cn = document.getElementById("welcome");
      cn.innerHTML = "Welcome, " + name +" !";
    
    x.remove(id);
    
    
    document.getElementById('res-id').innerHTML = id;
    document.getElementById('res-name').innerHTML = name;
    document.getElementById('res-email').innerHTML = email;
      dd.innerHTML = currentB;
   
 
    
  
  var btn = document.getElementById('btn');
  if(btn){
  btn.addEventListener("click", myFun);
      
} 
function myFun(){
  
    if((currentB !="") && (amount.value>0)){
        currentB = currentB - amount.value;
        sessionStorage.setItem("BAL", currentB);
        sessionStorage.setItem("PV", sv);
       var id2 = x.options[x.selectedIndex].id;
      
       sessionStorage.setItem("ID2", id2);
       sessionStorage.setItem("CREDIT", amount.value);
      
       alert("Transaction is successful");
       window.open("transact.html#history", "_self");
    } 
   
}
f4();
})

