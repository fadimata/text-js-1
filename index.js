// 1.
let body = document.body;
body.firstElementChild.textContent = "Rick Astley - Never Gonna Give You Up.";

// 2.
const couplet = document.querySelectorAll(".couplet");
for (let i = 0; i < couplet.length; i++) {
  couplet[i].firstChild.remove();
  couplet[i].firstChild.remove();
}
// 3.
let tab = [];
let  refrain = document.querySelectorAll(".refrain");
for (let i = 0; i < refrain.length; i++) {
  let para = refrain[i].textContent.split("\n");
  for (let f = 0; f < para.length; f++) {
    if (tab.includes(para[f]) === false) {
      tab.push(para[f]);
      }
  }
  refrain[i].innerHTML = tab.join('<br>');
} 
/* refrain.forEach((paragraphe) => {
  let para = paragraphe.textContent.split("\n");
  console.log(para);
  para.forEach((lign) => {
    if (!tab.includes(lign)) {
    tab.push(lign);
    }
  });
  paragraphe.innerHTML = tab.join('<br>');
});  */

// 4.
const erreur = document.getElementById('erreur');
erreur.style.color = 'red';
while (erreur.firstChild) {
  erreur.removeChild(erreur.firstChild);
}

// 5.
let footer = document.createElement('footer');
body.append(footer);
let paragraphe = document.createElement('p');
footer.append(paragraphe)
paragraphe.textContent= '© Copyright 2023 - FADI';


