let slider = document.getElementById("pricing-slider");
let stats = document.createElement("div");
let views = document.createElement("div");
let price = document.createElement("div");
let dollar = document.createElement("span");
let card = document.getElementById("main-card");

var priceArray = [8, 10, 16, 24, 30];
var viewArray = ["25k", "50k", "100k", "250k", "350k+"];

views.id = "views";
price.id = "price";
dollar.id = "dollar";

stats.className = "stats";

stats.append(views);
price.prepend(dollar);
stats.append(price);
card.prepend(stats);
price.append(" / month");

slider.oninput = function () {
	var value = ((this.value - this.min) / (this.max - this.min)) * 100;
	this.style.background =
		"linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) " +
		value +
		"%, hsl(224, 65%, 95%) " +
		value +
		"%, hsl(224, 65%, 95%) 100%)";
};

function updateTextInput(element) {
	views.textContent = viewArray[element] + " pageviews";
	dollar.textContent = "$" + priceArray[element];
	price.prepend(dollar);
}

updateTextInput(2);
console.log(dollar.nodeName);
