const elementHamburger = document.getElementById('menu-toggle');
const elementNavbar = document.getElementById('nav-toggle');
const elementUnclickedNav = document.getElementById('unclicked-nav');
const elementLinks = document.getElementsByTagName('a');

elementHamburger.addEventListener('click', () => {
    dropNavbar();

    if(elementHamburger.children.item(1).style['opacity'] === '0'){
        for(let elLink of elementLinks){
            elLink.removeEventListener('click', dropNavbar);
            elLink.addEventListener('click', dropNavbar);
        }
    }
});

function dropNavbar() {
    // Hamburger Icon Animation
    toggleStyle(elementHamburger.children.item(0), 'transform', 'rotate(45deg) translate(-1px, -1px)');
    toggleStyle(elementHamburger.children.item(2), 'transform', 'rotate(-45deg) translate(-1px, 0px)');
    toggleStyle(elementHamburger.children.item(1), 'opacity', '0');

    // Navbar Drop Animation
    toggleStyle(elementNavbar, 'display', 'flex');
    toggleStyle(elementUnclickedNav, 'visibility', 'visible');
    setTimeout(() =>{
        toggleStyle(elementNavbar, 'opacity', '1');
        toggleStyle(elementNavbar, 'transform', 'translate(0%, 0%)');
    }, 1);
}

function toggleStyle(el, styleName, value){
    if (el.style[styleName] !== value){
        el.style[styleName] += value;
    }else{
        el.style[styleName] = '';
    }
}