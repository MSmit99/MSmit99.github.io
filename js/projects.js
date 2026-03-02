(function () {
	window.addEventListener("load", init);

	function init() {
		let projectBoxes = document.querySelectorAll(".project-box");
		for (let projectBox of projectBoxes) projectBox.addEventListener("click", openProject);
	}

	/**
	 * When a user clicks on the project box div, it will redirect them to the correct project page.
	 * If they click the GitHub logo or Live Demo button, those links handle themselves.
	 */
	function openProject() {
		let githubButton = this.querySelector(".github");
		let liveDemoButton = this.querySelector(".live-demo");

		// Let the anchor tags handle their own clicks
		if (githubButton && githubButton.matches(":hover")) return;
		if (liveDemoButton && liveDemoButton.matches(":hover")) return;

		let href = "";

		switch (this.id) {
			case "cram_review":
				return window.open("https://github.com/SamH477/Personal-Study-Website");

			case "club_hub":
				return window.open("https://etown-clubhub.web.app/");

			case "jay_wing":
				return window.open("https://jaywing.etowndb.com/");
		}

		if (href) window.location = href;
	}
})();