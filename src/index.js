let tabLinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-contents");

function opentab(tabname) {
    tabLinks.forEach((tab) => {
        tab.classList.remove("active-link");
    });

    tabContents.forEach((content) => {
        content.style.display = "none";
    });

    document.getElementById(tabname).style.display = "block";
    event.currentTarget.classList.add("active-link");
}

// Set the default tab
document.getElementById("Skills").style.display = "block";

// var sidemenu = document.getElementById("sidemenu");
// function openmenu(){
//     sidemenu.style.right = "0"
// }
// function closemenu(){
//     sidemenu.style.right = "-200px"
// }
// document.addEventListener("DOMContentLoaded", function () {
//     var sidemenu = document.getElementById("sidemenu");

//     function openmenu() {
//         sidemenu.style.right = "0";
//     }

//     function closemenu() {
//         sidemenu.style.right = "-200px";
//     }

//     // Example usage: Assign to buttons
//     document.getElementById("openBtn").onclick = openmenu;
//     document.getElementById("closeBtn").onclick = closemenu;
// });
