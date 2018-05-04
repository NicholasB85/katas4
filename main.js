const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"


function displayCitiesCSV() {
    let cityArray = JSON.stringify(gotCitiesCSV.split(","));
    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(cityArray);
    let destination = document.getElementById("one");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

   return cityArray;
}

function bestArray(){
const bestSentence = JSON.stringify(bestThing.split(" , "));
let elementOne = document.createElement("p");
let textOne = document.createTextNode(bestSentence);
let destination = document.getElementById("two");
elementOne.appendChild(textOne);
destination.appendChild(elementOne);

return bestSentence;

}

function semiColon(){
    const citySemi = gotCitiesCSV.split(",").join(";");
    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(citySemi);
    let destination = document.getElementById("three");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

   return citySemi;
}

function commaSeperate(){
    let seperate = lotrCitiesArray.toString(",");
    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(seperate);
    let destination = document.getElementById("four");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return seperate; 
}

function firstFive(){
    let first = lotrCitiesArray.slice(0,5);
    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(first);
    let destination = document.getElementById("five");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);
    
    return first;
}

function lastFive(){
    let last = lotrCitiesArray.slice(3,9);
    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(last);
    let destination = document.getElementById("six");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return last;
}

function threeToFive(){
    let middle = lotrCitiesArray.slice(2,5);
    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(middle);
    let destination = document.getElementById("seven");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return middle;
}

function rohan(){
    let rmRohan = lotrCitiesArray.splice(2,1);
    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(lotrCitiesArray);
    let destiantion = document.getElementById("eight");
    elementOne.appendChild(textOne);
    destiantion.appendChild(elementOne);

    return rmRohan;
}

function deadMarsh (){
    let rmAfter = lotrCitiesArray.splice(5,2);
    
    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(lotrCitiesArray);
    let destiantion = document.getElementById("nine");
    elementOne.appendChild(textOne);
    destiantion.appendChild(elementOne);

    return rmAfter;
}

function addRohon(){
    let addback = lotrCitiesArray.splice(2,0,"Rohan");
    
    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(lotrCitiesArray);
    let destination = document.getElementById("ten");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return addback;
}

function renameDead(){
    let deadest = lotrCitiesArray.splice(5,1,"Deadest Marshes");
    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(lotrCitiesArray);
    let destination = document.getElementById("eleven");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return deadest;
}

function firstFourteen() {
    let fourteen = bestThing.slice(0,14);
    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(fourteen);
    let destination = document.getElementById("twelve");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return fourteen;

}

function lastTwelve() {
    let twelve = bestThing.slice(-12);
    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(twelve);
    let destination = document.getElementById("thirteen");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return twelve;


}

function inBetween(){
    let between = bestThing.slice(23,38);
    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(between);
    let destination = document.getElementById("fourteen");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return between;
}

function sub13(){
    let substring = bestThing.substring(bestThing.length - 12);
    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(substring);
    let destination = document.getElementById("fifteen");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return substring;
}

function repeatOf14(){
    let middle = bestThing.substring(23,38);
    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(middle);
    let destination = document.getElementById("sixteen");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return middle;
}

function ofOnly(){
    let result = bestThing.indexOf("only");
    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(result);
    let destination = document.getElementById("seventeen");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return result;
}

function lastWord(){
    let lastbit = bestThing.lastIndexOf(" ")+ 1;
    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(lastbit);
    let destination = document.getElementById("eighteen");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return lastbit;
    
}
function doubles() {
    const cities = gotCitiesCSV.split(",");

    const citiesWithDoubles = []
    const doubledVowels = ["aa", "ee", "ii", "oo", "uu"]

    for (let city of cities) {
        for (let doubledVowelPair of doubledVowels) {
            if (city.includes(doubledVowelPair)) {
                citiesWithDoubles.push(city)
                continue
                
            }
        }
    }

    // const citiesWithDoubles = cities.filter(city => {
    //     return doubledVowels.some(doubledVowelPair => {
    //         return city.includes(doubledVowelPair)
    //     })
    // })



    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(JSON.stringify(citiesWithDoubles));
    let destination = document.getElementById("nineteen");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return citiesWithDoubles;

}

