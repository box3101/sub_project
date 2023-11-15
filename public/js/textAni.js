// .sub-banner 클래스를 가진 요소를 찾습니다.
const subBannerElement = document.querySelector('.sub-banner');

// 해당 요소가 존재하는 경우, 스크립트를 실행합니다.
if (subBannerElement) {

  const boxs = document.querySelectorAll('article');

  //box를 반복
  boxs.forEach((box,idx)=>{

    setTimeout(function(){
      box.classList.add("on");
    },10)

    const h1 = box.querySelector('h1');
    const txt = h1.innerText;

    let tags = '';

    // 각 ariticle 안쪽의 h1 문자를 다시 반복돌면서 span으로 감싸는 문자열 생성
    for(const el of txt){
      tags += `<span>${el}</span>`
    }

    // 생성된 태그구성 문자열을 h1 요소에 삽입
    h1.innerHTML = tags;

    // h1안쪽의 span요소의 갯수만큼 반복을 돌면서 transitionDelay값 설정
    const $$span = h1.querySelectorAll('span');

    $$span.forEach(function(el,idx){
      el.style.transitionDelay = 0.05 * idx + 's';
    });

  });


}