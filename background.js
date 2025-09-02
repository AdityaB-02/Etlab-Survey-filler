chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed!");
});

chrome.action.onClicked.addListener((tab) => {
  console.log("Extension icon clicked on tab:", tab.id);
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => alert("Hello from background service worker!")
  });
});
