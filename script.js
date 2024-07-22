const messages=[["The best way to predict the future is to create it. - Abraham Lincoln"], ["Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"], ["In the middle of difficulty lies opportunity. - Albert Einstein"], ["Believe you can and you're halfway there. - Theodore Roosevelt"], ["The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"]];

const generateRandomMessage = () => {
    document.querySelector('#message').innerHTML = messages[Math.floor(Math.random() * messages.length)];
}

document.querySelector('button').addEventListener('click', generateRandomMessage)