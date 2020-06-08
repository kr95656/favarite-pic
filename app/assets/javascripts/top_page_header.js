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
      $(this).next().toggleClass("on_test2");
      $('.header__tabs-menu__pic-list__gbluv_block').toggle();
      $('.gblnv_block__pic-menu .tabs__hiden__menu--list').hide();
      $('.gblnv_block__pic-menu .tabs__hiden__menu--list').each(function(i) {
        $(this).delay(80 * i).fadeIn(500);
      });

      // $(this).toggleClass("active");
      // $(this).next().toggleClass("onanimation");
      // $('ul li').hide();
      // $('ul li').each(function(i) {
      //   $(this).delay(80 * i).fadeIn(500);
      // });


    });

    $('.top-trigger').click(function(){
      $(this).toggleClass("active");
      $(this).next().toggleClass("on_test");
      $('.header__tabs-menu__top-list__gbluv-block').toggle();
      $('.gbluv-block__top-menu .page-lsit').hide();
      $('.gbluv-block__top-menu .page-lsit').each(function(i) {
        $(this).delay(80 * i).fadeIn(500);
      });
    });

  });

 

});