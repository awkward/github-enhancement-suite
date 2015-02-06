'use strict';

$toggleButton = $('<button class="minibutton toggle-details">toggle details</button>')

$comments = $('.js-comment-container');

$comments.each (index, comment) ->
  $comment = $(comment)
  if $comment.next().hasClass('discussion-item')
    $button = $toggleButton.clone()

    $button.on 'click', (e) -> $comment.toggleClass('js-discussion-active')

    $comment.append $button
