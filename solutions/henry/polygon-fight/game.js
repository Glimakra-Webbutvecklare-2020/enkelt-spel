/* Selection */
// Inital
const polygons = document.querySelectorAll(".polygon");
let selectedPolygon = undefined;

// Functions
const setSelectedPolygon = (event) => {
    // clear old selected just in case
    polygons.forEach((polygon) => {
        if (polygon.classList.contains("selected")) {
            polygon.classList.remove("selected");
        }
    });
    selectedPolygon = event.target;
    selectedPolygon.classList.add("selected");
};

// Setup
polygons.forEach((polygon) => {
    polygon.addEventListener("click", setSelectedPolygon);
});
