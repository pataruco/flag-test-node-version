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
      $renderFlagContainer = $('#render-flag');

  //Event Listeners
  $(window).on('load', getFlags);
  $buttonWhere.on('click', renderWhereInTheWorld);
  $('.js-quiz-evaluation-btn').on('click', evaluateFlag);
  $renderAnswerContainer.on('click', removeAnswer);

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
    });
  };

  function randomFlag(){
    randomFlagNumber = Math.floor(Math.random()*196);
    return flag = flags[randomFlagNumber];
  };

  function renderFlag() {
    randomFlag();
    $buttonWhere
      .after('<img src="' + flag.url + '" alt="'+ flag.name +'"/>')
      .after('<h1>' + flag.name + '</h1>');
  };

  function renderWhereInTheWorld(e) {
    var map = "https://www.google.com/maps/embed/v1/search?key=AIzaSyA00nFCVfgsnGqEIEpmO-sjelodI3op1MI&q="+flag.name;
    $('#render-where')
      .append('<iframe src="'+ map +'" width= 100% height= 100% frameborder="0" style="border:0" allowfullscreen></iframe>');
  };

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
    $renderAnswerContainer.append('<h2>Correct!</h2>');
    updateScore();
    renderScore();
    updateTries();
    renderTries();
    removeFlag();
    checkRoundNumber();
  };

  function renderWrongtAnswer() {
    $renderAnswerContainer.append('<h2>Wrong!</h2>');
    updateTries();
    renderTries();
    removeFlag();
    checkRoundNumber();
  };

  function removeFlag() {
    $renderFlagContainer.find('img').remove();
    $renderFlagContainer.find('h1').remove();
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
  };

  function renderRoundtComplete() {
    $renderAnswerContainer.append('<h2>Congratulations you have '+score+' / '+ tries+'</h2>');
    updateTries();
    renderTries();
    removeFlag();
  };

  function checkRoundNumber() {
    if (tries === 5) {
      removeRenderScore();
      renderRoundtComplete();
      score = 0;
      tries = 0;
    };
  };

}); //end document
