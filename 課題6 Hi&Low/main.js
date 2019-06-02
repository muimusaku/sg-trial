'use strict'
// 課題6 Hi&Low

// 正解
const correct = Math.round(Math.random() * 100)

// パラメータの入力チェックを行う
function checkParameter(value) {
  if (isNaN(value) || Math.sign(value) < 1 || value.indexOf('.') !== -1) {
    // 正の整数でない場合はfalse
    return false
  }
  if (value < 0 || value > 100) {
    // 0-100の中にない場合はfalse
    return false
  }
  return true
}

function process(data) {
  console.log(data.message)
  let answer = window.prompt(data.message)
  if (!checkParameter(answer)) {
    // 0-100の範囲内でない場合は処理中断
    console.log('不正な値が入力されました。 ' + answer)
    data.flag = false
    return data
  }
  answer = parseInt(answer)
  console.log(answer)
  data.count++

  if (correct === answer) {
    console.log('正解！・・・' + data.count + '回目であてました')
    data.flag = false
    return data
  }

  data.message = correct > answer ? 'もっと上' : 'もっと下'
  return data
}

let result = { message: '0-100で数字を当てて', flag: true, count: 0 }
while (result.flag) {
  result = process(result)
}
