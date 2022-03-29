//button.addEventListener('click', show_alert)
    


//function show_alert(){
   // alert("I'm from a script file")

//}

//letras

function getDocumentLetters(){
    var entryText = document.querySelector('#texto-entrada').textContent;
    return entryText.replace(/[^\w\s]/gi).toUpperCase().split("");
    

}

function countLetters(text) {
    var result = {}
    text.forEach(letter => {
        if (!result[letter]){
            result[letter] = 1;
        }
        else{
            result[letter] += 1;

        }
    })
    return result;

}

function insertLetterResults(result){
    var resultsArray= Object.entries(result)
    resultsArray.forEach(values => {
        var resultTag = document.querySelector('#resultados');

        var p = document.createElement("p");
        
            var strong = document.createElement("strong");
            strong.innerHTML = 'letra: ${values[0]}';
            p.appendChild(strong)

            var span = document.createElement("span");
            span.innerHTML = `Cantidad: ${values[1]} `;
            p.appendChild(span);

        resultTag.appendChild(p);

    })
}

function letterCount(){
    var letters = getDocumentLetters();
    var results = countLetters(letters);
    insertLetterResults(results);
}

letterCount();

// Palabras

function getDocumentWords(){
    var entryText = document.querySelector('#texto-entrada').textContent;
    return entryText.match(/\b(\w+)\b/g);
}

function countWords(wordArray){
    var result = {}
    wordArray.forEach(word => {
        var upWord = word.toUpperCase();
        if (!result[upWord]){
            result[upWord] = 1;
        }
        else{
            result[upWord] += 1;
        }
    })
    return result;
}

function insertWordResults(result){
    var resultsArray = Object.entries(result)
    resultsArray.forEach(values => {
        var resultTag = document.querySelector('#resultados');
        var p = document.createElement("p");

            var strong = document.createElement("strong");
                strong.innerHTML = `Palabra: ${values[0]}`;
            p.appendChild(strong);

            var span = document.createElement("span");
                span.innerHTML = `Cantidad: ${values[1]}`;
            p.appendChild(span);

        resultTag.appendChild(p);
    })
}

function wordCount(){
    var words = getDocumentWords();
    var results = countWords(words);
    insertWordResults(results);
}

wordCount();


