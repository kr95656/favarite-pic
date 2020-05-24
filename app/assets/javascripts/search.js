$(function(){

  // var search_list = $(".items-contents");
  var search_list = $(".contents-row");

  function appendItem(data){
    if(data.user_sign_in && data.user_sign_in_id === data.user_id){
      var current_user = `<li>
                            <a href= "/items/${data.id}/edit" data-method="get">編集</a>
                            <a href= "/items/${data.id}/" data-method="delete">削除</a>
                          </li>`
    }else{
      var current_user = "";
    }

    if(data.text) {
      
      var html = `<div class = "post-title-date">
                    <div class="post-title">
                      ${data.title}
                    </div>
                    <div class="post-date">
                      ${data.created_at}
                    </div>
                  </div>
                  <div class="post-contents">
                    <div class="post-username">
                      <a href= "/users/${data.id}/" data-method="get"><span>投稿者</span>${data.name}</a>
                    </div>
                    <div class="post-image">
                      <img border="0" src="${data.image}" width="200" height="200" class="post-contents__image">
                      <div class="more">
                        <span><img src="/assets/arrow_top.png"></span>
                      </div>
                      <ul class="more-list">
                        <li>
                          <a href= "/items/${data.id}/" data-method="get">詳細</a>
                        </li>
                        ${current_user}
                      </ul>
                    </div>
                    <div class="post-text">
                      <p class="item__text">
                        ${data.text}
                      </p>
                    </div>
                  </div>`
    }else {
      var html = `<div class = "post-title-date">
                    <div class="post-title">
                      ${data.title}
                    </div>
                    <div class="post-date">
                      ${data.created_at}
                    </div>
                  </div>
                  <div class="post-contents">
                    <div class="post-username">
                      <a href= "/users/${data.id}/" data-method="get"><span>投稿者</span>${data.name}</a>
                    </div>
                    <div class="post-image">
                      <img border="0" src="${data.image}" width="200" height="200" class="post-contents__image">
                      <div class="more">
                        <span><img src="/assets/arrow_top.png"></span>
                      </div>
                      <ul class="more-list">
                        <li>
                          <a href= "/items/${data.id}/" data-method="get">詳細</a>
                        </li>
                        ${current_user}
                      </ul>
                    </div>
                  </div>`
    }
    // var html = `<div class = "post-title-date">
    //               <div class="post-title">
    //                 ${data.title}
    //               </div>
    //               <div class="post-date">
    //                 ${data.created_at}
    //               </div>
    //             </div>
    //             <div class="post-contents">
    //               <div class="post-username">
    //                 <a href= "/users/${data.id}/" data-method="get"><span>投稿者</span>${data.name}</a>
    //               </div>
    //               <div class="post-image">
    //                 <img border="0" src="${data.image}" width="200" height="200" class="post-contents__image">
    //                 <div class="more">
    //                   <span><img src="/assets/arrow_top.png"></span>
    //                 </div>
    //                 <ul class="more-list">
    //                   <li>
    //                     <a href= "/items/${data.id}/" data-method="get">詳細</a>
    //                   </li>
    //                   ${current_user}
    //                 </ul>
    //               </div>
    //               <div class="post-text">
    //                 <p class="item__text">
    //                   ${data.text}
    //                 </p>
    //               </div>
    //             </div>`
    search_list.append(html);
  }

  function appendErrorMsg(msg) {
    var html = `<div class='name'>${msg}</div>`
    $(".items-contents").empty();
    $(".items-contents").append(html);
    // var html = `<div class='name'>${msg}</div>`
    // search_list.append(html);
  }

  $(".search-input").on("keyup", function(){
    var input = $(".search-input").val();
    $.ajax({
      type: 'get',
      url: '/items/search', 
      data: {keyword: input},
      dataType: 'json' 
    })
    .done(function(data){
      //doneのfuncution(data)のdataはdataTypeのjsonが格納されている
      //
      search_list.empty();
      if(data.length !== 0){
        data.forEach(item =>{
          appendItem(item);
        });
      }
      else {
        appendErrorMsg("一致する投稿がありません")
      }
    })
    .fail(function(){
      alert('error');
    });
  });
});