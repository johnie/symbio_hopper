/**
 * Open Symbio Hopper
 *
 * copyright © 2015 - Johnie Hjelm <johnie.hjelm@symbio.com>
 */

// Open Hopper when clicking on the extension icon
chrome.browserAction.onClicked.addListener(function (tab) { 
  openHopper(); 
});

// Main function
var openHopper = function () {
  var hopper_opts = {
    active: true,
    url: 'https://hopper.symbio.com/secure/TempoUserBoard!timesheet.jspa',
    pinned: true
  }
  chrome.tabs.create(hopper_opts);
}
