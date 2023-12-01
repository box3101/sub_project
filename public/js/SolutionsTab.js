const tabBtn = document.querySelectorAll(".tab-button");
const tabCnt = document.querySelectorAll(".tab-content-wrap");
const tabList = document.querySelector(".tab-list");
const tab = document.querySelector(".solu-menu09");

tabList.addEventListener("click", function (e) {
	for (let i = 0; i < tabBtn.length; i++) {
		if (e.target == tabBtn[i]) {
			tabClickEvent(i);
		}
	}
});

function tabClickEvent(event) {
	for (let i = 0; i < tabBtn.length; i++) {
		tabBtn[i].addEventListener("click", function () {
			for (let j = 0; j < tabBtn.length; j++) {
				tabBtn[j].classList.remove("on");
				tabCnt[j].classList.remove("show");
			}

			tabBtn[i].classList.add("on");
			tabCnt[i].classList.add("show");
		});
	}
}
