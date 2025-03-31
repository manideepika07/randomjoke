const para = document.querySelector("#joke");
const btn = document.querySelector("#joke");

const url = "https://v2.jokeapi.dev/joke/Programming?format=json";

const getFacts = async () => {
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    
    if (data.type === "single") {
        para.innerText = data.joke;
    } else {
        para.innerText = `${data.setup} - ${data.delivery}`;
    }
}

btn.addEventListener("click", getFacts); 
