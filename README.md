# Dictionary App 📚

A simple and responsive Dictionary App built using **HTML, CSS, and JavaScript**.  
This app allows users to search for any English word and get its meaning, part of speech, example, antonyms, and a source link for more details.

## 🚀 Features

- Search any English word
- Shows word meaning
- Shows part of speech
- Shows example sentence if available
- Shows antonyms if available
- Displays "Read more" source link
- Handles invalid words
- Shows loading state while fetching data
- Clean and responsive UI

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API
- Dictionary API

## 📌 How It Works

1. User enters a word in the input box.
2. On form submit, JavaScript prevents page reload.
3. The app calls the Dictionary API using `fetch()`.
4. The response is converted into JSON.
5. Word details are displayed inside the result box.
6. If the word is invalid, an error message is shown.

## 📂 Project Structure

```txt
Dictionary-App/
│
├── index.html
├── style.css
└── script.js
