(function () {
	window.addEventListener("load", init);

	function init() {
		let projectBoxes = document.querySelectorAll(".project-box");
		for (let projectBox of projectBoxes) {
			projectBox.addEventListener("click", openProject);

			// Stop anchor clicks from bubbling up to the card listener
			let anchors = projectBox.querySelectorAll("a");
			for (let a of anchors) {
				a.addEventListener("click", function (e) {
					e.stopPropagation();
				});
			}
		}
	}

	/**
	 * When a user clicks the project card (not an anchor inside it),
	 * navigate to the best available link:
	 *   1. Live demo (if present)
	 *   2. GitHub / repo link (fallback)
	 * Coming-soon cards are skipped entirely.
	 */
	function openProject(e) {
		// If the click originated from inside an anchor, do nothing — let the anchor handle it
		if (e.target.closest("a")) return;

		// Skip coming-soon cards — they have no destination yet
		if (this.classList.contains("coming-soon")) return;

		let liveDemo = this.querySelector(".live-demo");
		let github   = this.querySelector(".github");

		let destination = (liveDemo && liveDemo.href) || (github && github.href) || null;

		if (destination) window.open(destination, "_blank", "noopener");
	}
})();