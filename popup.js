async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

function injectContentScript(tab) {
    const {id, url} = tab;
    chrome.scripting.executeScript(
      {
        target: {tabId: id, allFrames: true},
        files: ['tofu-ify.js']
      }
    )
    console.log(`Loading: ${url}`); 
}

function switchOn() {
    getCurrentTab().then((tab)=>{
        injectContentScript(tab)
      })
}

document.getElementById("on").addEventListener("click", switchOn);
