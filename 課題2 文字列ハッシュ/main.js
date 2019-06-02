'use strict'
// 課題2 文字列ハッシュ

const text = window.prompt('文字列を入力してください。')

// key:単語, value:カウンタのマップ
const map = new Map()

text.split(' ').forEach(function(word) {
  if (map.has(word)) {
    // 存在する場合はカウンタをアップ
    let count = map.get(word)
    map.set(word, ++count)
  } else {
    // 存在しない場合はカウンタ:1で初期設定
    map.set(word, 1)
  }
})

// 出力メッセージの組み立て
let message = ''
map.forEach(function(value, key) {
  message += key + ': ' + value + ', '
})

console.log('入力: "' + text + '"')
console.log('出力: [' + message.slice(0, -2) + ']')
