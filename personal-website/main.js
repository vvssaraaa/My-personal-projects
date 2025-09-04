function ShowMessage(name){
    alert("Welcome to the world of "+name); //oppgave 1
}
function WriteToSide(value){
    alert(value.toUpperCase());
    console.log(value);//oppgave 2
}
let counter = 0;
function pushToCount(){
    counter++;  
    console.log(1);
    alert(`You have pushed the button ${counter} times`);
}
function visPersonRegister(){
    const personRegister=[];
    const person1 = {
        navn : "Luna Meow",
        adresse : "Meow Veien 1",
        telefonnr : "12334455"
    };
    personRegister.push(person1);
    const person2 = {
        navn : "Fimi Shimi",
        adresse : "Meow veien 1",
        telefonnr : "99887766"
    };
    personRegister.push(person2);

    // skriv ut
    let ut = "<table><tr>" +
          "<th>Navn</th><th>Adresse</th><th>Telefonnr</th>" +
          "</tr>";
    for (let p of personRegister){
        ut+="<tr>";
        ut+="<td>"+p.navn+"</td><td>"+p.adresse+"</td><td>"+p.telefonnr+"</td>";
        ut+="</tr>";
    }
    document.getElementById("personRegister").innerHTML=ut;
}
function Sayhello(){
    alert("hello!");
}

function checkEvenOdd(){
    let num = document.getElementById("numberInput").value;
    if (num === "") {
        alert("Please enter a number.");
        return;
    }
    num = Number(num);
    let result = (num % 2 === 0) ? "Even" : "Odd";
    
    document.getElementById("evenOddResult").innerText = "Result: " + result
}

const toggleBtn = document.getElementById('darkModeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️ Light Mode';
  } else {
    toggleBtn.textContent = '🌙 Dark Mode';
  }
});

