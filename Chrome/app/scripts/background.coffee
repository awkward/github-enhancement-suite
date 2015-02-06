'use strict';

chrome.runtime.onInstalled.addListener (details) ->

chrome.tabs.onUpdated.addListener (tabId) ->
  chrome.pageAction.show(tabId)
