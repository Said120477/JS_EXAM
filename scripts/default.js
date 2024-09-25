const now = new Date();
const month = now.getMonth() + 1;
const day = now.getDate();
const year = now.getFullYear();
year.innerText = year;
document.querySelectorAll('.strongDate')[3].innerText = '[' + 
	`${(day < 10 ? '0' : '') + day}/` +
	`${(month < 10 ? '0' : '') + month}/` +
	`${year}` +
']';