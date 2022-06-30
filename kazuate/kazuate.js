// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え(デバッグ用): ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
// hantei();
// hantei();
// hantei();
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yoso = 4;       // 第5回課題:テキストボックスの数値をここに代入
    kaisu = kaisu + 1;

    let a = document.querySelector("span#answer");
    let r = document.querySelector("span#result");
    a.textContent = kaisu + '回目の予想：'+yoso;
    if (kaisu >= 4) {
        r.textContent ='答えは'+kotae+'でした.すでにゲームは終わっています';
    } else if(yoso === kotae) {
        r.textContent ='正解です.おめでとう！';
        kaisu = 4;
    } else if(kaisu === 3) {
        r.textContent ='まちがい．残念でした答えは '+kotae+' です．';
    } else if(kotae > yoso) {
        r.textContent ='まちがい．答えはもっと大きいですよ';
    } else if(kotae < yoso) {
        r.textContent ='まちがい．答えはもっと小さいですよ';
    }

}