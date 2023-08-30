const mobileMenu = document.querySelector('nav.mobile-menu')

export function toggleMenu(elements) {
    const toggleClass = (ele) => {
        ele.classList.toggle('show-menu');
    }
    elements.forEach((e)=>e.addEventListener('click', () => toggleClass(mobileMenu)))
}
