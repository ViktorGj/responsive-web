function toggleLang(lang) {
    let en = document.getElementById('en');
    let de = document.getElementById('de');
    if(lang == 'en') {
        en.style.color = '#ef463b';
        de.style.color = '#333';
    } else {
        de.style.color = '#ef463b';
        en.style.color = '#333';
    }
};

var backgrounds = [
    "url('./assets/images/img-1.jpg')",
    "url('./assets/images/img-2.jpg')",
    "url('./assets/images/img-3.jpg')",
    "url('./assets/images/img-4.jpg')",
    "url('./assets/images/img-5.png')",
    "url('./assets/images/img-6.jpg')",
    "url('./assets/images/img-7.jpg')",
    "url('./assets/images/img-8.jpg')",
    "url('./assets/images/img-9.jpg')"
]

function toggleBackground(container) {
    var urlString = backgrounds[container] ? backgrounds[container] : null;
    document.getElementsByClassName('services-background')[0].style.backgroundImage = urlString;
}