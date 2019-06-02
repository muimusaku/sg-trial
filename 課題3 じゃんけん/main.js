'use strict'
// 課題3 じゃんけん

// 出した手の翻訳
function toDisplay(code) {
  if (0 == code) {
    return 'グー'
  } else if (1 == code) {
    return 'チョキ'
  } else if (2 == code) {
    return 'パー'
  }
  return 'Unknown'
}

// 判定（-1:負け 0:あいこ 1:勝ち）（あなたから見て...）
function judge(self, enemy) {
  let result = enemy - self
  // グー, パーの組み合わせの場合、正負を逆にする
  return 1 < Math.abs(result) ? result * -1 : result
}

// じゃんけん勝負
function rockPaperScissors() {
  console.log('「じゃんけん・・・」')
  console.log('> 0.グー 1.チョキ 2.パー')
  let self = window.prompt('0.グー 1.チョキ 2.パー')
  if (!(0 == self || 1 == self || 2 == self)) {
    // 0, 1, 2以外は拒否
    console.log('不正な値が入力されました。 ' + self)
    return false
  }

  let enemy = Math.round(Math.random() * 2)
  console.log('「ぽい！」')
  console.log('*コンピュータ：' + toDisplay(enemy))
  console.log('*あなた  ：' + toDisplay(self))
  let result = judge(self, enemy)
  if (result < 0) {
    console.log('「あなたの負け！」')
    return false
  } else if (result == 0) {
    console.log('「アイコでしょ！」')
    return true
  } else {
    console.log('「あなたの勝ち！」')
    return false
  }
}

let result = true
while (result) {
  // じゃんけん勝負
  result = rockPaperScissors()
}
