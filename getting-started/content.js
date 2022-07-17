let link = document.URL.replace("shorts/","watch?");
console.log(link);
(()=>{
    let youtube_bar, youtube_current_bar; // html elements
    let currentVideo = "";
    chrome.runtime.onMessage.addListener((obj, sender, reponse)=>{
        const{type, videoId} = obj;
        if(type=="NEW"){
            currentVideo = videoId;
            getData(videoId);
        }
        
    })

    const getData = (videoid)=>{
        fetch(`https://youtube.com/watch?v=${videoid}`).then(res => res.text()).then((responseText) => {
            const doc = new DOMParser().parseFromString(responseText, 'text/html');
            let vid_len =doc.querySelectorAll(".ytp-time-duration")[0];
            console.log(vid_len);
        });
    }
    // const newVideoLoaded = ()=>{
    //     const
    // }
})();