const firstLetter = prompt('Podaj pierwszą liczbę')
const secondLetter = prompt('Podaj drugą liczbę')
const operation = prompt('Podaj operację do wykonania : (+) (-)  (/) (*)')


if(operation === '+'){
    console.log(Number(firstLetter) + Number(secondLetter));
}
if(operation === '-'){
    console.log(Number(firstLetter) - Number(secondLetter));

}
if(operation === '/'){
    console.log(Number(firstLetter) / Number(secondLetter));

}
if(operation === '*'){
    console.log(Number(firstLetter) * Number(secondLetter));

}