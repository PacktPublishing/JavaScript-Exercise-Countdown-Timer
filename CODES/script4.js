let countDown;
let timeInterval;
const endDate = document.querySelector('input[name="endDate"]');
const clock = document.querySelector('#clock');
const daysSpan = clock.querySelector('.days');
const hoursSpan = clock.querySelector('.hours');
const minutesSpan = clock.querySelector('.minutes');
const secondsSpan = clock.querySelector('.seconds');

endDate.addEventListener('change',function(e){
    e.preventDefault();
    clearInterval(timeInterval);
    console.dir(this);
    const endDate = new Date(this.value);
    
})

//console.log(endDate);
