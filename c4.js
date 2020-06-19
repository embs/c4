function occupy(el, playerTurn) {
  var col = el.target.parentElement;
  //console.log(col);
  //debugger
  var freeCell = col.querySelectorAll(".column_cell.free");
  if(freeCell.length == 0) {
    return
  }
  var toBeOccupied = freeCell[freeCell.length-1];
  //console.log(freeCell);
  toBeOccupied.classList.remove('free');
  toBeOccupied.classList.add('occupied');
  var span = document.createElement("span");
  span.classList.add(`circle`);
  span.classList.add(`circle-player${playerTurn}`);
  toBeOccupied.appendChild(span);
}

var playerTurn = '1';

window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.column').forEach(function(column) {
    column.addEventListener('click', function(el) {
      occupy(el, playerTurn);

      if(playerTurn === '1') {
        playerTurn = '2';
      } else {
        playerTurn = '1';
      }
    });
  });
});
