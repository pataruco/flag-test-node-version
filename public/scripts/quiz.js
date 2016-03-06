$(document).ready(function(){
  //Variables
  var flags = {},
      randomFlagNumber,
      $buttonWhere = $('#where'),
      flag = {},
      $renderAnswerContainer = $('#render-answer'),
      score = 0,
      tries = 0,
      $renderScoreContainer = $('#score'),
      $renderTriesContainer = $('#tries'),
      $flagName = $('#flag-name'),
      $flagImage = $('#flag-img'),
      $renderFlagContainer = $('#render-flag');

  //Event Listeners
  $(window).on('load', getFlags);
  $buttonWhere.on('click', renderWhereInTheWorld);
  $('.js-quiz-evaluation-btn').on('click', evaluateFlag);
  $renderAnswerContainer.on('click', removeAnswer);
  $('#close-map').on('click', removeWhereInTheWorld);

  // Functions
  function getFlags(e) {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url:'/flags'
    })
    .success(function(data){
      flags = data;
      renderFlag();
      renderScore(score);
      renderTries(tries);
      WhereInTheWorld();
    });
  };

  function randomFlag(){
    randomFlagNumber = Math.floor(Math.random()*196);
    return flag = flags[randomFlagNumber];
  };

  function renderFlag() {
    randomFlag();
    $flagName.text(flag.name);
    $flagImage.attr('src', flag.url).attr('alt', flag.name);
  };

  function WhereInTheWorld() {
    var map = "https://www.google.com/maps/embed/v1/search?key=AIzaSyA00nFCVfgsnGqEIEpmO-sjelodI3op1MI&q="+flag.name;
    $('#iframe-where').attr('src', map)
  };

  function renderWhereInTheWorld(e) {
    $('#render-where').addClass('on');
  }

  function removeWhereInTheWorld(){
    $('#render-where').removeClass('on')
  }

  function evaluateFlag(e){
    e.preventDefault();
    switch (this.id) {
      case 'good-flag':
        if (flag.goodFlag) {
          renderCorrectAnswer();
        } else {
          renderWrongtAnswer();
        }
        break;
      case 'bad-flag':
        if (flag.goodFlag == false){
          renderCorrectAnswer();
        } else {
          renderWrongtAnswer();
        }
        break;
    };
  };

  function renderCorrectAnswer() {
    $renderAnswerContainer.text('Correct!');
    updateScore();
    renderScore();
    updateTries();
    renderTries();
    removeFlag();
    removeWhereInTheWorld();
    WhereInTheWorld();
    checkRoundNumber();
  };

  function renderWrongtAnswer() {
    $renderAnswerContainer.text('Wrong!');
    updateTries();
    renderTries();
    removeFlag();
    removeWhereInTheWorld();
    WhereInTheWorld();
    checkRoundNumber();
  };

  function removeFlag() {
    $flagName.text('');
    $flagImage.attr('src', flag.url).attr('');
    renderFlag();
  };

  function removeAnswer() {
    $renderAnswerContainer.empty();
  };

  function renderScore() {
    $renderScoreContainer.text(score);
  };

  function renderTries() {
    $renderTriesContainer.text(tries);
  };

  function updateTries() {
    return tries++;
  };

  function updateScore() {
    return score++;
  };

  function removeRenderScore(){
    $renderScoreContainer.empty();
    $renderTriesContainer.empty();
  };

  function renderRoundtComplete() {
    $renderAnswerContainer.text('Congratulations you have ' + score + ' / '+ tries + '');
    removeRenderScore();
    updateTries();
    updateScore();
    removeFlag();
  };

  function checkRoundNumber() {
    if (tries === 10) {
      renderRoundtComplete();
      score = 0;
      tries = 0;
    };
  };

}); //end document
