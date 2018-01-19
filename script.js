$(() => {
  $(".counter-container .minus").click(onMinusClick)
  $(".counter-container .plus").click(onPlusClick)
  $(".dice-roll-button").click(rollEm)
})

onMinusClick = e => {
  e.preventDefault()
  let currentValue = parseInt($(e.target).siblings('.counter').html())
  if (currentValue > 0) {
    $(e.target).siblings('.counter').html(currentValue - 1)
  }
}

onPlusClick = e => {
  e.preventDefault()
  let currentValue = parseInt($(e.target).siblings('.counter').html())
  $(e.target).siblings('.counter').html(currentValue + 1)
}

 rollEm = e => {
  e.preventDefault()

  const resultSums = diceCounts().reduce((memo, countObject, index) => {
    const key = Object.keys(countObject)[0]
    let returnMemo = { ...memo }
    for (let i = 0; i++; i <= countObject[key]) {
      select(dice[key]).forEach(result => returnMemo[diceMap[result + 1]]++)
    }
    return returnMemo
   }, resultTemplate)
  
  console.log(resultSums)
}

diceCounts = () => $('.dice-list-item').toArray().map(function(listItem) {
    return [$(listItem).find('.dice-list-description').html(), $(listItem).find('.counter').html()]
  }).get()

select = anArray => anArray[Math.floor(Math.random() * anArray.length)]

const resultTemplate = {
  success: 0,
  advantage: 0,
  triumph: 0,
  failure: 0,
  threat: 0,
  despair: 0
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
