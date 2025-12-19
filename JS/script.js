// setup iniziale
// selezione degli elementi del DOM

const emailList = document.getElementById("emailList");
const button = document.getElementById("button");
const emailGenerator = "https://flynn.boolean.careers/exercises/api/random/mail";

//avvio genrazione
emailGeneratorFunction();

button.addEventListener("click", emailGeneratorFunction);

function emailGeneratorFunction (){
let emailOutput = '';
for (let i = 0; i < 10; i++) {
    axios.get(emailGenerator)
        .then(response => {
            emailOutput += `<li class="emailSingle">${response.data.response}</li>`;
            emailList.innerHTML = emailOutput;
        })
        .catch(error => {
            console.error(error.message);
        });
}
}