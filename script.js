const form = document.getElementById("search-form");
const resultdiv = document.getElementById("results");
const input = document.getElementById("word-input");

resultdiv.style.display = "none";

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const word = input.value.trim();

    if (word === "") {
        resultdiv.style.display = "block";
        resultdiv.innerHTML = `<p>Please enter a word.</p>`;
        return;
    }

    getWordInfo(word);
});

const getWordInfo = async (word) => {
    try {
        resultdiv.style.display = "block";
        resultdiv.innerHTML = `<p>Loading...</p>`;

        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

        if (!response.ok) {
            throw new Error("Word not found");
        }

        const data = await response.json();

        const wordData = data[0];
        const meaning = wordData.meanings[0];
        const definitionData = meaning.definitions[0];

        resultdiv.innerHTML = `
            <h2><strong>Word:</strong> ${wordData.word}</h2>
            <p><strong>Part of Speech:</strong> ${meaning.partOfSpeech}</p>
            <p><strong>Meaning:</strong> ${definitionData.definition || "Not Found"}</p>
            <p><strong>Example:</strong> ${definitionData.example || "Not Found"}</p>
            <p><strong>Antonyms:</strong></p>
        `;

        if (!definitionData.antonyms || definitionData.antonyms.length === 0) {
            resultdiv.innerHTML += `<span>Not found!</span>`;
        } else {
            for (let i = 0; i < definitionData.antonyms.length; i++) {
                resultdiv.innerHTML += `<li>${definitionData.antonyms[i]}</li>`;
            }
        }

        if (wordData.sourceUrls && wordData.sourceUrls.length > 0) {
            resultdiv.innerHTML += `
                <br>
                <a href="${wordData.sourceUrls[0]}" target="_blank">Read more</a>
            `;
        }

    } catch (error) {
        resultdiv.style.display = "block";
        resultdiv.innerHTML = `<p>Enter a valid word!</p>`;
    }
};