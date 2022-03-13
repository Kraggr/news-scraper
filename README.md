# NEWS Scraper API

### How to install 

    npm install --save 

OR 

    yarn install --save

Optional to auto-refresh compilation

    npm i -g nodemon

### Run

    node main.js
or 

    nodemon main.js

### How to use

Go to [http://localhost:3002?q=search](http://localhost:3002?q=search)


Query parameters
    * `q` Use it to pass the query to search
    * `hl` Filter by language (`hl=en-US`)
    * `gl` Filter by locale (`gl=US`)
    * `ceid` Filter by locale in ceid format (`ceid=US:en`)
    * `timeFrame` Get news from up to this date i.e.(`timeFrame=7d`)
    
Example
    * `localhost:3002?q=google&hl=en-US&gl=US&ceid=US:en&timeFrame=7d`
