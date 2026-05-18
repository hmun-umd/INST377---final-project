# INST377---final-project

## Title : Foodie Journal

### Description

An application that allows you to write down notes and reviews on foods, restaurants, cafes you went to.

### Target Browser

There really is no target browser just one that works with Vercel. It is for anyone who wants to write comments in a centralized place.

## Developer Manual

### Installations
- npm
    - @supabase/supabase-js
    - body-parser
    - dotenv
    - express
    - nodemon

### How To Run On Server

- Use `npm init` in termainl to start using scripts
- Use `npm start` in terminal to run the application
- Use `rs` in terminal to update the application after making changes
- Use `^C` (control + C) to close application

### Tests

No tests but you can use `npm start` mentioned above

### API

The API for your server application - all GET, POST, PATCH, etc endpoints, and what they each do

- Food Pictures
    - `https://foodish-api.com/api`
    - used for pictures of random food in home
- `app.get('/')`
    - Goes to home page by default (/)
- `app.get('/about')`
    - Goes to about page with /about
- `app.get('/foodie')`
    - Goes to foodie page with /foodie
- `app.get('/reviews')`
    - Allows me to retrieve all reviews from supabase 
- `app.post('/review')`
    - Allows me to add a review to data
- `app.use()`
    - Is a 404 error page
- `app.listen()`
    - Allows me to see test code

### Expectations For Bugs

Can not get the value of the forms for some reason so had to give that up as well.

### Future Development

Adding more elements to the application would make it seem more like a real project.
Adding a map would be nice as well.
