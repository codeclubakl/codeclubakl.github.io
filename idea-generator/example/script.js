//Hello! This is the JavaScript.
//You can skip this part for now. Jump ahead down to line 22.

var button = document.getElementById("next-page-button");

var showThisMessage = function (message) {
  var displayArea = document.getElementById("display-area");
  displayArea.innerHTML = message;
};

var makeAndShowConcept = function () {
  var randomConcept = getRandomConcept();
  showThisMessage(randomConcept);
};

var pickRandom = function (list) {
	return list[Math.floor(Math.random()*list.length)];
};

button.addEventListener('click', makeAndShowConcept);

// Hello again! This is the part we are working on.

var getRandomConcept = function () {
	var people = [];
	people.push("time traveller");
	people.push("school teacher");

	var jobs = [];
	jobs.push("runs a hotel");
	jobs.push("solves mysteries");

	var space = " ";

	var myConcept = "A " + pickRandom(people) + " who " + pickRandom(jobs);
	return myConcept;
};