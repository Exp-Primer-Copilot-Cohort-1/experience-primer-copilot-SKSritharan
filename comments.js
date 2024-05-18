//Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const commentsPath = path.join(__dirname, 'comments.json');

// Middleware
app.use(bodyParser.json());
app.use(express.static('./public'));

// Routes
app.get('/comments', (req, res) => {
    fs.readFile(commentsPath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error reading comments.json');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.post('/comments', (req, res) => {
    fs.readFile(commentsPath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error reading comments.json');
            return;
        }
        const comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile(commentsPath, JSON.stringify(comments), err => {
            if (err) {
                console.log(err);
                res.status(500).send('Error writing comments.json');
                return;
            }
            res.json(req.body);
        });
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});