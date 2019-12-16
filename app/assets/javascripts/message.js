$(function(){
  function buildHTML(message){
    if (message.image) {
      var html =`<div class="message">
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
      var html = `<div class="message">
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
      $('.message__content').val('');
      $('.input-send').prop('disabled',false);
    })
    .fail(function(){
      alert('error');
    })
  })
})