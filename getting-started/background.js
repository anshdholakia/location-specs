chrome.tabs.onUpdated.addListener((tabId,tab)=>{
  if(tab.url && tab.url.includes("youtube.com/shorts")){
    const queryparams = tab.url.split("s/")[1];
    console.log(queryparams);
    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoID: queryparams
    });
  }
})