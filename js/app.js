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
    //make a html element with
    createLi.innerText = 'hi'; //testing
    navbarList.appendChild(createLi);
  });
}

navigationMenu();

console.log(sections);
