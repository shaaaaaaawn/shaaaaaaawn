class LoadingBar {
	constructor(options) {
		this.domElement = document.createElement("div");
		this.domElement.style.position = 'fixed';
		this.domElement.style.top = '0';
		this.domElement.style.left = '0';
		this.domElement.style.width = '100%';
		this.domElement.style.height = '100%';
		this.domElement.style.background = 'rgba(0, 0, 0, 0.85)';
		this.domElement.style.display = 'flex';
		this.domElement.style.flexDirection = 'column';
		this.domElement.style.alignItems = 'center';
		this.domElement.style.justifyContent = 'center';
		this.domElement.style.zIndex = '1111';
		this.domElement.style.fontFamily = 'sans-serif';

		// Loading message
		const message = document.createElement("div");
		message.innerText = "Loading VR Architectural Walkthrough...";
		message.style.color = '#fff';
		message.style.marginBottom = '20px';
		message.style.fontSize = '1.2em';
		message.style.textShadow = '0 0 10px #0ff';
		this.domElement.appendChild(message);

		// Bar background
		const barBase = document.createElement("div");
		barBase.style.background = '#444';
		barBase.style.width = '50%';
		barBase.style.minWidth = '250px';
		barBase.style.borderRadius = '12px';
		barBase.style.height = '20px';
		barBase.style.boxShadow = '0 0 10px #000';
		this.domElement.appendChild(barBase);

		// Actual progress bar
		const bar = document.createElement("div");
		bar.style.background = 'linear-gradient(90deg, #0ff, #09f, #0ff)';
		bar.style.width = '0';
		bar.style.height = '100%';
		bar.style.borderRadius = '12px';
		bar.style.transition = 'width 0.3s ease-in-out';
		bar.style.boxShadow = '0 0 8px #0ff';
		barBase.appendChild(bar);
		this.progressBar = bar;

		// Percentage text
		const percentageText = document.createElement("div");
		percentageText.style.color = '#0ff';
		percentageText.style.marginTop = '10px';
		percentageText.style.fontSize = '1em';
		percentageText.style.textShadow = '0 0 5px #0ff';
		this.domElement.appendChild(percentageText);
		this.percentageText = percentageText;

		document.body.appendChild(this.domElement);
	}

	set progress(delta) {
		const percent = Math.floor(delta * 100);
		this.progressBar.style.width = `${percent}%`;
		this.percentageText.innerText = `${percent}%`;
	}

	set visible(value) {
		this.domElement.style.display = value ? 'flex' : 'none';
	}
}

export { LoadingBar };
