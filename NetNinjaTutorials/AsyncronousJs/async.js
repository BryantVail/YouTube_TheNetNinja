window.onload = function(){

  var http = new XMLHttpRequest();
  var url;
  http.onreadystatechange = function(){
    console.log(http);
    if(http.readystate == 4 && http.status == 200){
      //console.log(JSON.parse(http.response));
    }
  };
  http.open("GET", "data/tweets.json",true);
  http.send();//now that I've prepared you w/ 'http.open(...), go get it w/ http.send()'

  console.log(http);


  $.get("data/tweets.json", function(data){
    var p = document.createElement("p");
    var responseTxt = document.createTextNode(JSON.parse(data));
    p.appendChild(responseTxt);
    document.getElementByTagName('body').textContent = responseTxt;
  });


}; //end window.load


/*
  ready states
  0 - request not initialized
  1 - request has been set up
  2 - request has been sent
  3 - request is in process
  4 - request is complete

*/
