//Navigation is built dynamically as an unordered list. Start with empty ul and dynamically build navigation using Append, appendChild, and innerHTML

//stor value of navbar__list inside a var [done]
let sections = Array.from(document.querySelectorAll('section'));
//make a data structure of all sections in the page [done]
let navbarList = document.getElementById('navbar__list');

function navigationMenu() {
  //loop over this data structure [done]
  sections.forEach(element => {
    //create an unorder list for each element in this structure [done]
    createLi = document.createElement('li');
    //make a html element with javascript
    //I had to ECMAScript here (I get some help from stackoverflow.com in ECMAScript)
    createLi.innerHTML = `<li><a href='#${element.id}' data-nav='${element.id}' class='menu__link'>${element.id}</a></li>`;

    //use appendchild to render the elements [done]
    navbarList.appendChild(createLi);
  });
}

navigationMenu();

//Section Active State
// Detect the element location relative to the viewport using .getBoundingClientRect() built-in function.

//strart with stor the avtive class in a var
//----testing------//
let active = document.getElementsByClassName('your-active-class');

window.addEventListener('scroll', function {

})
