document.querySelector("#cross_icon").addEventListener("click", function(event) {
    event.preventDefault();
    let popup = document.querySelector("#learn_more_popup");
    if (popup) {
        popup.style.visibility = "hidden";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".library, .reading_goal, .favourite_book, .statistics, .collections, .community_reviews");

    if (elements.length > 0) {
        elements.forEach(element => {
            element.addEventListener("touchstart", function () {
                element.classList.add("active");
            });
        });

        const removeActiveClasses = () => {
            elements.forEach(element => element.classList.remove("active"));
        };

        document.addEventListener("touchmove", removeActiveClasses, { passive: true });
        document.addEventListener("wheel", removeActiveClasses);
    }
});



