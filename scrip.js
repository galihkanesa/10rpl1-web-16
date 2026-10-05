const themeToggle = document.getElementById("theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');

themeToggle.addEventListener("click", () => {
    const isLightMode = document.body.dataset.theme !== "light";

    document.body.dataset.theme = isLightMode ? "light" : "dark";
    themeToggle.textContent = isLightMode ? "🌙" : "☀️";
    themeToggle.setAttribute(
        "aria-label",
        isLightMode ? "Aktifkan mode gelap" : "Aktifkan mode terang"
    );
    themeToggle.title = isLightMode ? "Aktifkan mode gelap" : "Aktifkan mode terang";
    themeColor.content = isLightMode ? "#f4f7ff" : "#0b1020";
});