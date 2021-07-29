const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const cors = require("cors");
const methodOverride = require('method-override')
const handlebars = require('express-handlebars');
const { extname } = require('path');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');
var corsOptions = {
    origin: "http://localhost:8081"
  };
//connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

            app.use(morgan('combined'));
//template engine
            app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a,b) => a+b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
