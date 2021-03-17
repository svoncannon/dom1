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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.querySelectorAll('nav a')

navItems[0].textContent = siteContent['nav']['nav-item-1']
navItems[1].textContent = siteContent['nav']['nav-item-2']
navItems[2].textContent = siteContent['nav']['nav-item-3']
navItems[3].textContent = siteContent['nav']['nav-item-4']
navItems[4].textContent = siteContent['nav']['nav-item-5']
navItems[5].textContent = siteContent['nav']['nav-item-6']

const introText = document.querySelector('h1')
introText.textContent = siteContent['cta']['h1']

const buttonText = document.querySelector('button')
buttonText.textContent = siteContent['cta']['button']

const introPic = document.getElementById('cta-img')
introPic.setAttribute('src', siteContent['cta']['img-src'])

const mainTextH4 = document.querySelectorAll('.top-content h4')
const mainP = document.querySelectorAll('.top-content p')

mainTextH4[0].textContent = siteContent['main-content']['features-h4']
mainP[0].textContent = siteContent['main-content']['features-content']
mainTextH4[1].textContent = siteContent['main-content']['about-h4']
mainP[1].textContent = siteContent['main-content']['about-content']

const mainPic =  document.getElementById('middle-img')
mainPic.setAttribute('src', siteContent['main-content']['middle-img-src'])

const bottomInfo =  document.querySelectorAll('.bottom-content h4')
const bottomParag = document.querySelectorAll('.bottom-content p')

bottomInfo[0].textContent = siteContent['main-content']['services-h4']
bottomParag[0].textContent = siteContent['main-content']['services-content']
bottomInfo[1].textContent = siteContent['main-content']['product-h4']
bottomParag[1].textContent = siteContent['main-content']['product-content']
bottomInfo[2].textContent = siteContent['main-content']['vision-h4']
bottomParag[2].textContent = siteContent['main-content']['vision-content']

const contactUs =  document.querySelector('.contact h4')
const contactPar = document.querySelectorAll('.contact p')

contactUs.textContent =  siteContent['contact']['contact-h4']
contactPar[0].textContent = siteContent['contact']['address']
contactPar[1].textContent = siteContent['contact']['phone']
contactPar[2].textContent = siteContent['contact']['email']

const footerContent =  document.querySelector('footer p')

footerContent.textContent = siteContent['footer']['copyright']

navItems.forEach(item => item.style.color = 'green');

const additionNav = document.createElement('a');

const mainNav =
document.querySelector ('nav');

additionNav.textContent = 'Home';
additionNav.href = 'https://www.storylineonline.net/';
mainNav.prepend(additionNav);

additionNav.style.color ='green';

const navBlog = document.createElement('a');

navBlog.textContent ='Blog';
navBlog.href = 'https://www.storylineonline.net/';
mainNav.appendChild(navBlog);
navBlog.style.color = 'green';

