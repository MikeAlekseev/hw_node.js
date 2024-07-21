const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const filePath = path.join(__dirname, 'count.json');

app.get('/',(req, res) => {
	const dataJson = fs.readFileSync(filePath, 'utf-8');
	const data = JSON.parse(dataJson);
	data.countMain = Number(data.countMain) + 1;
	fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

	res.send(`<h1>Добро пожаловать на главную страницу</h1>
			  <h3>${data.countMain} - Просмотров страницы</h3>
			  <a href="/about">Сcыль на страницу About</a>`)
});

app.get('/about',(req, res) => {
	const dataJson = fs.readFileSync(filePath, 'utf-8');
	const data = JSON.parse(dataJson);
	data.countAbout = Number(data.countAbout) + 1;
	fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

	res.send(`<h1>Добро пожаловать на страницу About</h1>
			  <h3>${data.countAbout} - Просмотров страницы </h3>
			  <a href="/">Сcыль на главную страницу</a>`)
});

const port = 3000;

app.listen(port, () => {
	console.log(`Сревер запущен на порту ${port}`)
})