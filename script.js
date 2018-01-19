$(function() {
  $(".counter-container .minus").click(onMinusClick)
  $(".counter-container .plus").click(onPlusClick)
})


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

const dice = {
  green: [],
  yellow: [[], ["success"], ["success"], ["success", "success"], ["advantage"], ["advantage"], ["success", "advantage"], ["advantage", "advantage"]],
  blue: [[], [], ["success"], ["success", "advantage"], ["advantage", "advantage"], ["advantage"]],
  purple: [],
  red: [],
  black: [[], [], ["failure"], ["failure"], ["setback"], ["setback"]]
}
