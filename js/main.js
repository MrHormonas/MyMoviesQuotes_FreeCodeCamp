collection = [
    {"quote":"Oh yes, the past can hurt. But you can either run from it, or learn from it",
        "author":"Rafiki",
        "film":"Lion King",
        "img":"https://s-media-cache-ak0.pinimg.com/564x/e2/f0/fa/e2f0fa040bf11c644a736f8c3ba5032a.jpg"},
    {"quote":"Do, or do not. There is no try",
        "author":"Yoda",
        "film":"SW The Empire Strikes Back",
        "img":"http://r23.imgfast.net/users/2814/65/96/99/album/pr/yoda12_800x600.jpg"},
    {"quote":"To the well organized mind, death is but the next great adventure.",
        "author":"A. Dumbledore",
        "film":"HP and the Sorcerer's Stone",
        "img":"http://cdn.hitfix.com/photos/5995544/Dumbledore_article_story_large.jpg"},
    {"quote":"Why so serious? Let's put a smile on that face!",
        "author":"The Joker",
        "film":"The Dark Night",
        "img":"http://saigonart.net/upload/product/422902492310.jpg"},
    {"quote":"A day may come when the courage of men fails... but it is not THIS day",
        "author":"Aragorn",
        "film":"TLotR The Return of the King",
        "img":"http://static.comicvine.com/uploads/original/11111/111112401/2963421-aragorn.jpg"}

];

currentQuote: '';

$(document).ready(function() {
  newQuote();
});

var newQuote = function(){
  random = Math.floor(Math.random() * collection.length);
  currentQuote = collection[random].quote + " - " + collection[random].author + " in  " + collection[random].film;
  console.log(currentQuote);
  $('#quote').html(collection[random].quote);
  $('#author').html(collection[random].author);
  $('#film').html(collection[random].film);
  $('.img').html("<img src='"+collection[random].img+"'/>");

  //TWITTER INTERFACE
  //$('.twitter-share-button').removeAttr('href');
  //$('.twitter-share-button').attr('href', transform($('#quote').html() + " - " + $('#author').html() + " in " + $('#film').html()));

};

var transform = function(str) {
  var str = "https://twitter.com/intent/tweet?button_hashtag=AwesomeMoviesAwesomeQuotes&text=" + str;
  return str.replace(/ /g, "%20");
  };

//when we want new quote
$(".btn").click(function(){
  newQuote();
});

//TWITTER INTERFACE
/*
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id))
    return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));*/
