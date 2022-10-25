(function ($global) { "use strict";
var Main = function() {
	this.init();
};
Main.main = function() {
	var app = new Main();
};
Main.prototype = {
	init: function() {
		var _gthis = this;
		window.document.addEventListener("DOMContentLoaded",function(event) {
			$global.console.log("" + model_constants_App.NAME + " Dom ready :: build: " + "2022-10-25 11:26:35" + " ");
			_gthis.initHTML();
			_gthis.initCanvas();
		});
	}
	,initCanvas: function() {
		var w = 300;
		var h = 10;
		this.canvas = window.document.createElement("canvas");
		this.canvas.width = w;
		this.canvas.height = h;
		this.ctx = this.canvas.getContext("2d",null);
		this.ctx.fillStyle = "#FF0000";
		this.ctx.fillRect(0,0,1,250);
		this.container.appendChild(this.canvas);
		var tmp = "url(" + this.canvas.toDataURL();
		window.document.body.style.background = tmp + ")";
	}
	,initHTML: function() {
		this.container = window.document.getElementById("wrapper");
		var h1 = window.document.createElement("h1");
		h1.innerText = "" + model_constants_App.NAME;
		this.container.appendChild(h1);
	}
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
var model_constants_App = function() { };
model_constants_App.URL = "https://";
model_constants_App.NAME = "[example_javascript]";
Main.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
