
(()=>{
    let currentLocation = "";

    
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
        

    }

    const makeArrow = () =>{
        let main = document.createElement('div');
        let arrow = document.createElement('div');
        let details = document.createElement('div');
        main.style = `
        position:absolute;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        top:17%;
        right:0;
        transform: translateX(260px);`
        details.style = `height: 270px;
        width: 260px;
        background-color: white;
        z-index: 9;`;
        details.tabIndex = "-1";
        arrow.innerHTML = `<`;
        arrow.style = `height: 50px;
        display: flex;
        cursor:pointer;
        justify-content: center;
        border: solid black 2px;
        align-items: center;
        font-weight: 900;
        width: 34px;
        background-color: #eeeeed;
        z-index: 9;
        border-radius: 10px 0px 0px 10px;`
        main.appendChild(arrow);
        main.appendChild(details);
        document.body.appendChild(main);

        arrow.addEventListener('click', (e) => {
            main.style.transform = "translateX(0px)";
            details.focus();

          });

        details.addEventListener('blur', (e)=>{
            console.log('hey');
            main.style.transform = "translateX(260px)";
        })
    }

    makeArrow();
    



})();


