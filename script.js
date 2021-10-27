
//active selection of the navigation bar
const AboutNav = document.querySelector('.navbar-about')
const ReserveNav = document.querySelector('.navbar-reserve')
ReserveNav.addEventListener('click',()=> {
  ReserveNav.classList.add('active')
  AboutNav.classList.remove('active')
})

AboutNav.addEventListener('click',()=> {
  ReserveNav.classList.remove('active')
  AboutNav.classList.add('active')
})


//display the cards when clicking on a button
const More = document.querySelector('#more')
const hiddenText = document.querySelector('#conhidden')
More.addEventListener('click', ()=> {
hiddenText.classList.toggle ('hidden')
})

//link the navbar to the relevant contents
const testhide = document.querySelector('.texthideall')
ReserveNav.addEventListener('click', () => {
  More.classList.add('hidden');
  hiddenText.classList.add('hidden');
  testhide.classList.remove('hidden');
})
AboutNav.addEventListener('click', () => {
  testhide.classList.add('hidden');
  More.classList.remove('hidden');
  hiddenText.classList.remove('hidden')
})

//change the color of the botton and the text
const butchange = document.querySelector('#ko')
butchange.addEventListener('click', () => {
  butchange.innerText = "Joined!"
  butchange.classList.add('standout')
})

//the counter
const setcnt = document.querySelector('.counter')
const plus = document.querySelector('#cntplus')
const down = document.querySelector('#cntdown')
let n = 0

plus.addEventListener('click', ()=>{
  n += 1;
  setcnt.innerText = n;
  if (n >= 0) {
    setcnt.classList.add('standout');
    setcnt.classList.remove('red')}
  else {
    setcnt.classList.add('red');
    setcnt.classList.remove('standout')}

})

down.addEventListener('click',()=> {
  n -= 1
  setcnt.innerText = n;
  if (n >= 0) {
    setcnt.classList.add('standout');
    setcnt.classList.remove('red')
  }
  else {
    setcnt.classList.add('red');
    setcnt.classList.remove('standout')
  }
})

  function test() {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let birthday = "Sep 30, 2021 00:00:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function () {

        let now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
            countdown = document.getElementById("countdown"),
            content = document.getElementById("content");

          headline.innerText = "It's my birthday!";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }
  test()
