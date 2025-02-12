document.querySelector("#cross_icon").addEventListener("click", function(event) {
    event.preventDefault();
    let popup = document.querySelector("#learn_more_popup");
    if (popup) {
        popup.style.visibility = "hidden";
    }
});