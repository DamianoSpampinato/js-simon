const randomNumberArray = [];
const inputArray=[];
let userNumber;
let  randomNumber = 0;
let points=0;
while(randomNumberArray.length < 5){
    randomNumber = Math.floor(Math.random() * 50) + 1;
    if(!randomNumberArray.includes(randomNumber)){
    randomNumberArray.push(randomNumber);
    }
}
const myDiv =document.createElement('div');
const  indexContainer =document.querySelector('#container');
myDiv.innerHTML= (randomNumberArray);
console.log(randomNumberArray);
indexContainer.append(myDiv);

setTimeout(removeNumbers, 30000);

for(let i = 0; i<5; i++ ){
    setTimeout(inputDelayed, 30500);
}
setTimeout(function(){alert('hai fatto ' + points)}, 30700);

function removeNumbers(){
    myDiv.innerHTML= ('');
}
function inputDelayed (){
    userNumber = parseInt(prompt('inserisci il numero'));
    if (randomNumberArray.includes(userNumber)){
        points++
    
    }
}
console.log(inputArray);