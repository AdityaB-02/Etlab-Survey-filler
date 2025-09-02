chrome.webNavigation.onCommitted.addListener((details) => {
  if (details.frameId === 0) { // main frame
    if (details.url === "https://mace.etlab.in/user/login") {
      chrome.storage.local.set({ enabled: false });
      console.log("Extension disabled on Login page");
    }
  }
});