function includeOr() {
      
    let cities = lotrCitiesArray.join(",")
    const citiesWithOr = []
    const or = "or"

    for (let city of cities) {
        // for (let doubledVowelPair of doubledVowels) {
            if (city.includes(or)) {
                citiesWithOr.push(city)
                continue         
        }
    }
    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(JSON.stringify(citiesWithOr));
    let destination = document.getElementById("twenty");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);  
    return citiesWithOr;
    
}

function startsWithB(){
    let words = bestThing.match(/(\bb\S*)/gi);

    // const wordsB = []
    // const b = "b"

    // for (let word of wordB) {
    //     if (word.includes(b)) {
    //         wordsB.push(word)
    //         continue
    //     }
    // }


    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(words);
    let destination = document.getElementById("twentyOne");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return words;
}
//console.log(lotrCitiesArray)
function includesOne(){
    
 let hasMirkwood = lotrCitiesArray.includes("Mirkwood");

 let elementOne = document.createElement("p");
 let textOne = document.createTextNode(hasMirkwood? "Yes":"No");
 let destination = document.getElementById("twentyTwo");
 elementOne.appendChild(textOne)
 destination.appendChild(elementOne)

 return hasMirkwood;
}

function includesTwo(){

    let hasHollywood = lotrCitiesArray.includes("Hollywood");

    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(hasHollywood? "Yes":"No");
    let destination = document.getElementById("twentyThree");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return hasHollywood;
}

function displayIn(){
      let index = lotrCitiesArray.indexOf("Mirkwood");

      let elementOne = document.createElement("p");
      let textOne =document.createTextNode(index);
      let destination = document.getElementById("twentyFour");
      elementOne.appendChild(textOne);
      destination.appendChild(elementOne);

      return index;
}

function firstCity(){
  let moreThanOne =[];

  lotrCitiesArray.forEach(arrayElement => {
      if (arrayElement.includes(" ")){
        moreThanOne.push(arrayElement);
      }
  });

  let elementOne = document.createElement("p");
  let textOne = document.createTextNode(moreThanOne);
  let destination = document.getElementById("twentyFive");
  elementOne.appendChild(textOne);
  destination.appendChild(elementOne);

  return moreThanOne;
}
   
function reverse(){
    let backwards = lotrCitiesArray.reverse();

    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(backwards);
    let destination = document.getElementById("twentySix");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return backwards;
}

function alphabet(){
    alphaSort = lotrCitiesArray.sort();

    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(alphaSort);
    let destination = document.getElementById("twentySeven");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return alphaSort;
}

function sortTwo(){
    let bySize = lotrCitiesArray.sort(function(a, b) {
        return a.length - b.length || a.localeCompare;
    });
    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(bySize);
    let destination = document.getElementById("twentyEight");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return bySize;
}

function popper(){
    let popOut = lotrCitiesArray.pop();

    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(lotrCitiesArray);
    let destination = document.getElementById("twentyNine");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return popOut;
}

function push(){
    let pushIt = lotrCitiesArray.push("Deadest Marshes");

    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(lotrCitiesArray);
    let destination = document.getElementById("thirty");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return pushIt;
}

function shiftIt(){
    shifter = lotrCitiesArray.shift();

    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(lotrCitiesArray);
    let destination = document.getElementById("thirtyOne");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return shifter;
}

function redo(){
    undo = lotrCitiesArray.unshift("Rohan");

    let elementOne = document.createElement("p");
    let textOne = document.createTextNode(lotrCitiesArray);
    let destination = document.getElementById("thirtyTwo");
    elementOne.appendChild(textOne);
    destination.appendChild(elementOne);

    return undo;
}

displayCitiesCSV()
bestArray()
semiColon()
commaSeperate()
firstFive()
lastFive()
threeToFive()
rohan()
deadMarsh()
addRohon()
renameDead()
firstFourteen()
lastTwelve()
inBetween()
sub13()
repeatOf14()
ofOnly()
lastWord()
doubles()
includeOr()
startsWithB()
includesOne()
includesTwo()
displayIn()
firstCity()
reverse()
alphabet()
sortTwo()
popper()
push()
shiftIt()
redo()


 