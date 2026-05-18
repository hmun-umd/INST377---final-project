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

app.get('/reviews', async (req, res) => {
    console.log('Attempting to get all reviews!');

    const { data, error } = await supabase.from('review').select();

    if(error){
        console.log(`Error: ${error}`);
        res.statusCode = 500;
        res.send(error);
    } else {
        console.log('Recieved Data:', data);
        res.json(data);
    }   
});

app.post('/review', async (req, res) => { //post = add data
    console.log('Adding Review');
    console.log(`Request: ${JSON.stringify(req.body)}`);

    const nickname = req.body.nickname;
    const food = req.body.food;
    const comment =  req.body.comment;

    const { data, error } = await supabase.from('review').insert({
        review_nickname: nickname,
        review_food_loc: food,
        review_comment: comment,
    })
    .select();

    if(error) {
        console.log(`Error: ${error}`);
        res.statusCode = 500;
        res.send(error);
    } else {
        res.json(data);
    }
}); 

app.listen(port, () => {
    console.log(`App is available on port: ${port}`);
});