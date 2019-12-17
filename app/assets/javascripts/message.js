$(function(){
  function buildHTML(message){
    if (message.image) {
      var html =`<div class="message" data-message-id = ${message.id}>
                  <div class="message__user">
                    ${message.user_name}
                    <div class="message__day">
                      ${message.day}
                    </div>
                  </div>
                  <div class="message__text">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                    <img src= ${message.image} class="lower-message__image">
                  </div>
                </div>`
    } else {
      var html = `<div class="message" data-message-id = ${message.id}>
                    <div class="message__user">
                      ${message.user_name}
                      <div class="message__day">
                        ${message.day}
                      </div>
                    </div>
                    <div class="message__text">
                      <p class="lower-message__content">
                        ${message.content}
                      </p>
                    </div>
                  </div>`
    }
    return html;
  }
  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    
    .done(function(message){
      var html = buildHTML(message);
      $('.messages').append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $(".new_message")[0].reset();
      $('.input-send').prop('disabled',false);
    })
    .fail(function(){
      alert('error');
    })
  })

  var reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    last_message_id = $('.message:last').data("message-id");
    $.ajax({
      //ルーティングで設定した通りのURLを指定
      url: "api/messages",
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
      //追加するHTMLの入れ物を作る
      var insertHTML = '';
      //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
      $.each(messages, function(i, message) {
        insertHTML += buildHTML(message)
      });
      //メッセージが入ったHTMLに、入れ物ごと追加
      $('.messages').append(insertHTML);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail(function() {
      alert('エラーです');
    });
  };
  setInterval(reloadMessages, 7000);
})