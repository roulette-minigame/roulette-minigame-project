const thumbnailsImages = [
  'css/images/pr.jpg',
  'css/images/rp.jpg',
  'css/images/ed.jpg',
  'css/images/pt.jpg',
]
const headImages = [
  'css/images/pr1.jpg',
  'css/images/rp1.jpg',
  'css/images/ed1.jpg',
  'css/images/pt1.jpg'
  ];
const faceImages = [
  'css/images/pr2.jpg',
  'css/images/rp2.jpg',
  'css/images/ed2.jpg',
  'css/images/pt2.jpg'
];
const bodyImages = [
  'css/images/pr3.jpg',
  'css/images/rp3.jpg',
  'css/images/ed3.jpg',
  'css/images/pt3.jpg'
];
const footImages = [
  'css/images/pr4.jpg',
  'css/images/rp4.jpg',
  'css/images/ed4.jpg',
  'css/images/pt4.jpg'
];

const $modal = document.querySelector('.intro');
const $overlay = document.querySelector('.overlay');
const $winner = document.querySelector('.winner');

// 이전, 다음 버튼 클릭 이벤트
const [$prev1,$img1,$next1] = [...document.getElementById('slide1').children];
const [$prev2,$img2,$next2] = [...document.getElementById('slide2').children];
const [$prev3,$img3,$next3] = [...document.getElementById('slide3').children];
const [$prev4,$img4,$next4] = [...document.getElementById('slide4').children];

// 각 슬라이드에 랜덤 이미지 출력
displayRandomImage(headImages, $img1);
displayRandomImage(faceImages, $img2);
displayRandomImage(bodyImages, $img3);
displayRandomImage(footImages, $img4);
displayRandomThumbnails(thumbnailsImages);

function imgDataIdSet () {
  const headImgId = document.getElementById("img1");
  const faceImgId = document.getElementById("img2");
  const bodyImgId = document.getElementById("img3");
  const footImgId = document.getElementById("img4");
  
  const headsrc = headImgId.getAttribute('src').substring(11,13);
  const facesrc = faceImgId.getAttribute('src').substring(11,13);
  const bodysrc = bodyImgId.getAttribute('src').substring(11,13);
  const footsrc = footImgId.getAttribute('src').substring(11,13);
  
  // 이미지 data-id 부여
  if(headsrc === "pr"){
    headImgId.setAttribute('data-id',"pr1");
  } else if (headsrc === "rp") {
    headImgId.setAttribute('data-id',"rp1");
  } else if (headsrc === "ed") {
    headImgId.setAttribute('data-id',"ed1");
  } else {
    headImgId.setAttribute('data-id',"pt1");
  }
  
  if(facesrc === "pr"){
    faceImgId.setAttribute('data-id',"pr2");
  } else if (facesrc === "rp") {
    faceImgId.setAttribute('data-id',"rp2");
  } else if (facesrc === "ed") {
    faceImgId.setAttribute('data-id',"ed2");
  } else {
    faceImgId.setAttribute('data-id',"pt2");
  }
  
  if(bodysrc === "pr"){
    bodyImgId.setAttribute('data-id',"pr3");
  } else if (bodysrc === "rp") {
    bodyImgId.setAttribute('data-id',"rp3");
  } else if (bodysrc === "ed") {
    bodyImgId.setAttribute('data-id',"ed3");
  } else {
    bodyImgId.setAttribute('data-id',"pt3");
  }
  
  if(footsrc === "pr"){
    footImgId.setAttribute('data-id',"pr4");
  } else if (footsrc === "rp") {
    footImgId.setAttribute('data-id',"rp4");
  } else if (footsrc === "ed") {
    footImgId.setAttribute('data-id',"ed4");
  } else {
    footImgId.setAttribute('data-id',"pt4");
  }
  

  const headImgDataId = headImgId.getAttribute('data-id').substring(0,2);
  const faceImgDataId = faceImgId.getAttribute('data-id').substring(0,2);
  const bodyImgDataId = bodyImgId.getAttribute('data-id').substring(0,2);
  const footImgDataId = footImgId.getAttribute('data-id').substring(0,2);
  
  if(headImgDataId === faceImgDataId && headImgDataId === bodyImgDataId && headImgDataId === footImgDataId) {
    setTimeout(() => {
      alert('정답입니다.');
    }, 150);
  }
}
    
let currentIndex = 0; // 현재 이미지 위치

$next1.addEventListener('click', () => {
  // 현재 내가 보고 있는 이미지가 배열의 0번 인덱스라면
  // 다음버튼을 누르면 1번을 보여줘야한다.
  currentIndex++;
  if (currentIndex >= headImages.length) currentIndex = 0;
  $img1.setAttribute('src', headImages[currentIndex]);

  imgDataIdSet();
});

