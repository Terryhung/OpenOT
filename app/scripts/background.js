'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.windows.getCurrent({ populate: true }, function(win) {
        chrome.storage.sync.set({'tabs': win.tabs});
    });
});
