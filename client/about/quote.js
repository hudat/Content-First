Template.quote.helpers({  randomQuote: function() {    var quotes = Quotes.find().fetch();    var quote = quotes[Math.floor(Math.random()*quotes.length)];    return [quote];  },  quotes: function() {    return Quotes.find();  }});