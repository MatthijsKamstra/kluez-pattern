package;

import js.Browser.*;
import js.Browser;
import js.html.*;
import model.constants.App;

/**
 * @author Matthijs Kamstra aka [mck]
 * MIT
 *
 */
class Main {
	var container:js.html.DivElement;
	var canvas:CanvasElement;
	var ctx:CanvasRenderingContext2D;

	public function new() {
		init();
	}

	function init() {
		document.addEventListener("DOMContentLoaded", function(event) {
			console.log('${App.NAME} Dom ready :: build: ${App.getBuildDate()} ');

			initHTML();
			initCanvas();
		});
	}

	function initCanvas() {
		var w = 300;
		var h = 10;

		canvas = cast document.createCanvasElement();
		canvas.width = w;
		canvas.height = h;
		// canvas.setAttribute('style', "display:none");

		ctx = canvas.getContext2d();
		ctx.fillStyle = "#FF0000";
		ctx.fillRect(0, 0, 1, 250);

		container.appendChild(canvas);

		document.body.style.background = "url(" + canvas.toDataURL() + ")";
	}

	function initHTML() {
		container = cast document.getElementById('wrapper');

		var h1 = document.createElement('h1');
		h1.innerText = '${App.NAME}';
		container.appendChild(h1);
	}

	static public function main() {
		var app = new Main();
	}
}
