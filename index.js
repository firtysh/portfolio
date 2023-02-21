console.log('Running...');

const nav_links = document.querySelectorAll('.nav-link');
const full_name = document.querySelector('#full_name');
const skills = document.querySelector("#skills-title")
const projects = document.querySelector("#projects-title")
const education = document.querySelector("#edu-title")
const AtoZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const animate_title = (element) => {
	let count = 0;
	const interval = setInterval(() => {
		element.innerText = element.innerText.split("")
			.map((letter, i) => {
				if (i < count) {
					return element.dataset.value[i]
				}
				return AtoZ[Math.floor(Math.random() * 26)]
			})
			.join("")
		if (count >= element.dataset.value.length) {
			clearInterval(interval)
		}
		count = count + 1 / 2;
	}, 50)
}

nav_links.forEach((link) => {
	link.addEventListener('mouseover', (e) => {
		animate_title(e.target)
	});
})
skills.addEventListener('mouseover', function func(e) {
	animate_title(skills)
	skills.style.color = "rgb(255, 46, 99)"
	document.querySelector("section#skills hr").style.background = 'linear-gradient(90deg,rgb(255, 46, 99),transparent)'
	skills.removeEventListener('mouseover', func)
})
projects.addEventListener('mouseover', function func(e) {
	animate_title(projects)
	projects.style.color = "rgb(255, 46, 99)"
	document.querySelector("section#projects hr").style.background = 'linear-gradient(90deg,rgb(255, 46, 99),transparent)'
	projects.removeEventListener('mouseover', func)
})
education.addEventListener('mouseover', function func(e) {
	animate_title(education)
	education.style.color = "rgb(255, 46, 99)"
	document.querySelector("section#education hr").style.background = 'linear-gradient(90deg,rgb(255, 46, 99),transparent)'
	education.removeEventListener('mouseover', func)
})
animate_title(full_name)
