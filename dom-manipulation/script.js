let button = document.getElementById("newQuote");
let quoteList = document.getElementById("quoteDisplay");
const header = document.querySelector("h1");
let myObject = [{text:"one",category:"bee"}, {text:"two",category:"cee"}]
let storedQuote = JSON.parse(localStorage.getItem("storedQuote"))
if(storedQuote != null){
myObject=storedQuote
}

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
  
  for (let i = 0; i < storedQuote.length; i++) {
    const quote = storedQuote[i];
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

// const createAddQuoteForm = () => {
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
//Adding logic to save in local storage to local storage
localStorage.setItem("storedQuote",JSON.stringify(myObject))
newQuoteField.value=""
newQuoteCatField.value=""



}
// const createAddQuoteForm = () => {
//   const textInput = document.getElementById("newQuoteText");
//   const catInput = document.getElementById("newQuoteCategory");

//   const quote = { text: textInput.value, category: catInput.value };
//   myObject.push(quote);

//   console.log(myObject); // to confirm it was added

//   // clear the fields
//   textInput.value = "";
//   catInput.value = "";
// };
function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(e) {
      const importedQuotes = JSON.parse(e.target.result);
      myObject.push(...importedQuotes);
      // myObject = importedQuotes;  replace the array entirely
      localStorage.setItem(JSON.stringify("storedQuote",myObject))
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }
// -------- EXPORT JSON --------
document.getElementById("exportBtn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(myObject, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "quotes.json";
  a.click();

  URL.revokeObjectURL(url); // cleanup
});

button.addEventListener("click",(e)=>{
    e.preventDefault()
    changeColor()
    // showRandomQuote()
    objFunction()
})