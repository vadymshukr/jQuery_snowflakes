const icons = [
    '../icons/bomb_1f4a3.png',
    '../icons/heavy-black-heart_2764.png',
    '../icons/i-love-you-hand-sign_emoji-modifier-fitzpatrick-type-1-2_1f91f-1f3fb_1f3fb.png',
    '../icons/mouth_1f444.png',
    '../icons/skull_1f480.png',
    '../icons/tongue_1f445.png'
]

$( document ).ready(function() {

    let flake = '<div class="flake"></div>';
    let finalY = $('.flakearea').height();
    let play = true;
    function on(){
        let randomX = Math.floor(Math.random() * 500);
        let randomY = Math.floor(Math.random() * 100);
        let randomDuration = Math.floor(3000 + Math.random() * 5000);
        let randomIconIndex = Math.floor(Math.random()*(icons.length-1))
        $(flake).appendTo('.flakearea')
        .css({
            'left': randomX + 'px',
            'top': '-' + randomY + 'px',
            'background-image': `url(${icons[randomIconIndex]})`
    })
        .animate({
            top: finalY
        }, randomDuration, function(){
            ( this ).remove();
            on() 
        })
    }
    for(let i =0; i<10; i++){
        on()

    }

})