document.documentElement.scrollTop = 0;

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

// Tabs button
const goodsBtn = document.querySelector("#goods-tab")
const talentsBtn = document.querySelector("#talent-tab")
const faqBtn = document.querySelector("#faq-tab")
const aboutBtn = document.querySelector("#about-tab")
const moreBtn = document.querySelector("#more-tab")

// Section Constant
const mainSection = document.querySelector("#main-section")
const talentSection = document.querySelector("#talent-section")
const goodsSection = document.querySelector("#goods-section")
const faqSection = document.querySelector("#faq-section")
const aboutSection = document.querySelector("#about-section")
const moreSection = document.querySelector("#more-section")
const footerSection = document.querySelector("#footer")


// default tab
mainSection.style.display = "block"
talentSection.style.display = "block"
goodsSection.style.display = "none"
faqSection.style.display = "none"
aboutSection.style.display = "none"
moreSection.style.display = "none"
footerSection.style.display = "flex"

// tabs functionality
goodsBtn.onclick = function(e) {
  e.preventDefault()
  mainSection.style.display = "none"
  talentSection.style.display = "none"
  goodsSection.style.display = "block"
  faqSection.style.display = "none"
  aboutSection.style.display = "none"
  moreSection.style.display = "none"
footerSection.style.display = "none"
  AOS.refresh()
  
  window.scroll({
 top: 0, 
 left: 0, 
 behavior: 'smooth' 
});
}

talentsBtn.onclick = function(e) {
  e.preventDefault()
  mainSection.style.display = "block"
  talentSection.style.display = "block"
  goodsSection.style.display = "none"
  faqSection.style.display = "none"
  aboutSection.style.display = "none"
  moreSection.style.display = "none"
footerSection.style.display = "flex"
    AOS.refresh()
  
  window.scroll({
 top: 0, 
 left: 0, 
 behavior: 'smooth' 
});
}

faqBtn.onclick = function(e) {
  e.preventDefault()
  mainSection.style.display = "none"
  talentSection.style.display = "none"
  goodsSection.style.display = "none"
  faqSection.style.display = "block"
  aboutSection.style.display = "none"
  moreSection.style.display = "none"
footerSection.style.display = "none"
  AOS.refresh()
  
  window.scroll({
 top: 0, 
 left: 0, 
 behavior: 'smooth' 
});
}

aboutBtn.onclick = function(e) {
  e.preventDefault()
  mainSection.style.display = "none"
  talentSection.style.display = "none"
  goodsSection.style.display = "none"
  faqSection.style.display = "none"
  aboutSection.style.display = "block"
  moreSection.style.display = "none"
footerSection.style.display = "none"
  AOS.refresh()
  
  window.scroll({
   top: 0, 
   left: 0, 
   behavior: 'smooth' 
  });
}

moreBtn.onclick = function(e) {
  e.preventDefault()
  mainSection.style.display = "none"
  talentSection.style.display = "none"
  goodsSection.style.display = "none"
  faqSection.style.display = "none"
  aboutSection.style.display = "none"
  moreSection.style.display = "block"
footerSection.style.display = "none"
  AOS.refresh()
  
  window.scroll({
 top: 0, 
 left: 0, 
 behavior: 'smooth' 
});
}

var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    },5000);


const container = document.querySelector(".events-news-container");
const cards = document.querySelector(".events-news-cards");

let isPressedDown = false;
let cursorXSpace;

container.addEventListener("mousedown", (e) => {
  isPressedDown = true;
  cursorXSpace = e.offsetX - cards.offsetLeft;
  container.style.cursor = "grabbing";
});

container.addEventListener("mouseup", () => {
  container.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressedDown = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isPressedDown) return;
  e.preventDefault();
  cards.style.left = `${e.offsetX - cursorXSpace}px`;
  boundCards();
});

function boundCards() {
  const container_rect = container.getBoundingClientRect();
  const cards_rect = cards.getBoundingClientRect();

  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  } else if (cards_rect.right < container_rect.right) {
    cards.style.left = `-${cards_rect.width - container_rect.width}px`;
  }
}

const containerVideo = document.querySelector(".events-videos-container");
const cardsVideo = document.querySelector(".events-videos-cards");

let isPressedDownVideo = false;
let cursorXSpaceVideo;

containerVideo.addEventListener("mousedown", (e) => {
  isPressedDownVideo = true;
  cursorXSpaceVideo = e.offsetX - cardsVideo.offsetLeft;
  containerVideo.style.cursor = "grabbing";
});

containerVideo.addEventListener("mouseup", () => {
  containerVideo.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressedDownVideo = false;
});

containerVideo.addEventListener("mousemove", (e) => {
  if (!isPressedDownVideo) return;
  e.preventDefault();
  cardsVideo.style.left = `${e.offsetX - cursorXSpaceVideo}px`;
  boundCardsVideo();
});

function boundCardsVideo() {
  const containerVideo_rect = containerVideo.getBoundingClientRect();
  const cardsVideo_rect = cardsVideo.getBoundingClientRect();

  if (parseInt(cardsVideo.style.left) > 0) {
    cardsVideo.style.left = 0;
  } else if (cardsVideo_rect.right < containerVideo_rect.right) {
    cardsVideo.style.left = `-${cardsVideo_rect.width - containerVideo_rect.width}px`;
  }
}


const talentstar = document.querySelectorAll(".talent-list-item")
for (let i = 0; i < talentstar.length; i++) {
  talentstar[i].setAttribute("data-aos","fade-up")  
}

const goodsItem = document.querySelectorAll(".goods-item")
for (let i = 0; i < goodsItem.length; i++) {
  goodsItem[i].setAttribute("data-aos","fade-up")  
}

const newsOne = document.querySelector(".events-news")
newsOne.setAttribute("data-aos","flip-left")  

const newsTwo = document.querySelector(".events-videos")
newsTwo.setAttribute("data-aos","flip-left")

const newsThree = document.querySelector(".events-footer")
newsThree.setAttribute("data-aos","flip-left")

const aboutItem = document.querySelectorAll(".second-about")
for (let i = 0; i < aboutItem.length; i++) {
  aboutItem[i].setAttribute("data-aos","fade-up")  
}

const fifthAbout = document.querySelector(".fifth-about")
fifthAbout.setAttribute("data-aos","fade-up")