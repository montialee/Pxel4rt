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
    

