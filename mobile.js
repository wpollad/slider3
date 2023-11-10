const mobileArrowIcons = document.querySelectorAll(".wrapper-mobile .arrow");
const mobileMainVideo = document.getElementById("mobile-main-video").getElementsByTagName('iframe')[0];
const ids = ["BnePlysWpbY", "WdTEn7GLJhc", "Dg_Fn4dtnh8"];
let currentId = 0;

mobileArrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        if ((icon.id === "left") && (currentId > 0)) {
            currentId--;
            mobileMainVideo.src = "https://www.youtube.com/embed/" + ids[currentId];
        } else if ((icon.id === "right") && (currentId < ids.length - 1)) {
            currentId++;
            mobileMainVideo.src = "https://www.youtube.com/embed/" + ids[currentId];
        }
    })
})