// $(function(){

//   function buildHTML(item){

//     if(item.text) {
//       var html = `<div class = "contents-row" data-item-id = ${item.id} >
//                     <div class = "post-title-date">
//                       <div class="post-title">
//                         ${item.title}
//                       </div>
//                       <div class="post-date">
//                         ${item.created_at}
//                       </div>
//                     </div>
//                     <div class="post-contents">
//                       <div class="post-username">
//                         <a href= "/users/${item.id}/" data-method="get"><span>投稿者</span>${item.user_name}</a>
//                       </div>
//                       <div class="post-image">
//                         <img border="0" src="${item.image}" width="200" height="200" class="post-contents__image">
//                         <div class="more">
//                           <span><img src="/assets/arrow_top.png"></span>
//                         </div>
//                         <ul class="more-list">
//                           <li>
//                             <a href= "/items/${item.id}/" data-method="get">詳細</a>
//                           </li>
//                         </ul>
//                       </div>
//                       <div class="post-text">
//                         <p class="item__text">
//                           ${item.text}
//                         </p>
//                       </div>
//                     </div>
//                   </div>`
//     }else {
//       var html = `<div class = "contents-row" data-item-id = ${item.id} >
//                     <div class = "post-title-date">
//                       <div class="post-title">
//                         ${item.title}
//                       </div>
//                       <div class="post-date">
//                         ${item.created_at}
//                       </div>
//                     </div>
//                     <div class="post-contents">
//                       <div class="post-username">
//                         <a href= "/users/${item.id}/" data-method="get"><span>投稿者</span>${item.name}</a>
//                       </div>
//                       <div class="post-image">
//                         <img border="0" src="${item.image}" width="200" height="200" class="post-contents__image">
//                         <div class="more">
//                           <span><img src="/assets/arrow_top.png"></span>
//                         </div>
//                         <ul class="more-list">
//                           <li>
//                             <a href= "/items/${item.id}/" data-method="get">詳細</a>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>`
//     }

//     return html;

//     // if(item.user_sign_in && item.user_sign_in_id === item.user_id){
//     //   var current_user = `<li>
//     //                         <a href= "/items/${item.id}/edit" data-method="get">編集</a>
//     //                         <a href= "/items/${item.id}/" data-method="delete">削除</a>
//     //                       </li>`
//     // }else{
//     //   var current_user = "";
//     // }
    
//     // if(item.text) {
//     //   var html = `<div class = "contents-row" data-item-id = ${item.id} >
//     //                 <div class = "post-title-date">
//     //                   <div class="post-title">
//     //                     ${item.title}
//     //                   </div>
//     //                   <div class="post-date">
//     //                     ${item.created_at}
//     //                   </div>
//     //                 </div>
//     //                 <div class="post-contents">
//     //                   <div class="post-username">
//     //                     <a href= "/users/${item.id}/" data-method="get"><span>投稿者</span>${item.user_name}</a>
//     //                   </div>
//     //                   <div class="post-image">
//     //                     <img border="0" src="${item.image}" width="200" height="200" class="post-contents__image">
//     //                     <div class="more">
//     //                       <span><img src="/assets/arrow_top.png"></span>
//     //                     </div>
//     //                     <ul class="more-list">
//     //                       <li>
//     //                         <a href= "/items/${item.id}/" data-method="get">詳細</a>
//     //                       </li>
//     //                       ${current_user}
//     //                     </ul>
//     //                   </div>
//     //                   <div class="post-text">
//     //                     <p class="item__text">
//     //                       ${item.text}
//     //                     </p>
//     //                   </div>
//     //                 </div>
//     //               </div>`
//     // }else {
//     //   var html = `<div class = "contents-row" data-item-id = ${item.id} >
//     //                 <div class = "post-title-date">
//     //                   <div class="post-title">
//     //                     ${item.title}
//     //                   </div>
//     //                   <div class="post-date">
//     //                     ${item.created_at}
//     //                   </div>
//     //                 </div>
//     //                 <div class="post-contents">
//     //                   <div class="post-username">
//     //                     <a href= "/users/${item.id}/" data-method="get"><span>投稿者</span>${item.name}</a>
//     //                   </div>
//     //                   <div class="post-image">
//     //                     <img border="0" src="${item.image}" width="200" height="200" class="post-contents__image">
//     //                     <div class="more">
//     //                       <span><img src="/assets/arrow_top.png"></span>
//     //                     </div>
//     //                     <ul class="more-list">
//     //                       <li>
//     //                         <a href= "/items/${item.id}/" data-method="get">詳細</a>
//     //                       </li>
//     //                       ${current_user}
//     //                     </ul>
//     //                   </div>
//     //                 </div>
//     //               </div>`
//     // }

//     // return html;

//   }
  
//   var reloadItems = function() {
//     var last_item_id = $('.contents-row:first').data("item-id");
//     // var href = 'api/items#index {:format=>"json"}'
//     $.ajax({
//       url: "api/items",
//       type: "get",
//       dataType: "json", 
//       data: {item: {id: last_item_id}}
//     })
//     .done(function(items){
//       console.log("sucess")

//       if(items.length !== 0){  
//         var insertHTML = "";
  
//         $.each(items, function(index, item){
//           insertHTML += buildHTML(item);
//         });

//         $('.items-contents').append(insertHTML);
//         // $('.all-items').append(insertHTML);
//       }

//     })
//     .fail(function(){
//       console.log("error")
//     })
//   }
//   setInterval(reloadItems, 10000);
//   if(document.location.href.match(/^localhost:3000$/)){
//     // setInterval(reloadItems, 7000);
//   }
// })