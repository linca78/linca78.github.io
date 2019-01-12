let tab; // заголовок вкладки
let tabContent; // блок содержащий контент вкладки

window.onload = function() {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('greeborder');
    }
}
document.getElementById('tabs').onclick = function(event) {
    let target = event.target;
    if (target.className == 'tab') {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('greeborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
};
$('.amazing-filters a').on('click', function() {
    $('.amazing-filters li').removeClass('active');
    $(this).parent('li').addClass('active'); // выделяем выбранную категорию

    let category = $(this).attr('data-filter'); // определяем категорию

    if (category == 'all') { // если all
        $('.amazing-img div').show(); // отображаем все позиции
    } else { // если не all
        $('.amazing-img > div').hide(); // скрываем все позиции
        $('.amazing-img div[data-filter="' + category + '"]').show(); // и отображаем позиции из соответствующей категории
    }
});

//  прелоадер
let btn = document.getElementById('amazing-btn');
let preloader = document.getElementById('loader');
let images = document.getElementById('hidden');
let imagesTwo = document.getElementById('hidden-two');
let flag = 0;

btn.addEventListener('click', function() {
    if (flag == 0) {

        preloader.classList.remove('hide');
        setTimeout(function() {
            preloader.classList.add('hide');
            images.style.display = 'block';

        }, 2000);
        flag = 1;
    } else {
        preloader.classList.remove('hide');
        setTimeout(function() {
            preloader.classList.add('hide');
            imagesTwo.style.display = 'block';
            btn.style.display = 'none';
        }, 2000);
        flag = 0;
    }
});

// slider
$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick ({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider',
    dots: true,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '0'
});

// Masonry
$(document).ready(function($) {
    
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 124,
        columnHeight: 92,
        gutter: 5, 
        singleMode: false,
        isResizeBound: false
        
    });
});
   