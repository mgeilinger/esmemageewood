function toggleMenu() {
    var navMenu = document.getElementById("navMenu");
    if (navMenu.style.display === "none" || navMenu.style.display === "") {
        navMenu.style.display = "flex";
        slideDown(navMenu, 41); // Specify the maximum height
    } else {
        slideUp(navMenu);
    }
}

function slideDown(element, maxHeight) {
    var height = 0;
    var interval = setInterval(function() {
        if (height >= maxHeight) {
            clearInterval(interval);
        } else {
            height += 1; // Adjust the speed of the slide by changing this value
            if (height > maxHeight) {
                height = maxHeight;
            }
            element.style.height = height + 'px';
        }
    }, 5); // Adjust the speed of the slide by changing this value
}

function slideUp(element) {
    var height = element.scrollHeight;
    var interval = setInterval(function() {
        if (height <= 0) {
            clearInterval(interval);
            element.style.display = "none";
        } else {
            height -= 1; // Adjust the speed of the slide by changing this value
            if (height < 0) {
                height = 0;
            }
            element.style.height = height + 'px';
        }
    }, 5); // Adjust the speed of the slide by changing this value
}