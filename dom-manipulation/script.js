let button = document.getElementById("newQuote");
let quoteList = document.getElementById("quoteDisplay");
const header = document.querySelector("h1");
const myObject = [{text:"one",category:"bee"}, {text:"two",category:"cee"}]

function changeColor(){
  
    if (header.style.color === "red"){
        header.style.color = "black"
    }
    else {header.style.color = "red"}
}
// const objFunction = ()=>{
//     quoteList.textContent = ""
//     const makeList = document.createElement("ul")
//     Object.entries(myObject).map(([key,value]) => {
//         const list = document.createElement("li");
//        list.textContent=`${key}:${value}`;
//        makeList.appendChild(list);
//     });
//     quoteList.appendChild(makeList)
// }
const objFunction = () => {
  quoteList.textContent = ""; // clear previous content
  const makeList = document.createElement("ul");
  
  const keys = Object.keys(myObject);  // get array of keys
  
  for (let i = 0; i < keys.length; i++) {
    const quote = myObject[i];
    const list = document.createElement("li");
    list.textContent = `${quote.text}: ${quote.category}`;
    makeList.appendChild(list);
  }
  
  quoteList.appendChild(makeList);
};
const showRandomQuote = () => {
  quoteList.textContent = ""; // clear previous content

  // get a random index from 0 to myObject.length - 1
  const randomIndex = Math.floor(Math.random() * myObject.length);
  const quote = myObject[randomIndex];

  const makeList = document.createElement("ul");
  const list = document.createElement("li");
  list.textContent = `${quote.text}: ${quote.category}`;
  makeList.appendChild(list);

  quoteList.appendChild(makeList);
};

// const objFunction = () => {
//   quoteList.innerHTML = '';
//   const makeList = document.createElement("ul");

//   // Use Object.entries to get key-value pairs
//   Object.entries(myObject).forEach(([key, value]) => {
//     const list = document.createElement("li");
//     list.textContent = `${key}: ${value}`;
//     makeList.appendChild(list);
//   });

//   quoteList.appendChild(makeList);
// }
const createAddQuoteForm = ()=>{
const newQuoteField = document.getElementById("newQuoteText")
const newQuoteCatField = document.getElementById("newQuoteCategory")
const newQuoteText=newQuoteField.value
const newQuoteCat=newQuoteCatField.value
const quote = {text:newQuoteText,category:newQuoteCat}
myObject.push(quote)
newQuoteField.value=""
newQuoteCatField.value=""
}
// const addQuote = () => {
//   const textInput = document.getElementById("newQuoteText");
//   const catInput = document.getElementById("newQuoteCategory");

//   const quote = { text: textInput.value, category: catInput.value };
//   myObject.push(quote);

//   console.log(myObject); // to confirm it was added

//   // clear the fields
//   textInput.value = "";
//   catInput.value = "";
// };
button.addEventListener("click",(e)=>{
    e.preventDefault()
    changeColor()
    showRandomQuote()
})