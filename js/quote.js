const generateBtn = document.querySelector("#generate-button");
const colour = document.querySelector("#colour");

async function getQuote() {
    const quote = document.querySelector("#quote");
    
    await axios.get("https://api.kanye.rest/").then((response) => {
        quote.textContent = `"${response.data.quote}"`;
    })
}

function changeColour() {
    const bodycolour = document.querySelector("body");
    const randomColour = Math.floor(Math.random() * 16777215).toString(16);

    bodycolour.style.backgroundImage = `linear-gradient(0deg, #${randomColour}c7, #${randomColour}4d), url(/assets/bg.jpg)`;
}

// Generate new gradiant colour
colour.addEventListener("click", changeColour);
    
// Get quote on browser load.
quote.addEventListener("load", getQuote());

// Get quote on generate button click.
generateBtn.addEventListener("click", () => {
    getQuote()
});

// Get new quote every 10 minutes.
setInterval(getQuote, 600000);


/* Modal */
const aboutModal = document.querySelector("#about-modal");
const aboutBtn = document.querySelector("#about");
const closeModal = document.querySelector(".close");

aboutBtn.onclick = () => {
  aboutModal.style.display = "block";
}

closeModal.onclick = () => {
  aboutModal.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == modal) {
    aboutModal.style.display = "none";
  }
}




