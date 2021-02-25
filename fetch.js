function users() {
  let div = document.getElementById("divTable");
  div.innerHTML = "<table id='table' border='1' border-collapse='collapse' > <thead> <tr id='tr'></tr> </thead> <tbody id='tbody' ></tbody> </table>";

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((response) => {
    
      console.log( response);
      var arr =  response;

      //Keys add
      let arrKey = Object.keys(arr[0]);
      let tbody = document.getElementById("tbody");
      let table = document.getElementById("table");
      var tr = document.getElementById("tr");
    for (let j = 0; j <arrKey.length; j++){
      var tdAdd ="<th>" + arrKey[j] + "</th>";
      tr.innerHTML += tdAdd;
    }

    // Value add
debugger
    var addNewUser;
    var row = ""
    for (let i = 0; i < arr.length; i++) {
      var td = "";
      var x = Object.values(arr[i]);
     
      
      for (let j = 0; j <x.length; j++){
        var adrOrComp ="";
        var ind = Object.values(x[j]);
        console.log(ind);
        if (j === 4 ){
          for (let k = 0; k < ind.length -1; k++){
            adrOrComp += ind[k] +  ','  ;
          }
          // 
          x[j] = adrOrComp;
          td  += "<td>" + x[j] + "</td>";
        }
        else if ( j === 7){
          for (let k=0; k < ind.length; k++){
            adrOrComp += ind[k] +  ','  ;
          }
          x[j] = adrOrComp;
          td  += "<td>" + x[j] + "</td>";
        }else {
          td  += "<td>" + x[j] + "</td>";
        }
      
      }
      row +="<tr>" + td + "</tr>";
      tbody.innerHTML = row;
      console.log(row);
    }
 
  })
  .catch( error => alert (error))

}



