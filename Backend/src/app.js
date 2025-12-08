//Create Project Server
const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');
const foodPartnerRoutes = require('./routes/food-partner.routes');
const cors = require('cors');

const app = express();
app.use(cors({
    origin:"https://zomato-food-reels-project.vercel.app",
    credentials:true
}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use('/api/auth',authRoutes);
app.use('/api/food',foodRoutes);
app.use('/api/food-partner',foodPartnerRoutes);
module.exports = app;
