function getClass(e,text){
     return e.target.classList.contains(text)
}

function createHistory(title,number,time){
    const div = document.createElement("div");

    div.innerHTML =`
    <div class=" rounded-lg flex items-center justify-between py-4 px-3 bg-white "> 
    <div class= "space-y-1">
        <p id="history-title">${title}</p>
        <p id="history-phone">${number}</p>
    </div>
    <p id="history-time">${time}</p>
    </div>
    `;
    containerHistory.appendChild(div);
}

function getTime(){
    let date = new Date();
    let h = date.getHours();
    let hour12 = h % 12;
    hour12 = hour12 === 0 ? 12 : hour12

    let hh = hour12.toString().padStart(2, "0");
    let m = date.getMinutes().toString().padStart(2, "0");
    let s = date.getSeconds().toString().padStart(2, "0");

    return `${hh}:${m}:${s}`;
}

const containerHistory =document.getElementById("container-histroy");
const cardAll =document.querySelectorAll(".common-cart-btn");
let updateCopy = document.getElementById("copy-count");
let updateheart = document.getElementById("heart-count")
let cradit = document.getElementById("cradit");
// let coins = docuent.getElementById("coins")
const historyClear =document.getElementById("history-clear");
let noHistory = document.getElementById("no-histry");
let copyCount = 0;
let heartCount = 0;

[...cardAll].forEach((card) => {
  card.addEventListener("click", function (e) {
    if (getClass(e, "copyBtn")) {
      const number = card.querySelector(".phone-number").textContent;
      navigator.clipboard.writeText(number);
      alert(`Phone number copied, ${number}`);
      copyCount++;
      copyUpdate.textContent = copyCount;
    } else if (getClass(e, "heart")) {
      heartCount++;
      updateheart.textContent = heartCount;
    } else if (getClass(e, "call")) {
      const subTitle = card.querySelector(".sub-title").textContent;
      const title = card.querySelector(".title").textContent;
      const number = card.querySelector(".phone-number").textContent;

      const callCost = 20;
      let currentCradit = Number(cradit.textContent);
      if (currentCradit < 20) {
        alert(`You don't have enough coins. You need at least 20 coins to make a call`);
        return;
      }
      currentCradit -= callCost;
      cradit.textContent = currentCradit;
      alert(`Calling ${subTitle}, ${number}`);
      noHistory.innerHTML = "";
      createHistory(title, number, getTime());
    }
  });
});

historyClear.addEventListener("click", function(){
    containerHistory.innerHTML = "";
    noHistory.textContent ="No-history";
    containerHistory.appendChild(noHistory);
})
