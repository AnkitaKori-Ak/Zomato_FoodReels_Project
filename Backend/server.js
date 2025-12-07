//Start Server And Project Registration.
require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');


connectDB();

app.listen(5000,()=>{
   console.log("Server is runnning on port 5000");
})

