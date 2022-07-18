import "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"


(()=>{
    let currentLocation = "";

    async function getCurrentTab(){
        await chrome.tabs.query({active: true, lastFocusedWindow: true}, (tab)=>{
            console.log(tab);
        });
        // return tab;
    }
    
    chrome.runtime.onMessage.addListener((obj, sender, reponse)=>{
        const{type, location} = obj;
        currentLocation = location;
        if(type=="NEW" && !location.includes("%")){
            currentLocation = location;
            newLocationloaded(currentLocation);
            console.log(location);
        }

        
    })


    const newLocationloaded = (location) =>{
        // Make arrow
        let arrow = document.createElement('div');

    }

    // getCurrentTab();



})();


