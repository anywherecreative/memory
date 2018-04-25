var cards = new Array();
cards[0] = "images/ace-spades.png";
cards[1] = "images/ace-spades.png";
cards[2] = "images/two-spades.png";
cards[3] = "images/two-spades.png";
cards[4] = "images/three-spades.png";
cards[5] = "images/three-spades.png";
cards[6] = "images/four-spades.png";
cards[7] = "images/four-spades.png";
cards[8] = "images/five-spades.png";
cards[9] = "images/five-spades.png";
cards[10] = "images/six-spades.png";
cards[11] = "images/six-spades.png";

cards = shuffle(cards);

$('IMG').each(function(counter) {
  $(this).data('card',cards[counter]);
});

$(document).ready(function() {
  $('IMG').click(function() {
    $(this).attr('src',$(this).data('card'));
    $(this).addClass('flipped');
    if($('.flipped').length > 1) {
      // check if they match
      if($('.flipped').eq(0).data('card') == $('.flipped').eq(1).data('card')) {
        alert('YAY!');
        //remove from field
      }
      else {
        alert('NA!');
        //flip back over
      }
    }
  });
});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
