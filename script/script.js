var rrr = document.querySelector(".btn-rrr");
var fff = document.querySelector(".btn-fff");
var rrrr = document.querySelector(".btn-rrrr");
var ffff = document.querySelector(".btn-ffff");
var cardss = document.querySelector(".cardss");
var cards = document.querySelector(".cards");
var a = 0;
var cont = 0;
var aa = 0;
var contt = 0;

rrr.onclick = function () {
  cont++;
  if (cont != 3) {
    a -= 305;
    cards.style.transform = `translateX(${a}px)`;
  } else {
    a = 0;
    cont = 0;
    cards.style.transform = `translateX(${a}px)`;
  }
};

fff.onclick = function () {
  cont--;
  if (cont != -3) {
    a += 305;
    cards.style.transform = `translateX(${a}px)`;
  } else {
    a = 0;
    cont = 0;
    cards.style.transform = `translateX(${a}px)`;
  }
};

rrrr.onclick = function () {
  contt++;
  if (contt != 7) {
    aa -= 290;
    cardss.style.transform = `translateX(${aa}px)`;
  } else {
    aa = 0;
    contt = 0;
    cardss.style.transform = `translateX(${aa}px)`;
  }
};

ffff.onclick = function () {
  if (contt != -7) {
    contt--;
    aa += 290;
    cardss.style.transform = `translateX(${aa}px)`;
  } else {
    aa = 0;
    contt = 0;
    cardss.style.transform = `translateX(${aa}px)`;
  }
};
