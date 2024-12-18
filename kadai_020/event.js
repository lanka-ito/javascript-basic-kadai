// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
 // テキストの書き換え
  text.textContent = "ボタンをクリックしました";
  // ↓エラーチェック時に使用した
  // console.log("ボタンをクリックしました");
});