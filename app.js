function titleCase(str) {
	var splitStr = str.toLowerCase().split(' ');
	for (var i = 0; i < splitStr.length; i++) {
			splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
	}
	return splitStr.join(' '); 
}
const subjects = {
	l1: {
		subj: ["english", "higher mother tongue language"]
	},
	r1: {
		subj: ["humanities", "higher art", "higher music", "malay (special programme)", "chinese (special programme)"]
	},
	r2: {
		subj: ["mathematics", "science"]
	},
	r3: {
		subj: ["humanities", "higher art", "higher music", "malay (special programme)", "chinese (special programme)", "mathematics", "science"]
	},
	r4: {
		subj: null,
	},
	r5: {
		subj: null,
	}
}
const subjSec = document.getElementById("subj")
Object.keys(subjects).forEach(subject => {
 	const subjs = document.createElement("p");
	subjs.innerText = "Subjects: " + (subjects[subject].subj == null ? titleCase("any relevant subject") : titleCase(subjects[subject].subj.join(" / ")));
	const label = document.createElement("label");
	label.innerText = subject.toUpperCase() + " Grade:";
	const input = document.createElement("input");
	input.type = "number";
	input.min = input.value = 1;
	input.max = 9;
	subjSec.appendChild(label);
	label.appendChild(input);
	subjSec.appendChild(subjs);
})
const bonuses = [
	{req: "Excellent CCA grade", points: 2},
	{req: "Good CCA grade", points: 1},
	{req: "A1 to C6 for English and HMTL grade", points: 2},
	{req: "A1 to C6 for Chinese or Malay (Special Programmes) or Bahasa Indonesia", points: 2},
	{req: "Selection of affiliated JC in 1st choice or as in 1st and 2nd choice", points: 2}
]
const bSection = document.getElementById("opt");
for (let i = 0; i < bonuses.length; i++) {
	const tick = document.createElement("input");
	tick.type = "checkbox";
	tick.id = "b" + i;
	tick.dataset.p = bonuses[i].points;
	const label = document.createElement("label");
	label.setAttribute("for","b" + i)
	label.innerText = bonuses[i].req + ` (${bonuses[i].points} points)`;
	bSection.appendChild(tick);
	bSection.appendChild(label);
	bSection.appendChild(document.createElement("br"));
}
function calculate() {
	let points = 0;
	document.querySelectorAll("input").forEach(inp => {
		switch(inp.type) {
			case "number": 
			if(inp.id != "res") points += Number(inp.value);
			break;
			case "checkbox":
			if(inp.checked) points -= inp.dataset.p;
			break;
		}	
	})
	document.getElementById("res").value = points;
}
document.querySelector("main").addEventListener("change", calculate);
calculate();