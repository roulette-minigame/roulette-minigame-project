
var rolLength = 6;
var setNum;
var hiddenInput = document.createElement("input");
hiddenInput.className = "hidden-input";

const rRandom = () => {
  var min = Math.ceil(0);
  var max = Math.floor(rolLength - 1);
  return Math.floor(Math.random() * (max - min)) + min;
};

const rRotate = () => {
  var panel = document.querySelector(".rouletter-wacu");
  var btn = document.querySelector(".rouletter-btn");
  var deg = [];
  for (var i = 1, len = rolLength; i <= len; i++) {
    deg.push((360 / len) * i);
  }

  var num = 0;
  document.body.append(hiddenInput);
  setNum = hiddenInput.value = rRandom();

  var ani = setInterval(() => {
    num++;
    panel.style.transform = "rotate(" + 360 * num + "deg)";
    btn.disabled = true; //button,input
    btn.style.pointerEvents = "none"; //a 태그

    if (num === 50) {
      clearInterval(ani);
      panel.style.transform = "rotate(" + deg[setNum] + "deg)";
    }
  }, 50);
};

const rLayerPopup = (num) => {
  switch (num) {
    case 1:
			// 로컬에 있는 HTML 파일 열기
// window.open('http://127.0.0.1:5500/game2048/index2048.html', '_blank');

alert("당첨!! 스타벅스 아메리카노");
window.open('../game2048/index2048.html', '_blank');
      break;
    case 3:
			// window.open('http://127.0.0.1:5500/game2048/index2048.html', '_blank');
			
      alert("당첨!! 햄버거 세트 교환권");
			window.open('../game2048/index2048.html', '_blank');
      break;
    case 5:
			// window.open('http://127.0.0.1:5500/game2048/index2048.html', '_blank');
			
      alert("당첨!! CU 3,000원 상품권");
			window.open('../game2048/index2048.html', '_blank');
      break;
    default:
			// window.open('http://127.0.0.1:5500/game2048/index2048.html', '_blank');
			
      alert("꽝! 다음기회에");
			window.open('../game2048/index2048.html', '_blank');
  }
};

const rReset = (ele) => {
  setTimeout(() => {
    ele.disabled = false;
    ele.style.pointerEvents = "auto";
    rLayerPopup(setNum);
    hiddenInput.remove();
  }, 5500);
};

document.addEventListener("click", function (e) {
  var target = e.target;
  if (target.tagName === "BUTTON") {
    rRotate();
    rReset(target);
  }
});

document.getElementById("app").innerHTML = `
<div class="rouletter">
    <div class="rouletter-bg">
        <div class="rouletter-wacu"></div>
    </div>
    <div class="rouletter-arrow"></div>
    <button class="rouletter-btn">start</button>
</div>
`;
