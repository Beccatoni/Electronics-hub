const navLinks = document.querySelector('#links');
console.log(navLinks)

let words = [
    'Home',
    'Products',
    'About us',
    'Contact us'
]

function navigation(){
    let navFragment = new DocumentFragment();
    words.forEach(word => {
        let link = document.createElement('li');
        let anchor = document.createElement('a');
        anchor.href = "#";
        anchor.textContent = word;
        link.appendChild(anchor);
        navFragment.appendChild(link)
    })
    navLinks.appendChild(navFragment);
}
navigation();



