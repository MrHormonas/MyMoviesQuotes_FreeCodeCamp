$(document).ready(function() {
  random = Math.floor(Math.random() * collection.length);
    
    $('.quote').html("<blockquote class='blockquote-reverse'><p>"+collection[random].quote+"</p><footer><strong>"+collection[random].author+"<strong> in <em>"+collection[random].film+"</em></footer></blockquote>");
  
  $('.twitter-share-button').attr('data-text', collection[random].quote+"-"+collection[random].author+' in '+collection[random].film);
  
  $(".btn").click(function(){
    
    random = Math.floor(Math.random() * collection.length);
    
    $('.quote').html("<blockquote class='blockquote-reverse'><p>"+collection[random].quote+"</p><footer><strong>"+collection[random].author+"<strong> in <em>"+collection[random].film+"</em></footer></blockquote>");
    
      $('.twitter-share-button').attr('data-text', "");
    
      $('.twitter-share-button').attr('data-text', collection[random].quote+"-"+collection[random].author+' in '+collection[random].film);
    
    //$('.img').html("<img src='"+collection[random].img+"' height='100' width='100'>");
   
  });
});

var collection = 
 [
    {"quote":"Oh yes, the past can hurt. But you can either run from it, or learn from it", "author":"Rafiki", "film":"Lion King", "img":"http://www.quotesworthrepeating.com/wp-content/uploads/2013/02/Rafiki.jpg"},
    {"quote":"Do, or do not. There is no 'try'", "author":"Yoda", "film":"The Empire Strikes Back", "img":"http://littleboyreports.com/wp-content/uploads/2015/05/Master-Yoda-Star-Wars.jpg"},

];