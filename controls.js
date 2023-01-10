class Controls {
	constructor(type) {
		this.forward = false;
		this.left = false;
		this.right = false;
		this.reverse = false;
		/**
		 * We have included <b>#</b> because it's a private class
		 */
		switch (type) {
			case 'KEYS':
				this.#addKeyboardListeners();
				break;
			case 'DUMMY':
				this.forward = true;
				break;
		}
	}
	#addKeyboardListeners() {
		/**
		 * We are using arrow function here because in this type of function deleraction -
		 * The keyword this means that class this
		 * If we wrote the function (event) {this} Here this will be for function
		 * Therefore we want to access this of the class
		 * There is a way to use regular function and get this.<var> true
		 * That is to use .bind(this) at the end of class. This will look something like this
		 * document.onkeydown = function(event){}.bind(this);
		 */
		document.onkeydown = event => {
			switch (event.key) {
				case 'ArrowLeft':
					this.left = true;
					break;
				case 'ArrowRight':
					this.right = true;
					break;
				case 'ArrowUp':
					this.forward = true;
					break;
				case 'ArrowDown':
					this.reverse = true;
					break;
			}
		};
		document.onkeyup = event => {
			switch (event.key) {
				case 'ArrowLeft':
					this.left = false;
					break;
				case 'ArrowRight':
					this.right = false;
					break;
				case 'ArrowUp':
					this.forward = false;
					break;
				case 'ArrowDown':
					this.reverse = false;
					break;
			}
		};
	}
}
