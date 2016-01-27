$( document ).ready(function() {
  
  $.fn.notification = function(notificationType, delay, delayTime) {

    var itemId = 0;

    // notification generator
    $(this).on('click', function() {

      switch(notificationType){
          case 0:
            $('.notification-list').prepend('<li id="success" class="item-' + itemId + '"><span class="title">Sucess</span><br/><span>Your operation was successful</span></li>');
            $('#success').fade("in");
            setTimeOut();
            break;

          case 1:
            $('.notification-list').prepend('<li id="fail" class="item-' + itemId + '"><span class="title">Danger</span><br/><span>Your operation failed</span></li>');
            $('#fail').fade("in");
            setTimeOut();
            break;

          case 2:
            $('.notification-list').prepend('<li id="warning" class="item-' + itemId + '"><span class="title">Warning</span><br/><span>Warning message</span></li>');
            $('#warning').fade("in");
            setTimeOut();
            break;

      }

    });


    // notification remove on click
    $(".notification-list").click(function(e) {
      if (e.target.id == "success" || e.target.id == "fail" || e.target.id == "warning") {
        $(e.target).fade("out", function(){
          e.target.remove();
        });
      } else {
        $(e.target).parent().fade("out", function(){
          $(e.target).parent().remove();
        });
      }
        
    });



    // notification timeout remove
    function setTimeOut() {
      if(delay){
        itemId++;
        var lastItemId = itemId - 1;
        var itemToRemove = '.item-' + lastItemId;
        var timeoutID = setTimeout(function(){
          $(itemToRemove).fadeOut(function(){
            $(itemToRemove).remove();
          });
        }, delayTime);
      }
      

    }

    // animation
    $.fn.fade = function(action, easing, callback) {
      if ( action === "in") {
        return this.animate({ opacity: '1', height: '50px' }, 'medium', easing, callback);
      }
      if ( action === "out" ) {
        return this.animate({ opacity: '0', height: '10px' }, 'fast', easing, callback);
      }
    }
  }

  $('#trigger').notification(2);

});