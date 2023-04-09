
const Random_qoute_API_URL = 'https://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quote_display')
const quoteInputElement = document.getElementById('Quote_Input')
const timerElement = document.getElementById('timer')
let correct=true

quoteInputElement.addEventListener('input',()=>{
const arrayQuote= quoteDisplayElement.querySelectorAll('span')
const arrayValue= quoteInputElement.value.split('')
arrayQuote.forEach((characterSpan, index)=>{
    const character= arrayValue[index]
    if(character==null){
        characterSpan.classList.remove('correct')
        characterSpan.classList.remove('incorrect')
        correct= false
    }
    else if(character=== characterSpan.innerText){
    characterSpan.classList.add('correct')
    characterSpan.classList.remove('incorrect')}
    else{
        characterSpan.classList.remove('correct')
        characterSpan.classList.add('incorrect')
        correct= false
    }
})
if (correct) renderNewQoute()
})
function getRandomQuote(){
    return fetch(Random_qoute_API_URL)
    .then(response => response.json())
    .then(data=> data.content)
}

async function renderNewQoute(){
    const qoute= await getRandomQuote() 
    quoteDisplayElement.innerText = ''
    qoute.split('').forEach(character => {
        const characterSpan= document.createElement('span')
        characterSpan.innerText= character
        quoteDisplayElement.appendChild(characterSpan)
        
    });
    quoteInputElement.value= null;
    startTimer()
}
let startTime
function startTimer(){
    timerElement.innerText=0
    startTime= new Date()
    setInterval(()=>{
        timer.innerText=getTimerTime()

    },1000)
}
function getTimerTime(){
  return Math.floor ((new Date()- startTime)/1000)
}
renderNewQoute(); 