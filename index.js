const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
//const methodOverride = require('method-override');
const Settei = require('./models/Settei');

mongoose.connect('mongodb://localhost:27017/HellsingSettei', {
    useNewURLParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
//app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/makeSettei', async (req, res) => {
    const Set = new Settei({ title: 'Integra', tags: 'tegs' })
    await Set.save;
    res.send(Set)
});

//app.get('/Settei', async (req, res) => {
//    const Settei = await settei.find({});
/////    res.render('settei', { settei })
//});


app.listen(3000, () => {
    console.log('Listening on port 3000')
});