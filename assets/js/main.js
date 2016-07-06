$(document).ready(function() {
    newQuote();
});

var newQuote = function() {
    var apiURL = "https://crossorigin.me/http://quotes.stormconsultancy.co.uk/random.json";

    $.getJSON(apiURL, function(data) {
        console.log(data);
        $('#quote').html(data.quote);
        $('#author').html(data.author);

        if (data == null)
            newQuote();
    }).done(function(){
            console.log($('#quote').text());
            var url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent($('#quote').text()) + " %23AwesomeQuotes";

            $('#btnTwitter').attr('href', url);
    });;

    /*TWITTER INTERFACE BUTTON*/
    var url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent($('#quote').innerHTML) + " %23AwesomeQuotes";

    $('#btnTwitter').attr('href', url);
};

//when we want new quote
$("#newQuote").click(function() {
    newQuote();
});

//TWITTER INTERFACE
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
}(document, "script", "twitter-wjs"));
