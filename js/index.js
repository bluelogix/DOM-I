const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// GREAT IDEA LOGO

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//////////  NAV
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('a');


navItems[0].textContent = siteContent.nav["nav-item-1"];
navItems[0].style.color ='green';

navItems[1].textContent = siteContent.nav["nav-item-2"];
navItems[1].style.color ='green';

navItems[2].textContent = siteContent.nav["nav-item-3"];
navItems[2].style.color ='green';

navItems[3].textContent = siteContent.nav["nav-item-4"];
navItems[3].style.color ='green';

navItems[4].textContent = siteContent.nav["nav-item-5"];
navItems[4].style.color ='green';

navItems[5].textContent = siteContent.nav["nav-item-6"];
navItems[5].style.color ='green';


//////// NAV ADDITIONS + COLOR CHANGE 

// const navNew = document.createElement('a');
// // navNew.href ='#';
// navNew.textContent = 'Portfolio';
// nevNew.style.color = 'green';

// const newNavs = document.querySelector('nav');
// newNavs.prepend(navNew);
// newNavs.appendChild(navNew2);

// const navNew2 = document.createElement('a');
// // navNew2.href ='#';
// navNew2.textContent = 'Blog';
// nevNew2.style.color = 'green';



/////////  TOP CONTENT 

const topContent = document.querySelector('.cta');
const heading = document.querySelector('h1');
heading.textContent = siteContent.cta.h1;

const contentButton = document.querySelector('button');
contentButton.textContent = siteContent.cta.button;

const contentImg = document.querySelector('#cta-img');
contentImg.src = siteContent.cta["img-src"];

///////// MAIN-CONTENT

const mainContent = document.querySelectorAll('.main-content');
const mainContents = document.querySelectorAll('.main-content h4');
const textContents = document.querySelectorAll('.main-content p');

const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];



mainContents[0].textContent = siteContent['main-content']['features-h4'];
textContents[0].textContent = siteContent['main-content']['features-content'];

mainContents[1].textContent = siteContent['main-content']['about-h4'];
textContents[1].textContent = siteContent['main-content']['about-content'];

mainContents[2].textContent = siteContent['main-content']['services-h4'];
textContents[2].textContent = siteContent['main-content']['services-content'];

mainContents[3].textContent = siteContent['main-content']['product-h4'];
textContents[3].textContent = siteContent['main-content']['product-content'];

mainContents[4].textContent = siteContent['main-content']['vision-h4'];
textContents[4].textContent = siteContent['main-content']['vision-content'];

///////// BOTTOM-CONTENT

const contactHeading = document.querySelectorAll('.contact h4');
const contact = document.querySelectorAll('.contact p');


contactHeading[0].textContent = siteContent['contact']['contact-h4'];
contact[1].textContent = siteContent['contact']['address'];
contact[2].textContent = siteContent['contact']['phone'];
contact[3].textContent = siteContent['contact']['email'];

///////// FOOTER 

const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;






