// First way
/* for (let i =1; i <= 10; i++){
    console.log(i);
} */

// second way

/* let i = 0;
do {
    console.log(i);
    i++

} while (i <= 10); */

// third way

/* let i = 0;
while (i <= 10){
    console.log(i);
    i++;
} */



// first way


let answers =[]

let questions = [
    'What is youe name',
    'What is your phone',
    'How old are you'

]
 for (let i = 0; i <questions.length; i++) {
    answers[i] = prompt(questions[i])
}
console.log(answers)

// second way

/* 
let answers =[]

let questions = [
    'What is youe name',
    'What is your phone',
    'How old are you'

]
let i = 0;

do{
    answers[i] = prompt (questions[i]);
    console.log(answers); 
    i++;   

    } while( i < questions.length); */

// third way

/* let answers =[]

let questions = [
    'What is youe name',
    'What is your phone',
    'How old are you'

]

let i = 0;
while(i < questions.length){
    answers[i] = prompt(questions[i]);
    console.log(answers);
    i++
} */

