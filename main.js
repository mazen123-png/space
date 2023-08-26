let navLinks = document.getElementById('nav-link')
let toggleIcon = document.getElementById('toggle-icon')
console.log(navLinks)
if(innerWidth >= 1024){
    navLinks.style.display = 'flex'
}else{
    navLinks.style.display = 'none'
    toggleIcon.style.display = 'inline'
}
toggleIcon.onclick = () =>{
    if(navLinks.style.display == 'none'){
        navLinks.style.display = "flex"
        toggleIcon.className = 'fa-solid fa-circle-xmark'
    }else if(navLinks.style.display == 'flex'){
        navLinks.style.display = 'none'
        toggleIcon.className = 'fa-solid fa-list'
    }
}