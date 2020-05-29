$(function(){

  // var last_message_id = $('.contents-row:first').data("item-id");
  // console.log(last_message_id);

  var search_list = $(".items-contents");

  function appendItem(data){
    // debugger;
    // if(data.user_sign_in && data.user_sign_in_id == data.user_id){
    if(data.user_sign_in && data.user_sign_in.id == data.user_id){
      var current_user = `<ul class="more-list">
                            <div class="li">
                              <a class="link-btn" href="/items/${data.id}/" data-method="get">
                                コメントする
                              </a>
                            </div>
                            <div class="li">
                              <a class="link-btn" href="/items/${data.id}/" data-method="delete">
                                削除
                              </a>
                            </div>                                      
                          </ul>`;
    }else{
      var current_user = `<ul class="more-list">
                            <div class="li">
                              <a class="link-btn" href="/items/${data.id}/" data-method="get">
                                コメントする
                              </a>
                            </div>                
                          </ul>`;
    }

    if(data.text) {
  
      var html = `
      <div class="contents-row" data-item-id="155">
        <div class="post-title">
          &lt;タイトル&gt;${data.title}
        </div>
        <div class="post-content">
          <div class="post-image" style="background-image: url(${data.image});"></div>
          <div class="post-text">
            <p class="item-text">
              ${data.text}
            </p>
          </div>
          ${current_user}
        </div>
        <div class="post-username">
          <a class="show-user" href="/users/${data.id}">投稿者: ${data.name}
          </a>
        </div>
        <div class="post-date">
          ${data.created_at}
        </div>
      </div>`

    }else {

      var html = `<div class="contents-row" data-item-id="155">
                    <div class="post-title">
                      &lt;タイトル&gt;${data.title}
                    </div>
                    <div class="post-content">
                      <div class="post-image" style="background-image: url(${data.image});"></div>
                      <div class="post-text">
                      </div>
                      ${current_user}
                    </div>
                    <div class="post-username">
                      <a class="show-user" href="/users/${data.user_id}">投稿者: ${data.name}
                      </a>
                    </div>
                    <div class="post-date">
                      ${data.created_at}
                    </div>
                  </div>`
    }
    
    search_list.append(html);

  }

  function appendErrorMsg(msg) {
    var html = `<div class='name'>${msg}</div>`
    $(".items-contents").append(html);
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

// $(function(){

//   var last_message_id = $('.contents-row:first').data("item-id");
//   console.log(last_message_id);

//   var search_list = $(".items-contents");

//   function appendItem(data){
//     if(data.user_sign_in && data.user_sign_in_id === data.user_id){
//       var current_user = `<ul class="more-list">
//                             <div class="li">
//                               <a class="link-btn" "/items/${data.id}/" data-method="delete">削除</a>
//                             </div>                                      
//                           </ul>`
//     }else{
//       var current_user = "";
//     }

//     if(data.text) {
  
//       var html = `
//       <div class="contents-row" data-message-id=${data.id}>
//         <div class="post-title">
//           <タイトル>:${data.title}
//         </div>
//         <div class="post-content">
//           <img class="post-image" src="${data.image}" width="300" height="200">
//           <div class="post-text">
//             <p class="item-text">
//               ${data.text}
//             </p>
//           </div>
//           ${current_user}
//         </div>
//         <div class="post-username">
//           <a class="show-user" href="/users/${data.id}">投稿者: ${data.name}
//           </a>
//         </div>
//         <div class="post-date">
//           ${data.created_at}
//         </div>
//       </div>`

//     }else {

//       var html = `
//       <div class="contents-row">
//       <div class="post-title">${data.title}</div>
//       <div class="post-content">
//         <img class="post-image" src="${data.image}" width="300" height="200">
//         <div class="post-text">
//           <p class="item-text">
//           </p>
//         </div>
//         ${current_user}
//       </div>
//       <div class="post-username">
//         <a class="show-user" href="/users/${data.id}">投稿者: ${data.name}
//         </a>
//       </div>
//       <div class="post-date">
//         ${data.created_at}
//       </div>
//     </div>`
//     }
    
//     search_list.append(html);

//   }

//   function appendErrorMsg(msg) {
//     var html = `<div class='name'>${msg}</div>`
//     $(".items-contents").append(html);
//   }

//   $(".search-input").on("keyup", function(){
//     var input = $(".search-input").val();
//     $.ajax({
//       type: 'get',
//       url: '/items/search', 
//       data: {keyword: input},
//       dataType: 'json' 
//     })
//     .done(function(data){
//       //doneのfuncution(data)のdataはdataTypeのjsonが格納されている
//       //
//       search_list.empty();
//       if(data.length !== 0){
//         data.forEach(item =>{
//           appendItem(item);
//         });
//       }
//       else {
//         appendErrorMsg("一致する投稿がありません")
//       }
//     })
//     .fail(function(){
//       alert('error');
//     });
//   });
// });