var country = document.getElementById("country").value;
var to = document.getElementById("to").value;
var from = document.getElementById("from").value;
if(country=="" || to=="" || from=="")
{
    alert()
}


function myfunc(){
    var country = document.getElementById("country").value;
    var to = document.getElementById("to").value;
    var from = document.getElementById("from").value;
    if(country=="" || to=="" || from=="")
        {
            alert("please fill all the fields");
        }
     else{   
    const url="https://api.covid19api.com/country/"+country+"?from="+from+"T00:00:00Z&to="+to+"T00:00:00Z";
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data){
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    })
     }
}

function appendData(data){
    
    for(var i=0;i<data.length;i++){
        let mainContainer = document.getElementById("cases");
        let div =document.createElement("div");
        var newline="\n";
        div.innerHTML= 'Confirmed Cases : ' + data[i].Confirmed + '<br/> <br/>Active Cases : ' + data[i].Active +'<br/><br/>Deaths : ' + data[i].Deaths ;
        mainContainer.appendChild(div);
        
    }
}
