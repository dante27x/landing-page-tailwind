const btn = document.getElementById('menu-button');
const leftMenu = document.querySelectorAll('.side-menu');
const menuContent = document.getElementById('menu-content');

// hide left side menu content on mobile by default
menuContent.style.display = 'none';

//display none won't work with transition. Using [hidden] tailwind class is not right.
btn.addEventListener('click', () => {
  // animate hamnurger icon
  btn.classList.toggle('open');

  //open menu div in mobile
  //both overlay and menu div
  for (let i = 0; i < leftMenu.length; i++) {
    if (!leftMenu[i].style.width || leftMenu[i].style.width == '0vw') {
      leftMenu[i].style.width = '70vw';
      leftMenu[i].style.height = '100vh';
    } else {
      leftMenu[i].style.width = '0vw';
      leftMenu[i].style.height = '0vh';
    }
  }

  menuContent.style.display == 'block'
    ? (menuContent.style.display = 'none')
    : (menuContent.style.display = 'block');
});

//change active tab on navbar
const navbar = document.getElementById('navbar');

navbar.addEventListener('click', (item) => {
  // remove all active links style
  let childrens = item.target.parentNode.parentNode.children;

  if (!childrens.length) return;

  for (let children of childrens) {
    children.classList.remove('active');
  }

  //set active to clicked element
  let activeElem = item.target.parentNode;
  activeElem.classList.add('active');
});
