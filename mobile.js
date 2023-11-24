const mobileArrowIcons = document.querySelectorAll(".wrapper-mobile .arrow");
// const mobileMainVideo = document.getElementById("mobile-main-video").getElementsByTagName('iframe')[0];
// const ids = ["BnePlysWpbY", "WdTEn7GLJhc", "Dg_Fn4dtnh8"];
// let currentId = 0;
let ids = Array.from(document.querySelectorAll(".video iframe")).map(iframe => iframe.src.split("/").pop());
const mobileMainVideo = document.getElementById("mobile-main-video").getElementsByTagName('iframe')[0];
let currentId = ids.indexOf(mobileMainVideo.src.split("/").pop());

if (currentId === -1) {
    ids.push(mobileMainVideo.src.split("/").pop());
}

mobileArrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        if (icon.id === "left") {
            currentId = (currentId - 1 + ids.length) % ids.length;
        } else if (icon.id === "right") {
            currentId = (currentId + 1) % ids.length;
        }
        mobileMainVideo.src = "https://www.youtube.com/embed/" + ids[currentId];
    })
})
