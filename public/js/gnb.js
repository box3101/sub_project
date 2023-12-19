/*
	1. 각 GNB>LI를 호버했을때 모든 GBN>LI의 Class on을 제거
	2. 호버한 GNB>LI 메뉴의 class on을 추가
  3. 모든 .sub-menu의 마우스 범위를 넘어가면 든 GBN>LI의 Class on을 제거
*/

// 1,2
document.addEventListener("DOMContentLoaded", function () {
	const $$gnb_li = document.querySelectorAll(".gnb>li");

	$$gnb_li.forEach(function (el) {
		el?.addEventListener("mouseenter", function (e) {
			// 모든 li 메뉴의 class on을 제거
			$$gnb_li.forEach(function (el) {
				el.classList.remove("on");
			});
			// 선택한 li 메뉴의 class on을 추가
			if (el.querySelector(".sub-menu")) {
				el.classList.add("on");
			}
		});
	});

	//3 모든 .sub-menu의 마우스 범위를 넘어가면 든 GBN>LI의 Class on을 제거
	const $$sub_menu = document.querySelectorAll(".sub-menu");

	$$sub_menu.forEach(function (el) {
		el.addEventListener("mouseleave", function () {
			$$gnb_li.forEach(function (el) {
				el.classList.remove("on");
			});
		});
	});
});

// 모바일 메뉴
document.addEventListener("DOMContentLoaded", function () {
	const $mobileMenu = document.querySelector(".mobile-menu");
	const $$subMenu = document.querySelectorAll(".submenu");
	const $$subLink = document.querySelectorAll(".submenu-link");

	// 메인 메뉴 토글
	const $main = document.querySelector("#main");
	if(!$main){
		document.querySelector(".menu-toggle").addEventListener("click", function () {
			const $logo = document.querySelector(".logo");
			const $bg = document.querySelector(".header .bg");
	
			$logo.classList.toggle("on");
			if ($logo.classList.contains("on")) {
				// $logo.querySelector("img").setAttribute("src","../img/logo-sub.png");
				$bg.classList.add("on");
			} else {
				// $logo.querySelector("img").setAttribute("src","../img/logo.png");
				$bg.classList.remove("on");
			}
	
			setTimeout(function () {
				document.querySelector(".mobile-menu").classList.toggle("active");
				document.querySelector(".menu-toggle").classList.toggle("active");
			}, 30);
		});
	}

	// 서브메뉴 토글
	$mobileMenu.addEventListener("click", function (e) {
		let target = e.target;

		for (const el of $$subLink) {
			const $subMenu = el.parentElement.querySelector(".submenu");
			if (target == el && $subMenu) {
				e.preventDefault();
				if (!$subMenu.classList.contains("active")) {
					for (const el2 of $$subMenu) el2.classList.remove("active");
					$subMenu.classList.add("active");
					el.closest("li").classList.add("on");
				} else {
					$subMenu.classList.remove("active");
					el.closest("li").classList.remove("on");
				}
			}
		}
	});
});
