
for (let i = 0; i < 256; i++) {
    document.getElementById("container").innerHTML +="<div class='grid' id="+i+" onClick='r_click(this.id)'></div>"
}
var color = 'black'
function l_click(clicked_id){
    color = clicked_id
    return color
}
function r_click(clicked_id){
    document.getElementById(clicked_id).style.backgroundColor = color;
}
    
// Define your color palettes
var palettes = {
    palette1: {black: '#264653', white: '#2A9D8F', red: '#E9C46A', blue: '#F4A261', green: '#E76F51', },
    palette2: {black: '#011627', white: '#fdfffc', red: '#2ec4b6', blue: '#e71d36', green: '#ff9f1c', },
    palette3: {black: '#e63946', white: '#f1faee', red: '#a8dadc', blue: '#457b9d', green: '#1d3557', },
    // Add more palettes as needed
};

// Set the initial palette
var currentPalette = 'palette1';

// Function to change the palette
function changePalette(paletteName) {
    currentPalette = paletteName;
    var colors = document.getElementsByClassName('color');
    for (var i = 0; i < colors.length; i++) {
        var colorId = colors[i].id;
        colors[i].style.backgroundColor = palettes[currentPalette][colorId];
    }
}

// Update your l_click and r_click functions
function l_click(clicked_id){
    color = palettes[currentPalette][clicked_id];
    return color;
}
function r_click(clicked_id){
    document.getElementById(clicked_id).style.backgroundColor = color;
}

function eraseAll() {
    var cells = document.getElementsByClassName('grid');
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = 'white';
    }
}

window.onload = function() {
    changePalette('palette1'); // Replace 'palette1' with your default palette
};
function saveDrawing() {
    html2canvas(document.getElementById('container')).then(function(canvas) {
        var link = document.createElement('a');
        link.download = 'disegninobbello0.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

