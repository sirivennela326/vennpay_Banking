

    function f1(){
        var rowId = event.target.parentNode.parentNode.id;
                  
     var data = document.getElementById(rowId).querySelectorAll(".row-data"); 
                  
      
                    var id = data[0].innerHTML;
                    var name = data[1].innerHTML;
                    var email = data[2].innerHTML;
                    var currentB = data[3].innerHTML;
                    var sv = rowId;

                    sessionStorage.setItem("ID", id);
                    sessionStorage.setItem("NAME", name);
                    sessionStorage.setItem("EMAIL", email);
                    sessionStorage.setItem("CURRENTB", currentB);
                    sessionStorage.setItem("SV", sv);
        
        window.open("transact.html", "_self");
    }
    
window.addEventListener('load', () => {
    var res = sessionStorage.getItem('BAL');
    var pv = sessionStorage.getItem('PV');
     var t = document.getElementById(pv).childNodes[7];
    t.innerHTML = res;
    var id2 = sessionStorage.getItem('ID2');
    var credit = sessionStorage.getItem('CREDIT');
  
   document.getElementById(id2).innerHTML = parseInt(document.getElementById(id2).innerHTML) + parseInt(credit);
})
