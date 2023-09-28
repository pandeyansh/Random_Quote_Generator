function generateQuote() {
  var quotes = [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Innovation distinguishes between a leader and a follower. - Steve Jobs",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "Your time is limited, don't waste it living someone else's life. - Steve Jobs"
  ];
  var quoteElement = document.getElementById("quote");
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomIndex];
  quoteElement.innerHTML = randomQuote;
}
var generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generateQuote);