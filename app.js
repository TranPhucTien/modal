var btn_open = document.querySelector('.open__modal-btn')
var modal = document.querySelector('.modal')
var icon_close = document.querySelector('.modal__header i')
var btn_close = document.querySelector('.modal__footer button')

function toggle_modal() {
    modal.classList.toggle('hide')
}

btn_open.addEventListener('click', toggle_modal)
btn_close.addEventListener('click', toggle_modal)
icon_close.addEventListener('click', toggle_modal)
modal.addEventListener('click', function(e){
    if (e.target == e.currentTarget) {
        toggle_modal()
    }
}) 