* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #222;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    text-align: center;
}

.container {
    width: 80%;
    max-width: 700px;
    padding: 20px;
    border: 2px solid #444;
    border-radius: 10px;
    background-color: #111;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}

h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #f00;
}

.text {
    font-size: 1.2em;
    margin-bottom: 20px;
}

.text.warning {
    color: #ff0;
}

.text.final {
    color: #ff0000;
    font-weight: bold;
    font-size: 1.5em;
}

.voice {
    font-style: italic;
    color: #aaa;
}

button {
    background-color: #444;
    color: #fff;
    font-size: 1.2em;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #555;
}

button:active {
    background-color: #666;
}

.choices {
    margin-top: 30px;
}

.hidden {
    display: none;
}

.warning {
    font-weight: bold;
    font-size: 1.3em;
    color: red;
}
