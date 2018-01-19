$(function() {
  $(".counter-container .minus").click(onMinusClick)
  $(".counter-container .plus").click(onPlusClick)
  $(".dice-roll-button").click(rollEm)
})

function rollEm(e) {
  e.preventDefault()
  // getSums()
}

function onMinusClick(e) {
  e.preventDefault()
  let currentValue = parseInt($(e.target).siblings('.counter').html())
  if (currentValue > 0) {
    $(e.target).siblings('.counter').html(currentValue - 1)
  }
}

function onPlusClick(e) {
  e.preventDefault()
  let currentValue = parseInt($(e.target).siblings('.counter').html())
  $(e.target).siblings('.counter').html(currentValue + 1)
}

function select(anArray) {
  return anArray[Math.floor(Math.random()*anArray.length)]
}

const diceMap = {
  1: "success",
  2: "advantage",
  3: "triumph",
  4: "failure",
  5: "threat",
  6: "despair"
}

const dice = {
  green: [[], [1], [1], [1, 1], [2], [2], [1, 2], [2, 2]],
  yellow: [[], [1], [1], [1, 1], [1, 1], [2], [2, 1], [2, 1], [2, 1], [2, 2], [2, 2], [3]],
  blue: [[], [], [1], [1, 2], [2, 2], [2]],
  purple: [[], [4], [4, 4], [5], [5], [5], [5, 5], [4, 5]],
  red: [[], [4], [4], [4, 4], [4, 4], [5], [5], [4, 5], [4, 5], [5, 5], [5, 5], [6]],
  black: [[], [], [4], [4], [5], [5]]
}
