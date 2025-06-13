const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next)  => {
    const randomQuote= getRandomElement(quotes)
    if (randomQuote) {
        res.status(200).send({quote: randomQuote});
    } else {
        res.status(404).send({ error: 'No quotes found' });
    }
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

