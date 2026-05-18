const express = require('express'); //use api
const bodyParser = require('body-parser');
const supabaseClient = require('@supabase/supabase-js');
const {isValidStateAbbreviation} = require("usa-state-validator");
const dotenv = require('dotenv');

const app = express();
const port = 3000;
dotenv.config()

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

//making pages
app.get('/', (req, res) => {
    res.sendFile('public/Home.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('public/About.html', { root: __dirname });
});

app.get('/foodie', (req, res) => {
    res.sendFile('public/Foodie.html', { root: __dirname });
});

//404
app.use((req,res) => {
    res.status(404).sendFile('public/404.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`App is available on port: ${port}`);
});