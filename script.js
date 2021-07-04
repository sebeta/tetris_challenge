
let container = document.querySelector('.container')

function changeColor(e) {
    let colorOption = document.getElementById('color_list').value
    console.log(e.target.tagName)
    if (e.target.tagName == 'DIV') {
        e.target.style.backgroundColor = colorOption
    }
}

container.addEventListener('click', changeColor, true)
