chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {file: "content.js"}, function() {
    chrome.downloads.download({
      url: 'data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,' + window.docData,
      filename: 'page.docx',
      saveAs: true
    });
  });
});

