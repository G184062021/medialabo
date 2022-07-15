let ba = document.querySelector("span#basyo");
let hk = document.querySelector("span#highkion");
let lk = document.querySelector("span#lowkion");
let si = document.querySelector("span#sitsudo");
let huk = document.querySelector("span#huko");
let hus = document.querySelector("span#husoku");
let img = document.createElement('img');

const bgm =new Audio('全てを創造する者「Dominus_Deus」.mp3');
function saisei(){
  bgm.volume = 0.005;
  bgm.loop = true;
  bgm.play();
}
'use strict';
const pinon = new Audio('決定ボタンを押す12.mp3');
const searchon = new Audio('決定ボタンを押す50.mp3');

/*IMG要素をすべてセレクト*/
document.querySelectorAll("img.pin").forEach((imgElm) => {
  /*[3]要素のクリックイベントにイベントリスナーをひもづける*/
  imgElm.addEventListener('click', touch);
})

function touch(p){
  pinon.play();
  let n = p.target.getAttribute('id');
  if (n==='ka'){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/360630.json";  
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish); 
    // te='晴天';
  }else if (n==='mo'){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/524901.json";  
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish); 
    // te="厚い雲";
  }else if (n==='yo'){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/993800.json";  
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish); 
    // te='雲';
  }else if (n==='pe'){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/1816670.json";  
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish); 
    // te='曇りがち';
  }else if (n==='to'){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/1850147.json";  
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish); 
    // te='曇りがち';
    }else if (n==='sn'){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/1880252.json";  
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish); 
    // te='曇りがち';
  }else if (n==='sd'){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/2147714.json";  
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish); 
    // te='小雨';
  }else if (n==='rn'){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/2643743.json";  
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish); 
    // te='曇りがち';
  }else if (n==='pa'){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/2968815.json";  
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish); 
    // te='霧';
  }else if (n==='ri'){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/3451189.json";  
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish); 
    // te='厚い雲';
  }else if (n==='ny'){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/5128581.json";  
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish); 
    // te='厚い雲';
  }else if (n==='rs'){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/5368361.json";  
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish); 
    // te='雲';
  }else {
  }
}

let b = document.querySelector('button#kensaku');
b.addEventListener('click', search)

function search() {
  searchon.play();
  var a=document.getElementById('search');
  if(a.value ==="1") {
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/360630.json";  
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);  
    // te='晴天';
  }else if(a.value ==="2" ){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/524901.json";
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);
    // te='厚い雲';
  }else if(a.value=== "3"){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/993800.json";
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);
    // te='雲';
  }else if(a.value === "4"){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/1816670.json";
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);  
    // te='曇りがち';
  }else if(a.value === "5"){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/1850147.json";
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);
    // te='曇りがち';
  }else if(a.value === "6"){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/1880252.json";
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);
    // te='曇りがち';
  }else if(a.value === "7"){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/2147714.json";
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);
    // te='小雨';
  }else if(a.value=== "8"){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/2643743.json";
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);
    // te='曇りがち';
  }else if(a.value === "9"){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/2968815.json";
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);
    // te='霧';
  }else if(a.value === "10"){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/3451189.json";
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);
    // te='厚い雲';
  }else if(a.value === "11"){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/5128581.json";
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);
    // te='厚い雲';
  }else if(a.value ==="12"){
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/5368361.json";
    axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);
    // te='雲';
  }else {
    let url =null;
    
  }

}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    let te =data.weather[0].description;
    ba.textContent =data.name;
    hk.textContent =data.main.temp_max+"℃";
    lk.textContent =data.main.temp_min+"℃";
    si.textContent =data.main.humidity+"%";
    huk.textContent =data.wind.deg;
    hus.textContent =data.wind.speed+"m/s";
    let sun = "sun.png";
    let cloud ="cloud.png";
    let rain ="rain.png";
    let kiri ="kiri.png";
    if (te==='晴天'){

      img.setAttribute('src', sun);
      img.setAttribute('width', '300px');
      img.setAttribute('height', 'auto');
      img.setAttribute('margin', 'auto');
      let picture = document.querySelector("div#weather");
      picture.insertAdjacentElement("beforeend", img);
    }else if (te==="厚い雲"||te==="雲"||te==="曇りがち"){

      img.setAttribute('src', cloud);
      img.setAttribute('width', '300px');
      img.setAttribute('height', 'auto');
      img.setAttribute('margin', 'auto');
      let picture = document.querySelector("div#weather");
      picture.insertAdjacentElement("beforeend", img);
    }else if (te==="小雨") {

      img.setAttribute('src', rain);
      img.setAttribute('width', '300px');
      img.setAttribute('height', 'auto');
      img.setAttribute('margin', 'auto');
      let picture = document.querySelector("div#weather");
      picture.insertAdjacentElement("beforeend", img);
    }else if (te==="霧") {
  
      img.setAttribute('src', kiri);
      img.setAttribute('width', '300px');
      img.setAttribute('height', 'auto');
      img.setAttribute('margin', 'auto');
      let picture = document.querySelector("div#weather");
      picture.insertAdjacentElement("beforeend", img);
    }
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
    
}
(function () {
      const modalArea = document.getElementById('modalArea');
      const openModal = document.getElementById('kensaku');
      const openModal1 = document.getElementById('ka');
      const openModal2 = document.getElementById('mo');
      const openModal3 = document.getElementById('yo');
      const openModal4 = document.getElementById('pe');
      const openModal5 = document.getElementById('to');
      const openModal6 = document.getElementById('sn');
      const openModal7 = document.getElementById('sd');
      const openModal8 = document.getElementById('rn');
      const openModal9 = document.getElementById('pa');
      const openModal10 = document.getElementById('ri');
      const openModal11 = document.getElementById('ny');
      const openModal12 = document.getElementById('rs');
      const closeModal = document.getElementById('closeModal');
      const modalBg = document.getElementById('modalBg');
      const toggle = [openModal,openModal1,openModal2,openModal3,openModal4,openModal5,openModal6,openModal7,openModal8,openModal9,openModal10,openModal11,openModal12,closeModal,modalBg];
      
      for(let i=0, len=toggle.length ; i<len ; i++){
        toggle[i].addEventListener('click',function(){
          modalArea.classList.toggle('is-show');
        },false);
      }
    }());


    