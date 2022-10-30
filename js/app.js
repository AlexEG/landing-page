/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

// save ul element to a variable so I can make an unordered list
let menuNavbar = document.getElementById('navbar__list');
//save all sections to a variable / data structure
// I'll use array from method
let sections = Array.from(document.querySelectorAll('section'));
let sectionLength = sections.length;
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// function sectionsList() {
//   for (section of sections) {
//     sectionName = section.getAttribute('data-nav');
//     sectionId = section.getAttribute('id');
//     listItem = document.sectionsList('li');
//     listItem.innerHTML = `<a class='menu__link' href='#${sectionId}'>${sectionName}</a>`;

//     menuNavbar.appendChild(listItem);
//   }
// }

// //make function to get the name + id of every section
// function sectionsList() {
//   array.forEach(element => {
//     //save date-nav into a var called sectionTitle
//     const dataNav = document.getElementsByClassName('data-nav');
//     // stor date-nav value[the name of section] into var
//     const sectionTitle = dataNav.value;
//     // get the id of each section

//   });
// }

// Scroll to section on link click by using sectionID
const smoothScrolling = () => {
  const links = document.querySelectorAll('.navbar__menu a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      for (i = 0; i < sections; i++) {
        sections[i].addEventListener('click', sectionScroll(link));
      }
    });
  });
};

smoothScrolling();
