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