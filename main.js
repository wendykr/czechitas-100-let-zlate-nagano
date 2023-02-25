// tady je místo pro náš program

const vyroci = dayjs ('2098-02-22');

const dnes = dayjs();

let pElm = document.querySelector('div');

if (dnes.isAfter(vyroci)) {
	pElm.textContent = 'ANO';
} else {
	pElm.textContent = 'NE';
}