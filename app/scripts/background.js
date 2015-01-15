(function() {
  'use strict';
  chrome.runtime.onInstalled.addListener(function(details) {
    return console.log('previousVersion', details.previousVersion);
  });

  chrome.tabs.onUpdated.addListener(function(tabId) {
    return chrome.pageAction.show(tabId);
  });

  console.log('\'Allo \'Allo! Event Page for Page Action');

}).call(this);
