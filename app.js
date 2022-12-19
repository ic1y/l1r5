const subjects = {
	l1: ["english", "higher mother tongue language"],
	r1: ["humanities", "higher art", "higher music", "malay (special programme)", "chinese (special programme)"],
	r2: ["mathematics", "science"],
	r3: ["humanities", "higher art", "higher music", "malay (special programme)", "chinese (special programme)", "mathematics", "science"],
	r4: null,
	r5: null
}
const subjSec = document.getElementById("subj")
Object.keys(subjects).forEach(subject => {
	const label = document.createElement("label");
	label.innerText = subject.toUpperCase() + " Grade:";
	const input = document.createElement("input");
	input.type = "number";
	input.min = input.value = 1;
	input.max = 9;
	const subjs = document.createElement("p");
	subjs.innerText =
		subject.toUpperCase() +
		" Subjects: " +
		(subjects[subject] == null
			? "Any Relevant Subject"
			: subjects[subject].join(" / ").toUpperCase());
	subjSec.appendChild(label);
	label.appendChild(input);
	subjSec.appendChild(subjs);
})
const bonuses = [
	{req: "Excellent CCA grade", points: 2},
	{req: "Good CCA grade", points: 1},
	{req: "A1 to C6 for English and HMTL grade", points: 2},
	{req: "A1 to C6 for Chinese or Malay (Special Programmes) or Bahasa Indonesia", points: 2},
	{req: "Selection of affiliated JC in 1st choice or as in 1st and 2nd choice", points: 2},
	{req: "Am selected for Chinese / Malay / Tamil Language Elective programmes offered in some JCs", points: 2}
]
const bSection = document.getElementById("opt");
for (let i = 0; i < bonuses.length; i++) {
	const tick = document.createElement("input");
	tick.type = "checkbox";
	tick.dataset.p = bonuses[i].points;
	const label = document.createElement("label");
	label.innerText = `${bonuses[i].req} (${bonuses[i].points} points)`;
	label.prepend(tick);
	bSection.appendChild(label);
	bSection.appendChild(document.createElement("br"));
}
function calculate() {
	let points = 0;
	document.querySelectorAll("input").forEach(inp => {
		switch (inp.type) {
			case "number": 
			if (inp.id != "res") points += Number(inp.value);
			break;
			case "checkbox":
			if (inp.checked) points -= inp.dataset.p;
			break;
		}	
	})
	document.getElementById("res").value = points;
}
document.querySelector("main").addEventListener("change", calculate);
calculate();