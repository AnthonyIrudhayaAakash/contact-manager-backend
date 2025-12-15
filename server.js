const express = require("express");
const dotEnv = require("dotenv")?.config()
const app = express();

const port = process.env.PORT ?? 5000;

app.use("/api/contacts", require("./routes/contactRoutes"))
app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})

