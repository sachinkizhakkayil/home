function onCreated(windowInfo) {
  console.log(`Created window: ${windowInfo.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  var creating = browser.windows.create({
    tabId: tab.id
  });
  creating.then(onCreated, onError);
});