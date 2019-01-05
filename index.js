const express = require('express')
const app = express()
const port = 3001

var service = require('./service')
bodyParser = require('body-parser');


app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/:id', service.getReviews);
app.post('/:id',service.saveReviews);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))