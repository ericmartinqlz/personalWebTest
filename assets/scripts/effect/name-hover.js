const elementName = document.getElementById('profile-name');
const profileName = elementName.innerText;

let hoverHTML = '';
    
for(let i = 0; i < profileName.length; i++){
    hoverHTML += `<span class="name-hover">${profileName.charAt(i)}</span>`;
}

elementName.innerHTML = hoverHTML;