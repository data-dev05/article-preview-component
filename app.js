const buttonActive = document.getElementById("button-active");
const buttonInactive = document.getElementById("button-inactive");
const shareSectionActive = document.getElementById("div-active-mobile");
const shareSectionInactive = document.getElementById("div-inactive-mobile");
const shareSocialMedia = document.getElementById("share-active-desktop");

buttonActive.addEventListener("click", () => {
    if (window.innerWidth >= 765) {
        if (shareSocialMedia.style.display === "none"){
            shareSocialMedia.style.display = "flex"
        } else {
            shareSocialMedia.style.display = "none"
        }
    } else {
        shareSectionActive.style.display = "flex";
        shareSectionInactive.style.display = "none";
    }
});

buttonInactive.addEventListener("click", () => {
    shareSectionActive.style.display = "none";
    shareSectionInactive.style.display = "flex";
});