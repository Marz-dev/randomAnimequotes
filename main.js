window.addEventListener('load', function() {
let quotes =[];
var btn = document.getElementById("btn");
var qute = document.getElementById("quote");
var char = document.getElementById("char");
var title = document.getElementById("title");

btn.onclick = function(){
  addDataToHTML();
}


const addDataToHTML  = () => {
  if (quotes.length >0){
    let q = quotes[Math.floor(Math.random()*2000)]
    qute.innerHTML = `"${q.quote}"`;
    char.innerHTML =`~${q.character}`;
    title.innerHTML = `-${q.anime}-`;
}
}
const initApp = () => {
  fetch('dataset.json')
  .then(response => response.json())
  .then(data => {
      quotes = data;
      
      addDataToHTML();
  });
}
initApp();
});