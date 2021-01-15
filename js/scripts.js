const selectSearch = document.querySelector('.search-section');
const navMenu = document.querySelector('.nav-menu');
const popupWindowFilter = document.querySelector('.window-filter-container');


const toggleMenu = () => {

    navMenu.classList.add('not-active');
    selectSearch.classList.add('active');

    window.addEventListener('click', function(e){

        if (!document.querySelector('.search-section').contains(e.target) && e.target.className !== 'fas fa-search'){
            navMenu.classList.remove('not-active');
            selectSearch.classList.remove('active');
            popupWindowFilter.classList.remove('active');
        }

        if (document.querySelector('.search-section').contains(e.target) && e.target.className !== 'fas fa-search') {
            popupWindowFilter.classList.add('active');
        }
    });

};

const scripts = () => {
    const selectHeader = document.querySelectorAll('.select-header');
    let selectItem = document.querySelectorAll('.select-item');

    selectHeader.forEach(item=> {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item=> {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            selectCurrent = select.querySelector('.select-current');
        selectCurrent.innerText = text;
        selectCurrent.classList.add('dirty');
        select.classList.remove('is-active');
    }
};

scripts();

const reset = () => {
    const selects = document.querySelectorAll('.select');

    selects.forEach(select => {
        if (!select.classList.contains('category-select'))
            select.querySelector('.select-current').innerText = '';
    });
};

const mobileMenu = () => {
    const mobileMenuBarsBtn = document.querySelector('.mobile-menu-bars');
    const closeMobileMenuBtn = document.querySelector('.mobile-menu-close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuBarsBtn.addEventListener('click', function () {
        mobileMenu.classList.add('modal-active');
    });

    closeMobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.remove('modal-active');
    })
};