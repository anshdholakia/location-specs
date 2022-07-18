let reloadFunction = ;
(()=>{
    let currentLocation = "";
    chrome.runtime.onMessage.addListener((obj, sender, reponse)=>{
        const{type, location, tabd} = obj;
        currentLocation = location;
        if(type=="NEW" && !location.includes("%")){
            currentLocation = location;
            newLocationloaded(currentLocation, tabd);
        }

        reloadFunction = ()=>{
            chrome.tabs.sendMessage(tabd, {
                type: "RELOAD",
                loc: null
            })        
        }
        
    })


    const newLocationloaded = async (location, tabid) =>{
        // Store it in chrome storage
        chrome.storage.sync.set({loc: location})
        chrome.tabs.sendMessage(tabid, {
            type: "LOCATION",
            loc: location
        })
        // console.log(location);

    }

    reloadFunction();


})();
