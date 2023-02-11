const button = document.querySelector('button');
const output = document.querySelector('.output');

button.addEventListener('click', function () {
	output.innerHTML = 'Сергей, сработало! Мой первый JS код!';
});