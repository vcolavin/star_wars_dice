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
  green: [[], ["success"], ["success"], ["success", "success"], ["advantage"], ["advantage"], ["success", "advantage"], ["advantage", "advantage"]],
  yellow: [[], ["success"], ["success"], ["success", "success"], ["success", "success"], ["advantage"], ["advantage", "success"], ["advantage", "success"], ["advantage", "success"], ["advantage", "advantage"], ["advantage", "advantage"], ["triumph"]],
  blue: [[], [], ["success"], ["success", "advantage"], ["advantage", "advantage"], ["advantage"]],
  purple: [[], ["failure"], ["failure", "failure"], ["disadvantage"], ["disadvantage"], ["disadvantage"], ["disadvantage", "disadvantage"], ["failure", "disadvantage"]],
  red: [],
  black: [[], [], ["failure"], ["failure"], ["setback"], ["setback"]]
}
