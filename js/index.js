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


//Get nav link elements from dom
let nav_item = document.querySelectorAll('nav a');

//setting nav content
nav_item.forEach((element, index) => {

  //?? Could I have done this cleaner?
  let i = index+1;
  element.textContent = siteContent.nav["nav-item-"+i];

});

//set source logo-img
document.querySelector('#logo-img').src = siteContent.nav["img-src"];


//CTA
let cta_text = siteContent.cta.h1;

// let cta_text_h1 = document.querySelector('.cta-text h1');

// cta_text_h1.textContent = siteContent['cta']['h1'];

//replace space with line-break <b1>
let cta_br = cta_text.replace(/ /g, "<br>");

//set cta text
document.querySelector('.cta-text h1').innerHTML = cta_br;

// document.querySelector('.cta-text h1').textContent = cta_br;


//set cta button
document.querySelector('.cta-text button').textContent = siteContent.cta.button;

//set cta image
document.querySelector('#cta-img').src = siteContent.cta["img-src"];

//Get text-content elements
let h4_text_content = document.querySelectorAll('.text-content h4');

let p_text_content = document.querySelectorAll('.text-content p');


//Holder Array for Setting Content
let h4_arr = [];

let text_content_arr = [];

//loop throught main-content keys and assign content to either h4 or content array
for (let key in siteContent["main-content"])
{
  if(key.includes('h4'))
  {
    h4_arr.push(siteContent["main-content"][key]);
  }
  else if (key.includes('content'))
  {
    text_content_arr.push(siteContent["main-content"][key]);
  }
}

//set h4 main-content
h4_text_content.forEach((element, index) => {

  element.textContent = h4_arr[index];

});

//set h4 main-content
p_text_content.forEach((element, index) => {

  element.textContent = text_content_arr[index];

});


//set middle-img
document.querySelector('.middle-img').src = siteContent["main-content"]["middle-img-src"];


//creat array from contact object
let contact_el = document.querySelector('.contact').children;

//converts contact_el object to array
let contact_el_arr = Array.from(contact_el);

//get keys for contact json which returns arr and loop
//and pop obj value into contact element via index location 
Object.keys(siteContent.contact).forEach((element, index) => {

  contact_el_arr[index].textContent = siteContent.contact[element];

});

//set footer text
document.querySelector('footer p').textContent = siteContent.footer['copyright'];


//create prepend element
let prepend_el = document.createElement('a');
//Add text to link
prepend_el.textContent = 'Prepend';
//prepend
document.querySelector('nav').prepend(prepend_el);


//create prepend element
let append_el = document.createElement('a');
//Add text to link
append_el.textContent = 'Append';
//append
document.querySelector('nav').appendChild(append_el);


//change text color of nav links
document.querySelectorAll('nav a').forEach((element) => {
  
  element.style.color = 'green';
});


 console.log(prepend_el);
