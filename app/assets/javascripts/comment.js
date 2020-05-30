$(function(){
  function buildHTML(comment){
    var html = `<p class="user">
                  &lt;${comment.user_name}&gt;: ${comment.text}
                </p>
                <p class="date">
                  ${comment.created_at}
                </p>`

    // var html = `<li class="comment-lsit">
    //               <${comment.user_name}>: ${comment.text}
    //             </li>`
    return html;
  }

  // $(function(){
  //   if($('.container-text').val().length == 0) {
  //     $('.submit-btn').prop("disabled", true);
  //   }
  //   $('.container-text').on('keydown keyup keypress change', function(){
  //     if($(this).val().length < 2){
  //       $('.submit-btn').prop("disabled", true);
  //     }else{
  //       $('#new_comment').on('submit', function(e){
  //         e.preventDefault();
  //         var formData = new FormData(this);
  //         var url = $(this).attr('action')
  //         $.ajax({
  //           url: url,
  //           type: "POST",
  //           data: formData,
  //           dataType: 'json',
  //           processData: false,
  //           contentType: false
  //         })
  //         .done(function(data){
  //           var html = buildHTML(data);
  //           $('.comment-menu').append(html);
  //           $('.container-text').val('');
  //           $(".submit-btn").prop("disabled", false);
  //         })
  //         .fail(function(){
  //           alert('error');
  //         })
  //       })
  //       $('.submit-btn').prop("disabled", false);
  //     }
  //   })
  // });

  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.comment-menu').append(html);
      $('.container-text').val('');
      $('.submit-btn').prop("disabled", false);
    })
    .fail(function(){
      alert('error');
    })
  })
        
});



  // window.addEventListener('DOMContentLoaded',function(){
  //   var text = document.getElementById('comment_text');
  //   var btn = document.querySelector('.submit_btn');
  
  //   text.addEventListener('keyup', function(){
  //     if(this.value.length < 1) {
  //       btn.disabled = true;
  //     }else {
  //       btn.disabled = false;
  //       $('#new_comment').on('submit', function(e){
  //         // e.preventDefault();
  //         // var formData = new FormData(this);
  //         // var url = $(this).attr('action')
  //         // $.ajax({
  //         //   url: url,
  //         //   type: "POST",
  //         //   data: formData,
  //         //   dataType: 'json',
  //         //   processData: false,
  //         //   contentType: false
  //         // })
  //         // .done(function(data){
  //         //   var html = buildHTML(data);
  //         //   $('.comment-menu').append(html);
  //         //   $('.container-text').val('');
  //         //   $(".submit-btn").prop("disabled", false);
  //         // })
  //         // .fail(function(){
  //         //   alert('error');
  //         // })
  //         e.preventDefault();
  //         var formData = new FormData(this);
  //         var url = $(this).attr('action')
  //         $.ajax({
  //           url: url,
  //           type: "POST",
  //           data: formData,
  //           dataType: 'json',
  //           processData: false,
  //           contentType: false
  //         })
  //         .done(function(data){
  //           var html = buildHTML(data);
  //           $('.comment-menu').append(html);
  //           $('.container-text').val('');
  //           $(".submit-btn").prop("disabled", false);
  //         })
  //         .fail(function(){
  //           alert('error');
  //         })
  //       })
  //     }
  //   },false);
  //   text.addEventListener('change',function(){
  //     if (this.value.length < 2) {
  //       btn.disabled = true;
  //     }
  //   },false);
  // },false);
