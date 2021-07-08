// Selectors and Initial States

const button = document.getElementById("button");
const videoPlayer = document.getElementById("video");

//  Async Function to select media stream, pass to video stream and play

async function selectMediaStream() {
    try {
        // setting a const that has media screen data, awaiting the user to select which media they want to stream, then assigning this media to the video player and playing it
        
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoPlayer.srcObject = mediaStream;
        videoPlayer.onloadedmetadata = () => {
            videoPlayer.play();
        }
    } catch (error) {
        console.log("woops, error here:", error)

    }
}


button.addEventListener("click", async () => {
   
    // disable button

    button.disable = true;

    // request picture in picture

    await videoPlayer.requestPictureInPicture();

    // reset the button

    button.disable = false;
    
});

// on load
 selectMediaStream();