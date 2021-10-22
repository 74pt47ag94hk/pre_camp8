let aaa;
let isStared = false;

const getToken = () => {
  if (isStared === false) {
    isStared = true;

    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("num").innerText = token;

    let time = 180;
    let timecounter = 20;
    aaa = setInterval(function () {
      if (timecounter > 10) {
        const minutes = String(Math.floor(time / 60)).padStart(2, "0");
        const seconds = String(time % 60).padStart(2, "0");
        document.getElementById("timer").innerText = minutes + ":" + seconds;
        time = time - 1;
        timecounter = timecounter - 1;
      } else if (timecounter == 10) {
        const minutes = String(Math.floor(time / 60)).padStart(2, "0");
        const seconds = String(time % 60).padStart(2, "0");
        document.getElementById("timer").innerText = minutes + ":" + seconds;
        document.getElementById("num").innerText = "인증이 만료되었습니다.";
        alert("인증이 만료되었습니다.");
        time = time - 1;
        timecounter = timecounter - 1;
      } else {
        isStared = false;
      }
    }, 1000);
  } else {
    alert("이미실행되었습니다.");
  }
};
function reset() {
  clearInterval(aaa);
  document.getElementById("num").innerText = "000000";
  document.getElementById("timer").innerText = "03:00";
}
