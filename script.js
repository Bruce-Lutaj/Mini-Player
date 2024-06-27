// When button1 gets clicked the file '.wav' gets reproduced

const button1 = document.getElementById('button1');
let audio1 = new Audio();
audio1.src = 'awesomeness.wav';
const audioCtx = new AudioContext();
console.log(audioCtx);

button1.addEventListener('click', function()
{
    audio1.play();
    audio1.addEventListener('playing', function()
    {
        console.log('Audio 1 started playing!');
    });
    audio1.addEventListener('ended', function()
    {
        console.log('Audio 1 ended!');
    });
});
// When button2 gets clicked a little sound gets reproduced

const button2 = document.getElementById('button2');
button2.addEventListener('click', playSound);
function playSound()
{
    const oscillator = audioCtx.createOscillator();
    oscillator.connect(audioCtx.destination);
    oscillator.type = 'triangle';
    oscillator.start();
    setTimeout(function()
    {
        oscillator.stop();
    }, 100);
}