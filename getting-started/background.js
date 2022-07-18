

try{
  var queryparams;
  chrome.tabs.onUpdated.addListener((tabId,tab)=>{
    if(tab.url && tab.url.includes("google.com/maps/place") && !tab.url.split("/place/")[1].split("/")[0].includes(queryparams)){
      queryparams = tab.url.split("/place/")[1].split("/")[0];
      // console.log(queryparams);
      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        location: queryparams,
        tabd: tabId

      });
    }
  })

  // on just a reload
  chrome.tabs.reload((tabId, tab)=>{
    
  })
  
}catch(Error){
  console.log(Error);
}
