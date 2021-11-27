const mongoose = require('mongoose');
const data = require('/Users/hollyplatt/Documents/GitHub/IndependentProjects/HellsingSettei/seeds/data.js')
const Settei = require('/Users/hollyplatt/Documents/GitHub/IndependentProjects/HellsingSettei/models/Settei.js');

mongoose.connect('mongodb://localhost:27017/HellsingSettei', {
    useNewURLParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected")
});

const sample = (array) => {
    return array;
};

const seedDB = async () => {
    await Settei.deleteMany({});
    for (let i = 0; i < 1; i++) {
        const Set = new Settei({
            title: "Integra",
            imageURL: "IMAGE PATH",
            description: "DECRIPT"
        })
        await Set.save();
    }
    console.log('SAVED DATA SET')
}


seedDB().then(() => {
    mongoose.connection.close();
});