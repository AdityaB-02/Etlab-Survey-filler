let enabled = false;
chrome.storage.local.set({ enabled });
console.log("Extension enabled:", enabled);

document.querySelector('#toggle').addEventListener('click', async () => {
  enabled = !enabled;
  const button = document.querySelector('#toggle');
  button.textContent = enabled ? "Stop Autofill" : "Start Autofill";
  button.style.backgroundColor = enabled ? "#ff0000" : "#08f935";

  await chrome.storage.local.set({ enabled });
  
  console.log("Extension enabled:", enabled);
});
