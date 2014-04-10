'use strict';

var tabGroups;
chrome.storage.local.get(null, function(result) {
    tabGroups = result.tabGroups;
});
