const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes/routes')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:"true"}))

app.engine("handlebars", exphbs({defaultLayout: 'main'}))
app.set('view engine','handlebars')

app.use(routes)

app.listen(PORT);