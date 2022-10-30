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

//all the section are here

/*
what we need to to 
1.we  need to know if the section is in the viewport or not.
2.and than we need to give this section the [ your-active-class ] 
 so the css go to that section and give ti the color and stuff .
3. we need to remove the [ your-active-class ] the rest of sections that are not in the viewport.
*/

let test5 = document.getElementById('section1');

// Get it's position in the viewport
let position = test5.getBoundingClientRect();

// Log the results
console.log(position);

/* position of section1
bottom:1128.1875  height:663.1875  left:16
right:1565  top:465  width:1549  x:16  y:465
*/

// const div = document.createElement('div');
// div.className = 'foo';

// // our starting state: <div class="foo"></div>
// console.log(div.outerHTML);

// // use the classList API to remove and add classes
// div.classList.remove('foo');
// div.classList.add('anotherclass');

// // <div class="anotherclass"></div>
// console.log(div.outerHTML);

// // if visible is set remove it, otherwise add it
// div.classList.toggle('visible');

// // add/remove visible, depending on test conditional, i less than 10
// div.classList.toggle('visible', i < 10);

// console.log(div.classList.contains('foo'));

// // add or remove multiple classes
// div.classList.add('foo', 'bar', 'baz');
// div.classList.remove('foo', 'bar', 'baz');

// // add or remove multiple classes using spread syntax
// const cls = ['foo', 'bar'];
// div.classList.add(...cls);
// div.classList.remove(...cls);

// // replace class "foo" with class "bar"
// div.classList.replace('foo', 'bar');

// //--------------------------------------------------//
// let active = document.getElementsByClassName('your-active-class');

// function update() {
//   const container = document.getElementById('controls');
//   const elem = document.getElementById('example');
//   const rect = elem.getBoundingClientRect();

//   container.innerHTML = '';
//   for (const key in rect) {
//     if (typeof rect[key] !== 'function') {
//       let para = document.createElement('p');
//       para.textContent = `${key} : ${rect[key]}`;
//       container.appendChild(para);
//     }
//   }
// }

// document.addEventListener('scroll', update);
// update();
