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
    //console.dir(this);
    const endDateTemp = new Date(this.value);
    startClock(endDateTemp);
})

function startClock(endTime){
    function updateCounter(){
        let t = timeRemaining(endTime);  
        console.log(t);
    }
    updateCounter();
    timeInterval = setInterval(updateCounter,1000);
}

function timeRemaining(endTime){
    let t = Date.parse(endTime) - Date.parse(new Date());
    let seconds = Math.floor((t/1000)%60);
    let minutes = Math.floor((t/1000/60)%60);
    let hours = Math.floor((t/(1000*60*60))%24);
    let days = Math.floor(t/(1000*60*60*24));
    return {
        'total':t,
        'days':days,
        'hours':hours,
        'minutes':minutes,
        'seconds':seconds
    };
    
}


//console.log(endDate);
