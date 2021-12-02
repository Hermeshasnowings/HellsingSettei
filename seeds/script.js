const mongoose = require('mongoose');
const Settei = require('../models/Settei.js');

await mongoose.connect('mongodb://localhost:27017/HellsingSettei', {
    useNewURLParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected")
});