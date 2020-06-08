$(function() {

  // function shuffle(arr) {
  //   for (let i = arr.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [arr[j], arr[i]] = [arr[i], arr[j]];
  //   }
  //   return arr;
  // }

  // const image = [



  // ];

  let slider    =         $('.slider');
  let image     =         $('.slide-item');

  
  
  
  
  // console.log( slider.find(image).sort)



  function randomize(item){
    slider.find(item).sort(function(){
      return Math.round(Math.random()) - 0.5;

    }).detach().appendTo(slider);
  }

  $(function(){
    randomize(image);
    slider.slick({
      // prevArrow:'<i class="fa fa-angle-left arrow arrow-left"></i>',
      // nextArrow:'<i class="fa fa-angle-right arrow arrow-right"></i>',
      fade:             true,
      dots:             false,
      autoplay:         true,
      autoplaySpeed:    3000,
      speed:            1500,
      infinite:         true,
    });


  });

  $(function(){
    $('.menu-trigger').click(function(){
      $(this).toggleClass("active");
      $(this).next().toggleClass("on_animation");
      $('.gbluv_block').toggle();
      $('ul li').hide();
      $('ul li').each(function(i) {
        $(this).delay(80 * i).fadeIn(500);
      });

      // $(this).toggleClass("active");
      // $(this).next().toggleClass("onanimation");
      // $('ul li').hide();
      // $('ul li').each(function(i) {
      //   $(this).delay(80 * i).fadeIn(500);
      // });


    });

  });

 

});