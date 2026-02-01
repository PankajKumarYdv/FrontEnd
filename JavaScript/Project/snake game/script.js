const board = document.querySelector(".board");
const blockHeight = 30;
const blockWidth = 30;

// Measuring client Device width or Height
const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

// Appending blocks in board;
for (let i = 0; i < rows * cols; i++) {
  const block = document.createElement("div");
  block.classList.add("block");
  board.addendChild(block);
}
