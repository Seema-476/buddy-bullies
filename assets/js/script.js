function opennav() {
    document.getElementById("navlist").classList.toggle("start-0");
    document.querySelector(".menuicon").classList.toggle("cross");
    document.body.classList.toggle("overflowhidden");
}
// scroll top btn 
const topBtn = document.querySelector(".topBtn")

window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
        topBtn.classList.add("show")
    } else {
        topBtn.classList.remove("show");
    }
})
topBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
})