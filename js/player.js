var Player = function(){
  this.jump = function(){
    $('body').keyup(function(e){
      if(e.keyCode === 32){
        $('.player').animate({
           y: '20%'
        }, 500, function(){
          $('.player').animate({
      y: '+=60%'
    }, 500, function(){
      console.log('animation done');
      })
          console.log('animation done');
          
        })
      }
    });
  }

  this.fall = function(){
    $('.player').animate({
      y: '0%'
    }, 1000, function(){
      console.log('animation done');
      })
  }

};