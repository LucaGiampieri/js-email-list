// setup iniziale
// selezione degli elementi del DOM

const emailList = document.getElementById("emailList");

const emailGenerator = "https://flynn.boolean.careers/exercises/api/random/mail";


let emailOutput = '';

for (let i = 0; i < 10; i++) {
    axios.get(emailGenerator)
        .then(response => {
            emailOutput += `<li>${response.data.response}</li>`;
            emailList.innerHTML = emailOutput;
        })
        .catch(error => {
            console.error(error.message);
        });
}