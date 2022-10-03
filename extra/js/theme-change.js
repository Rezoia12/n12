window.addEventListener("DOMContentLoaded", function () {
	const switcher = document.getElementsByClassName("chartva")[0];

	console.log(switcher);

	switcher.onclick = function () {
		document.body.classList.toggle('dark_mode');
	}
});
