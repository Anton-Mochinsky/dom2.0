import "./board-item.css";

export class BoardItem {
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
