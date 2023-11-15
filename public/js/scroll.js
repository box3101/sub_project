(function () {
	const main = document.querySelector(".main");
	if (main) {
		document.addEventListener("DOMContentLoaded", function () {
			/*
		1. 각 박스들의 세로 위치값을 배열로 저장하는 기능 (문서로딩 이벤트)
		2. 해당스크롤 위치에 갔을때 버튼을 활성화 시키는 기능 (스크롤 이벤트)
		3. 버튼 클릭시 해당위치로 자동 스크롤되는 기능 (클릭 이벤트)
		*/

			//문서가 로딩됐을때
			dom초기화(); //dom요소와 옵션값 초기화
			각박스의세로위치값(); //배열에 박스위치 저장

			let scroll = window.scrollY; // 현재 스크롤 값


			activateBtn(scroll); //스크롤 버튼 활성화 함수 호출

			//브라우저를 스크롤할 때마다
			window.addEventListener("scroll", function () {
			  scroll = window.scrollY; // 현재 스크롤 값
				activateBtn(scroll); //스크롤 버튼 활성화 함수 호출
			});

			//네비 버튼 클릭시
			$$navi_li.forEach(function (el, idx) {
				el.addEventListener("click", function () {
					var i = idx; // li의 위치값 찾기.
					moveScroll(i);
				});
			});
		});

		//dom요소가 담길 메모리만 미리 할당
		var posArr,
			len,
			$$navi_li,
			$$wrap_div,
			$wrap_div_last,
			class_name,
			scrollHeight,
			clientHeight,
			maxScrollTop;

		function dom초기화() {
			$$navi_li = document.querySelectorAll("#navi li");
			$$wrap_div = document.querySelectorAll("#wrap>section");
			$wrap_div_last = $$wrap_div[$$wrap_div.length - 1];
			class_name = "on";
		}

		//각 박스의 세로 위치값을 배열에 저장하는 함수정의
		function 각박스의세로위치값() {
			posArr = [];
			len = $$navi_li.length;

			for (var i = 0; i < len; i++) {
				var insertCode = $$wrap_div[i].offsetTop; // box 상단 위치값을 저장
				posArr.push(insertCode); // box 상단 위치값을 배열로 저장
			}

			posArr.push($wrap_div_last.offsetTop + $wrap_div_last.clientHeight); // body 맨끝 부분의 값을 저장
		}

		//스크롤 위치값을 인수로 받아서 버튼 활성화 시키는 함수 정의
		function activateBtn(k) {
			$$navi_li.forEach(function (el) {
				el.classList.remove(class_name);
			});
			for (var i = 0; i < len; i++) {
				if (k >= posArr[i] && k < posArr[i + 1]) {
					$$navi_li[i].classList.add(class_name);
				}
			}

			//스크롤 위치값이 맨밑으로 갔을때 실행되는 로직
			scrollHeight = document.documentElement.scrollHeight; // 문서의 전체 높이
			clientHeight = document.documentElement.clientHeight; // 브라우저 창의 높이
			maxScrollTop = scrollHeight - clientHeight; // 맨밑 값.

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
