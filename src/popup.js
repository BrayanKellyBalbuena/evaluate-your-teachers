$("#btnOpenAllSurveys").click(() => {
  

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { openAllSurveys: true }, function(
      response ) {});
  });
});

$("#btnRate").click(function() {
  let rateValue = $("#txtRate").val();

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { rate: rateValue }, function(
      response
    ) {
      
    });
  });
});
