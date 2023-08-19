const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.querySelector('.final-sms'),
$audio = document.querySelector('.audio');
$video = document.querySelector('.video');

//Fecha a futuro
const countdownDate = new Date('08 19, 2023 12:39:00').getTime();

let interval = setInterval(function(){
    //Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //Obtener las distancias entre ambas fechas
    let distance = countdownDate - now;

    //Calculos a dias-horas-minutos-segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    console.log(days);
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60 )) / (1000));

    //Escribimos resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    //Cuando llegue a 0
    if(distance < 0){
        clearInterval(interval);
        //Caer conffetti
        const start = () => {
            setTimeout(function(){
                confetti.start();
            },1000);
        };
        const stop = () => {
            setTimeout(function(){
                confetti.stop();
            },5000)
        }
        start();
        stop();
        
        $audio.play();
        $video.play();
        $finalMessage.style.transform = 'translateY(0)';
    }
}, 1000);