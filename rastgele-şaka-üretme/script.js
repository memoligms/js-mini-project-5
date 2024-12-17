const jokeButton = document.getElementById('jokeButton');
const joke = document.getElementById('joke');


const apiKey = 'rvKsAPZpx0WopsWDeERVkg==gIJkPMFkS9nbUddR';
const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes';

const options={
    method: 'GET',
    headers: {
        'X-Api-Key':apiKey
    }
}

jokeButton.addEventListener('click',async function(){
    joke.textContent='Updating...';
    jokeButton.textContent= 'Loading...'
    jokeButton.disabled= true;


    const response = await fetch(apiUrl,options);
    const data= await response.json();
    

    jokeButton.disabled= false;
    jokeButton.textContent= 'Tell me a joke';
    joke.textContent=data[0].joke;
})