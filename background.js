chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: 'OFF'
    });
    chrome.action.setBadgeBackgroundColor(
        {color: 'green'},  // Also, also green
        () => { /* ... */ },
      );
});
  
const guardianFood = 'https://www.theguardian.com/food';
  
// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(guardianFood)) {
        // We retrieve the action badge to check if the extension is 'ON' or 'OFF'
        const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
        // Next state will always be the opposite
        const nextState = prevState === 'ON' ? 'OFF' : 'ON';
  
        // Set the action badge to the next state
        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: nextState
        });
  
        if (nextState === 'ON') {
            // Insert the CSS file when the user turns the extension on
            await chrome.scripting.executeScript({
              files: ['tofu-ify.js'],
              target: { tabId: tab.id }
            });
        }
    }
});