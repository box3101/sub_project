AOS.init({
  delay: 0, 
  duration: 1000, // 모든 AOS 애니메이션의 지속 시간을 1초(1000밀리초)로 설정
  // disable: false,
});

//브라우저를 스크롤할 때마다
window.addEventListener("scroll", function () {
  scroll = window.scrollY; // 현재 스크롤 값
  const $header = document.querySelector('.header')

  //스크롤 했을 시 메인 클래스에 on 붙이기
  if (scroll > 100) $header.classList.add("on");
  else $header.classList.remove("on");
});

//링크 이벤트 무시
(function(){
  const $subMenu = document.querySelector('.sub-menu');
  if($subMenu){
    const $$link = document.querySelectorAll('.sub-layout .sub-menu > ul > li > a');
    $$link.forEach(function(el){
      el.addEventListener("click",function(e){
        e.preventDefault();
        // e.stopPropagation();
      })
    })
  }
})();