(function() {
  'use strict';
  chrome.runtime.onInstalled.addListener(function(details) {});

  chrome.tabs.onUpdated.addListener(function(tabId) {
    return chrome.pageAction.show(tabId);
  });

}).call(this);
