// Variables

let canvas;
let c;

let content;

let dotArray = [];
let numDots = 6;

let velocityMultipler = 1.5;

let connectionLength = 250;
let sqrConnectionLength = Math.pow(connectionLength, 2);

let colors = [
	"#96858F",
	"#6D7993",
	"#9099A2"
]

let animationID;

// Prototypes

function Dot(size, color, x, y, dx, dy) {
	this.size = size;
	this.color = color;

	this.x = x;
	this.y = y;

	this.dx = dx;
	this.dy = dy;

	this.connections = [];

	this.update = function() {
		this.moveDot();

		this.updateConnections();
		this.drawConnections();

		c.beginPath();
		c.arc(this.x, this.y, this.size, 0, 2*Math.PI);
		c.fillStyle = this.color;
		c.fill();
	}

	this.moveDot = function() {
		this.x += dx;
		this.y += dy;

		// Check if we have hit the walls
		if (this.x + this.size > canvas.width ||
			this.x - this.size < 0) { // We have hit either the left or right wall
			dx *= -1;
		} else if (this.y + this.size > canvas.height ||
					this.y - this.size < 0) { // We have hit either the top or bottom
			dy *= -1;
		}
	}

	this.updateConnections = function() {
		for (var i = 0; i < numDots; i++) {
			let dot = dotArray[i];

			// If we are looking at ourself, just skip
			if (dot === this) { continue; }

			if (this.connections.includes(dot)) { 
				// Make sure the connection is still valid
				if ((Math.pow(dot.x - this.x, 2) + Math.pow(dot.y - this.y, 2)) > sqrConnectionLength) {

					let dotIndex = this.connections.indexOf(dot);

					this.connections.splice(dotIndex, 1);

					dotIndex = dot.connections.indexOf(this);
					dot.connections.splice(dotIndex, 1);
				}

				continue; 
			}

			// See if we should be connecting with this dot
			if ((Math.pow(dot.x - this.x, 2) + Math.pow(dot.y - this.y, 2)) < sqrConnectionLength) {

				this.connections.push(dot);
				dot.connections.push(this);
			}
		}
	}

	this.drawConnections = function() {
		let strokeCache = c.strokeStyle;

		for (var i = 0; i < this.connections.length; i++) {
			let dot = this.connections[i];

			let gradient = c.createLinearGradient(this.x, this.y, dot.x, dot.y);
			gradient.addColorStop(0, this.color);
			gradient.addColorStop(1, dot.color);

			c.strokeStyle = gradient;

			c.beginPath();
			c.moveTo(this.x, this.y);
			c.lineTo(dot.x, dot.y);
			c.stroke();
		}

		c.strokeStyle = strokeCache;
	}
}

// Functions

function initialize() {
	content = document.getElementById("main-content");

	canvas = document.getElementById("background-animation");
	c = canvas.getContext("2d");
	resizeCanvas();
	populateDots();

	// Because of the way routing works, sometime the canvas may not
	// be destroyed. So this just makes sure the animations don't
	// stack up and cause the dots to speed up.
	if (animationID)
		window.cancelAnimationFrame(animationID);

	// Start Animation
	animateCanvas();
}

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	if (canvas.width > 720) {
		numDots = 25;
	}

	if (canvas.width > 1024) {
		numDots = 40;
	}

	if (canvas.width > 1200) {
		numDots = 50;
	}

	populateDots();
}

function populateDots() {
	dotArray = [];

	for (var i = 0; i < numDots; i++) {
		let dotSize = 2 + Math.random();

		let x = Math.random() * (canvas.width - dotSize) + dotSize;
		let y = Math.random() * (canvas.height - dotSize) + dotSize;

		let dx = (Math.random() - 0.5) * velocityMultipler;
		let dy = (Math.random() - 0.5) * velocityMultipler;

		let color = colors[Math.round(Math.random() * (colors.length - 1))];

		let newDot = new Dot(dotSize, color, x, y, dx, dy);
		dotArray.push(newDot);
	}
}

function animateCanvas() {
	c.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < numDots; i++) {
		let dot = dotArray[i];

		dot.update();
	}

		animationID = window.requestAnimationFrame(animateCanvas);
}

// Exports

exports.initialize = initialize;
exports.resize = resizeCanvas;