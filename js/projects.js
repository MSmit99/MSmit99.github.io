(function () {
	window.addEventListener("load", init);

	// Adds click listeners to each project box
	function init() {
		let projectBoxes = document.querySelectorAll(".project-box");
		for (let projectBox of projectBoxes) projectBox.addEventListener("click", openProject);
	}

	/**
	 * When a user clicks on the project box div, it will redirect them to the correct project page (github if no page).
	 * If they click on the github logo, it will only open the github for that project on a separate page.
	 */
	function openProject() {
		let href = "";

		let githubButton = this.querySelector(".github");

		if (githubButton && githubButton.matches(":hover")) {
			// do not open project since github button was clicked
		} else {
			switch (this.id) {
				case "junk_app": {
					return window.open("https://github.com/Etown-Computer-Science-Club/2024-solution-challenge-trashtalk");
				}

				case "cram_review": {
					return window.open("https://github.com/SamH477/Personal-Study-Website");
				}

				case "club_hub": {
					return window.open("https://etown-clubhub.ue.r.appspot.com/");
				}

				case "jay_wing": {
					return window.open("https://jaywing.etowndb.com/");
				}
			}

			window.location = href;
		}
	}
})();