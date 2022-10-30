//Navigation is built dynamically as an unordered list. Start with empty ul and dynamically build navigation using Append, appendChild, and innerHTML

let sections = document.querySelectorAll('section');

// testing if I can get the value of data-nav [section's title]

function navigation() {
  let sections = document.querySelectorAll('section');
  //stor value of navbar__list inside a var

  let navbarList = document.getElementById('navbar__list');

  test2.innerHTML = sections;
  //now let's index all sections inside ul element
}
navigation();

console.log(sections);
//trying to save all
