$( document ).ready(function() {
let flake = '<div class="flake"></div>';
let play = true;
function on(){
    let randomX = Math.floor(Math.random() * 500);
    let randomY = Math.floor(Math.random() * 100);
    let randomDuration = Math.floor(3000 + Math.random() * 5000);
    $(flake).appendTo('.flakearea').css('left', randomX + 'px').css('top','-' + randomY + 'px').animate({
        top: "200"
    }, randomDuration, function(){
        ( this ).remove();
        on()
        
    })
}
for(let i =0; i<10; i++){
    on()

}

})