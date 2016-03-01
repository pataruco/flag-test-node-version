//
// $(document).ready(function(){
//   $(window).on('load',getPrinciples);
//   function getPrinciples() {
//     $.ajax({
//       type: 'GET',
//       dataType: 'json',
//       url:'/principles'
//     })
//     .success(function(data){
//       renderPrinciples(data)
//       })
//   };
//
//   function renderPrinciples(principles){
//     principles.forEach(function(principle){
//       renderEachPrinciple(principle);
//     })
//   };
//
//   function renderEachPrinciple(principle){
//     $('#container').append('<h1>' + principle.title  + '</h1>')
//       .append('<h2>' + principle.subTitle  + '</h2>')
//       .append('<p>' + principle.explanation  + '</p>');
//   };
// }); //end document
