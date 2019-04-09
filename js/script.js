// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

// Quotes array
var quotes = [
  {
    quote: 'Whatever happens tomorrow you must promise me one thing. That you will stay who you are. Not a perfect soldier, but a good man.',
    character: 'Dr. Abraham Erskine',
    source: 'Captain America:  The First Avenger',
    year: '2011',
    tag: 'captain america'
  },
  {
    quote: 'A wise man once asked, "Is it better to be feared or respected?" I say, is it too much to ask for both?',
    character: 'Tony Stark',
    source:  'Iron Man',
    year: '2008',
    tag: 'iron man'
  },
  {
    quote: 'You are no match for the mighty Thor!',
    character: 'Thor',
    source: 'Thor',
    year: '2011',
    tag: 'thor'
  },
  {
    quote: 'You can\'t destroy power. All you can do is to make sure that it\'s in the right hands.',
    character: 'Dr. Hank Pym',
    source: 'Ant Man',
    year: '2015',
    tag: 'ant man'
  },
  {
    quote: 'Have you ever had someone pick your brain and play? Pull you out, stuff something else in. Do you know what it\s like to be unmade?',
    character: 'Hawkeye',
    source: 'The Avengers',
    year: '2012',
    tag: 'avengers'
  },
  {
    quote: 'I know what it\'s like to lose. To feel so desperately that you\'re right, yet to fail nonetheless.',
    character: 'Thanos',
    source: 'Avengers: Infinity War',
    year: '2018',
    tag: 'avengers'
  },
  {
    quote: 'We\'re in the endgame now.',
    character: 'Doctor Strange',
    source: 'Avengers:  Infinity War',
    year: '2018',
    tag: 'avengers'
  },
  {
    quote: 'When you can do the things that I can, but you don\'t, and then the bad things happen, they happen because of you.',
    character: 'Spiderman',
    source: 'Spiderman:  Homecoming',
    year: '2017',
    tag: 'spiderman'
  },
  {
    quote: 'This man declined the Nobel Peace Prize. He said peace wasn\'t an achievement, it was a responsibility. See, it\'s stuff like this that gives me trust issues.',
    character: 'Nick Fury',
    source: 'Captain America:  The Winter Soldier',
    year: '2014',
    tag: 'captain america'
  }
]

// Create random number and return an object from quotes array
function getRandomQuote() {
  var generateIndex = Math.floor(Math.random() * quotes.length); // Generate random # b/w 0 and length of quotes array
  return quotes[generateIndex];
}


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

// document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.