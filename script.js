// Getting the container element with the squares:
let container = document.querySelector('.container')

// Assigning an even listener for clicks to the container and linking it with function changeColor().
container.addEventListener('click', changeColor)

// Creating a function to change the color according to the value (color) selected of the list.
// Parameter 'e' corresponds to an event. This function is linked with an event listener.
function changeColor(e) {
    // Getting the value (color) selected in the list.
    let colorOption = document.getElementById('color_list').value
    
    // 'e.target' is each element clicked inside the container element.
    // Just want to change the color of 'div' elemtents (the squares).
    if (e.target.tagName == 'DIV') { 
        e.target.style.backgroundColor = colorOption 
    }
}
