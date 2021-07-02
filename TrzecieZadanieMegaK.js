const text = prompt('Wpisz jakiś tekst');

for (let i = 0; i < text.length; i++){
    if(i%2 === 0) console.log(text[i].toUpperCase())
    else console.log(text[i].toLowerCase())
}