const quote = document.querySelector("#quote")
const generateBtn = document.querySelector("#generate-button");

async function getQuote() {
    axios.get("https://api.kanye.rest/").then((response) => {
        quote.textContent = `"${response.data.quote}"`;
    })
}

quote.addEventListener("load", getQuote());

generateBtn.addEventListener("click", () => {
    getQuote()
});





