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
let navbar = document.getElementById('navbar__list');
//save all sections to a variable / data structure
// I'll use array from method
let sections = Array.from(document.getElementsByTagName('section'));
let sectionLength = sections.length;
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
//just tring another thing
function sectionsList(){
  forEach(section) {
    let sectionName= section.getAttribute('data-nav');
     let sectionid = section.
  });
}

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

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
