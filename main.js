// Require the package
const googleNewsScraper = require('google-news-scraper')

const express = require('express')
const app = express()
const port = 3002
// Execute within an async function, pass a config object (further documentation below)

const main = async (config) => {
    const articles = await googleNewsScraper(config);
    return articles;
}


app.get('/', async (req, res) => {
    const searchTerm = req.query.q;
    const hl = req.query.hl ? req.query.hl: 'es-MX';
    const gl = req.query.gl ? req.query.gl: 'MX';
    const ceid = req.query.ceid ? req.query.ceid: 'MX:es';
    const timeframe = req.query.timeFrame ? req.query.timeFrame: '7d';
    let config = {
        searchTerm: searchTerm,
        prettyURLs: true,
        queryVars: {
            hl: hl,
            gl: gl,
            ceid: ceid,
        },
        timeframe: timeframe,
        puppeteerArgs: []
    }; 
    res.json({ result: await main(config)});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})