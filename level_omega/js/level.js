$(document).ready(function() {

  // add termDefinition class to definition wrapper
  $('.node .terminology').children().addClass('termDefinition clearfix').wrapInner('<div class="inner-wrapper" />');
  
  // hide all term definition
  $('.node .terminology .termDefinition').hide();

  // replace <dl> with <div>
  $('dl.terminology').each(function(i){
    $(this).replaceWith('<div class="terminology clearfix">' + $(this).html() + '</div>')
    
  });
  
  // replace <dt> with <h3>
  $('.termDefinition dt').each(function(){
    $(this).replaceWith('<h3 class="term">' + $(this).text() + '</h3>');
  });

  // replace <dd> with <div>
  $('.termDefinition dd').each(function(){
    $(this).replaceWith('<div class="definition">' + $(this).html() + '</div>');
  });
  
  $('.inner-wrapper').before('<div class="close-button clearfix"><a href="#">Hide</a></div>');


  // Glossary toggle
  $('.term-list a:not(.active)').click(function() {
    
    // match each trigger (term link) with its own definition
    trigger = $(this).attr('href').replace(/#/g, '');
    defClass = '.terminology .' + trigger;
    
    // this term definition is already open
    if ($(this).hasClass('active') ) {
      $('.term-list a.active').removeClass('active');
      $('.termDefinition').slideUp();
    }
    
    // this term definition is not already open
    else {
        // another term definition is open, close it first
        if ($('.term-list a.active').length > 0) {
          $('.term-list a.active').removeClass('active');
          $('.terminology .current-term').removeClass('current-term').slideUp();
        }

        // add .active class to current trigger 
        $(this).addClass('active');

        // slide down new term definition
        $(defClass).addClass('current-term').slideDown();
    }
    return false;
  });
  
  // "Hide button"
  $('.close-button a').bind('click', function() {
    $('.term-list a.active').removeClass('active');
    $('.termDefinition').slideUp();
    return false;
  });
  
  // Equal height for any_vote widget blocks
  $('#main_content_container .block-any_vote').equalHeight();
  
  // hide privacy legend
  $('#user-profile-form legend:contains(privacy)').hide();
  
  // Star Rating

  // temporal var to get [vote_average] from any_vote module
  /*if ($('#vote-average').length) {
    var voteAverage = parseInt($('#vote-average').text());
  }
  else {
    var voteAverage = 0;
  }
  //Create array of stars & star value so they can be referenced again.
  var starItems = new Array();
  var starValue = new Array();
  
  // loop through all stars (5)
  for (var starIndex = 0; starIndex < 5; starIndex++) {
    // collect starindex
    starItems[starIndex] = $('ul.any_vote_points_widget li:eq('+starIndex+')').children();
    // collect star value
    starValue[starIndex] = starIndex;
    
    starValueCalculate = (starIndex + 1) * 20;
    // debug replace * with starValue[starIndex]
    starItems[starIndex].text(starValueCalculate);
    
    // add full-star class to appropriate stars
    if (starValueCalculate < (voteAverage + 10)) {
      starItems[starIndex].addClass('full-star');
    }
    

    

  }*/
  
  var voteItems = new Array();

  for (var index = 0; index < 5; index++) {
    // collect starindex
    voteItems[index] = $('ul.any_vote_points_widget li:eq('+index+') a');
    voteItems[index].addClass('number-'+index);
    
 


  }

  /*voteItems[index].hover(function(){

    // highlight stars below this one
    for(i=0; i<index; i++) {
      $('ul.any_vote_points_widget li:eq('+i+') a').addClass('highlight');
    }
    // unhighlight stars above this one
    for(i=index+1; i<5; i++) {
      $('ul.any_vote_points_widget li:eq('+i+') a').removeClass('highlight');
    }

    alert(index);

  });*/
  
  $('ul.any_vote_points_widget li').removeClass('first last');
  
  $('ul.any_vote_points_widget li').hover(
  
    function(){
      var index = parseInt($(this).attr('class'));
      // highlight this one 

      // highlight stars below this one
      for(i=0; i<index; i++) {
        $('ul.any_vote_points_widget li').eq(i).addClass('highlight');
      }
    },
    function(){
      // unhighlight stars above this one
      $('ul.any_vote_points_widget li').removeClass('highlight');
    }
  );



});
