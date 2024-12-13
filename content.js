chrome.runtime.sendMessage({pageContent: document.body.innerText}, function(response) {
  var doc = new docx.Document();
  var paragraph = doc.addParagraph();
  paragraph.createTextRun(response.pageContent);
  docx.Packer.toBase64String(doc).then(function(data) {
    window.docData = data;
  });
});
