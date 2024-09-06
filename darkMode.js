// prakshark
function darkModeFun() {
    let curr = document.querySelector(".hero");
    let btn = document.querySelector(".darkModeButtonClass");

    if(curr.classList.contains("darkModeCSS")) {
        document.querySelector(".hero").classList.remove("darkModeCSS");
        btn.innerHTML = "Go Dark";
    }
    else {
        document.querySelector(".hero").classList.add("darkModeCSS");
        btn.innerHTML = "Go Light";
    }
}