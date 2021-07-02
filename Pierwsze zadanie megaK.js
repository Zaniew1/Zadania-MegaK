const div = document.createElement('div');
document.body.appendChild(div);
    document.body.style.height = '100vh'
    div.style.display = 'flex';
    div.style.height = '100%';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    div.style.fontSize = '40px';
const name = prompt("Podaj swoje imię ");
const surname = prompt("Podaj swoje Nazwisko ");
const age = prompt("Podaj swój wiek ");
    
   
if(age >= 18){
    
    div.textContent = `Masz na imię ${name} ${surname}`;
    console.log(div.textContent);
} else {
    div.textContent = `Jesteś niepełnoletni`
}
