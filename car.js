class Car {
	/**
	 * Store the current car location so that we can get the current location
	 */
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;

		this.controls = new Controls();
	}
	draw(crx) {
		ctx.beginPath();
		ctx.rect(
			this.x - this.width / 2,
			this.y - this.height / 2,
			this.width,
			this.height
		);
		ctx.fill();
	}
}
