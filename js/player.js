var Player = function(){
  this.jump = function(){
    $('body').keyup(function(e){
      if(e.keyCode === 32){
        $('.player').animate({
           y: '20%'
        }, 1000, function(){
          console.log('animation done');
        })
      }
    });
  }
};