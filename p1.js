/** @format */

let reset = document.querySelector("#reset-btn");
let boxes = document.querySelectorAll(".box");
let win = document.querySelector(".winn");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#NewGame");

let turn0 = true; // playerX , playerO

let winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (!e.target.textContent) {
      if (turn0) {
        e.target.textContent = "X";

        if (turn0 == true) {
          e.target.style.color = "red";
        }
        turn0 = false;
      } else {
        e.target.textContent = "O";

        if (turn0 == false) {
          e.target.style.color = "green";
        }
        turn0 = true;
      }
    }

    checkWinner();
  });
});

const checkWinner = () => {
  for (let p of winConditions) {
    let pos1Val = boxes[p[0]].innerText;
    let pos2Val = boxes[p[1]].innerText;
    let pos3Val = boxes[p[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        showmsg(pos1Val);
      }
    }
  }
};

const showmsg = () => {
  win.style.display = "flex";
  win.style.flexDirection = "column";
  win.style.justifyContent = "center";
  win.style.alignItems = "center";
  msg.innerText = `Congratulateions , winner is ${turn0 ? "Player O " : "Player X"}`;
};
const resetgame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
  });
  win.style.display = "none";
  turn0 = true;
};

reset.addEventListener("click", resetgame);

const NewGame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
  });
  win.style.display = "none";
  turn0 = true;
};
newBtn.addEventListener("click", NewGame);
