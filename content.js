console.log("Edge extension content script loaded!");
/*document.querySelector('#btn').addEventListener('click', () => {
  console.log("Button clicked");
});
*/
/*let radios = document.querySelectorAll('.form-check-input');
radios.forEach(radio => {
    if (radio.disabled){
        return;
    }
    radio.checked = true;
});
*/
chrome.storage.local.get("enabled", ({ enabled }) => {
  if (enabled) {
    console.log("Autofill is active!");
    let elements = document.querySelectorAll('input[type="radio"]');
    let uniqueNames = [...new Set(Array.from(elements).map(el => el.name))];

    console.log(uniqueNames);

    uniqueNames.forEach(values => {
        document.querySelector(`input[name="${values}"]`).checked = true;
    });

    document.querySelector('button[type="submit"]').click();

    }
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.enabled) {
    console.log("Extension state changed:", changes.enabled.newValue);
  }
});




