$(function() {
  $( "#button" ).click(function() {
    $( "#button" ).addClass( "onclic", 250, validate);
  });

  function validate() {
    setTimeout(function() {
      $( "#button" ).removeClass( "onclic" );
      $( "#button" ).addClass( "validate", 450, callback );
    }, 2250 );
  }
    function callback() {
      setTimeout(function() {
        $( "#button" ).removeClass( "validate" );
      }, 1250 );
    }
});

$(document).ready(function(){
    // init controller
    var controller = new ScrollMagic.Controller();
    
    // lbuild scene
    var ourScene = new ScrollMagic.Scene({
    triggerElement: '#project6',
    triggerHook: '0.7'
  })
  .setClassToggle('#project6','fade-in')
  .addTo(controller);
  
});

$(document).ready(function(){
    // init controller
    var controller = new ScrollMagic.Controller();
    
    // lbuild scene
    var ourScene = new ScrollMagic.Scene({
    triggerElement: '#project5',
    triggerHook: '0.7'
  })
  .setClassToggle('#project5','fade-in')
  .addTo(controller);
  
});

$(document).ready(function(){
    // init controller
    var controller = new ScrollMagic.Controller();
    
    // lbuild scene
    var ourScene = new ScrollMagic.Scene({
    triggerElement: '#project4',
    triggerHook: '0.7'
  })
  .setClassToggle('#project4','fade-in')
  .addTo(controller);
  
});

$(document).ready(function(){
    // init controller
    var controller = new ScrollMagic.Controller();
    
    // lbuild scene
    var ourScene = new ScrollMagic.Scene({
    triggerElement: '#project3',
    triggerHook: '0.7'
  })
  .setClassToggle('#project3','fade-in')
  .addTo(controller);
  
});



$(document).ready(function(){
    // init controller
    var controller = new ScrollMagic.Controller();
    
    // lbuild scene
    var ourScene = new ScrollMagic.Scene({
    triggerElement: '#project2',
    triggerHook: '0.7'
  })
  .setClassToggle('#project2','fade-in')
  .addTo(controller);
  
});

$(document).ready(function(){
    // init controller
    var controller = new ScrollMagic.Controller();
    
    // lbuild scene
    var ourScene = new ScrollMagic.Scene({
    triggerElement: '#project1',
    triggerHook: '0.7'
  })
  .setClassToggle('#project1','fade-in')
  .addTo(controller);
  
});




