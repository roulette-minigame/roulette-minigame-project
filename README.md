# 팀 명 : 6학년 2반 컴퓨터실
## 프로젝트명 : Lucky Spin Odyssey

### 1. 주제선정이유
처음에 두들 점프를 만들어보기로 했지만, canvas 태그를 새로 공부해야 됐기 때문에 다른 주제를 선정하였습니다.
그리하여 배웠던 내용을 모두 활용해 볼 수 있는 게임을 만들어 보자는 의견으로 모아지게 되었고 룰렛을 이용한 미니게임 4개를 만들어 클리어 시 이벤트가 진행되는 방식의 게임을 만들어보았습니다.

### 2. 팀원소개
- 경곤 - 숫자클릭게임 , README , 룰렛
- 주성 - 2048게임 , 응모하기페이지 , README ,룰렛
- 요한 - 두더지잡기 , README , 룰렛
- 지효 - 이미지맞추기 , 시작화면 , README, 룰렛

### 3. 프로젝트(개발일정) 테이블
- 4월 4일 - 주제선정
- 4월 5일 ~ 9일 - 개인 게임개발
- 4월 9일 ~ 10일 - 룰렛 개발, 시작화면 개발, 응모하기 개발, 게임과 연동
- 4월 11일 - README , 트러블슈팅 작성
- 4월 12일 - ppt 만들기
- 4월 13일 ~ 14일 - 최종정리
- 4월 15일 - 발표

### 4. 기술스텍 무슨 언어를 사용했나, 깃허브 썻나 등등등
- html, css, javsscript, github

### 5. 트러블 슈팅
#### 경곤
- 게임시작 박스를 지웠는데, 게임 시작 버튼이 살아 있어서, 게임 시작 계속 클릭되는 현상 발생
게임 시작 박스 + 게임 시작 버튼 둘다 display:none; 처리로 해결!
```
  $GameStart.classList.add(`Hidden`);
  $StartContainer.classList.add(`Hidden`);
```
게임 종료 후 Game Clear였는데, GameOver되는 문제
= 코드 확인 결과 타이머 중복 선언
→ 중복된 타이머 제거 후, 코드 보완점으로 ClearFlag 추가하여, 문제 처리 완료!
'게임 시작' 여러 번 클릭 시 블럭 계속 생성
'게임 시작'을 500ms 안에 다시 클릭한 것이면 return 되도록 처리

#### 주성
- 게임 중 키보드를 연타하여 타일을 이동시켰을 때 타일이 이동할 수 없을 때 게임이 끝나야 하는데 브라우저가 과부하가 걸려 새로고침도 안되는 현상이 일어났습니다.
→ 이유를 찾던 중 클릭 이벤트에 똑같은 내용이 중복되면 일어날 수도 있다를 발견 클릭 이벤트를 객체를 사용하여 코드를 간략화 시킴

#### 요한
- 게임이 끝난 후에 엔딩 모달이 떠있는데 AGAIN 버튼을 눌렀을 때 엔딩 모달이 사라지지 않고 게임이 시작되는 문제
→ 게임 시작시 modal의 display:none; 처리로 해결
```
function startMole() {
  hideModal(); // 추가
  $startBtn.removeAttribute('click', startMole);
  $startBtn.style.color = '#3d3f43';
  getMolePoint = 0; 
  moleCatchTurn = 0; 
  setTimeout(showingMole, 1000);
}
```

#### 지효 
- 나누어진 이미지를 각자의 배열로 가져와 하나로 맞추는 것이 어려웠습니다.
→ 각 이미지에 data-id 부여하여 글자 수를 다 같게 설정하여 substring로 문자열을 잘라 확인할 수 있도록 구현해 보았습니다.
```
function imgDataIdSet() {
  const headsrc = headImgId.getAttribute('src').substring(11, 13);
  const facesrc = faceImgId.getAttribute('src').substring(11, 13);
  const bodysrc = bodyImgId.getAttribute('src').substring(11, 13);
  const footsrc = footImgId.getAttribute('src').substring(11, 13);
  const thumbnailssrc = thumbnailsImgId.getAttribute('src').substring(11, 13);
...
  // 이미지 data-id 부여
  if (headsrc === "pr") {
    headImgId.setAttribute('data-id', "pr1");
  } else if (headsrc === "rp") {
    headImgId.setAttribute('data-id', "rp1");
  } else if (headsrc === "ed") {
    headImgId.setAttribute('data-id', "ed1");
  } else {
    headImgId.setAttribute('data-id', "pt1");
  }
...
}
```

### 6. 기능소개
#### (1) 룰렛 기능
1. 개인게임방법 넣기
2. 룰렛 돌아가는로직
3. 게임 스타트 눌렀을 때 게임 들어가는 로직
4. 전체디자인 (html css)

#### (2) 숫자클릭게임 기능
- 🎯 기능
숫자 박스 클릭 시 박스가 제거
시작 화면 숫자 25까지 랜덤으로 생성
26-30은 1~5번 박스 사라질 때 5개 추가 생성 (30까지만 생성)
6번부터 박스 클릭 시 화면에서 박스 안 보이게 처리
게임이 클리어 되면 게임 클리어 화면 팝업
제한 시간 내 게임을 클리어 못하면, 실패 화면을 팝업

- 💫적용 애니메이션
제거될 때 재미를 위해 애니메이션 적용 =>박스가 커졌다가 작아지는 효과
숫자 순서가 틀렸을 때 애니메이션 적용 =>일시적으로 박스 Red로 표시
게임 시작 화면 전환 애니메이션 적용

