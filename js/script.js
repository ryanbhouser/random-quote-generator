// Quotes array
var quotes = [
  {
    quote: 'Whatever happens tomorrow you must promise me one thing. That you will stay who you are. Not a perfect soldier, but a good man.',
    source: 'Dr. Abraham Erskine',
    citation: 'Captain America:  The First Avenger',
    year: '2011',
    tag: 'captain america'
  },
  {
    quote: 'A wise man once asked, "Is it better to be feared or respected?" I say, is it too much to ask for both?',
    source: 'Tony Stark',
    citation:  'Iron Man',
    year: '2008',
    tag: 'iron man'
  },
  {
    quote: 'You are no match for the mighty Thor!',
    source: 'Thor',
    citation: 'Thor',
    year: '2011',
    tag: 'thor'
  },
  {
    quote: 'You can\'t destroy power. All you can do is to make sure that it\'s in the right hands.',
    source: 'Dr. Hank Pym',
    citation: 'Ant Man',
    year: '2015',
    tag: 'ant man'
  },
  {
    quote: 'Have you ever had someone pick your brain and play? Pull you out, stuff something else in. Do you know what it\s like to be unmade?',
    source: 'Hawkeye',
    citation: 'The Avengers',
    year: '2012',
  },
  {
    quote: 'I know what it\'s like to lose. To feel so desperately that you\'re right, yet to fail nonetheless.',
    source: 'Thanos',
    citation: 'Avengers: Infinity War',
    tag: 'avengers'
  },
  {
    quote: 'We\'re in the endgame now.',
    source: 'Doctor Strange',
    year: '2018',
    tag: 'avengers'
  },
  {
    quote: 'When you can do the things that I can, but you don\'t, and then the bad things happen, they happen because of you.',
    source: 'Spiderman',
    citation: 'Spiderman:  Homecoming',
    year: '2017',
  },
  {
    quote: 'This man declined the Nobel Peace Prize. He said peace wasn\'t an achievement, it was a responsibility. See, it\'s stuff like this that gives me trust issues.',
    source: 'Nick Fury'
  }
];

// Background colors = red, blue, gree, yellow, purple, lt green, orange, dk blue, gray
var colors = ['#c0392b', '#2980b9', '#16a085', '#f39c12', '#8e44ad', '#27ae60', '#d35400', '#2c3e50', '#7f8c8d'];

// Automatically generates a new quote every 20 seconds
var timer = window.setInterval(printQuote, 10000);

// Create random number and return an object from quotes array
function getRandomQuote() {
  var generateIndex = Math.floor(Math.random() * quotes.length);
  return quotes[generateIndex];
}

// Generates a random background color from the color array & changes the body's bg color
function randomBGColor() {
  var randomColor = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomColor];  
}

// Prints the randomly generated quote to the quote-box div
function printQuote() {
  randomBGColor();
  var quote = getRandomQuote();
  var htmlString = '';
  htmlString += '<p class="quote">' + quote.quote + '</p>';
  htmlString += '<p class="source">' + quote.source;

  // checks if quote has a citation
  if (quote.citation) {
    htmlString += '<span class="citation">' + quote.citation + '</span>';
  }

  // checks if quote has a year
  if (quote.year) {
    htmlString += '<span class="year">' + quote.year + '</span>';
  }

  // closes out the quote p tag
  htmlString += '</p>'

  // checks if quote has a tag
  if (quote.tag) {
    htmlString += '<p class="tag">Tagged under: ' + quote.tag + '</p>';
  }

  // prints htmlString to quote-box
  document.getElementById('quote-box').innerHTML = htmlString;

  // calls function to reset the timer
  resetTimer();
}

// resets and restarts the timer if the button is clicked
// with help from "aroth" on StackOverflor (https://stackoverflow.com/questions/6889598/reset-settimeout-every-button-click)
function resetTimer() {  
  clearTimeout(timer);
  timer = setTimeout(printQuote, 10000);
}

// Ensures a random quote appears on page load
printQuote();

// Generates a new random quote and displays on screen by clicking the button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
