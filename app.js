const express = require('express')
const mongoose = require('mongoose')
const Place = require('./models/placeSchema.js')
const app = express();

app.set('view engine', 'ejs')

app.use(express.static('public'))

const mgdbURI = "mongodb+srv://jvk:jvk@cluster0.yt11fam.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mgdbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000);
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


app.get('/',(req,res) =>{
    res.render('cover');
})

app.get('/home', (req, res) => {
    Place.find().then(places => {
        res.render('home', { places });
    }).catch(err => {
        console.log(err)
    })
})
app.get('/contact-us',(req,res)=>{
    res.render('contactus')
})
app.get("/login",(req,res)=>{
    res.render("login_page")
})
app.get("/register",(req,res)=>{
    res.render("register")
})