#### (3) 2048게임 기능
- 키보드 방향키와 wasd 마우스클릭으로 이동가능
|이동방향|상(위)|좌(왼쪽)|하(아래)|우(오른쪽)|
|---|---|---|---|---|
|키보드| W | A | S | D |
|방향키|⬆️|⬅️|⬇️|➡️|
|마우스클릭|⬆️|⬅️|⬇️|➡️|
- 타일끼리 합쳐질때 score에 점수 표시
- 게임이 끝났을때 Best의 최고점수 저장
- 새로고침 했을때 Best에 점수 남기기

#### (4) 두더지잡기 기능
- 9개의 두더지 구멍이 나와야 함
- 게임 시작 버튼이 있어야 함. 게임 시작 버튼을 누를 시 글씨 색 변경
- 게임이 시작되면 1초 후에 두더지가 구멍에서 랜덤하게 나와야 함
- 두더지가 나타난 곳을 클릭할 경우 두더지를 잡은 것으로 처리
- 두더지가 나타난 구멍을 3초 안에 클릭하지 않을 경우 두더지를 잡지 못한 것으로 처리
- 사용자가 두더지를 잡거나 제한 시간(3초)가 초과되었을 경우, 1초의 추가 간격을 두고 랜덤 한 두더지 구멍에서 두더지가 나와야 함
- 다음번에 두더지가 등장하는 구멍은 이전의 구멍과 반드시 다른 구멍이어야 함
- 사용자가 두더지를 잡을 수 있는 기회는 10번으로 제한
- 10번의 기회가 끝난 후 (잡은 두더지 숫자 /10) X 100으로 계산하여 점수를 화면에 표기, 예) 100점
- 점수가 표기된 후, "START" 버튼 대신 "AGAIN" 버튼이 나타나야 함
- "AGAIN" 버튼을 누를 경우, 다시 게임이 시작되어야 함
- "응모하기" 버튼을 클릭 시 응모하기 화면으로 넘어가게 됨
 
#### (5) 이미지 맞추기 기능
- 제시되는 이미지를 보고 4단으로 구성된 이미지를 좌/우로 클릭하여 맞춰야 함
- 정해진 시간 안에 총 3단계의 미션을 수행해야 클리어
- 시작하기 모달에 게임 방법 gif 이미지 제시
- 제한시간 내 게임을 클리어 못하면, 다시하기 버튼 생성
- 좌/우 버튼과 정답 화면에 애니메이션 효과 사용으로 가시성 상향
 
### 7. 향후 업데이트 예정
#### 경곤
- 반응형 화면 구현 - 화면 사이즈 별 대응하기

#### 주성
- 브라우저에 부하를 줄여 키보드 연타에도 버틸 수 있게 만들기
- 디자인 꾸미기
- 타일 이동을 부드럽게 만들기

#### 요한
- 난이도 설정을 통해 동시에 더 많은 숫자의 두더지가 나오게 하고 제한 시간을 짧게 두는 등 세부적인 기능을 업데이트할 예정

#### 지효 
- 슬라이드 좌/우 클릭 시 화면에 제시된 이미지는 연속으로 안 나오게 업데이트 예정

### 8. 피드백
#### 경곤
- 팀으로 첫 게임 프로그램 진행해 봤는데, 생각보다 팀원들 간 회의하며 구성해야 할 것이 많았습니다.
팀 프로젝트를 진행하며 문제가 있을까 싶었지만 별다른 문제는 없었고,
팀원들과 나오는 사소한 문제들은 서로의 의견을 모아 해결해 나가며 프로젝트를 완성해갔습니다.
팀 프로젝트를 진행하면서 배운 것을 활용하여 내용 정리도 할 겸 복습도 하고 게임을 완성해 나가는 재미가 있었습니다.
미니 게임 여러 개를 만들다 보니, 협업점이 많지는 않았지만, 
다음에는 좀 더 협업해서 만들 수 있는 프로젝트를 진행해 보도록 하여 팀으로 하여하는 작업을 좀 더 해보고 싶습니다.

#### 주성
- 프로젝트를 한다고 했을 때 가장 중점에 두었던 부분은 팀원 간에 의사소통이었습니다. 그래서 사소한 문제가 생겼을 때도 팀원들끼리 회의를 많이 해서 원활하게 진행된 것 같습니다.
html CSS JS를 다 사용한 첫 프로젝트였는데 재미있었습니다. 제 게임의 경우 2차원 배열을 사용해 타일 만들어야 했는데 이 부분부터 고생을 좀 하였고, 배우지 않았던 내용들도 사용했기 때문에 공부를 새로 하였습니다. 한편으로는 배운 내용이 위주인 게임을 선택했다면 더 잘 만들 수 있지 않았을까 생각이 듭니다. 다음엔 각자 게임을 만드는 것이 아닌 것 어렵더라도 하나의 게임을 잡고 협업하는 쪽으로 만들어야겠다 느꼈습니다.

#### 요한
- 프로그래밍을 활용한 첫 팀프로젝트였는데 팀원들과 많은 회의를 통해 다양한 의견을 수렴하고 부족한 부분은 서로 도와주며 진행해서 무사히 프로젝트를 마쳤다. 배웠던 내용은 대부분 활용했지만 모듈화 시키는 부분이 좀 미흡하였고, 개인 작업이 상대적으로 많은 부분을 차지했던만큼 다음 프로젝트에서는 조금 더 협업위주로 진행해보고싶다.

#### 지효 
- 이전까지는 html과 css로만으로만 구형했었는데 js까지 사용하여 어려운 부분이 많았지만 팀원의 조언을 통해 자신감을 잃지 않고 과제를 잘 수행할 수 있었습니다.
쉬운 게임이라고 생각했는데 막상 해보니 생각해야 할 부분도 많았고 배웠던 것들을 종합적으로 집약할 수 있는 프로젝트였다고 생각합니다. 
