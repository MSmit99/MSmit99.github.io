(function () {
	window.addEventListener("load", initGlobal);

	function initGlobal() {
		$("#navbar").load('../common/navbar.html');
		$("#header").load('../common/header.html');
		$("#footer").load('../common/footer.html');
	}
})();