$prev1.addEventListener('click', () => {
  // 현재 내가 보고 있는 이미지가 배열의 0번 인덱스라면
  // 다음버튼을 누르면 1번을 보여줘야한다.
  currentIndex--;
  if (currentIndex < 0) currentIndex = headImages.length -1;
  $img1.setAttribute('src', headImages[currentIndex]);

  imgDataIdSet();
});

$next2.addEventListener('click', () => {
  // 현재 내가 보고 있는 이미지가 배열의 0번 인덱스라면
  // 다음버튼을 누르면 1번을 보여줘야한다.
  currentIndex++;
  if (currentIndex >= faceImages.length) currentIndex = 0;
  $img2.setAttribute('src', faceImages[currentIndex]);

  imgDataIdSet();
});

$prev2.addEventListener('click', () => {
  // 현재 내가 보고 있는 이미지가 배열의 0번 인덱스라면
  // 다음버튼을 누르면 1번을 보여줘야한다.
  currentIndex--;
  if (currentIndex < 0) currentIndex = faceImages.length -1;
  $img2.setAttribute('src', faceImages[currentIndex]);

  imgDataIdSet();
});

$next3.addEventListener('click', () => {
  // 현재 내가 보고 있는 이미지가 배열의 0번 인덱스라면
  // 다음버튼을 누르면 1번을 보여줘야한다.
  currentIndex++;
  if (currentIndex >= bodyImages.length) currentIndex = 0;
  $img3.setAttribute('src', bodyImages[currentIndex]);

  imgDataIdSet();
});

$prev3.addEventListener('click', () => {
  // 현재 내가 보고 있는 이미지가 배열의 0번 인덱스라면
  // 다음버튼을 누르면 1번을 보여줘야한다.
  currentIndex--;
  if (currentIndex < 0) currentIndex = bodyImages.length -1;
  $img3.setAttribute('src', bodyImages[currentIndex]);

  imgDataIdSet();
});

$next4.addEventListener('click', () => {
  // 현재 내가 보고 있는 이미지가 배열의 0번 인덱스라면
  // 다음버튼을 누르면 1번을 보여줘야한다.
  currentIndex++;
  if (currentIndex >= footImages.length) currentIndex = 0;
  $img4.setAttribute('src', footImages[currentIndex]);

  imgDataIdSet();
});

$prev4.addEventListener('click', () => {
  // 현재 내가 보고 있는 이미지가 배열의 0번 인덱스라면
  // 다음버튼을 누르면 1번을 보여줘야한다.
  currentIndex--;
  if (currentIndex < 0) currentIndex = footImages.length -1;
  $img4.setAttribute('src', footImages[currentIndex]);

  imgDataIdSet();
});


// 이미지 랜덤으로 출력하는 함수
function displayRandomImage(imageArray, $imgElement) {
  // 이미지 배열의 길이를 기반으로 랜덤한 인덱스를 생성합니다.
  const randomIndex = Math.floor(Math.random() * imageArray.length);
  // 선택된 랜덤 이미지를 이미지 요소의 src 속성에 설정하여 화면에 표시합니다.
  $imgElement.setAttribute('src', imageArray[randomIndex]);
}


// 썸네일 랜덤 이미지
function displayRandomThumbnails(imageArray) {
  console.log(imageArray);
  // 이미지 배열의 길이를 기반으로 랜덤한 인덱스를 생성합니다.
  const randomIndex = Math.floor(Math.random() * imageArray.length);
  // 선택된 랜덤 이미지를 이미지 요소의 src 속성에 설정하여 화면에 표시합니다.
  console.log(imageArray[randomIndex]);
  document.getElementById('thumbnails1').setAttribute('src', imageArray[randomIndex]);

}


// 시작하기 클릭 이벤트
const startButton = document.querySelector('.start');
 
const buttonClickHandler = () =>{
  // startButton.style.display = 'none';
  $modal.style.display = 'none';
  $overlay.style.display = 'none';

// 제한시간
setTimeout(function(){
  let totalTime = 30000; // 30초를 밀리초로 변환
  $Timer = document.querySelector(`.timer`);
  const timer = setInterval(() => {
     let seconds = Math.floor(totalTime / 1000);

     $Timer.textContent = `${seconds}초`;
     
     totalTime -= 10; // 10밀리초 감소
     if (totalTime < 0) {
        clearInterval(timer); // 타이머 종료
        // $overlay.style.display = 'block';
        // $winner.style.display = 'block';
     }
  }, 10);
});
};
 
startButton.addEventListener('click',buttonClickHandler);
//button.removeEventListener('click', buttonClickHandler);
