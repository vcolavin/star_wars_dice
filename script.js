$(function() {
  $(".counter-container .minus").click(onMinusClick)
  $(".counter-container .plus").click(onPlusClick)
})


function onMinusClick(e) {
  e.preventDefault()
  let currentValue = parseInt($(e.target).siblings('.counter').val())
  if (currentValue > 1) {
    $(e.target).siblings('.counter').val(currentValue - 1)
  }
}

function onPlusClick(e) {
  e.preventDefault()
  let currentValue = parseInt($(e.target).siblings('.counter').val())
  $(e.target).siblings('.counter').val(currentValue + 1)
}
