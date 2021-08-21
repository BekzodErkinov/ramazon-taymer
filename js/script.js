/* Date of Ramadan
	'Apr 03, 2022 00:00:00'
	'Mar 23, 2023 00:00:00'
	'Mar 11, 2024 00:00:00'
	'Mar 01, 2025 00:00:00'
*/

let countDate = new Date('Apr 03, 2022 00:00:00').getTime();

function ramadan() {
	let now = new Date().getTime();
			gap = countDate - now;

			let second = 1000;
			let minute = second * 60;
			let hour = minute * 60;
			let day = hour * 24;

			let d = Math.floor(gap / (day));
			let h = Math.floor((gap % (day)) / (hour));
			let m = Math.floor((gap % (hour)) / (minute));
			let s = Math.floor((gap % (minute)) / second);

			document.getElementById('day').innerText = d;
			document.getElementById('hour').innerText =  h;
			document.getElementById('minute').innerText =  m;
			document.getElementById('second').innerText =  s;
}
setInterval(() => {
	ramadan();
}, 1000)
