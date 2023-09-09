fetch('https://icanhazdadjoke.com/slack')   //this api will create a new joke every time  it returns a response 
    .then(data => data.json())    
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
    })


    //we can validate the json api on jsonlint.com
    