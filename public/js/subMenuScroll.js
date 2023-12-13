(function () {
	const subMenu = document.querySelector(".subMenu");
	if (subMenu) {
		window.onload = function () {
			dom초기화();
			각박스의세로위치값();

			window.addEventListener("scroll", function () {
				let scroll = window.scrollY;
				activateBtn(scroll);
			});

			// level2 메뉴가 있을 경우
			if ($subMenu) 돔시작서브메뉴조건($$level2_li);
			// level2 메뉴가 없을 경우
			else 돔시작서브메뉴조건($$subMenu_li);
		};

		let posArr, len;

		function dom초기화() {
			$subMenu = document.querySelector(".level2-menu");
			$$subMenu_li = document.querySelectorAll(".sub-menu>ul>li");
			$$level2_li = document.querySelectorAll(".level2-menu li");
			$$wrap_div = document.querySelectorAll("#wrap2>section");
			$wrap_div_last = $$wrap_div[$$wrap_div.length - 1];
			class_name = "on";
		}

		function 각박스의세로위치값() {
			// 서브메뉴가 있을경우
			if ($subMenu) {
				posArr = [];
				len = $$level2_li.length;

				for (let i = 0; i < len; i++) {
					let insertCode = $$wrap_div[i].offsetTop + 265;
					posArr.push(insertCode);
				}

				posArr.push($wrap_div_last.offsetTop + $wrap_div_last.clientHeight);
			}
			// 서브메뉴가 없을경우
			else {
				posArr = [];
				len = $$subMenu_li.length;

				for (let i = 0; i < len; i++) {
					let insertCode = $$wrap_div[i].offsetTop + 265;
					posArr.push(insertCode);
				}

				posArr.push($wrap_div_last.offsetTop + $wrap_div_last.clientHeight);
			}
		}

		function activateBtn(k) {
			// 서브메뉴가 있을경우
			if ($subMenu) {
				$$level2_li.forEach(function (el) {
					el.classList.remove(class_name);
				});
				for (let i = 0; i < len; i++) {
					if (k >= posArr[i] && k < posArr[i + 1]) {
						$$level2_li[i].classList.add(class_name);

						// 모든 서브메뉴
						for (el of $$subMenu_li) el.classList.remove(class_name);

						// // 현재 범위만
						$$level2_li[i]
							.closest("ul")
							.closest("li")
							.classList.add(class_name);
					}
				}
			}
			// 서브메뉴가 없을경우
			else {
				$$subMenu_li.forEach(function (el) {
					for (let i = 0; i < len; i++) {
						if (k >= posArr[i] && k < posArr[i + 1]) {
							for (const el of $$subMenu_li) el.classList.remove(class_name);
							$$subMenu_li[i].classList.add(class_name);
						}
					}
				});
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

	function 돔시작서브메뉴조건(li) {
		li.forEach(function (el, idx) {
			el.addEventListener("click", function (e) {
				e.preventDefault();

				var i = idx; // li의 위치값 찾기.
				moveScroll(i);
			});
		});
	}
})();
