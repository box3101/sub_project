
//브라우저를 스크롤할 때마다
window.addEventListener("scroll", function () {
  scroll = window.scrollY; // 현재 스크롤 값
  const $header = document.querySelector('.header')

  //스크롤 했을 시 메인 클래스에 on 붙이기
  if (scroll > 100) $header.classList.add("on");
  else $header.classList.remove("on");
});
