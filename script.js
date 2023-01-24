function happyBirthday() {
  let finDate = new Date("Jan 20, 2024 23:59:59").getTime();
  let couner;
  couner = setInterval(() => {
    let dateNow = new Date().getTime();
    let newDate = finDate - dateNow;

    if (newDate < 0) {
      let years = 2024;
      let newFinDate;
      newFinDate = new Date(`Jan 20, ${years++} 23:59:59`).getTime();
      finDate = newFinDate;
      happyBirthday();
    }

    let days = Math.floor(newDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (newDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((newDate % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((newDate % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML =
      seconds < 10 ? `0${seconds}` : seconds;
  }, 1000);
}

happyBirthday();
