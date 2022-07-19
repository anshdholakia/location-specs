
(()=>{
    let currentLocation = "";

    
    chrome.runtime.onMessage.addListener((obj, sender, reponse)=>{
        const{type, location} = obj;
        currentLocation = location;
        if(type=="NEW" && !location.includes("%")){
            currentLocation = location;
            newLocationloaded(currentLocation);
            // console.log(location);
        }

        
    })


    const newLocationloaded = (location) =>{
        // Make arrow
        // console.log(`https://newsdata.io/api/1/news?apikey=pub_93314a2f6cbd5843d2a1089d3d8df6dd8d90&q=${location.replaceAll("+","%20")}`);
        fetch(`https://newsdata.io/api/1/news?apikey=pub_93314a2f6cbd5843d2a1089d3d8df6dd8d90&q=${location.replaceAll("+","%20")}`).then((data)=>{
            return data.json();
        }).then((response)=>{
            document.getElementById("detail").innerHTML = "";
            addElements(response.results);
        })
        

    }

    const addElements = (array)=>{
        if(array.length === 0){
            document.getElementById("detail").innerHTML = `<h1 style="margin: 50% 0%;  text-align: center;">Nothing interesting here</h1>`
            return;
        }
        for (let i = 0; i < array.length; i++) {
            let title = array[i].title;
            let link = array[i].link;
            let new_title = document.createElement('a');
            new_title.innerText = title;
            new_title.href = link;
            new_title.style = `display: flex;
            justify-content: center;
            align-items: center;
            margin: 5px 0px;
            width: 100%;
            font-size: 70%;
            background: #d6d5d5;
            color: black;`;
            document.getElementById("detail").appendChild(new_title);

            
            
        }

    }

    const makeArrow = () =>{
        let main = document.createElement('div');
        let arrow = document.createElement('div');
        let details = document.createElement('div');
        details.id = 'detail';
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
        display: table-column;  
        justify-content: center;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        overflow-y: auto;
        z-index: 9;`;
        details.tabIndex = "-1";
        arrow.innerHTML = `<`;
        details.innerHTML= `<h1 style="margin: 50% 0%;  text-align: center;">Click on a location</h1>`
        arrow.style = `height: 39px;
        display: flex;
        cursor:pointer;
        justify-content: center;
        border: solid black 2px;
        align-items: center;
        font-weight: 900;
        width: 23px;
        background-color: #eeeeed;
        z-index: 9;
        border-radius: 10px 0px 0px 10px;`
        main.appendChild(arrow);
        main.appendChild(details);
        document.body.appendChild(main);

        arrow.addEventListener('click', (e) => {
            main.style.transform = "translateX(0px)";
            details.focus();
            arrow.innerText = '>';

          });

        details.addEventListener('blur', (e)=>{
            arrow.innerText = '<';
            main.style.transform = "translateX(260px)"; //
        })
    }

    makeArrow();
    



})();


