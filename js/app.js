//Navigation is built dynamically as an unordered list. Start with empty ul and dynamically build navigation using Append, appendChild, and innerHTML

//let sections = document.querySelectorAll('section')

// document.header.appendChild(element);

function test1() {
  let element = document.createElement('div');
  element.innerText = 'test';

  const test = document.getElementById('navbar__list');
  test.appendChild(element);
}
test1();
