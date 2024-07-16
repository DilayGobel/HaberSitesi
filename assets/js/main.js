var mainimg = document.querySelector('img')
var images = ['img/naciye kapak.jpeg' , 'img/zeynep kapak.jpeg' , 'img/gerçek lezzet thor.jpeg' , 'img/dilay şok kapak.jpeg' , 'https://bigumigu.com/wp-content/uploads/2016/04/1633898117570f8ce3be62e8.10165368.gif']
var num = 0;
const auto = true
const IntervalTime = 500000;
let slideInterval

function next() {
    num++
    if(num>= images.length){
        num=0;
        mainimg.scr=images[num]
    }
    else{
        mainimg.src=images[num]
    }
}

function back(){
    num--
    if (num<0) {
        num=images.length-1
        mainimg.src=images[num]
    }
    else{
        mainimg.src=images[num]
    }
}

if (auto) {
    slideInterval=setInterval(back,IntervalTime)
}





document.addEventListener('DOMContentLoaded', function() {
    const haberlers = document.querySelectorAll('.haberler');

    haberlers.forEach(haberler => {
        haberler.addEventListener('click', function() {
            const url = haberler.getAttribute('data-url');
            window.location.href = url;
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const karts = document.querySelectorAll('.kart');

    karts.forEach(kart => {
        kart.addEventListener('click', function() {
            const url = kart.getAttribute('data-url');
            window.location.href = url;
        });
    });
});





