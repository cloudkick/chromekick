
var easy_info_on = false;

chrome.extension.onRequest.addListener (
  function (request, sender, sendResponse) {
    if (request.topic == 'toggle_easy_info') {
      if (easy_info_on) {
        hide_easy_info();
        easy_info_on = false;
      } else {
        show_easy_info();
        easy_info_on = true;
      }
    }
});

/**
 * Show easy info.
 */
function show_easy_info () {
  $('.node').each(function (index, node) {
    var node_id, ip;
    node_id = $(node).attr('data-node_id');
    ip = $(node).attr('data-ip');
    $(node).append([
      '<div class=\'easy_info\'>',
        '<span class=\'ei_node_id\'>', node_id, '</span>',
        '<span class=\'ei_ip\'>', ip, '</span>',
      '</div>'
    ].join(''));
  });
}

/**
 * Hide easy info.
 */
function hide_easy_info () {
  $('.easy_info').remove();
}

