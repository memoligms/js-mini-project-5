const wordInput = document.getElementById('word');
const button = document.getElementById('btn');
const trasnlatedDiv = document.getElementById('trasnlatedDiv');
const title = document.getElementById('title');
const meaning = document.getElementById('meaning');
const audio =document.getElementById('audio');

async function fetchApi() {
    trasnlatedDiv.style.display='none';
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput.value}`;
    const result = await fetch(url).then((res)=> res.json());
    if(result.title){
    }else{
        trasnlatedDiv.style.display='block';
        title.textContent= result[0].word;
        meaning.textContent=result[0].meanings[0].definitions[0].definition;
        audio.src=result[0].phonetics[0].audio;
    }
}

button.addEventListener('click', fetchApi);