'use strict'
// 課題1 FizzBuzz

// FizzBuzz計算
function calcFizzBuzz(number) {
  let result = ''
  if (number % 3 === 0) {
    result = 'Fizz'
  }
  if (number % 5 === 0) {
    result += 'Buzz'
  }
  if (result === '') {
    result = number
  }
  return result
}

const text = window.prompt('正の整数を入力してください。')
if (isNaN(text) || Math.sign(text) < 1 || text.indexOf('.') !== -1) {
  // 正の整数でない場合は処理中断
  console.log('不正な値が入力されました。 ' + text)
} else {
  let message = ''
  for (let i = 1; i <= text; i++) {
    message += calcFizzBuzz(i) + ', '
  }
  console.log(message.slice(0, -2))
}
