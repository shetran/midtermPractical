var list = [
    {
      name: "Caution",
      sound: 1
    },
    {
      name: "Dying Breed",
      sound: 3
    },
    {
      name: "Human",
      sound: 8
    },
    {
      name: "Spaceman",
      sound: 7
    },
    {
      name: "Sam's Town",
      sound: 5
    },
    {
      name: "Brightside",
      sound: 4
    }
  ];

var id = document.getElementById("list")

for(var i = 0; i < list.length; i++){
    if(list[i].sound>5){
            id.innerHTML+="<br> <p style='color:blue'>Name: " + list[i].name + "</p>"
            id.innerHTML+="<p style='color:blue'>Sound: " + list[i].sound + "</p>"
    }
    else{
        id.innerHTML+="<br> <p>Name: " + list[i].name + "</p>"
            id.innerHTML+="<p>Sound: " + list[i].sound + "</p>"
        }
    }
var counter = 10;
function count(){
    counter += 1;
    if(counter === 15){
        document.getElementById("msg").innerHTML = "cool we hit the number"
    }
    document.getElementById("countNumber").innerHTML = counter
}


