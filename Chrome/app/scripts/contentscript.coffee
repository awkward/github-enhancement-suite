'use strict';

addToggleButtons = ->

  # clear old buttons, maybe also do this via the observer
  # todo: remove events
  $oldButtons = $('.toggle-details')
  $oldButtons.remove()

  $toggleButton = $('<button class="minibutton toggle-details">toggle details</button>')
  $comments = $('.js-comment-container');

  $comments.each (index, comment) ->
    $comment = $(comment)
    if $comment.next().hasClass('discussion-item')
      $button = $toggleButton.clone()
      $button.on 'click', (e) -> $comment.toggleClass('js-discussion-active')
      $comment.append $button

addToggleButtons()

createObserverAndObserve = (target, callback, options) ->
  options = options or {subtree: true, childList: true, attributes: false}
  target = target or document.querySelector 'body'
  observer = new MutationObserver callback
  observer.observe target, options

  return observer

callback = (mutations) ->
  mutations.forEach (mutation) ->

    addedNodes = mutation.addedNodes

    for i in [0...addedNodes.length]
      $addedNode = $(addedNodes[i])
      if $addedNode.hasClass 'issues-listing'
        addToggleButtons()

target = document.querySelector '.wrapper .site > .container'

observer = createObserverAndObserve(target, callback)
