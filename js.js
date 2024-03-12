const quote = document.getElementById('quote');
const author = document.getElementById('author');
const btn = document.getElementById('btn');

const url = 'https://api.quotable.io/random';

let getquote = ()=>{
    fetch(url)
    .then((data)=>data.json())
    .then((item)=>{
        quote.innerHTML = item.content
        author.innerHTML= ` author of this quote- ${item.author}`
    })
}
btn.addEventListener('click',getquote)
getquote();