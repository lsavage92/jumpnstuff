var Player = function(){
  this.jump = function(){
    $('body').keyup(function(e){
      if(e.keyCode === 32){
        $('.player').animate({
          fill: "black"
        }, 1000, function(){
          console.log('animation done');
        })
      }
    });
  }
};