const mongoose = require('mongoose');
const Settei = require('/Users/hollyplatt/Documents/GitHub/HellsingSettei/HellsingSettei/models/Settei.js');

mongoose.connect('mongodb://127.0.0.1:27017/HellsingSettei', {
    useNewURLParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected")
});

const seedDB = async () => {

    await Settei.deleteMany({});
    for (let i = 0; i < 1; i++) {
        const Set = new Settei({
            no: "cha-000-00",
            imageURL: "https://drive.google.com/uc?export=view&id=1-mxjZl_3V0ABJrSywkVJp0WiDCdYptc6",
            description: "DESCRIPT",
            tags: "",
            date: "2006.01.04"

        })
        await Set.save();
    }
    console.log('SAVED DATA SET')
}

seedDB().then(() => {
    mongoose.connection.close();
});