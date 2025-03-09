const quotes = [
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Opportunities don’t happen. You create them. – Chris Grosser",
    "Difficulties in life are intended to make us better, not bitter. – Dan Reeves",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    "Your limitation—it’s only your imagination. – Unknown"
  ];

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote(){
    while (true){
        // floor: round down because of indexes. Ceil: round up
        const randomIdx = Math.floor(Math.random() * quotes.length)
        
        if (usedIndexes.size === quotes.length){
            usedIndexes.clear()
        }

        if (usedIndexes.has(randomIdx)) continue
        
        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break 
    }   
}