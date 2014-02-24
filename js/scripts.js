var sentence = function(sentence) {
  var sentenceArray = sentence.split(" ");
  var result = []
  sentenceArray.forEach(function(word){
    result.push(pigLatin(word));
  })
  return result.join(" ");
};

var pigLatin  = function(word){
  var vowelArray = ["a","e", "i", "o", "u", "y"];
  var firstLetter = word.charAt(0);
  var result;
  var index;

  for (var i = 0; (vowelArray.indexOf(word.charAt(i)) === -1) ; i++) {
    index = i + 1;
  };

  if (word.slice(index-1, index +1) === "qu") {
    result = word.slice(index + 1) + word.slice(0,index + 1) + "ay";  
  } else if (word.charAt(0) === "y"){
    result = word.slice(1) + word.slice(0,1) + "ay";
  } else if (vowelArray.indexOf(firstLetter) !== -1){
    result = word + "ay";  
  } else {
    result = word.slice(index) + word.slice(0,index) + "ay";
  };
  return result;    
};

$(function(){
  $("form#pig-latin").submit(function(event){
    var word = $("input#words").val();
    var result = sentence(word);

    $(".words").text(result);

    $("#result").show();
    event.preventDefault();

  }); 
});
