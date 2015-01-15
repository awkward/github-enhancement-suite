(function() {
  'use strict';
  var $comments, $toggleButton;

  $toggleButton = $('<button class="minibutton toggle-details">toggle details</button>');

  $comments = $('.js-comment-container');

  $comments.each(function(index, comment) {
    var $button, $comment;
    $comment = $(comment);
    if ($comment.next().hasClass('discussion-item')) {
      $button = $toggleButton.clone();
      $button.on('click', function(e) {
        return $comment.toggleClass('js-discussion-active');
      });
      return $comment.append($button);
    }
  });

  console.log('\'Allo \'Allo! Content script');

}).call(this);
