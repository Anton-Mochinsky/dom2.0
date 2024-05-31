/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/board-item/board-item.js

class BoardItem {
  constructor(element) {
    this._element = element;
  }
  renderBoard(size) {
    let id = 1;
    for (let i = 0; i < size; i += 1) {
      const item = document.createElement("div");
      item.classList.add("board-el");
      item.dataset["id"] = id;
      id += 1;
      this._element.appendChild(item);
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  const board = new BoardItem(document.querySelector(".board"));
  board.renderBoard(16);
  const boardEl = document.querySelectorAll(".board-el");
  let previousCell = 1;
  function generateNumber() {
    let cell = Math.floor(Math.random() * (16 - 1) + 1);
    return cell;
  }
  function setGoblin() {
    let cell = generateNumber();
    if (cell === previousCell) {
      cell = generateNumber();
    } else {
      previousCell = cell;
    }
    boardEl.forEach(el => {
      el.classList.remove("active");
      if (el.dataset.id === cell.toString()) {
        el.classList.add("active");
      }
    });
  }
  const interval = setInterval(() => {
    setGoblin();
  }, 1000);
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;