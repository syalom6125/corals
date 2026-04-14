// Ambil parameter URL
function getParameter(param) {
const urlParams = new URLSearchParams(window.location.search);
return urlParams.get(param);
}

// Load file HTML sesuai parameter
function loadPage(page) {
fetch(page + ".html")
.then(response => response.text())
.then(data => {
document.getElementById("content").innerHTML = data;
})
.catch(() => {
document.getElementById("content").innerHTML =
"<h2>Halaman tidak ditemukan</h2>";
});
}

// Set menu aktif
function setActiveMenu(page) {
const links = document.querySelectorAll("nav a");
links.forEach(link => {
link.classList.remove("active");
if (link.getAttribute("href") === "index.html?p=" + page) {
link.classList.add("active");
}
});
}

// Saat pertama kali load
window.onload = function() {
let page = getParameter("p");
if (!page) {
page = "hero";
}
loadPage(page);
setActiveMenu(page);
};

