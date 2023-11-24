const windowInnerWidth = window.innerWidth;
const videos = document.querySelectorAll(".video");
const mainVideo = document.getElementById("main-video").getElementsByTagName('iframe')[0];
const carousel = document.querySelector(".carousel");
const firstImage = carousel.querySelectorAll("img")[0];
const arrowIcons = document.querySelectorAll(".wrapper .arrow");

const imageHeight = 180 + 19;
const imageWidth = 320 + 15;

const scrollHeight = carousel.scrollHeight - carousel.clientHeight;
const scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const showIcons = () => {
    if (windowInnerWidth > 1200) {
        arrowIcons[0].style.opacity = carousel.scrollTop === 0 ? "0.5" : "1";
        arrowIcons[1].style.opacity = carousel.scrollTop === scrollHeight ? "0.5" : "1";
    } else {
        arrowIcons[0].style.opacity = carousel.scrollLeft === 0 ? "0.5" : "1";
        arrowIcons[1].style.opacity = carousel.scrollLeft === scrollWidth ? "0.5" : "1";
    }
}

showIcons();

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        if (windowInnerWidth > 1200) {
            carousel.scrollTop += icon.id === "up" ? -imageHeight : imageHeight;
        } else {
            carousel.scrollLeft += icon.id === "up" ? -imageWidth : imageWidth;
        }
        setTimeout(() => showIcons(), 500);
    })
})

videos.forEach(video => {
    video.addEventListener("click", () => {
        const iframeVideo = video.querySelector("iframe");
        const mainVideoSrc = mainVideo.src;
        const mainView = document.querySelector(".main-video .views span");
        const videoViews = video.querySelector(".views span");
        console.log(videoViews, mainView);
        if (mainVideo.src !== iframeVideo.src) {
            const iframeVideoSrc = iframeVideo.src;
            mainVideo.src = iframeVideoSrc;
            iframeVideo.src = mainVideoSrc;

            const tmp = mainView.textContent;
            mainView.textContent = videoViews.textContent;
            videoViews.textContent = tmp;
        }
    })
})
