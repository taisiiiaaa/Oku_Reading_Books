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
            // Add active class when touched
            element.addEventListener("touchstart", function () {
                element.classList.add("active");
            });
        });

        // Remove active class when scrolling (for all elements at once)
        const removeActiveClasses = () => {
            elements.forEach(element => element.classList.remove("active"));
        };

        document.addEventListener("touchmove", removeActiveClasses, { passive: true });
        document.addEventListener("wheel", removeActiveClasses);
    }
});



