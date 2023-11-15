(function () {
	const subMenu = document.querySelector(".subMenu");
	if (subMenu) {
		document.addEventListener("DOMContentLoaded", function () {
			dom초기화();
			각박스의세로위치값();

			let scroll = window.scrollY;
			activateBtn(scroll);

			window.addEventListener("scroll", function () {
				let scroll = window.scrollY;
				activateBtn(scroll);
			});

			$$level2_li.forEach(function (el, idx) {
				el.addEventListener("click", function (e) {
					e.preventDefault();

					var i = idx; // li의 위치값 찾기.
					moveScroll(i);
				});
			});
		});

		let posArr, len;

		function dom초기화() {
			$$subMenu_li = document.querySelectorAll(".sub-menu>ul>li");
			$$level2_li = document.querySelectorAll(".level2-menu li");
			$$wrap_div = document.querySelectorAll("#wrap2>section");
			$wrap_div_last = $$wrap_div[$$wrap_div.length - 1];
			class_name = "on";
		}

		function 각박스의세로위치값() {
			posArr = [];
			len = $$level2_li.length;

			for (var i = 0; i < len; i++) {
				var insertCode = $$wrap_div[i].offsetTop + 210;
				posArr.push(insertCode);
			}

			posArr.push($wrap_div_last.offsetTop + $wrap_div_last.clientHeight);
		}

		function activateBtn(k) {
			$$level2_li.forEach(function (el) {
				el.classList.remove(class_name);
			});
			for (let i = 0; i < len; i++) {
				if (k >= posArr[i] && k < posArr[i + 1]) {
					$$level2_li[i].classList.add(class_name);

					// 모든 서브메뉴
					for (el of $$subMenu_li) el.classList.remove(class_name);

					// // 현재 범위만
					$$level2_li[i].closest("ul").closest("li").classList.add(class_name);
				}
			}

			//스크롤 위치값이 맨밑으로 갔을때 실행되는 로직
			let scrollHeight = document.documentElement.scrollHeight; // 문서의 전체 높이
			let clientHeight = document.documentElement.clientHeight; // 브라우저 창의 높이
			let maxScrollTop = scrollHeight - clientHeight; // 맨밑 값.

			if (k >= maxScrollTop) {
				console.log("스크롤 마지막!");
			}
		}

		//인수로 순서값을 이용해 해당 순서의 박스의 세로 위치로 자동 스크롤하는 함수
		function moveScroll(i) {
			window.scrollTo({
				top: posArr[i],
				behavior: "smooth",
			});
		}
	}
})();
