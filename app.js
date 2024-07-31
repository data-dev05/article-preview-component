const buttonActive = document.getElementById("button-active");
const buttonInactive = document.getElementById("button-inactive");
const shareSectionActive = document.getElementById("div-active-mobile");
const shareSectionInactive = document.getElementById("div-inactive-mobile");

buttonActive.addEventListener("click", () => {
    shareSectionActive.style.display = "flex";
    shareSectionInactive.style.display = "none";
});

buttonInactive.addEventListener("click", () => {
    shareSectionActive.style.display = "none";
    shareSectionInactive.style.display = "flex";
});