(function () {
    'use strict';

    var data = [
        {
            img: './img/look.com.ua-114508.jpg',
            title: 'Описание 1'
        },
        {
            img: './img/look.com.ua-114531.jpg',
            title: 'Описание 2'
        },
        {
            img: './img/look.com.ua-114554.jpg',
            title: 'Описание 3'
        },
        {
            img: './img/look.com.ua-114556.jpg',
            title: 'Описание 4'
        },
        {
            img: './img/look.com.ua-114560.jpg',
            title: 'Описание 5'
        },
        {
            img: './img/look.com.ua-114561.jpg',
            title: 'Описание 6'
        },
        {
            img: './img/look.com.ua-114562.jpg',
            title: 'Описание 7'
        },
        {
            img: './img/look.com.ua-114563.jpg',
            title: 'Описание 8'
        },
        {
            img: './img/look.com.ua-114564.jpg',
            title: 'Описание 9'
        },
        {
            img: './img/look.com.ua-114565.jpg',
            title: 'Описание 10'
        },
        {
            img: './img/look.com.ua-114566.jpg',
            title: 'Описание 11'
        },
        {
            img: './img/look.com.ua-114567.jpg',
            title: 'Описание 12'
        },
        {
            img: './img/look.com.ua-114568.jpg',
            title: 'Описание 13'
        },
        {
            img: './img/look.com.ua-114569.jpg',
            title: 'Описание 14'
        },
        {
            img: './img/look.com.ua-114676.jpg',
            title: 'Описание 15'
        }
    ],

    parent = document.getElementById('slider-list');


    var html = document.getElementById('slider').textContent,

        template = _.template(html);

    parent.innerHTML += template({data: data});
})();

$(function () {
    $('.carousel-list').slider();
});