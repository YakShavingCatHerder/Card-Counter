// Set default variable values
var deckCount = 8;
var cards_dealt = 0;
var aces_seen = 0;
var count = 0;

$(function() {
  console.log(count);
  // User Clicks 9 The Running Count Goes Down by 1
  $(".decreaseCount1").click(function() {
    count = parseInt($("#runningCount").text());
    $("#runningCount").text(count - 1);
    count = parseInt($("#runningCount").text());
    $("#trueCount").html(calc_true_count(deckCount, count));
    calc_bet_amt(parseFloat($("#trueCount").html()));
    cards_dealt += 1;
    $("#decksRemaining").html(calc_decks_remaining(deckCount, cards_dealt));
  });

  // User Clicks 10-K The Running Count Goes Down by 2
  $(".decreaseCount2").click(function() {
    count = parseInt($("#runningCount").text());
    $("#runningCount").text(count - 2);
    count = parseInt($("#runningCount").text());
    $("#trueCount").html(calc_true_count(deckCount, count));
    calc_bet_amt(parseFloat($("#trueCount").html()));
    cards_dealt += 1;
    $("#decksRemaining").html(calc_decks_remaining(deckCount, cards_dealt));
  });

  // User Clicks 2, 3, or 7 The Running Count Goes Up by 1
  $(".increaseCount1").click(function() {
    count = parseInt($("#runningCount").text());
    $("#runningCount").text(count + 1);
    count = parseInt($("#runningCount").text());
    $("#trueCount").html(calc_true_count(deckCount, count));
    calc_bet_amt(parseFloat($("#trueCount").html()));
    cards_dealt += 1;
    $("#decksRemaining").html(calc_decks_remaining(deckCount, cards_dealt));
  });

  // User Clicks 4, 5, or 6 The Running Count Goes Up by 2
  $(".increaseCount2").click(function() {
    count = parseInt($("#runningCount").text());
    $("#runningCount").text(count + 2);
    count = parseInt($("#runningCount").text());
    $("#trueCount").html(calc_true_count(deckCount, count));
    calc_bet_amt(parseFloat($("#trueCount").html()));
    cards_dealt += 1;
    $("#decksRemaining").html(calc_decks_remaining(deckCount, cards_dealt));
  });

  // User Clicks 8, The Running Count Doesn"t Change
  $(".noCount8").click(function() {
    count = parseInt($("#runningCount").text());
    $("#runningCount").text(count);
    count = parseInt($("#runningCount").text());
    $("#trueCount").html(calc_true_count(deckCount, count));
    calc_bet_amt(parseFloat($("#trueCount").html()));
    cards_dealt += 1;
    $("#decksRemaining").html(calc_decks_remaining(deckCount, cards_dealt));
  });

  // User Clicks A, The Running Count Doesn"t Change; count aces
  $(".noCountA").click(function() {
    count = parseInt($("#runningCount").text());
    $("#runningCount").text(count);
    count = parseInt($("#runningCount").text());
    $("#trueCount").html(calc_true_count(deckCount, count));
    calc_aces_remaining();
    calc_bet_amt(parseFloat($("#trueCount").html()));
    cards_dealt += 1;
    $("#decksRemaining").html(calc_decks_remaining(deckCount, cards_dealt));
    aces_seen += 1;
    $("#acesLeft").html(calc_aces_remaining(deckCount, aces_seen));
  });


});

// Reset All Values to their Defaults
function resetValues() {
  $("#decksRemaining").text("8");
  $("#acesLeft").text("32");
  $("#runningCount").text("0");
  $("#trueCount").text("0.0");
  $("#bet").text("Bet 1x");
}

function calc_decks_remaining(deckCount, cards_dealt) {
  var total_cards_in_shoe = (deckCount*52);
  var decksRemaining = ((total_cards_in_shoe-cards_dealt)/52).toFixed(1);
  $("#decksRemaining").html(decksRemaining);
}

function calc_aces_remaining(deckCount, aces_seen) {
  var total_aces = (deckCount*4);
  var acesRemaining = (total_aces-aces_seen);
  $("#acesLeft").html(acesRemaining);
}

function calc_true_count(deck, count) {
  var cal_value = parseInt(count, 10) / parseInt(deck, 10);
  return cal_value.toFixed(1);
}

function calc_bet_amt(true_count) {
  var bet_amt = "Bet 1x";
  if (true_count < 2) {
    bet_amt = "Bet 1x";
  }
  if (true_count >= 2 && true_count < 4) {
    bet_amt = "Bet 2x";
  } else if (true_count >= 4 && true_count < 6) {
    bet_amt = "Bet 3x";
  } else if (true_count >= 6 && true_count < 8) {
    bet_amt = "Bet 4x";
  } else if (true_count >= 8) {
    bet_amt = "Bet 5x";
  }
  $("#bet").html(bet_amt);
}