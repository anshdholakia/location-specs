// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}

// Getting the DOM of the current page
// chrome.windows.sendMessage('')

// Adding listeners to each button
document.querySelectorAll(".options")[1].addEventListener('click',()=>{
  console.log("ouch");
})


chrome.window.sendMessage('get', (response)=>{
  console.log(response);
})


// // 1. Send the background a message requesting the user's data
// chrome.runtime.sendMessage('get-user-data', (response) => {
//   // 3. Got an asynchronous response with the data from the background
//   console.log('received user data', response.username);
//   // initializeUI(response);
// }); 
