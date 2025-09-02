let enabled = false;
chrome.storage.local.set({ enabled });

document.querySelector('#toggle').addEventListener('click', async () => {
  enabled = !enabled;
  const button = document.querySelector('#toggle');
  button.textContent = enabled ? "Stop Autofill" : "Start Autofill";

  await chrome.storage.local.set({ enabled });
  
  console.log("Extension enabled:", enabled);
});
