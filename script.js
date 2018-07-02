/*function changeDataLang() {
    for (let j = 0; j < changeLang.length; j++) {
        if (changeLang[j].style.display === 'block') {
            changeLang[j].style.display = 'none'
        } else {
            changeLang[j].style.display = 'block'
        }
    }
}*/

function changeDataLang() {
    for (let k = 0; k < langButton.length; k++) {
        if (langButton[k].style.display === 'block') {
            langButton[k].style.display = 'none'
        } else {
            langButton[k].style.display = 'block'
        }
    }
    for (let j = 0; j < changeLang.length; j++) {
        if (changeLang[j].childNodes[1]) {
            swapLangItem1 = changeLang[j].childNodes[0].nodeValue;
            changeLang[j].childNodes[0].nodeValue = changeLang[j].getAttribute('data-lang');
            changeLang[j].setAttribute('data-lang', swapLangItem1);
        } else {
            swapLangItem1 = changeLang[j].innerText;
            changeLang[j].innerText = changeLang[j].getAttribute('data-lang');
            changeLang[j].setAttribute('data-lang', swapLangItem1);
        }
    }
    for (let l = 0; l < changeLangFormPlaceholder.length; l++) {
        swapLangItem3 = changeLangFormPlaceholder[l].getAttribute('placeholder');
        swapLangItem4 = changeLangFormPlaceholder[l].getAttribute('data-langplaceholder');
        changeLangFormPlaceholder[l].setAttribute('data-langplaceholder', swapLangItem3);
        changeLangFormPlaceholder[l].setAttribute('placeholder', swapLangItem4);
    }
    for (let m = 0; m < changeLangFormTitle.length; m++) {
        swapLangItem5 = changeLangFormTitle[m].getAttribute('title');
        swapLangItem6 = changeLangFormTitle[m].getAttribute('data-langtitle');
        changeLangFormTitle[m].setAttribute('data-langtitle', swapLangItem5);
        changeLangFormTitle[m].setAttribute('title', swapLangItem6);
    }
    if (localStorage.language === 'english') {
        localStorage.setItem('language', 'polish');
    } else {
        localStorage.setItem('language', 'english');

    }
}

const langButton = document.querySelectorAll('.lang-button');
const changeLang = document.querySelectorAll('[data-lang]');
const changeLangFormPlaceholder = document.querySelectorAll('[data-langplaceholder]');
const changeLangFormTitle = document.querySelectorAll('[data-langtitle]');

for (let i = 0; i < langButton.length; i++) {
    langButton[i].addEventListener('click', changeDataLang);
}

if (localStorage.language === 'english') {
    changeDataLang();
    localStorage.setItem('language', 'english');
}
