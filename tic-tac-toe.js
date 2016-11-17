// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var turn ="player1"

function topLeft() {
  var gameboard = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  var rect = document.createElementNS(namespace, "rect")
  if(turn=="player1") {
  circle.setAttribute("cx", "50")
  circle.setAttribute("cy", "52")
  circle.setAttribute("r", "35")
  circle.setAttribute("fill", "purple")
  gameboard.appendChild(circle)
  turn="player2"
  } else {
  rect.setAttribute("x", "25")
  rect.setAttribute("y", "25")
  rect.setAttribute("width", "55")
  rect.setAttribute("height", "55")
  rect.setAttribute("fill", "green")
  gameboard.appendChild(rect)
  turn="player1"
  }
}

function topMid() {
  var gameboard = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  var rect = document.createElementNS(namespace, "rect")
  if(turn=="player1") {
  circle.setAttribute("cx", "150")
  circle.setAttribute("cy", "52")
  circle.setAttribute("r", "35")
  circle.setAttribute("fill", "purple")
  gameboard.appendChild(circle)
  turn="player2"
  } else {
  rect.setAttribute("x", "120")
  rect.setAttribute("y", "25")
  rect.setAttribute("width", "55")
  rect.setAttribute("height", "55")
  rect.setAttribute("fill", "green")
  gameboard.appendChild(rect)
  turn="player1"
  }
}

function topRight() {

}

function midLeft() {

}

function midMid() {

}

function midRight() {

}

function botLeft() {

}

function botMid() {

}

function botRight() {

}
