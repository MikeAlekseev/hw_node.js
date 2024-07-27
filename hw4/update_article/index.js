const express = require('express');

const app = express();

let uniqueID = 0;
const articles = [];

app.use(express.json());

app.get('/articles', (req, res) => {
    res.send({ articles });
})

app.get('/articles/:id', (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
    	res.send({article});
    } else {
    	res.status(400);
    	res.send({ articles: null });
    }
})

app.post('/articles', (req, res) => {
    uniqueID +=1;

    articles.push({
    	id: uniqueID,
    	...req.body
    });
    res.send({
    	id: uniqueID
    })
})

app.put('/articles/:id', (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        article.title = req.body.title;
        article.content = req.body.content;

        res.send({article});
    } else {
        res.status(400);
        res.send({ articles: null });
    }
})

app.listen(3000);


// {
// 	"title": "My first article",
// 	"content": "Some article content"
// }

// {
//  "title": "New title",
//  "content": "New content"
// }