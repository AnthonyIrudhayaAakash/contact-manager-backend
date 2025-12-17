const express = require("express");
const dotEnv = require("dotenv")?.config()
const app = express();

const port = process.env.PORT ?? 5000;
const contactRoutes = require("./routes/contactRoutes");

app.use("/api/contacts", contactRoutes)
app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})

