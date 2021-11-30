const mongoose = require('mongoose');
const Settei = require('/Users/hollyplatt/Documents/GitHub/HellsingSettei/HellsingSettei/models/Settei.js');

const seedDB = async () => {
    await mongoose.connect('mongodb://localhostHellsingSettei')
    console.log('connected to DB')
    const settei = new Settei({
        title: "Integra",
        imageURL: "test",
        description: "DESCRIPT"
    })
    settei.save().then(() => console.log("Set saved"))
}
seedDB();