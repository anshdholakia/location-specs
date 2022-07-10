let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  // console.log(chrome.OnClickData);
  console.log('Default background color set to %cgreen', `color: ${color}`);
  console.log(document.all);
});


chrome.documentScan.scan(options=1, ()=>{
  sendResponse(document.all);
})

