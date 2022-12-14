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
1.we  need to know if the section is in the viewport or not. [done]
2.and than we need to give this section the [ your-active-class ] 
so the css go to that section and give ti the color and stuff [done]
3. we need to remove the [ your-active-class ] the rest of sections that are not in the viewport[done]
*/

/* position of section1
bottom:1128.1875  height:663.1875  left:16
right:1565  top:465  width:1549  x:16  y:465


bottom:1497.375  height:663.1875  left:16
right:1073  top: 834.1875  width: 1057  x:16  y:834.1875
*/
/*
let test5 = document.getElementById('section2');

// Get it's position in the viewport
//console.log(position);
*/
/*
function viewport(test) {
  let position = test.getBoundingClientRect();
  return position >= 0;
}

function pos() {
  // I need to put this function inside a loop but how

  for (element of sections) {
    if (viewport(element)) {
      if (!element.classList.contains('your-active-class')) {
        console.log('In the viewport!');
      }
    } else {
      console.log('Not in the viewport... whomp whomp');
    }
  }
}

pos();
*/

window.onscroll = function () {
  document.querySelectorAll('section').forEach(function (active) {
    let position = navbarList.querySelector(`[data-nav=${active.id}]`);
    if (
      //if any element apper in this position then
      active.getBoundingClientRect().top >= -385 &&
      active.getBoundingClientRect().top <= 130
    ) {
      // get it ('your-active-class') class
      position.classList.add('active-position');
      active.classList.add('your-active-class');
    } else {
      // but if the section is not in the viewport than remove('your-active-class')
      position.classList.remove('active-position');
      active.classList.remove('your-active-class');
    }
  });
};

//--- addEventListener('click',....) to listen to the click event--

navbarList.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      location.hash = `${event.target.dataset.nav}`;
    }, 280);
  }
});
