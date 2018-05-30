var score = 0;
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

resetField();

$(document).ready(function() {
  $('#field IMG').click(function() {
    if($('.flipped').length > 1) {
      return false;
    }
    $(this).attr('src',$(this).data('card'));
    $(this).addClass('flipped');
    if($('.flipped').length > 1) {
      // check if they match
      if($('.flipped').eq(0).data('card') == $('.flipped').eq(1).data('card')) {
        $('.flipped').addClass('match');
        setTimeout(function() {
          $('.flipped').attr('src','images/empty.png');
          $('.flipped').removeClass('match');
          $('.flipped').removeClass('flipped');
          checkWin();
        },600);
      }
      else {
          $('.flipped').addClass('sucker');
        setTimeout(function() {
          $('.flipped').removeClass('sucker');
          $('.flipped').removeClass('flipped');
          $('#field IMG').not('[src="images/empty.png"]').attr('src','images/back.png');
        },600);
      }
    }
  });
});

function checkWin() {
  if($('#field IMG[src!="images/empty.png"]:visible').length == 0) {
    $('#yay').show();
    $('BODY').addClass('confetti');
    score++;
    $('#score').text(score);
    setTimeout(function() {
      if(confirm('YOU ARE THE WINNER! YAY! Do you want to play again?')) {
        resetField();
      }
    },1000);
  }
}

function resetField() {
  $('BODY').removeClass('confetti');
  $('#yay').hide();
  // $("#field IMG").show();
  $('.flipped').removeClass('flipped');
  $('#field IMG').attr('src','images/back.png');
  $('#field IMG').removeClass('match');

  //shuffle the cards
  // cards = shuffle(cards);

  //show the order of the cards before we hide them again
  $('#field IMG').each(function(counter) {
    $(this).data('card',cards[counter]);
    $(this).attr('src',$(this).data('card'));
  });

  setTimeout(function() {
    $('#field IMG').attr('src','images/back.png');
  },2000);
}

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
