document.addEventListener("DOMContentLoaded",()=>{
  
});

const list = document.getElementById('lisy');

chrome.runtime.onMessage.addListener((obj, sender, reponse)=>{
  const{type, loc} = obj;
  if(type=="LOCATION"){
    chrome.storage.sync.get(("key", async location=>{
      // await fetch("api_key.txt").then((data)=>{
      //   // console.log(data);
      // }).then((response)=>{
      //   console.log(response);
      // })
      console.log(location.loc);
    }))      
  }
  else if(type=="RELOAD"){
    list.innerText = "Click on a location!";
  }
  
})