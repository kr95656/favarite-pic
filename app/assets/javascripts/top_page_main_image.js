$(function() {
  // let data_id = $(".contents-row").dataset.id;
  let data_id = $(".contents-row").data();

  // console.log(data_id);

  if($('.contents-row:odd')){
    $(".contents-row:odd").css({
      "background-size": "cover",
      "height": "370px",
      "width": "270px",
    });

  }


});