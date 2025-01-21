const express = require('express');
const dummyUserRoutes = require('./routes/dummyUserRoutes');

const app=express();
const PORT=4000;

app.use(express.json());

app.use('/api/v1',dummyUserRoutes);

app.listen(PORT,()=>{
    console.log(`App is running on PORT ${PORT}.`);
})

app.get('/',(req,res)=>{
    res.send(`<h1>Hello World</h1>`);
})