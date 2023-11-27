document.addEventListener("DOMContentLoaded", function () {
	const $subMenu = document.querySelector(".sub-layout .sub-menu");
	const $$subMenu_li = document.querySelectorAll(".sub-menu>ul>li");
	const $subMenu_li_first = document.querySelector(".sub-menu>ul>li");

	if ($subMenu) {
		// 첫번째 메뉴만 클래스 on
		$subMenu_li_first.classList.add("on");
		if($subMenu_li_first.querySelector("ul li")){
			$subMenu_li_first.querySelector("ul li").classList.add("on");
		}

		$$subMenu_li.forEach(function (li) {
			공통네비(li, $$subMenu_li);
		});
	}

	function 공통네비(li, a) {
		li.querySelector("a").addEventListener("click", function (e) {
			e.preventDefault();

			let target = e.target;

      // 3dapth 메뉴 클릭 시 4dapth 첫번째만 활성화
      if(target.nextElementSibling) target.nextElementSibling.querySelector("li").classList.add("on");

			// 3dapth 메뉴 클릭 시 부모 요소 li가 on을 가지고 있으면 on을 지움
			if (target.nextElementSibling && target.nextElementSibling.closest("li").classList.contains("on")) {
				target.nextElementSibling.closest("li").classList.remove("on");
			} else {
				// 모든 li 클래스 on 제거
				for (const el of a) el.classList.remove("on");
				// 선택한 a 클래스의 부모 li만 on 추가
				target.closest("li").classList.add("on");
			}
		});
	}
});
