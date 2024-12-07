window.onload = onload;
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function Getexcuse() {
    let randomIndex = Math.floor(Math.random() * who.length);
    let randomIndex1 = Math.floor(Math.random() * action.length);
    let randomIndex2 = Math.floor(Math.random() * what.length);
    let randomIndex3 = Math.floor(Math.random() * when.length);

    let excuse = who[randomIndex]+ " " + action[randomIndex1] + " " + what[randomIndex2] + " " + when[randomIndex3];
    
    document.getElementById('excuse').innerHTML = excuse;
}
window.onload = Getexcuse;
