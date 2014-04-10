'use strict';

var tabGroups;
chrome.storage.local.get(null, function(result) {
    tabGroups = result.tabGroups;
});

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.windows.getCurrent({ populate: true }, function(win) {
        tabGroups.push(win.tabs);
        chrome.storage.local.set({'tabGroups': tabGroups});
    });

    chrome.tabs.create({'url': chrome.extension.getURL('main.html')});
});
