const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"


function displayCitiesCSV() {
    const cityArray = gotCitiesCSV.split(",");
    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(cityArray);
    let destination = document.getElementById("one");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

   return cityArray;
}


displayCitiesCSV()
