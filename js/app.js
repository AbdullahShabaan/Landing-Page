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


// Global Variables
const sections = document.querySelectorAll("section");


// --------------------------------- building the nav ---------------------------------

// creating a fragment and selecting the ul list
let fragment = document.createDocumentFragment();
let list = document.querySelector("#navbar__list");

// looping over to create an <li> that contains <a> in it
for (let i = 0; i < sections.length; i++) {
  let element = document.createElement("li");
  const link = document.createElement("a");
  // setting the <li> text as the section name using the <data-nav> attribute
  link.textContent = sections[i].getAttribute("data-nav");
  // assiging <li> a class to customize it
  link.setAttribute("class", "menu__link");
  
  element.appendChild(link);
  fragment.appendChild(element);
}
// appending the fragment with its fresh content to the <ul> in the navbar
list.appendChild(fragment);


//  ----------------- Assigning sections "active" class and highlighting <li> in navbar --------------------

// selecting navbar <li>
let navLi = document.querySelectorAll("#navbar__list li");
// selecting <a> in nav <li>
const allAnchor = document.querySelectorAll("#navbar__list li a");

// assiging the section an "active" class and highlighting <li> based on what section in viewport fucntion
window.addEventListener("scroll", function() {
  for (let i = 0; i < sections.length; i++) {
    if (
      // checking if the section is in viewport
      sections[i].getBoundingClientRect().y < 300 &&
      sections[i].getBoundingClientRect().height >= -sections[i].getBoundingClientRect().y + 300
      ) {
      // if true give the section "active" class, and highlight <li> based on section number
      sections[i].classList.add("active");
      navLi[i].style.backgroundColor = "black";
      allAnchor[i].style.color = "white";
    } else {
      // if false remove the class, and set the highlight to default
      sections[i].classList.remove("active");
      navLi[i].style.backgroundColor = "white";
      allAnchor[i].style.color = "black";
    }
  }
});

// adding "acive" class to the first section when the page loads
window.onload = function () {
  sections[0].classList.add("active");
};


// ---------------------------- Scroll to anchor ID using scrollTO event ---------------------------

// looping over <a> to add a "click" event that scrolls to a section using its id
for (let i = 0; i < sections.length; i++) {
  allAnchor[i].setAttribute("href", `#${sections[i].getAttribute("id")}`);
  allAnchor[i].addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById(sections[i].getAttribute("id")).scrollIntoView({ behavior: "smooth" });
  });
}

// another solution without giving <a> the "href" attribute

// for (let i = 0; i < allAnchor.length; i++) {
//   allAnchor[i].addEventListener("click", () => {
//     // sections[i].scrollIntoView({behavior: "smooth"}); // << another way to do it depending on section number not id
//     document.getElementById(sections[i].getAttribute("id")).scrollIntoView({ behavior: "smooth" });
//   });
// }


// ------------------------------- Scroll to TOP button -----------------------------
// creating the button
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerHTML = "^";
// assigning a class to the button
scrollToTopBtn.setAttribute("class", "scrollToTop");
// adding a scroll event to window, when scrolling 400px or more the button appears
document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    document.querySelector(".scrollToTop").style.display = "flex";
  } else {
//   otherwise, the button disappears
    document.querySelector(".scrollToTop").style.display = "none";
  }
});
// adding a click event to the button to scroll to top on click
scrollToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};


// ----------------------- Hide nav bar when not scrolling with 3 sec delay ----------------------
const navBarMenu = document.querySelector(".navbar__menu");
// declaring the timer variable to be able to clearTimeout inside the function
let timerId;

window.onscroll = function() {
  navBarMenu.style.display = "block";
  clearTimeout(timerId);
  // after 2 second of no-scrolling, hide the navbar
  timerId = setTimeout(function() {
    navBarMenu.style.display = "none";
  }, 3000)
  // if the window is near the top, display the navbar
  if (window.scrollY < 300) {
    clearTimeout(timerId);
  } 
  // don't hide the navbar when hovering
  navBarMenu.onmouseenter = function() {
    clearTimeout(timerId);
  }
  // hide the navbar 2 seconds after hovering
  navBarMenu.onmouseleave = function() {
    timerId = setTimeout(() => {
      navBarMenu.style.display = "none";
      }, 3000)
  }
  
}


// ---------------------------------- Making sections collapsible ------------------------------------

for (let i = 0; i < sections.length; i++) {
// selecting the paragraphs container on each section
  let pContainer = document.querySelector(`#section${i + 1} .section-paragraphs`);
// selecting the paragraphs wrapper on each section
  let pWrapper = document.querySelector(`#section${i + 1} .paragraphs`);
// selecting the span to use as a button on each section
  let colButton = document.querySelector(`#section${i + 1} .section-heading span`);
// adding a click event that toggles classes on mentioned elements to hide the paragraphs and set the height to 0
  colButton.addEventListener("click", () => {
    pWrapper.classList.toggle("translateY");
    sections[i].classList.toggle("height-0");
    // changing the span inner arrow based on the height (collapsing) of the section
    if (sections[i].classList.contains("height-0") === true) {
      colButton.textContent = "▼";
    } else {
      colButton.textContent = "▲";
    }
// on click, toggling a class that makes paragraphs' container's height = 0
    pContainer.classList.toggle("container-size-0");
  });
}

// Did my best! ^-^
