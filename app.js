window.onload = function() {  
    var btn_menu = document.querySelector('.btn_menu') 
    if (btn_menu) { 
        btn_menu.addEventListener('click', () => { 
            var menuItems = document.querySelector('.menuItems') 
            menuItems.classList.toggle('show')
        }) 
    } 
}