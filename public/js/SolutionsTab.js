const tabBtn = document.querySelectorAll(".tab-button");
const tabCnt = document.querySelectorAll(".tab-content-wrap");
const tabList = document.querySelector(".tab-list");

// 탭 클릭시 클릭 이벤트 호출
tabList.addEventListener("click", function (e) {
	for (let i = 0; i < tabBtn.length; i++) {
		if (e.target == tabBtn[i]) {
			tabClickEvent(e);
		}
	}
});

function tabClickEvent(e) {
	let current = e.target;
	for (let i = 0; i < tabBtn.length; i++) {
		// 모든 탭의 on, show 제거
		tabBtn[i].classList.remove("on");
		tabCnt[i].classList.remove("show");
	}
	// 현재 클릭한 탭에 on 추가
	current.classList.add("on");
	// 현재 클릭한 탭의 data 값을 이용하여 show 추가
	tabCnt[current.dataset.id].classList.add("show");
}
