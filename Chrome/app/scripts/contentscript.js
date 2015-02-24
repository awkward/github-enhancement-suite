(function() {
  'use strict';
  var addToggleButtons, callback, createObserverAndObserve, observer, target;

  addToggleButtons = function() {
    var $comments, $oldButtons, $toggleButton;
    $oldButtons = $('.toggle-details');
    $oldButtons.remove();
    $toggleButton = $('<button class="minibutton toggle-details">Toggle details</button>');
    $comments = $('.js-comment-container');
    return $comments.each(function(index, comment) {
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
  };

  addToggleButtons();

  createObserverAndObserve = function(target, callback, options) {
    var observer;
    options = options || {
      subtree: true,
      childList: true,
      attributes: false
    };
    target = target || document.querySelector('body');
    observer = new MutationObserver(callback);
    observer.observe(target, options);
    return observer;
  };

  callback = function(mutations) {
    return mutations.forEach(function(mutation) {
      var $addedNode, addedNodes, i, _i, _ref, _results;
      addedNodes = mutation.addedNodes;
      _results = [];
      for (i = _i = 0, _ref = addedNodes.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        $addedNode = $(addedNodes[i]);
        if ($addedNode.hasClass('issues-listing')) {
          _results.push(addToggleButtons());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    });
  };

  target = document.querySelector('.wrapper .site > .container');

  observer = createObserverAndObserve(target, callback);

}).call(this);
