/*--------------------
Vars
--------------------*/
const $menu = document.querySelector('.menu')
const $items = document.querySelectorAll('.menu--item')
let menuHeight = $menu.clientHeight
let itemHeight = $items[0].clientHeight
let wrapHeight = $items.length * itemHeight

let scrollSpeed = 0
let oldScrollY = 0
let scrollY = 0
let y = 0

/*--------------------
Lerp
--------------------*/
const lerp = (v0, v1, t) => {
  return v0 * ( 1 - t ) + v1 * t
}
