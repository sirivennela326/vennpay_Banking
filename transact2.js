

function f4(){
  
   
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
     cell1.innerHTML = 1;
     cell2.innerHTML = document.getElementById('res-name').innerHTML;

     var receiverID = sessionStorage.getItem('ID2');
      cell3.innerHTML = document.getElementById(receiverID).value;

     var amount = sessionStorage.getItem('CREDIT');
     cell4.innerHTML = amount + " /-";

     var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
     cell5.innerHTML = today;
  
  
  }