const modeLabel = document.getElementById("modeLabel");

const updateModeLabel = () => {
	const width = window.innerWidth;

	if (width <= 480) {
		modeLabel.textContent = "Smartphone";
		return;
	}

	if (width <= 1000) {
		modeLabel.textContent = "Tablette";
		return;
	}

	modeLabel.textContent = "PC (Desktop)";
};

updateModeLabel();
window.addEventListener("resize", updateModeLabel);
