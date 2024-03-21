/*--------------------
Vars
--------------------*/
const $menu = document.querySelector('.menu')
const $items = document.querySelectorAll('.menu--item')
let menuHeight = $menu.clientHeight
let itemHeight = $items[0].clientHeight
let wrapHeight = $items.length * itemHeight
