let popupgb = document.querySelector(".popupbg")
let checkpopup = document.getElementById("checkpopup")

popupgb.addEventListener("click", (event) => {
    if (event.target === popupgb) popupgb.classList.remove("active")
    checkpopup.checked = false
})


checkpopup.addEventListener("click", () => {
    popupgb.classList.add("active")
})